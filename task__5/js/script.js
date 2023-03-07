"use strict"

// Задача 5.Дано масив елементів. Знайти добуток додатних елементів---------------------------------------------------------------------------------

function getProductOfPositiveElements(userArray) {
    let product = 1
    for (const arrayElements of userArray) {
        if (arrayElements > 0) {
            product *= arrayElements
        }
    }
    return product
}

let userArray = [150, 300,20,50,79,54,78,120,101,100,109,450]

let resultArray = getProductOfPositiveElements(userArray)
document.write(`<div class="one__container"> <div> Добуток усіх додатних чисел: ${resultArray}</div></div> `)