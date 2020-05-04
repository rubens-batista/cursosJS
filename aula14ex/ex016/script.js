function contar(){
    //Declarando variáves
    let inicio = window.document.querySelector('input#txtn1')
    let fim = window.document.querySelector('input#txtn2')
    let passo = window.document.querySelector('input#txtn3')
    let res = window.document.querySelector('div#res')
    
    //Condição
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `[ERRO] Impossível contagem.`
    }else{
        res.innerHTML = 'Contando:<br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert(`[ERRO] Impossível contagem. Considerando Passo 1`)
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
