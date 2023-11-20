function removerPropriedade(objeto, propriedade)
{
    return delete objeto.propriedade;
}

console.log(Object.is(removerPropriedade({a:1 , b:2}, "b"), {a:1 , b:2})) // se for = true