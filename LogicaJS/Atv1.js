//1
function maiorMenor (a,b) {
    if (a>b) {
        return a
    }
else  
     return b
}
console.log(maiorMenor (2,6))

//2
function vida(idade) {

    const anos = 365
    var dias = idade * anos  
    return dias
}
    
  console.log(vida (10))

//3
function mesAno (mes){
switch (mes) {
    case 1:
        console.log('Janeiro')
        break;
    case 2:
	    console.log( 'Fevereiro')
        break;
    case 3:
        console.log("Março") 
        break;

        case 4:
        console.log('Abril')
        break;
    case 5:
	    console.log( 'Maio')
        break;
    case 6:
        console.log("Junho") 
        break;

        case 7:
        console.log('Julho')
        break;
    case 8:
	    console.log( 'Agosto')
        break;
    case 9:
        console.log("Setembro") 
        break;

        case 10:
        console.log('Outubro')
        break;
    case 11:
	    console.log( 'Novembro')
        break;
    case 12:
        console.log("DEzembro") 
        break;

    default:
        console.log("Este mes não existe")
        break;
}
}
mesAno (5)

//4
function inverteParametro(parametro) {
    if (typeof parametro === 'boolean') {
      return !parametro;
    } else if (typeof parametro === 'number') {
      return -parametro;
    } else {
      return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof parametro}`;
    }
  }

  console.log(inverteParametro(false));   
console.log(inverteParametro(1));      
console.log(inverteParametro(3.14));    
console.log(inverteParametro("Olá"));  

//5
function multiplicacaoSemMultiplicar(a, b) {
    let resultado = 0;
    for (let i = 0; i < b; i++) {
      resultado += a;
    }
    return resultado;
  }

  //6
  function repetir(elemento, quantidade) {
    var arrayResultado = [];
    
    for (var i = 0; i < quantidade; i++) {
      arrayResultado.push(elemento);
    }
    
    return arrayResultado;
  }
  
  console.log(repetir("teste", 2))
  console.log(repetir(4, 3))

  //7
  function filtro(arr) {
    const numeros = arr.filter((elemento) => typeof elemento === 'number');
    
    return numeros;
  }

  const resultado1 = filtro(["Js", 2, "hoje", 4, 5, 7, "teste"]);
console.log(resultado1); 

const resultado2 = filtro(["teste", "tentativa"]);
console.log(resultado2);

//8
function calcularSoma(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
    return soma;
  }
  let numeros = [1, 2, 3, 4, 5];
let resultado = calcularSoma(numeros);
console.log(resultado); 

//9
function encontrarSegundoMaior(array) {
    let maior = -Infinity;
    let segundoMaior = -Infinity;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > maior) {
        segundoMaior = maior;
        maior = array[i];
      } else if (array[i] > segundoMaior && array[i] < maior) {
        segundoMaior = array[i];
      }
    }
  
    return segundoMaior;
  }
  let numeros = [5, 10, 3, 8, 1];
let segundoMaior = encontrarSegundoMaior(numeros);
console.log(segundoMaior); 

//10
function melhoresAlunos(estudantes) {
    let melhorMedia = -Infinity;
    let melhorAluno = '';
  
    for (let aluno in estudantes) {
      let notas = estudantes[aluno];
      let media = calcularMedia(notas);
  
      if (media > melhorMedia) {
        melhorMedia = media;
        melhorAluno = aluno;
      }
    }
  
    return { nome: melhorAluno, media: melhorMedia };
  }
  
  function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    return soma / notas.length;
  }
  let estudantes = {
    Augusto: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
  };
  
  let melhorAluno = melhoresAlunos(estudantes);
  console.log(melhorAluno); 

