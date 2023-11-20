function multiplicacaoSemOperador(num1, num2)
{
    let resultado = 0;

    for(let i=0; i < num2; i++)
    {
        resultado += num1;
    }

    console.log(resultado);

}

multiplicacaoSemOperador(2,5);
multiplicacaoSemOperador(10,2);
multiplicacaoSemOperador(5,5);