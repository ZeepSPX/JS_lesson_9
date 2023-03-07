"use strict"

// Задача 6.Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2---------------------------------------------------------------------------------

function multiplyElements(userArray) {
    const resultArray = []
    userArray.forEach((element, index, refArr)  => {
        if (element > refArr[0]) {
            resultArray[index] = element *=2
        }
    });
    return resultArray
}

let userArray = [150, 300,20,50,79,54,78,120,101,100,109,450]

let resultArray = multiplyElements(userArray)
document.write(`<div class="one__container"> <div> Усі елементи, які більші за перший елемент помножити на 2: ${resultArray}</div></div> `)