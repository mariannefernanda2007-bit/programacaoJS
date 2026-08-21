// Aula 04: INPUT
console.log 

let prompt = require("Prompt-Sync")()
let nome = prompt("Olá, digite seu nome:")
console.log("Seja bem-vindo(a)" +nome)

//_________________________________________________________________________________________________________________

let nome = prompt("Olá, digite seu nome")
let sobrenome = prompt("Digite seu sobrenome")
let idade = prompt("Digite sua idade")
let nome_completo = nome + " " + sobrenome
console.log("Seja bem-vindo(a) "+nome_completo+"   voce tem   "+idade+" anos XD" )

console.log("\n\n")

//________________________________________________________________________________________________________________

let produto = prompt("Digite o nome de um produto:")
let preço = prompt("Digite o preço de controle remoto:" )
let preduto2 = prompt("Digite o nome de outro produto:")
let preço2 = prompt("digite o preço de teclado")

console.log("----------relatorio---------")
console.log(produto1+ " - R$" +valor1)
console.log(produto2+ " - R$" +valor2)