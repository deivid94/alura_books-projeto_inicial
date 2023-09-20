let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdernarPorPreco.addEventListener('click', ordernarLivros)

function ordernarLivros (){
    let livrosOrdernados = livros.sort( (a, b) => a.preco - b.preco)
    exibirOslivrosNaTela(livrosOrdernados)
}
