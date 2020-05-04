function calcular(){
    let num = window.document.querySelector('input#formNumero')
    let tab = window.document.querySelector('select#seltab')
    //Calculo de Tabuada
    if(num.value.length == 0){
        alert('[ERRO] Digite um numero!')
    }else{
        //Converter
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}