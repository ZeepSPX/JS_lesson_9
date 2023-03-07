"use strict"

// Задача 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»---------------------------------------------------------------------------------

function getCarNumbersStartingWithA(carNumbers) {
	return carNumbers.filter(carNumber => carNumber.startsWith('А'))
}

let carNumbers = ['АК1234КВ', 'АС8765КІ', 'ВМ5678ОО', 'АО4567ОМ', 'СМ2345РО', 'АМ6789РВ']
let resultArray = getCarNumbersStartingWithA(carNumbers)
document.write(`<div class="one__container"> <div> Всі номера які починаються на А: ${resultArray}</div></div>`)