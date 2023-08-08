function solucao(resultados) {
    //seu codigo aqui
    let vitoria = 0;
    let empate = 0;
    let derrota = 0;

    for (let letra of resultados) {
        if (letra === "V") {
            vitoria++
        } else if (letra === "E") {
            empate++
        } else {
            derrota++
        }
    }

    let pontosVitoria = vitoria * 3;
    let pontosEmpate = empate * 1;

    let pontos = pontosVitoria + pontosEmpate;
    console.log(pontos);
}