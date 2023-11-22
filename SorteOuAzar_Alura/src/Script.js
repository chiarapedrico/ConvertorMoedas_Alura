var numeroSecreto = parseInt(Math.random() * 1001);

while(chute != numeroSecreto){
  
var chute = prompt('Digite um número de 1 a 1000');

if (chute == numeroSecreto){
  alert('Acertou, Parabéns!!!!')
} else if (chute > numeroSecreto){
  alert('Errou....número secreto é menor');
}else if(chute < numeroSecreto){
  alert('Errou....o número secreto é maior')
} 
}
