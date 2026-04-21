const crypto = require('crypto');

const sha3_512_crypto = (input) =>
  crypto.createHash('sha3-512').update(input).digest('hex');

module.exports = { sha3_512_crypto };