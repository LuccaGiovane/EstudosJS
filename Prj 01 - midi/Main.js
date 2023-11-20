const listaDeTeclas =
    document.querySelectorAll('.tecla');

function tocaSom(seletorAudio)
{
    const elemento = document.querySelector(seletorAudio).play();

    if(elemento != null && elemento.localName === 'audio')
    {
        elemento.play();
    }
    else
    {
        alert("Elemento não encontrado!");
    }
}

for(let i=0; i<listaDeTeclas.length; i++)
{
    const tecla = listaDeTeclas[i]
    const instrumento = tecla.classList[1];


    const idAudio = `#som_${instrumento}` //Template string

    tecla.onclick = function ()//Função anonima, so existe nesse contexto
        {
            tocaSom(idAudio);
        }

    tecla.onkeydown = function (evento)//Quando pressionar via enter/tab acende vermelho
        {
            if(evento.code ==='space' || evento.code === 'enter')
            {
                tecla.classList.add('ativa');
            }
        }

    tecla.onkeyup = function ()//remove a cor vermelha setada com a anterior
    {
        tecla.classList.remove('ativa');
    }
}