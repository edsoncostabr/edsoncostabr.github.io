let passwordOne = document.getElementById("password-1")
let passwordTwo = document.getElementById("password-2")
let passwordThree = document.getElementById("password-3")
let passwordFour = document.getElementById("password-4")
let chars = []
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
let charNum = '0123456789'
let charSpecial = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
let charsLengthEl = document.getElementById("password-length")
let charsLength

function randomPassword() {
    let result = ''
    for(let i = 0; i < charsLength; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
}

function genPassword() {
    charsLength = charsLengthEl.value
    chars = upperCase + lowerCase + charNum + charSpecial
    passwordOne.value = randomPassword()
    passwordTwo.value = randomPassword()
    passwordThree.value = randomPassword()
    passwordFour.value = randomPassword()
}

function copyPasswordOne(){
    passwordOne.select()
    navigator.clipboard.writeText(passwordOne.value)
}
function copyPasswordTwo(){
    passwordTwo.select()
    navigator.clipboard.writeText(passwordTwo.value)
}
function copyPasswordThree(){
    passwordThree.select()
    navigator.clipboard.writeText(passwordThree.value)
}
function copyPasswordFour(){
    passwordFour.select()
    navigator.clipboard.writeText(passwordFour.value)
}