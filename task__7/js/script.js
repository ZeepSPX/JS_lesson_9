"use strict"

// Задача 7..Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.---------------------------------------------------------------------------------
function applyDiscount(userArray) {
    return userArray.map((price) => {
        if (price > 1000) {
            return price * 0.7
        } else {
            return price
        }
    })
}

let userArray = [1500, 3000,200,500,790,540,780,1200,1010,1000,1090,4500]

let discountPrices = applyDiscount(userArray)
document.write(`<div class="one__container"> <div> Ціни зі знижкою: ${discountPrices}</div></div>`)
document.write(`<div class="one__container"> <div> Ціни до знижки: ${userArray}</div></div>`)