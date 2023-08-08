const primeiraLetra = 'c';
const segundaLetra = 'v';
const palavras = [
    'aveia',
    'pao',
    'ave'
];

function solucao(primeiraLetra, segundaLetra, palavras) {
    //seu codigo aqui
    const exibir = [];
    let i = 0;

    for (let palavra of palavras) {
        if (primeiraLetra === palavra[0] && segundaLetra === palavra[1]) {
            exibir.push(palavra);
            console.log(exibir[i]);
            i++;
        }
    }
    if (exibir.length === 0) {
        console.log('NENHUMA');
    }
}

solucao(primeiraLetra, segundaLetra, palavras);