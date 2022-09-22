let meter = 3.281
let liter = 0.264
let kilogram = 2.204
let convertEl = document.getElementById("conver-el")
let inputEl = document.getElementById("input-el")
let meters = document.querySelector(".siemano1")
let liters = document.querySelector(".siemano2")
let kilos = document.querySelector(".siemano3")

convertEl.addEventListener("click", function() {
        let base = inputEl.value
        meters.textContent = `${base} meters = ${base * meter.toFixed(3)} feets | ${base * meter.toFixed(3)} feets = ${base} meter`
        liters.textContent = `${base} liters = ${base * liter.toFixed(3)} gallons | ${base * liter.toFixed(3)} gallons = ${base} liters`
        kilos.textContent = `${base} kilos = ${base * kilogram.toFixed(3)} pounds | ${base * kilogram.toFixed(3)} pounds = ${base} kilos`
})
