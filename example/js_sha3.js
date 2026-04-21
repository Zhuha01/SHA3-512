const js_sha3 = require('js-sha3');

const sha3_512_js_sha3 = (input) =>
  js_sha3.sha3_512(input);

module.exports = { sha3_512_js_sha3 };