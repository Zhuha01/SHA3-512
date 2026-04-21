const { sha3_512_js_sha3 } = require('../example/js_sha3');
const { normalize } = require('../example/normalize');


describe('Тестування SHA3-512 за допомогою вбудованого модуля crypto', () => {

  test('Тест 1: хешування рядка "abc"', () => {
    const input = 'abc';
    const expected = normalize(
      'b751850b1a57168a 5693cd924b6b096e 08f621827444f70d 884f5d0240d2712e 10e116e9192af3c9 1a7ec57647e39340 57340b4cf408d5a5 6592f8274eec53f0'
    );
    expect(sha3_512_js_sha3(input)).toBe(expected);
  });

  test('Тест 2: хешування пустого рядка', () => {
    const input = '';
    const expected = normalize(
      'a69f73cca23a9ac5 c8b567dc185a756e 97c982164fe25859 e0d1dcc1475c80a6 15b2123af1f5f94c 11e3e9402c3ac558 f500199d95b6d3e3 01758586281dcd26'
    );
    expect(sha3_512_js_sha3(input)).toBe(expected);
  });

  test('Тест 3: хешування рядка довжиною 56 символів', () => {
    const input = 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq';
    const expected = normalize(
      '04a371e84ecfb5b8 b77cb48610fca818 2dd457ce6f326a0f d3d7ec2f1e91636d ee691fbe0c985302 ba1b0d8dc78c0863 46b533b49c030d99 a27daf1139d6e75e'
    );
    expect(sha3_512_js_sha3(input)).toBe(expected);
  });

  test('Тест 4: хешування рядка довжиною 112 символів', () => {
    const input =
      'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu';
    const expected = normalize(
      'afebb2ef542e6579 c50cad06d2e578f9 f8dd6881d7dc824d 26360feebf18a4fa 73e3261122948efc fd492e74e82e2189 ed0fb440d187f382 270cb455f21dd185'
    );
    expect(sha3_512_js_sha3(input)).toBe(expected);
  });

  test('Тест 5: хешування 1 000 000 символів "a"', () => {
    const input = 'a'.repeat(1000000);
    const expected = normalize(
      '3c3a876da14034ab 60627c077bb98f7e 120a2a5370212dff b3385a18d4f38859 ed311d0a9d5141ce 9cc5c66ee689b266 a8aa18ace8282a0e 0db596c90b0a7b87'
    );
    expect(sha3_512_js_sha3(input)).toBe(expected);
  });
});
