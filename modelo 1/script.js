function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

      if(fano.ariaValueMax.lengt == 0 || Number(fano.value > ano)){
        alert('[ERROR] Verifique os dados e tente novamente!')
      } else {
       // alert('tudo ok')
       var fsex = document.getElementsByName('radsex')//nâo vou usar [] no momento
       var idade = ano - Number(fano.value)//calcular a idade
       res.innerHTML = `Idade calculada ${idade}` //paea testar se funçâo esta correta
       var genero = '' //getElementsByName
        if(fsex[0].checked) {
            genero = 'Homen'
        } else if (fsex[1]){
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

      }


    
  } 
  
    

  