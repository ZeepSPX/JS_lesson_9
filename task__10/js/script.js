"use strict"

// Задача 10.Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.---------------------------------------------------------------------------------

function calculateTax(prices) {
	const taxArray = prices.map(price => price * 0.2)
	return taxArray
}

const prices = [100, 200, 300, 400];
const taxArray = calculateTax(prices);

document.write(`<div class="one__container"> <div> Сплачений податок у гривнях: ${taxArray}</div></div>`)


