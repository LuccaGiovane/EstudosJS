let cont = 0;

const listaDeTeclas =
    document.querySelectorAll('.tecla');


function tocaSom(idElementoAudio)
{
    document.querySelector(idElementoAudio).play();
}


while(cont < listaDeTeclas.length)
{
    const tecla = listaDeTeclas[cont]
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function ()//função anonima, so existe nesse contexto
        {
            tocaSom(idAudio);
        }

    cont++;
}