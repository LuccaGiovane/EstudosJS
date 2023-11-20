function booleanoOuNumerico(valor)
{
    if(typeof(valor) == "boolean")
    {
        if(valor == true)
        {
            console.log(false)
        }
        else
        {
            console.log(true)
        }
    }
    else if(typeof(valor) == "number")
    {
        console.log(valor * -1)
    }
    else
    {
        console.log(`Booleano ou numerico esperado, valor fornecido e do tipo ${typeof(valor)}`)
    }
}

booleanoOuNumerico(true)
booleanoOuNumerico(false)
booleanoOuNumerico(-200)
booleanoOuNumerico("lalala")
booleanoOuNumerico("0")