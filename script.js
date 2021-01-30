
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

function imc () {
const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');

 if(nome !== '' && altura !== '' && peso !== ''){
     
     const valorIMC = (peso / (altura * altura)).toFixed(2);
     let classificacao =""; 

     if(valorIMC < 18.5){
        classificacao = "Abaixo do Peso"; 
     }else if (valorIMC < 25) {
        classificacao = " Com o Peso Ideal"; 
     }else if (valorIMC < 30 ){
         classificacao = "Um pouco a cima do peso";
     }else if (valorIMC < 35 ){
         classificacao = 'Com obesidade grau I';
     }else if (valorIMC < 40){
         classificacao = 'Com obseidade grau II'
     }else{
         classificacao = 'Com obesidade grau III, cuidado!!';
     }
     resultado.textContent =` Sr(a) ${nome}, o valor do seu
      IMC é ${valorIMC},  você está  ${classificacao}` ;
 }else{
     resultado.textContent = 'Preencha todos os campos!!'
 }

}

calcular.addEventListener('click', imc);




