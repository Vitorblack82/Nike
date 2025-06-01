let body = document.querySelector("body")
let tenis = document.querySelector(".tenis")
let botao = document.querySelector(".botao-carrinho")

function trocarCor(cor, imagem) {
    tenis.classList.add('troca-efeito')



    body.style.background = cor
    tenis.src = imagem
    botao.style.background = cor







    setTimeout(() => {
        tenis.classList.remove("troca-efeito")

    }, 500);


}





