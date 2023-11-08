function cumprimentar(nome)
{
    const saudacao = "Olá ";

    return console.log([saudacao, nome].join(", ").concat("!"));
}

cumprimentar("Lucca");
