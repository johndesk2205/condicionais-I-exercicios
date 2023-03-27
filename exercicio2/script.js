function check(idade, ensinoMedio, faculdade){
    
    idade = prompt("Digite a sua idade")
    ensinoMedio = confirm("Você terminou o ensino médio?")
    faculdade = confirm("Você faz faculdade atualmente?")
    
    if(idade>=18){
        console.log('A pessoa é maior de idade')

    }else{
        console.log('A pessoa é menor de idade')
    }
    if(ensinoMedio === true){
        console.log("Terminou o ensino médio")
    }else{
        console.log("Não terminou o ensino médio")
    }
    if(faculdade === true){
        console.log("Está cursando uma faculdade")
    }else{
        console.log("Não está cursando uma faculdade")
    }
}

check()
