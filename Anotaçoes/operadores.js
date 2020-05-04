//Operadores
/*
    //Aritimeticos{
        5 + 2 = 7
        5 - 2 = 3
        5 * 2 = 10
        5 / 2 = 2.5
        5 % 2 = 1 // resto da divisão de 5 por 2
        5 ** 2 = 25 // potencia: 5 elevado a 2
    }
    //ODEM DE PRECENDENCIA DOS OPERADORES ARITIMETICOS{

        5 + 3 / 2 = 6.5 // primeiro divisão depois a adição

        1 - ()
        2 - **
        3 - * / %
        4 - + -
    
        var a = 5 + 3 // resultado 8
        var b = a % 5 // resultado 3
        var c = 5 * b ** 2 // resultado 45
        var d = 10 - a / 2 // resultado 6
        var e = 6 * 2 / d // resultado 2
        var f = b % e + 4 / e // resultado 3
    }
    //incremento
    var x = 5
    x = x + 1 // é == x += 1 // é == x++
    x = x - 1 // é == x -+ 1 // é == x--

    //Racionais

    5 > 2 Maior // true
    7 < 4 Menor // false
    8 >= 8 maior igual // true
    9 <= 7 menor igual // false
    5 == 5 igual // true
    4 != 4 não igual ou diferente // false

    //Identidade

    5 == 5 // true
    5 == '5' // true
    5 === '5' // false (possui o mesmo valor mais não o mesmo tipo)
    [desigual restrito] 5 !== '5' // true (Possuem tipos diferentes, mas o valor é o mesmo)

    //Lógicos

    ! negação{
        ! true = false 
        ! false = true
    }
    && conjunção / e{
        true && true = true
        true && false = false
        false && true = false
        false && false = false
    }
    || disjunção / ou{
        true || true = true
        true || false = true
        false || true = true
        false || false = false
    }
        Ordem de precendência{
            ! primeiro
            && segundo
            || terceiro
        }
        exemplos{
            idade >= 15 && idade <= 17 // a idade está entre 15 e 17?
            estado == 'RJ' || estado == 'SP' // o estado é RJ ou SP?
            salário > 1500 %% sexo != 'M' // o salário é acima que 1500 e não é homem?
        }
    //Ternario
    teste ? true : false
    exemplo{
        media >= 7.0 ? 'aprovado' : 'reprovado'
        
        var x = 8
        var res = x % 2 == 0 ? 5:9 // var res passa a ser 5
    }
*/