"use strict"

// Задача 9.Дано масив імен. Сформувати масив з перших літер цих імен.---------------------------------------------------------------------------------

function getFirstLetters(namesArray) {
	const firstLatters = namesArray.map(name => name.charAt(0))
	return firstLatters
}

let namesArray = ["John", "Doe", "Alice", "Bob"]
let firstLettersArray = getFirstLetters(namesArray)

document.write(`<div class="one__container"> <div> Масив з перших літер: ${firstLettersArray}</div></div>`)
