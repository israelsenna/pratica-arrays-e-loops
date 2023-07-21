//1. ver se tem promocao
//2. se nao tiver promocao
//2.1 soma tudo - varrer o array somando o item atual ao total
//3. se tiver promocao
//3.1 somar tudo
//3.2 identificar o item mais barato
//3.3 totalApagar = soma - desconto

//encontrando o menor 
//percorrendo o array
//verificar se o item autal é menor que o menor de todos ate agora
//se for, substitui
//se nao, segue em frente

const precos = [10, 20, 5, 2, 5, 9, 10]

let soma = 0;
let menor = precos[0];

for (let itemAtual of precos) {
    //calculando a soma total

    soma += itemAtual;

    //se o item atual for menor que o menor ate agora
    if (itemAtual < menor) {
        //o item atual é o novo menor
        menor = itemAtual;
    }
}

if (precos.length >= 5) {
    //tem promo
    console.log(soma - menor);
} else {
    //n tem promo
    console.log(soma);
}