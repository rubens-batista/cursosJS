function verificar(){
    //Pegar os Ids
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    //Condição
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'm-menino.jpg')
            }else if(idade < 21){
                //JOVEM
                img.setAttribute('src', 'm-jovem.jpg')
            }else if(idade < 50){
                //ADULTO
                img.setAttribute('src', 'm-adulto.jpg')
            }else{
                //IDOSO
                img.setAttribute('src', 'm-idoso.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'f-menina.jpg')
            }else if(idade < 21){
                //JOVEM
                img.setAttribute('src', 'f-jovem.jpg')
            }else if(idade < 50){
                //ADULTA
                img.setAttribute('src', 'f-adulta.jpg')
            }else{
                //IDOSA
                img.setAttribute('src', 'f-idosa.jpg')
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}