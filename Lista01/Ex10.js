function simboloMais(quantidade)
{
    console.log(Array(quantidade).fill("+").join(""))//sem o join fica: [ '+', '+' ]

}

simboloMais(2);
simboloMais(5);