
function carregar(){
    //Obter Ids
    var txtt = window.document.querySelector('input#txtt')
    var info = window.document.querySelector('label#info')
    var img = window.document.querySelector('img#img')
    var hora = txtt.value
    //Condição
    if(hora >= '00:00' && hora < '12:00'){
        //BOM DIA
        info.innerText = `São ${hora} horas. Bom dia!`
        img.src = 'img01.jpg'
        document.body.style.color = '#CFD1CE'
        document.body.style.background = '#CFD1CE'
    }else if(hora >= '12:00' && hora < '19:00'){
        //BOA TARDE
        info.innerText = `São ${hora} horas. Boa Tarde!`
        img.src = 'img02.jpg'
        document.body.style.color = '#FB9E39'
        document.body.style.background = '#FB9E39'
    }else{
        //BOA NOITE
        info.innerText = `São ${hora} horas. Boa Noite!`
        img.src = 'img03.jpg'
        document.body.style.color = '#3F3239'
        document.body.style.background = '#3F3239'
    }
}

/*
function carregar(){
    //Obter Id
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#img')
    var container = window.document.querySelector('section#container')
    //Obter Horas em tempo real
    //var data = new Date()
    var hora = 8//data.getHours()
    //Mensagem do horario
    msg.innerHTML = `Agora são ${hora} horas.`
    //Condição
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'img01.jpg'
        document.body.style.background = '#CFD1CE'
        container.style.color = '#CFD1CE'
    } else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'img02.jpg'
        document.body.style.background = '#FB9E39'
        container.style.color = '#FB9E39'
    } else{
        //BOA NOITE
        img.src = 'img03.jpg'
        document.body.style.background = '#3F3239'
        container.style.color = '#3F3239'
    }
}*/