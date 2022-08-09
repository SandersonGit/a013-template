/* /* console.log("pratica guiada 1"); */

/* const numeroRamal = Number(prompt("Digite a opção do cortão desejado \n 1 facil\n 2 black \n 3 platinum \n 4 cartão master gold")) */

/* if(idadeDependente >= 13){
    if(idadeDependente < 18){
        console.log("Seu filho já pode ter um catão vinculado ao seu.");
    }else{
        console.log("Consulte outras possibilidades do Labank");
    }
}else{
    console.log("Consulte outras possibilidades do Labank");
} */

/* if(idadeDependente >= 13 && idadeDependente < 18){
    console.log("Seu filho já pode ter um catão vinculado ao seu.");

}else{
    console.log("Consulte outras possibilidades do Labank");
} */

/* console.log("pratica guiada 2");

console.log("If ternário");

console.log(idadeDependente === 13 ? "A idade do dependente é 13 e já pode ter um cartão vinculado na sua conta" : "Verifique as ações possiveis"); */

/* console.log("Pratica guiada 3");
console.log("Switch-case");

switch(numeroRamal){
    case 1: 
        console.log("cartão facil adquirido");
        break;
    case 2: 
        console.log("cartão black");
        break;
    case 3: 
        console.log("cartão platinum adquirido");
        break
    case 4:
        console.log("cartão master gold adquirido");       
        break
    default: 
        console.log("Escolha uma das opçoes válidas.");    
} */

const numero = Number(prompt("Digite um número"))

if (numero % 2 === 0) {
    console.log("Esse numero é divisível por 2");
    console.log(numero === 30 ? "Ufa, acertei o 30" : "não foi dessa vez que vc escolheu o 30 " );
    if (numero % 3 === 0) {
    console.log("esse numero é divisível por 3");    
    }
}else{
    console.log("Esse numero não é divisivel por 2 e nem por 3");
}


switch(numero){
    case 6: 
    console.log("O número é seis");
    break
    case 12: 
    console.log("o numero é doze");
    break
    case 18: 
    console.log("o numero é dezoito");
    break
    case 24: 
    console.log("o numero é vinte e quatro")
    break
    case 30: 
    console.log("o numero é trinta")   
    break
    default: 
    console.log("Vc não escolheu nenhum dos numeros esperados 6, 12, 18, 24, 30.");
}

if(numero % 2 === 0  && numero % 3 === 0 ){
    console.log(true);
}