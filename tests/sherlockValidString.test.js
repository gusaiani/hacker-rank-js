const sherlockValidString = require('../sherlockValidString')

test('A sherlockValidString test', () => {
  const str = 'a'
  expect(sherlockValidString(str)).toEqual('YES')
})

test('A sherlockValidString test', () => {
  const str = 'aaeeiioouu'
  expect(sherlockValidString(str)).toEqual('YES')
})

test('A sherlockValidString test', () => {
  const str = 'aabbcd'
  expect(sherlockValidString(str)).toEqual('NO')
})

test('A sherlockValidString test', () => {
  const str = 'aaaabbcc'
  expect(sherlockValidString(str)).toEqual('NO')
})

test('A sherlockValidString test', () => {
  const str = 'aabbc'
  expect(sherlockValidString(str)).toEqual('YES')
})

test('A sherlockValidString test', () => {
  const str = 'aaabbbcccc'
  expect(sherlockValidString(str)).toEqual('YES')
})

test('A sherlockValidString test', () => {
  const str = 'aabbccddeefghi'
  expect(sherlockValidString(str)).toEqual('NO')
})

test('A sherlockValidString test', () => {
  const str = 'abcdefghhgfedecba'
  expect(sherlockValidString(str)).toEqual('YES')
})

test('A sherlockValidString test', () => {
  const str =
    'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'
  expect(sherlockValidString(str)).toEqual('YES')
})
