let meter = 3.281
let liter = 0.264
let kilogram = 2.204
let convertEl = document.getElementById("conver-el")
let inputEl = document.getElementById("input-el")
let hello1 = document.querySelector(".siemano1")
let hello2 = document.querySelector(".siemano2")
let hello3 = document.querySelector(".siemano3")

convertEl.addEventListener("click", function() {
        let base = inputEl.value
        hello1.textContent = `${base} meters = ${base * meter.toFixed(3)} feets | ${base * meter.toFixed(3)} feets = ${base} meter`
        hello2.textContent = `${base} liters = ${base * liter.toFixed(3)} gallons | ${base * liter.toFixed(3)} liters = ${base} gallons`
        hello3.textContent = `${base} kilos = ${base * kilogram.toFixed(3)} pounds | ${base * kilogram.toFixed(3)} pounds = ${base} kilos`
})
