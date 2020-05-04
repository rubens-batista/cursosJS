//Array ou Variavel composta
let num = [5, 8, 9, 2, 3]
num.push(1) // para adicionar um elemento dentro do array, sendo automatico na ultima posição.
/*obs: A ordem do push e do sort faz diferença */
num.sort() // coloca os elementos em ordem crescente.
num[5] = 6 // para adicionar um elemento dentor do array na posição escolhida.


console.log(num) 
console.log(`o vetor tem ${num.length} posições.`) // Para verificar quantos elementos tem dentro do array // Não precisa de ()
console.log(`o primeiro valor do vetor é ${num[0]}.`)
//let pos = num.indexOf(8)
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`o valor não foi encontrado.`)
}else{
    console.log(`O valor está na posição ${pos}`)
}