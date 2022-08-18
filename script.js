const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// // escreva seu código abaixo 👇🏻

///////////////////// CÓDIGO COM DOIS FOR'S ////////////////////////
console.log("- CÓDIGO COM DOIS FOR'S: ");
for (let i = 0; i < filmes.length; i++) {
  let string = `${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}.`;
  for (let j = 0; j < filmes.length - 2; j++) {
    string += `\nTem no elenco: ${filmes[i].elenco}.`;
  }
  console.log(string);
}

console.log("");
////////////////// CÓDIGO COM FOR IN E FOR OF //////////////////////
console.log("- CÓDIGO COM FOR IN E FOR OF:");
for (let i in filmes) {
  let string = `${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}.`;
  for (let j of filmes[i].elenco) {
    string += `\nTem no elenco: ${filmes[i].elenco}.`;
  }
  console.log(string);
}

/////////////////////////////////////////////////////////////////////
