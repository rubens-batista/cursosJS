//Variaveis compostas
/*
    //Devem ser capazes de armazenar vários valores em uma mesma estrutura.
        OBS[
            Array/vetor/variavel composta é uma variavel que tem varios elementos, 
            cada elemento é composto por seu valor e por uma chave de identifação.
        ]

    array vetor{
        var a = [car1, car2, car3]
            elementos do vetor a{
                [car1, car2, car3]
            }
            indice/chave{
                //car1 = a0
                //car2 = a1
                //car3 = a2
            }
            conteudo{
                car1, car2, car3
            }
        
    }

    examples{
        let num = [5, 8, 9, 2, 3]
        num.push(1) // para adicionar um elemento dentro do array, sendo automatico na ultima posição.
            obs: A ordem do push e do sort faz diferença
        num.sort() // coloca os elementos em ordem crescente.
        num[5] = 6 // para adicionar um elemento dentor do array na posição escolhida.
        num.length // Para verificar quantos elementos tem dentro do array // Não precisa de ()
        num.indexOf(7) // buscar o numero 7 dentro do array // retorna a chave que o valor se encontra
            caso não encontre o valor, ele vai retonar -1 == pesquisou e não encontrou.
        
    }
    sintaxe do FOR para ARRAYS e OBJETOS{
        for(let pos in num){
            console.log(num[pos])
        }
    }

*/