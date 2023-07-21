//varrer todas as possibilidades de compra e venda
//ver para cada um se e prejuizo
//se for anotar esse valor

//depois ver qual foi o menor prejuizo
precos = [10, 5, 6];
let menorPrejuizo = 9999999999999999;

for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {
        const compra = precos[i];
        const venda = precos[j];
        const prejuizo = compra - venda;

        if (prejuizo > 0) {
            //realmento eh prejuizo
            if (prejuizo < menorPrejuizo) {
                menorPrejuizo = prejuizo;
            }
        }
    }
}
console.log(menorPrejuizo);