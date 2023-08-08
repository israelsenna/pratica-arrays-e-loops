function solucao(palpite, palavra) {
    // seu codigo aqui
    const aux = [];
    for (let i = 0; i < palavra.length; i++) {
        if (palpite === palavra[i]) {
            aux.push(palpite);
        }
    }
    console.log(aux.length);
}