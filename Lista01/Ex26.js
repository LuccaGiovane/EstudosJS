function removeCaractere(palavra)
{
    const consoantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

    return palavra.split('').filter((char) => consoantes.includes(char)).join('')
}

console.log(removeCaractere("Lucca"))