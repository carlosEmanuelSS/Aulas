const prompt = require('prompt-sync')();

let continuar = true;

while (continuar) {
  // Entrada: nome do aluno
  let nome = prompt("Digite o nome do aluno:");

  // Entrada: quantidade de notas
  let qtdNotas = parseInt(prompt("Quantas notas você vai inserir?"));
  let soma = 0;
  let notas = [];

  // Entrada das notas usando for
  for (let i = 0; i < qtdNotas; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
    notas.push(nota);
    soma += nota;
  }

  // Processamento: calcular média
  let media = soma / qtdNotas;

  // Verifica situação do aluno
  let situacao = "";

  if (media >= 7) {
    situacao = "Aprovado";
  } else if (media >= 5) {
    situacao = "Recuperação";
  } else {
    situacao = "Reprovado";
  }

  // Saída final
  alert(`Aluno: ${nome}
Notas: ${notas.join(", ")}
Média: ${media.toFixed(2)}
Situação: ${situacao}`);

  // Pergunta se quer cadastrar outro aluno
  let resposta = prompt("Deseja cadastrar outro aluno? (s/n)");
  if (resposta.toLowerCase() !== "s") {
    continuar = false;
  }
}
