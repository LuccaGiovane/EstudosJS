const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
];

const retornaMes = (numero) =>
{
    if(numero >= 1 && numero <= 12)
    {
        return console.log(meses[numero - 1]);
    }
    else
    {
        return console.log("Mes Invalido!");
    }

}

retornaMes(2);
retornaMes(10);
retornaMes(15);