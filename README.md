# SHA3-512 (Node.js)

Small Node.js project for **functional tests** and **performance checks** of the **SHA3-512** hash. It compares the built-in [`crypto`](https://nodejs.org/api/crypto.html) module with the [`js-sha3`](https://www.npmjs.com/package/js-sha3) package.

## Installation

From this directory (`SHA3-512`):

```bash
npm install
```

This installs **js-sha3** (runtime) and **Jest** (dev) as declared in `package.json`.

## Running tests

```bash
npm test
```

Run only the performance suite (often clearer with a single worker):

```bash
npx jest tests/performance.test.js --runInBand
```

## Layout

| Path | Role |
|------|------|
| `tests/crypto.test.js` | Correctness: SHA3-512 via `crypto.createHash('sha3-512')` against known vectors. |
| `tests/js_sha3.test.js` | Correctness: same vectors via `js-sha3`. |
| `tests/performance.test.js` | Benchmark: repeated hashing of a large payload with `crypto` vs `js-sha3`. |
| `example/` | Thin helpers (`crypto.js`, `js_sha3.js`, `normalize.js`) used by the tests. |
