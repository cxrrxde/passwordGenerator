//----------------------------------------------------------WORKING WITH SLIDER
let slider = document.getElementById("main-slider")
let sliderNumber = document.getElementById("slider-value")

sliderNumber.textContent = slider.value
slider.oninput = function(){
    sliderNumber.textContent = this.value
    passwordLength = this.value
}

//----------------------------------------------------------WORKING WITH PASSWORDS
let firstField = document.querySelector("#first-field")
let secondField = document.querySelector("#second-field")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let passwordLength = slider.value
let usedCharacters = []


function generatePass(){
    let firstPassword = ""
    while (firstPassword.length < passwordLength){
        firstPassword += characters[generateRandomNumber()]
    }
    firstField.value = firstPassword
    let secondPassword = ""
    while (secondPassword.length < passwordLength){
        secondPassword += characters[generateRandomNumber()]
    }
    secondField.value = secondPassword
}

function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random()*91)
    if (usedCharacters.length === 0){
        usedCharacters.push(randomNumber)
        return randomNumber
    }else{
            if (usedCharacters[usedCharacters.length-1] === randomNumber){
                while (usedCharacters[usedCharacters.length-1] === randomNumber){
                    randomNumber = Math.floor(Math.random()*91)
                }
                usedCharacters.push(randomNumber)
            }else{
                usedCharacters.push(randomNumber)
            }
        return randomNumber
    }
}
//----------------------------------------------------------WORKING WITH "COPY-ON-CLICK"
document.getElementById("first-field").addEventListener("click",function(){
        let copiedTextFirst = document.querySelector("#first-field").value
        navigator.clipboard.writeText(copiedTextFirst)
})
document.getElementById("second-field").addEventListener("click",function(){
        let copiedTextSecond = document.querySelector("#second-field").value
        navigator.clipboard.writeText(copiedTextSecond)
})

