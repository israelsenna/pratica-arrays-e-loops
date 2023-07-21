//1. olhar cada um dos caracteres
//2. ver se pode o caractere em questao
//3. se for permitido, escrevo
//4. se nao for permitido, ignoro e olho o proximo
//5. quando acabarem os caracteres, é só exibir o que eu escrevi

const stringCorrompida = "!##'maçarico'&";

let dadoPurificado = '';

for (let caractere of stringCorrompida) {
    if (caractere === '!' || caractere === '@' || caractere === '#' || caractere === '$' || caractere === '%' || caractere === '&' || caractere === '*' || caractere === '(' || caractere === ')') {
        // ignorar
    } else {
        dadoPurificado += caractere;
    }
}
console.log(dadoPurificado);