const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const copyFunction = html.match(/  function copyCmd\(btn\) \{[\s\S]*?\n  \}/);
assert.ok(copyFunction, "homepage copy handler should exist");
assert.match(html, /class="copy-status" aria-live="polite"/);

function loadCopyCmd(clipboard) {
  const context = {
    navigator: clipboard ? { clipboard } : {},
  };
  vm.createContext(context);
  vm.runInContext(copyFunction[0], context, { filename: "index.html" });
  return context.copyCmd;
}

function makeButton() {
  const status = { textContent: "copy" };
  return {
    status,
    querySelector(selector) {
      assert.equal(selector, ".copy-status");
      return status;
    },
  };
}

test("reports success only after the clipboard write resolves", async () => {
  let copiedText;
  let finishWrite;
  const pendingWrite = new Promise((resolve) => {
    finishWrite = resolve;
  });
  const copyCmd = loadCopyCmd({
    writeText(text) {
      copiedText = text;
      return pendingWrite;
    },
  });
  const button = makeButton();
  const copyResult = copyCmd(button);

  assert.equal(button.status.textContent, "copy");
  finishWrite();
  assert.equal(await copyResult, true);
  assert.equal(copiedText, "git clone https://github.com/abhinavs/cookie.git\ncd cookie && bin/bootstrap\nbin/start");
  assert.equal(button.status.textContent, "copied");
});

test("reports a rejected clipboard write instead of claiming success", async () => {
  const copyCmd = loadCopyCmd({
    writeText() {
      return Promise.reject(new Error("permission denied"));
    },
  });
  const button = makeButton();

  assert.equal(await copyCmd(button), false);
  assert.equal(button.status.textContent, "copy failed");
});

test("reports unavailable clipboard APIs without claiming success", async () => {
  const copyCmd = loadCopyCmd();
  const button = makeButton();

  assert.equal(await copyCmd(button), false);
  assert.equal(button.status.textContent, "copy unavailable");
});

test("reports synchronous clipboard errors", async () => {
  const copyCmd = loadCopyCmd({
    writeText() {
      throw new Error("clipboard unavailable");
    },
  });
  const button = makeButton();

  assert.equal(await copyCmd(button), false);
  assert.equal(button.status.textContent, "copy failed");
});
