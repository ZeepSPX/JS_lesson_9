"use strict"

// Задача 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.----------------------------------------

function separationOfTheArray(userArray) {
    const middleIndex = Math.floor(userArray.length / 2)
    const firstHalf = new Array(middleIndex).fill(1)
    const secondHalf = new Array(userArray.length - middleIndex).fill(7)
    const mergedArray = [...firstHalf, ...secondHalf]
    return {
        firstHalf,
        secondHalf,
        mergedArray
    }
}

let userArray = new Array(parseInt(prompt('Введіть загальну кількість елементів для масиву:'))).fill(0)

const arraySeparation = separationOfTheArray(userArray)
document.write(`<div class="one__container"> <div> Перша половина: ${arraySeparation.firstHalf}</div></div> `)
document.write(`<div class="one__container"> <div> Друга половина: ${arraySeparation.secondHalf}</div></div> `)
document.write(`<div class="one__container"> <div> Об'єданий: ${arraySeparation.mergedArray}</div></div> `)




