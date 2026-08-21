// Aula 05: Exemplos de condicoes 
let prompt = require("prompt-sync")()

let usuario = prompt("Digite o seu usuario: ")
if(usuario == "marianne" ){
    console.log("Acesso concedido!")
}else {
    console.log("Acesso negado...")
}

let idade = parseInt( prompt("Digite sua idade: ") )
if( idade > 110 ){
    console.log("Idade invalida! tente novamente...")
}

if(idade <= 0 ){
    console.log("Idade invalida! tente novamente...")
}


console.log("A idade digitada foi: " +idade)
