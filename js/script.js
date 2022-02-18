function calcular(){
  var peso = document.getElementById('peso')
  var altura = document.getElementById('altura')
  var resultado = ''
  var resu = document.getElementById('texto-resultado')

  if(peso.value == '' || altura.value == '' || nome.value == ''){
    alert('Digite todos os campos!')
  }else{
    resultado = (Number(peso.value) / (Number(altura.value) * Number(altura.value))).toFixed(1)
    
    let classificacao = ''
    var cor = document.getElementById('caixa-resultado')

    if(resultado < 18.5){
      classificacao = 'abaixo do peso.'
      cor.style.background = '#ff8585'

    }else if(resultado > 18.5 && resultado < 25){
      classificacao = 'com peso ideal.'
      cor.style.background = 'grey'

    }else if(resultado > 25 && resultado < 30){
      classificacao = 'acima do peso.'
      cor.style.background = 'grey'

    }else if(resultado > 30 && resultado < 35){
      classificacao = 'com obesidade grau I.'
      cor.style.background = '#ff8585';

    }else if(resultado > 35 && resultado < 40){
      classificacao  = 'com obesidade grau II'
      cor.style.background = '#ff6161';
      
    }else{
      classificacao = 'com obesidade grau III (mórbida)'
      cor.style.background = '#ff3c3c';
    }
    
  resu.innerHTML = `${nome.value}, seu IMC é de ${resultado} e você está ${classificacao}`

  }
}