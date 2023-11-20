function estaEntre(minimo, maximo, numero, inclusivo = false)
{
    if(inclusivo)
    {
        console.log(minimo <= numero && numero <= maximo)
    }
    else
    {
        console.log(minimo < numero && numero < maximo);
    }
}

estaEntre(10, 100, 50)
estaEntre(16, 100, 160)
estaEntre(3,150,3)
estaEntre(3,150,3,true)