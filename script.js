
var characteramountrange = document.getElementById ('characteramountrange')
var characteramountnumber = document.getElementById ('characteramountnumber')
var IncludeuppercaseElement = document.getElementById ('Includeuppercase')

var Includenumber= document.getElementById ('Includenumber')
var Includespecialcharackter= document.getElementById ('Includespecialcharacter')
var form = document.getElementById ('passwordgeneratorform')
var passwordDisplay = document.getElementById ('passwordDisplay')

var UPPERCASE_CHAR_CODES = arrayFromLowToHight(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHight(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHight(48, 57)
var SPECIALCHARACTER_CHAR_CODES = arrayFromLowToHight(33, 47).concat(
  arrayFromLowToHight(58, 64)
).concat(
  arrayFromLowToHight(91, 96)
).concat(
  arrayFromLowToHight(123, 126)
)

charcteramountnumber.addEventListener('input', syncharacterAmount)
charcteramountrange.addEventListener('input', syncharacterAmount)

form.addEventListener('submit', e => { 
  e.preventDefault()
  const characteramount = characteramountnumber.value
  const includeuppercase = IncludeuppercaseElement.checked
  const includenumber = IncludenumberElement.checked
  const includespecialcharacter = IncludespecialcharacterElement.checked
  const password = generatePassword(characterAmount, Includeuppercase, Includelowercase, Includenumber, Includespecialcharacter)
  passwordDisplay.innerText = password 
   })

function generatePassword (characteramount, includeuppercase, includenumber, includespecialcharacter) { 
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeuppercase) charCodes = charCodes.concat (UPPERCASE_CHAR_CODES)
  if (includenumber) charCodes = charCodes.concat (NUMBER_CHAR_CODES)
  if (includespecialcharacter) charCodes = charCodes.concat (SPECIALCHARACTER_CHAR_CODES)

  const passwordcharackters = []
  for (let i = 0; i < characteramount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * characteramount)]
    passwordcharacters.push(String.fromCharCode(characterCode))

  }
  return passwordcharackters.join ('')
}

function arrayFromLowToHight(low, high) {
  const array = []
  for (let i= low; i <=high; i++) {
    array.push(i)
 }
 return array
}

function syncCharacterAmount(e) {
  var value = e.target.value 
  characteramountnumber.value = value
  characteramountrange.value = value

}







