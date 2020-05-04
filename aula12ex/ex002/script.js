function verificar(){
    //Obter Ids
    var anoNasc = window.document.querySelector('input#idade')
    var msg = window.document.querySelector('p#msg')
    var img = window.document.querySelector('img#img')
    var sexo = window.document.getElementsByName('sexo')
    var atual = new Date()
    var ano = atual.getFullYear()
    //Converter para numero
    var nasc = Number(anoNasc.value)
    //Calculo de idade
    var idade = ano - nasc
    //Condições
    if(nasc == ''){
        alert('[ERRO] Campo de preenchimento obrigatório!')
    }else if(nasc > ano){
        alert(`[ERRO] Digite um ano valido! Nosso ano atual é ${ano}`)
    }else if(idade < 14 && sexo[0].checked){
        //HOMEM CRIANÇA
        msg.innerText = `Detectamos Homem Criança com ${idade} anos.`
        img.style.display = 'inline-block'
        img.src = 'm-menino.jpg'
    }else if(idade >= 14 && idade < 18 && sexo[0].checked){
        //HOMEM JOVEM
        msg.innerText = `Detectamos Homem Jovem com ${idade} anos.`
        img.style.display = 'inline-block'
        img.src = 'm-jovem.jpg'
    }else if(idade >= 18 && idade < 60 && sexo[0].checked){
        //HOMEM ADULTO
        msg.innerText = `Detectamos Homem Adulto com ${idade} anos.`
        img.style.display = 'inline-block'
        img.src = 'm-adulto.jpg'
    }else if(idade >= 60 && sexo[0].checked){
        //HOMEM IDOSO
        msg.innerText = `Detectamos Homem Idoso com ${idade} anos.`
        img.style.display = 'inline-block'
        img.src = 'm-idoso.jpg'
    }else if(idade < 14 && sexo[1].checked){
        //MULHER CRIANÇA
        msg.innerText = `Detectamos Mulher Criança com ${idade} anos.`
        img.style.display = 'inline-block'
        img.src = 'f-menina.jpg'
    }else if(idade >= 14 && idade < 18 && sexo[1].checked){
        //MULHER JOVEM
        msg.innerText = `Detectamos Mulher Jovem com ${idade} anos.`
        img.style.display = 'inline-block'
        img.src = 'f-jovem.jpg'
    }else if(idade >= 18 && idade < 60 && sexo[1].checked){
        //MULHER ADULTA
        msg.innerText = `Detectamos Mulher Adulta com ${idade} anos.`
        img.style.display = 'inline-block'
        img.src = 'f-adulta.jpg'
    }else if(idade >= 60 && sexo[1].checked){
        //MULHER IDOSA
        msg.innerText = `Detectamos Mulher Idosa com ${idade} anos.`
        img.style.display = 'inline-block'
        img.src = 'f-idosa.jpg'
    }
    
    
    
}