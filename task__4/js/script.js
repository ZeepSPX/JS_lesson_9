"use strict"

// Задача 4. Дано масив елементів. Вивести на екран елементи, що більші за 100---------------------------------------------------------------------------------

function moreHundredElements (userArray) {
    const result = []
    for (const arrayElements of userArray) {
        if (arrayElements > 0) {
        result.push(arrayElements)
        }
    }
    return result
}

let userArray = [150, 300,20,50,79,54,78,120,101,100,109,450]

let resultArray = moreHundredElements(userArray)
document.write(`<div class="one__container"> <div> Масив чисел які більші за 100: ${resultArray}</div></div> `)






