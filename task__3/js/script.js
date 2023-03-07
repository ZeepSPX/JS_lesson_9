"use strict"

// Задача 3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.---------------------------------------------------------------------------------
function separationOfTheArray(userArray) {
    const firstFive = new Array(userArray.slice(0, 5).fill(1))
    const secondHalf = new Array (userArray.slice(5).fill(7))
    const mergedArray = [...firstFive,...secondHalf]
    return{
        firstFive,
        secondHalf,
        mergedArray
    }
}

let userArray = new Array(parseInt(prompt('Введіть загальну кількість елементів для масиву:'))).fill(0)

const arraySeparation = separationOfTheArray(userArray)
document.write(`<div class="one__container"> <div> Перші п'ять: ${arraySeparation.firstFive}</div></div> `)
document.write(`<div class="one__container"> <div> Друга половина всі 7: ${arraySeparation.secondHalf}</div></div> `)
document.write(`<div class="one__container"> <div> Об'єданий: ${arraySeparation.mergedArray}</div></div> `)
