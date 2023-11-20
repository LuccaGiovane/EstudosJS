function filtrarNumeros(array)
{
    const numeros = []

    for(let item of array)
    {
        if(typeof item == "number")
        {
            numeros.push(item)
        }
    }

    console.log(numeros)
}

filtrarNumeros([1, "sdsf" , 2])
filtrarNumeros(["dasd", "1", true])
filtrarNumeros(["dasd", 1, true])