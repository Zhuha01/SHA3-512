const { performance } = require('perf_hooks');
const { sha3_512_crypto } = require('../example/crypto');
const { sha3_512_js_sha3 } = require('../example/js_sha3');

jest.setTimeout(120000);

const MAX_MS_PER_IMPLEMENTATION = 110000;

describe('Порівняння продуктивності SHA3-512: crypto vs js-sha3', () => {
  test('1000 ітерацій хешування 2 MiB рядка', () => {
    const input = 'a'.repeat(2 * 1024 * 1024);

    const t0Crypto = performance.now();
    for (let i = 0; i < 1000; i++) {
      sha3_512_crypto(input);
    }
    const cryptoMs = performance.now() - t0Crypto;

    const t0JsSha3 = performance.now();
    for (let i = 0; i < 1000; i++) {
      sha3_512_js_sha3(input);
    }
    const jsSha3Ms = performance.now() - t0JsSha3;

    console.log(
      `Crypto: ${cryptoMs.toFixed(2)} ms, js-sha3: ${jsSha3Ms.toFixed(2)} ms`
    );

    expect(cryptoMs).toBeLessThan(MAX_MS_PER_IMPLEMENTATION);
    expect(jsSha3Ms).toBeLessThan(MAX_MS_PER_IMPLEMENTATION);
  });
});
