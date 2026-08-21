// Aula 04: Converter variaveis
let prompt = require("prompt-sync")()



/*let numero1 = prompt("Digite um numero: ")
numero1 = parseInt(numero1)

let numero2 = parseInt ( prompt("Digite outro numero:") )

let soma = numero1 + numero2
console.log("O resultado é: " +soma)*/

//-------------------------------------------------------------------

// let data_de_nascimento = prompt("Digite o ano em que voce nasceu: ")
// let idade = 2026 - data_de_nascimento

// console.log("idade atual é:" + idade)

let produto =  prompt("Digite o nome de um produto: ")
let preco = prompt("Digite o preco do produto: ")
let estoque = prompt("Digite a quantidade em estoque: ")
let faturamento = preco * estoque

console.log("nome do produto é:" + produto)
console.log("faturamento:" +faturamento)
