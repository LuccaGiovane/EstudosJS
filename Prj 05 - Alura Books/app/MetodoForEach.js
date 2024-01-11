const insereLivros = document.getElementById('livros')

function exibeLivros(listaDeLivros)
{
    insereLivros.innerHTML = ''

    listaDeLivros.forEach(l =>
    {
        insereLivros.innerHTML += `
        <div class="livro">-->
          <img class="livro__imagens" src="${l.imagem}" alt="${l.alt}" />
          <h2 class="livro__titulo">
            ${l.titulo}
          </h2>
          <p class="livro__descricao">${l.autor}</p>
          <p class="livro__preco" id="preco">R$${l.preco}</p>
          <div class="tags">
            <span class="tag">${l.categoria}</span>
          </div>
        </div>`
    })
}