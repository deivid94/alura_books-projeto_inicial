const todosOsBotoesDeLivros = document.querySelectorAll('.btn')

todosOsBotoesDeLivros.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros (){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirOslivrosNaTela(livrosFiltrados)
}