//Aula 06: atividade 5
let prompt = require("Prompt-Sync")()

let time1 = prompt("Qual foi a quantidade de gols do time1: ")
let time2 = prompt("qual foi a quantidade de gols do time2: ")

if (time1 > time2){
    console.log("time1 foi o vencedor")
}

if(time2 > time1){
    console.log("time2 foi o vencedor")
}

if(time1 == time2){
    console.log("Eles empatarem")
}