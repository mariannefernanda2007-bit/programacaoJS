// Aula 06: atividade 01
let prompt = require("Prompt-Sync")()

let numero = parseInt( prompt("Digite o numero: ") )

if(numero >= 0 ){
    console.log("O numero é: " + numero + " positivo ")
}else{
    console.log("O numero é negativo")
}