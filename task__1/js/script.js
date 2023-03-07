"use strict"

// Задача 1. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.---------------------------------------------------------------------------------

function paddingWithZeros() {
  let zeroArray = new Array(count).fill(0)
  return zeroArray
}

let count = parseInt(prompt('Введіть загальну кількість елементів для масиву:'))

const arrayZero = paddingWithZeros()
document.write(`<div class="one__container"> <div> Масив: ${arrayZero}</div></div> `)


