function contaCaractere(frase, caractere)
{
    let cont = 0

    for(let i=0; i< frase.length; i++)
    {
        if(frase[i] == caractere)
        {
            cont++
        }
    }

    return cont
}

console.log(contaCaractere("O rato roeu a roupa do rei de roma", "r"))