let circulo = document.querySelector(".circulo")
let imagemCopo = document.querySelector(".imagem_copo")


function mudarCor(cor) {
    circulo.style.backgroundColor = cor
}

function trocaImagem(imagem) {
    imagemCopo.src = imagem
}