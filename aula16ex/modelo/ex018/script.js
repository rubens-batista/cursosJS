let num = window.document.querySelector('input#num') // pega o numero digitado no campo num e coloca dentro da variavel.
let lista = window.document.querySelector('select#lista') // pega o campo de lista criada e coloca dentro da variavel.
let res = window.document.querySelector('div#res') // pega o campo de resposta criada e coloca dentro da variavel.
let valores = [] // variavel array criada para amarzenar valores digitados.

//VERIFICAÇÃO DE DADOS
function isNumero(n){ // function com parametro 'n'.
    if(Number(n) >= 1 && Number(n) <= 100){ // verifica se o numero digitado é um numero e está dentro da contagem 1 a 100.
        return true // se for numero e está dentro da contagem retorna VERDADEIRO
    }else{
        return false // se não retorna FALSO
    }
}
function inLista(n, l){ // function com parametros 'n' e 'l'.
    if(l.indexOf(Number(n)) != -1){ /* verifica se o numero digitado é um numero e fazendo uma busca dentro do array valores(futuramente definido)
                                     existe o numero inserido. Utilizando o 'l.indexOf' assim sendo caso retorne -1 o javascript entende que não foi encontrado.*/
        return true // caso o numero não estiver, ele retorna VERDADEIRO.
    }else{
        return false // caso o numero ja tenha, ele retorna FALSO.
    }
}
//FUNCTION PARA ADICIONAR AO VETOR
function adicionar(){    
    if(isNumero(num.value) && !inLista(num.value, valores)){ // verifica se a função 'isNumero' e 'inLista' é verdadeira ou falsa. Porem os 2 prcisam ser verdadeiros
        valores.push(Number(num.value)) // adiciona o numero digitado na ultima posição dentro do array 'valores' utilizando o 'push()'.
        let item = document.createElement('option') // cria uma tag dentro da variavel item.
        item.text = `O valor ${num.value} foi adicionado.` // adiciona um texto dentro da tag que foi criada na variavel item.
        lista.appendChild(item) // adiciona o item como filho ou seja dentro da tag 'lista' que é a tag 'select'
        res.innerHTML = '' // limpa o corpo do 'res'
    }else{
        alert('[ERRO] Valor invalido ou já encontrado na lista.') // caso 1 das funções verificadas seja falso retorna esse erro.
    }
    num.value = '' // limpa o campo do num após inserir na lista.
    num.focus() // faz com que o cursor fique dentro do campo num para digitar novamente.
}
//FUNCTION PARA MOSTRAR RESULTADO
function finalizar(){
    if(valores.length == 0){ // verifica se dentro da array possui algum valor
        alert('Adicione valores antes de finalizar!') // caso não possua nenhum numero retorna um erro
    }else{
        let tot = valores.length // verificar quantos numeros tem dentro do array
        let maior = valores[0] // se ainda não sabe qm é o maior e qm é o menor, então o maior e menor é o primeiro numero.
        let menor = valores[0] // se ainda não sabe qm é o maior e qm é o menor, então o maior e menor é o primeiro numero.
        let soma = 0
        //Soma todos valores e verifica qual é o maior qual é o menor
        for(let pos in valores){ // usado para fazer varredura em array
            soma += valores[pos] // soma todos valores dentro do array 'valores' atráves de loop.
            if(valores[pos] > maior){ // verifica se o numero digitado dentro do array na posição 'pos' ou seja em loop é maior do que o da variavel maior
                maior = valores[pos] // caso seja maior, a variavel maior passa a ser esse numero.
            }
            if(valores[pos] < menor){ // verifica se o numero digitado dentro do array na posição 'pos' ou seja em loop é menor do que o da variavel menor
                menor = valores[pos] // caso seja menor, a variavel menor passa a ser esse numero.
            }
        }
        let media = soma / tot // calcula a media entre a divisão da variavel soma e da variavel tot

        res.innerHTML = `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os numeros é ${soma}</p>`
        res.innerHTML += `<p>A média dos numeros é ${media}</p>`
    }
    
}