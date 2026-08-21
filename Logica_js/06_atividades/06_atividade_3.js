// Aula 06: atividade 03
let prompt = require("Prompt-Sync")()

let peso =  parseFloat ( prompt ("Digite seu peso (kg): ") )
let altura = parseFloat( prompt("Digite sua altura (m): ") )
let imc = peso / (altura * altura)

if(imc > 25){
    console.log("ta normal")
}else(){}
    console.log("ta acima do peso")
   
