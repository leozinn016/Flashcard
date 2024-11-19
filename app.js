criaCartao(
'Lingua inglesa',
'Como se diz oi em Inglês?',
'Oi em ingles é HI (RAI)'
)
cartao.innerHTML = `
<div class="cartao__conteudo">
<h3>${categoria}</h3>
<div class="cartao__conteudo__pergunta">
<p>${pergunta}</p>
</div>
<div class="cartao__conteudo__resposta">
<p>${resposta}</p>
</div>
</div>
let respostaEstaVisivel = false

function viraCartao() {
respostaEstaVisivel = !respostaEstaVisivel
cartao.classList.toggle('active', respostaEstaVisivel)
}
cartao.addEventListener('click', viraCartao)

container.appendChild(cartao)

}
`
