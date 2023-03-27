function CheckNacao(nacionalidade) {
    nacionalidade = prompt("Qual a sua nacionalidade?")

    if (nacionalidade.toLowerCase() === "brasileira") {
        console.log("A sua nacionalidade é brasileira")
    } else if (nacionalidade.toLowerCase() === "argentina") {
        console.log("A sua nacionalidade é argentina")
    } else if (nacionalidade.toLowerCase() === "uruguaia") {
        console.log("A sua nacionalidade é uruguaia")
    } else if (nacionalidade.toLowerCase() === "chilena") {
        console.log("A sua nacionalidade é chilena")
    } else if (nacionalidade.toLowerCase() === "colombiana") {
        console.log("A sua nacionalidade é colombiana")
    } else {
        console.log("Não corresponde a nenhuma das possibilidades acima")
    }
}
CheckNacao()
