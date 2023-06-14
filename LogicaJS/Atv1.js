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
//5
//6
//7
//8
//9
//10
