//varrer a sequencia
//se for > soma um
//se for < subtrai um
//se indice for > 6, indice = 0
//se indice for menor que 0, indice = 6

sequencia = [0, 1, 2, 3, 4, 5];

let indice = 0;
for (let item of sequencia) {
    if (item === '>') {
        indice++;
    } else { // <
        indice--;
    }

    if (indice < 0) {
        indice = 6;
    } else if (indice > 6) {
        indice = 0;
    }
    console.log(indice);
}