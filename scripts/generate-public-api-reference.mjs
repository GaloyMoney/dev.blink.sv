import { spawn } from "node:child_process"
import { readFile, writeFile } from "node:fs/promises"
import { basename, dirname, resolve } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

import { hashFile, writePublishedHash } from "./public-api-reference-status.mjs"

const spectaqlPath = fileURLToPath(
  new URL("../node_modules/.bin/spectaql", import.meta.url),
)

export const runSpectaql = ({
  configPath,
  outputPath,
  workingDirectory,
  spawnProcess = spawn,
}) =>
  new Promise((resolveRun, rejectRun) => {
    const child = spawnProcess(
      spectaqlPath,
      [configPath, "-t", dirname(outputPath), "-f", basename(outputPath)],
      { cwd: workingDirectory, stdio: "inherit" },
    )

    child.once("error", rejectRun)
    child.once("exit", (code, signal) => {
      if (code === 0) return resolveRun()

      rejectRun(
        new Error(
          signal
            ? `SpectaQL terminated by signal ${signal}`
            : `SpectaQL exited with status ${code}`,
        ),
      )
    })
  })

export const useDarkStylesheet = async (outputPath) => {
  const html = await readFile(outputPath, "utf8")
  const updatedHtml = html.replaceAll("spectaql.min.css", "spectaql.dark.css")

  if (updatedHtml === html) {
    throw new Error("generated reference does not contain spectaql.min.css")
  }

  await writeFile(outputPath, updatedHtml)
}

export const generatePublicApiReference = async ({
  schemaPath,
  configPath,
  outputPath,
  publishedHashPath,
  workingDirectory = process.cwd(),
}) => {
  const resolvedWorkingDirectory = resolve(workingDirectory)
  const resolveFromWorkingDirectory = (path) =>
    resolve(resolvedWorkingDirectory, path)

  const resolvedSchemaPath = resolveFromWorkingDirectory(schemaPath)
  const resolvedConfigPath = resolveFromWorkingDirectory(configPath)
  const resolvedOutputPath = resolveFromWorkingDirectory(outputPath)
  const resolvedPublishedHashPath = resolveFromWorkingDirectory(publishedHashPath)

  await runSpectaql({
    configPath: resolvedConfigPath,
    outputPath: resolvedOutputPath,
    workingDirectory: resolvedWorkingDirectory,
  })
  await useDarkStylesheet(resolvedOutputPath)
  await writePublishedHash(resolvedPublishedHashPath, await hashFile(resolvedSchemaPath))
}

export const main = async (args, generate = generatePublicApiReference) => {
  const [schemaPath, configPath, outputPath, publishedHashPath] = args

  if (!schemaPath || !configPath || !outputPath || !publishedHashPath) {
    throw new Error(
      "usage: generate-public-api-reference.mjs " +
        "<schema> <config> <output-html> <published-hash>",
    )
  }

  await generate({
    schemaPath,
    configPath,
    outputPath,
    publishedHashPath,
  })
}

/* node:coverage ignore next 3 */
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main(process.argv.slice(2))
}
