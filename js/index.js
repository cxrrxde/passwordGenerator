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
let symbolsEnabled = document.querySelector("#symbols-toggle").checked
let numbersEnabled = document.querySelector("#numbers-toggle").checked

function enableCheckbox(){
    let check1 = document.getElementById("symbols-toggle")
    if(check1.checked){
        symbolsEnabled = true
    }
    else{
        symbolsEnabled = false
    }
    let check2 = document.getElementById("numbers-toggle")
    if(check2.checked){
        numbersEnabled = true
    }
    else{
        numbersEnabled = false
    }
}

function generatePass(){
    let firstPassword = ""
    let secondPassword = ""
    if (symbolsEnabled === true && numbersEnabled === true){
        while (firstPassword.length < passwordLength){
            firstPassword += characters[generateRandomNumber()]
        }
        firstField.value = firstPassword
        while (secondPassword.length < passwordLength){
            secondPassword += characters[generateRandomNumber()]
        }
        secondField.value = secondPassword
    }
    else if (symbolsEnabled === true && numbersEnabled === false){
        while (firstPassword.length < passwordLength){
            firstPassword += characters[generateWithOutNumbers()]
        }
        firstField.value = firstPassword
        while (secondPassword.length < passwordLength){
            secondPassword += characters[generateWithOutNumbers()]
        }
        secondField.value = secondPassword
    }
    else if (symbolsEnabled === false && numbersEnabled === true){
        while (firstPassword.length < passwordLength){
            firstPassword += characters[generateWithOutSymbols()]
        }
        firstField.value = firstPassword
        while (secondPassword.length < passwordLength){
            secondPassword += characters[generateWithOutSymbols()]
        }
        secondField.value = secondPassword
    }
    else if (symbolsEnabled === false && numbersEnabled === false){
        alert("Please, enable symbols or numbers")
    }
}

function generateWithOutSymbols(){
    let withOutSymbols = generateRandomNumber()
    let indexesOfCharacters = []
    for (let i = 0; i < characters.length; i++){
        for (let k = 0; k < 10; k++){
            if (characters[i] == k){
                indexesOfCharacters.push(i)
            }
        }
    }
    while(indexesOfCharacters.includes(withOutSymbols) === false){
        withOutSymbols = generateRandomNumber()
    }
    return withOutSymbols
}

function generateWithOutNumbers(){
    let withOutNumber = generateRandomNumber()
    let indexesOfCharacters = []
    for (let i = 0; i < characters.length; i++){
        for (let k = 0; k < 10; k++){
            if (characters[i] == k){
                indexesOfCharacters.push(i)
            }
        }
    }
    while(indexesOfCharacters.includes(withOutNumber) === true){
        withOutNumber = generateRandomNumber()
    }
    return withOutNumber
}

function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random()*characters.length)
    if (usedCharacters.length === 0){
        usedCharacters.push(randomNumber)
        return randomNumber
    }else{
            if (usedCharacters[usedCharacters.length-1] === randomNumber){
                while (usedCharacters[usedCharacters.length-1] === randomNumber){
                    randomNumber = Math.floor(Math.random()*characters.length)
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
        navigator.clipboard.writeText(copiedTextFirst).then(function(){
            if (copiedTextFirst !== ""){
                alert("Password:    " + copiedTextFirst + "    copied to clipboard!")
            }
        })

})
document.getElementById("second-field").addEventListener("click",function(){
        let copiedTextSecond = document.querySelector("#second-field").value
        navigator.clipboard.writeText(copiedTextSecond).then(function(){
            if (copiedTextSecond !== ""){
                alert("Password:    " + copiedTextSecond + "    copied to clipboard!")
            }
        })
})