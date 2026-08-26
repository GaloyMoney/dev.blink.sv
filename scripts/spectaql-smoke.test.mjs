import assert from "node:assert/strict"
import { spawnSync } from "node:child_process"
import { EventEmitter } from "node:events"
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"
import test from "node:test"
import { fileURLToPath } from "node:url"

import {
  generatePublicApiReference,
  main,
  runSpectaql,
  useDarkStylesheet,
} from "./generate-public-api-reference.mjs"
import { hashFile, readPublishedHash } from "./public-api-reference-status.mjs"

const scriptPath = fileURLToPath(
  new URL("./generate-public-api-reference.mjs", import.meta.url),
)

test("the production generator creates a dark HTML reference and schema marker", { timeout: 30_000 }, async (t) => {
  const outputDirectory = await mkdtemp(join(tmpdir(), "spectaql-smoke-"))
  t.after(() => rm(outputDirectory, { force: true, recursive: true }))

  const schemaPath = "test/fixtures/public-api-reference/schema.graphql"
  const outputPath = join(outputDirectory, "index.html")
  const publishedHashPath = join(outputDirectory, "schema.sha256")
  await generatePublicApiReference({
    schemaPath,
    configPath: "test/fixtures/public-api-reference/spectaql-config.yml",
    outputPath,
    publishedHashPath,
  })

  const html = await readFile(outputPath, "utf8")
  assert.match(html, /GraphQL API Reference Smoke Test/)
  assert.match(html, /query-hello/)
  assert.match(html, /spectaql\.dark\.css/)
  assert.doesNotMatch(html, /spectaql\.min\.css/)
  assert.equal(await readPublishedHash(publishedHashPath), await hashFile(schemaPath))
})

test("the generator passes the CLI paths to the production operation", async () => {
  const args = ["schema.graphql", "spectaql.yml", "reference.html", "schema.sha256"]
  let receivedOptions

  await main(args, async (options) => {
    receivedOptions = options
  })

  assert.deepEqual(receivedOptions, {
    schemaPath: args[0],
    configPath: args[1],
    outputPath: args[2],
    publishedHashPath: args[3],
  })
})

test("the generator CLI contract requires all paths", () => {
  const result = spawnSync(process.execPath, [scriptPath], { encoding: "utf8" })

  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /usage: generate-public-api-reference\.mjs/)
})

test("dark stylesheet replacement rejects unexpected SpectaQL output", async (t) => {
  const outputDirectory = await mkdtemp(join(tmpdir(), "spectaql-stylesheet-"))
  t.after(() => rm(outputDirectory, { force: true, recursive: true }))
  const outputPath = join(outputDirectory, "index.html")
  await writeFile(outputPath, "<html></html>")

  await assert.rejects(
    useDarkStylesheet(outputPath),
    /does not contain spectaql\.min\.css/,
  )
})

const fakeSpawn = (event, ...args) => () => {
  const child = new EventEmitter()
  queueMicrotask(() => child.emit(event, ...args))
  return child
}

const spectaqlOptions = {
  configPath: "spectaql.yml",
  outputPath: "reference.html",
  workingDirectory: process.cwd(),
}

test("the generator reports failure to start SpectaQL", async () => {
  const error = new Error("could not start")

  await assert.rejects(
    runSpectaql({
      ...spectaqlOptions,
      spawnProcess: fakeSpawn("error", error),
    }),
    error,
  )
})

test("the generator reports a nonzero SpectaQL exit status", async () => {
  await assert.rejects(
    runSpectaql({
      ...spectaqlOptions,
      spawnProcess: fakeSpawn("exit", 2, null),
    }),
    /SpectaQL exited with status 2/,
  )
})

test("the generator reports when SpectaQL is terminated", async () => {
  await assert.rejects(
    runSpectaql({
      ...spectaqlOptions,
      spawnProcess: fakeSpawn("exit", null, "SIGTERM"),
    }),
    /SpectaQL terminated by signal SIGTERM/,
  )
})
