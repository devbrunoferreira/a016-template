const megasena = [
    [01, 02, 03, 04, 05, 06],
    [12, 15, 21, 34, 42, 58],
    [06, 09, 21, 30, 38, 60],
    [03, 15, 32, 45, 57, 59]
]


///////////////// EXERCÍCIO 1 - UTILIZANDO DOIS 'FOR's /////////////

console.log(`- EXERCÍCIO 1 - UTILIZANDO DOIS 'FOR's`);
if (megasena.length === 4) {
    for (let i = 0; i < megasena.length; i++) { // Obs: O primeiro 'for' percorre os índices dentro do array megasena
        let sorteio = `${i + 1}º Sorteio: `; // STRING para concatenar a mensagem a ser impressa;
        for (let j = 0; j < megasena[i].length; j++) { // Obs: O segundo 'for' percorre os índices dentros dos demais arrays
            sorteio += `${megasena[i][j]} `; // segunda parte da mensagem concatenada na string 'sorteio'
        }
        console.log(sorteio);
    }
} else {
    console.log('É necessário alterar o número de items do array!');
}

////////////////////////////////////////////////////////////////////
console.log('');
////////// EXERCÍCIO 1 - UTILIZANDO 'FOR IN' E 'FOR OF' ///////////

console.log(`- EXERCÍCIO 1 - UTILIZANDO 'FOR IN' E 'FOR OF`);
if (megasena.length === 4) {
    for (let i in megasena) {
        let sorteio = `${Number(i) + 1}º Sorteio: `; // na estrutura FOR IN, o índice (i) vem no formato string
        for (let j of megasena[i]) {                // por isso precisamos usar a função Number() para transformá-lo
            sorteio += `${j} `;                     // em número;
        }                                           // Obs: no 'FOR IN' e 'FOR OF' o contador não precisa de incremento.
        console.log(sorteio);
    }
} else {
    console.log('É necessário alterar o número de items do array!');
}