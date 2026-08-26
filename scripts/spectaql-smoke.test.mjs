import assert from "node:assert/strict"
import { mkdtemp, readFile, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { spawnSync } from "node:child_process"
import test from "node:test"

test("the pinned SpectaQL generates an HTML reference", { timeout: 30_000 }, async (t) => {
  const outputDirectory = await mkdtemp(join(tmpdir(), "spectaql-smoke-"))
  t.after(() => rm(outputDirectory, { force: true, recursive: true }))

  const result = spawnSync(
    resolve("node_modules/.bin/spectaql"),
    [
      "test/fixtures/public-api-reference/spectaql-config.yml",
      "-t",
      outputDirectory,
      "-f",
      "index.html",
    ],
    { encoding: "utf8" },
  )

  assert.equal(result.status, 0, result.stderr || result.stdout)

  const html = await readFile(join(outputDirectory, "index.html"), "utf8")
  assert.match(html, /GraphQL API Reference Smoke Test/)
  assert.match(html, /query-hello/)
})
