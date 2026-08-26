import { createHash } from "node:crypto"
import { readFile, writeFile } from "node:fs/promises"
import { pathToFileURL } from "node:url"

export const hashFile = async (path) => {
  const contents = await readFile(path)
  return createHash("sha256").update(contents).digest("hex")
}

export const readPublishedHash = async (path) => {
  try {
    return (await readFile(path, "utf8")).trim()
  } catch (error) {
    if (error.code === "ENOENT") return null
    throw error
  }
}

export const shouldGenerate = ({ currentHash, publishedHash, force = false }) =>
  force || currentHash !== publishedHash

export const schemaState = async ({ schemaPath, publishedHashPath, force = false }) => {
  const currentHash = await hashFile(schemaPath)
  const publishedHash = await readPublishedHash(publishedHashPath)

  return {
    hash: currentHash,
    changed: shouldGenerate({ currentHash, publishedHash, force }),
  }
}

export const writePublishedHash = async (path, hash) => {
  await writeFile(path, `${hash}\n`)
}

const main = async () => {
  const [schemaPath, publishedHashPath, mode = "false"] = process.argv.slice(2)
  if (!schemaPath || !publishedHashPath) {
    throw new Error(
      "usage: public-api-reference-status.mjs <schema> <published-hash> [true|--write]",
    )
  }

  const state = await schemaState({
    schemaPath,
    publishedHashPath,
    force: mode === "true",
  })

  if (mode === "--write") {
    await writePublishedHash(publishedHashPath, state.hash)
    return
  }

  process.stdout.write(`hash=${state.hash}\nchanged=${state.changed}\n`)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main()
}
