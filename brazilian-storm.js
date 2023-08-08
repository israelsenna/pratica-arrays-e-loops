function solucao(notas) {
    //seu codigo aqui
    let menorNota = 999999999999;
    let maiorNota = 0;
    let soma = 0;
    const tamanhoArray = notas.length - 2;

    for (let nota of notas) {
        if (nota < menorNota) {
            menorNota = nota;
        }
    }
    for (let nota of notas) {
        if (nota > maiorNota) {
            maiorNota = nota;
        }
    }
    for (let nota of notas) {
        soma += nota;
    }


    let somaFinal = soma - menorNota - maiorNota;
    let mediaAritmetica = somaFinal / tamanhoArray;

    console.log(mediaAritmetica);
}