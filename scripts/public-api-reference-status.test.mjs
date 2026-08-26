import assert from "node:assert/strict"
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { spawnSync } from "node:child_process"
import test from "node:test"
import { fileURLToPath } from "node:url"

import {
  hashFile,
  readPublishedHash,
  schemaState,
  shouldGenerate,
  writePublishedHash,
} from "./public-api-reference-status.mjs"

const scriptPath = fileURLToPath(
  new URL("./public-api-reference-status.mjs", import.meta.url),
)

const fixture = async (t) => {
  const directory = await mkdtemp(join(tmpdir(), "public-api-reference-status-"))
  const schemaPath = join(directory, "schema.graphql")
  const publishedHashPath = join(directory, "published.sha256")
  await writeFile(schemaPath, "type Query { hello: String! }\n")
  t.after(() => rm(directory, { force: true, recursive: true }))
  return { schemaPath, publishedHashPath }
}

test("hashFile returns the SHA-256 digest of the schema", async (t) => {
  const { schemaPath } = await fixture(t)
  assert.equal(
    await hashFile(schemaPath),
    "7ba665e3c4b45cfc12ffa78dbe2bf4dc679230748bbc7d76c6846fd5ac97af8f",
  )
})

test("a missing published hash requires generation", async (t) => {
  const { schemaPath, publishedHashPath } = await fixture(t)
  const state = await schemaState({ schemaPath, publishedHashPath })

  assert.equal(state.changed, true)
  assert.equal(await readPublishedHash(publishedHashPath), null)
})

test("readPublishedHash preserves unexpected filesystem errors", async (t) => {
  const { publishedHashPath } = await fixture(t)
  await writeFile(publishedHashPath, "hash\n")

  await assert.rejects(readPublishedHash(join(publishedHashPath, "child")), {
    code: "ENOTDIR",
  })
})

test("a matching published hash skips generation", async (t) => {
  const { schemaPath, publishedHashPath } = await fixture(t)
  const currentHash = await hashFile(schemaPath)
  await writePublishedHash(publishedHashPath, currentHash)

  assert.deepEqual(await schemaState({ schemaPath, publishedHashPath }), {
    hash: currentHash,
    changed: false,
  })
})

test("a stale or malformed published hash requires generation", async (t) => {
  const { schemaPath, publishedHashPath } = await fixture(t)
  await writeFile(publishedHashPath, "not-the-current-hash\n")

  assert.equal((await schemaState({ schemaPath, publishedHashPath })).changed, true)
})

test("force requires generation even when the hashes match", () => {
  assert.equal(
    shouldGenerate({ currentHash: "same", publishedHash: "same", force: true }),
    true,
  )
})

test("writePublishedHash stores a newline-terminated marker", async (t) => {
  const { publishedHashPath } = await fixture(t)
  await writePublishedHash(publishedHashPath, "abc123")
  assert.equal(await readFile(publishedHashPath, "utf8"), "abc123\n")
})

test("the CLI emits GitHub Actions outputs", async (t) => {
  const { schemaPath, publishedHashPath } = await fixture(t)
  const result = spawnSync(process.execPath, [scriptPath, schemaPath, publishedHashPath], {
    encoding: "utf8",
  })

  assert.equal(result.status, 0, result.stderr)
  assert.match(result.stdout, /^hash=[a-f0-9]{64}\nchanged=true\n$/)
})

test("the CLI force flag overrides a matching marker", async (t) => {
  const { schemaPath, publishedHashPath } = await fixture(t)
  await writePublishedHash(publishedHashPath, await hashFile(schemaPath))
  const result = spawnSync(
    process.execPath,
    [scriptPath, schemaPath, publishedHashPath, "true"],
    { encoding: "utf8" },
  )

  assert.equal(result.status, 0, result.stderr)
  assert.match(result.stdout, /changed=true/)
})

test("the CLI writes the published marker", async (t) => {
  const { schemaPath, publishedHashPath } = await fixture(t)
  const result = spawnSync(
    process.execPath,
    [scriptPath, schemaPath, publishedHashPath, "--write"],
    { encoding: "utf8" },
  )

  assert.equal(result.status, 0, result.stderr)
  assert.equal(await readPublishedHash(publishedHashPath), await hashFile(schemaPath))
})

test("the CLI rejects missing paths", () => {
  const result = spawnSync(process.execPath, [scriptPath], { encoding: "utf8" })

  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /usage: public-api-reference-status\.mjs/)
})
