
var rangeofcharacters = document.getElementById ('rangeofcharacters')
var numberofcharacters = document.getElementById ('numberofcharacters')
var Includeuppercase = document.getElementById ('Includeuppercase')

var Includelowercase= document.getElementById ('Includelowercase')
var Includenumber= document.getElementById ('Includenumber')
var Includespecialcharackter= document.getElementById ('Includespecialcharacter')
var form = document.getElementById ('passwordgeneratorform')
var passwordDisplay = document.getElementById ('passwordDisplay')

var UPPERCASE_CHAR_CODES = arrayFromLowToHight(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHight(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHight(48, 57)
var SPECIALCHARACKTER_CHAR_CODES = arrayFromLowToHight(33, 47).concat(
  arrayFromLowToHight(58, 64)
).concat(
  arrayFromLowToHight(91, 96)
).concat(
  arrayFromLowToHight(123, 126)
)

numberofcharacters.addEventListener('input', syncCharactersAmount)
rangeofcharacters.addEventListener('input', syncCharactersAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  var numberofcharacters = numberofcharacters.value
  var rangeofcharacters = rangeofcharacters.value
  var Includeuppercase = IncludeuppercaseElement.checked

  var Includelowercase = IncludelowercaseElement.checked
  var Includenumber = IncludenumberElement.checked
  var Includespecialcharackter = IncludespecialcharackterElement.checked
  var password = generatePassword (rangeofcharacters, numberofcharacters, Includeuppercase, Includelowercase, Includenumber, Includespecialcharackter,)
  passwordDisplay.innerText = password


})
function syncCharactersAmount(e) {
  var value = e.target.value 
  numberofcharacters.value = value
  rangeofcharacters.value = value

}

function generatePassword ( _numberofcharacters, _rangeofcharacters, _Includelowercase, _Includeuppercase, _Includelowercase, _Includenumber,) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeuppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includelowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
  if (includenumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includespecialcharacter) charCodes = charCodes.concat(SPECIALCHARACKTER_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < _numberofcharacters,_rangeofcharacters; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')


}
function arrayFromLowToHight(low, high) {
  const array = []
  for (let i = low; i<= high; i++) {
    array.push(i)
 }
 return array
}







