function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora =  data.getHours()

    msg.innerHTML = `Agora sâo ${hora} horas`

  if (hora >=0 && hora < 12){
    //Bom Dia!
    img.src = 'amanhecer.png'
    document.body.style.background = 'c4a89a'
    document.getElementsByClassName('texto')[0].style.color = 'black'
    document.getElementsByClassName('texto')[1].style.color = 'black'
  } else if (hora >=12 && hora <=18){
    //Boa Tarde!
    img.src = 'entadecer.png'
    document.body.style.background = 'c8916a'
  } else {
    //Boa Noite!
    img.src = 'anoitecer.png'
    document.body.style.background = '293436'
  } 
  
    

}