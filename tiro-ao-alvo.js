let arrayDisparosMaior70 = [];

for (let disparo of disparos) {
    if (disparo >= 70) {
        arrayDisparosMaior70.push(disparo);
    }
}

if (arrayDisparosMaior70.length < 3) {
    console.log("ELIMINADO");
} else {
    console.log(arrayDisparosMaior70.length);
}