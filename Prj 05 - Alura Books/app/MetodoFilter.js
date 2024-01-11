const botoes = document.querySelectorAll('.btn')

botoes.forEach(b => b.addEventListener('click', filtrarLivros))
function filtrarLivros()
{
    const elementoBt = document.getElementById(this.id)
    const categoria = elementoBt.value

    let livrosFiltrados = livros.filter(l => livros.categoria == categoria)

    exibeLivros(livrosFiltrados)
}