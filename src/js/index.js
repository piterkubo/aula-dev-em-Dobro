/*alert("Ola!");*/


/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
    
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol

        
*/


/* pegar no JS o elemento HTML correspondente ao botão de troca de tema*/
const botaoAlterarTema= document.getElementById("botao-alterar-tema");

/* dar um jeito de pegar no JS o elemento HTML corresponde ao body*/
const body = document.querySelector("body");

const imagemBotaotrocaDeTema = document.querySelector(".imagem-botao")


/* dar um jeito de identificar o clique do usuário no botão de troca de tema*/
botaoAlterarTema.addEventListener("click",() =>{

/* verificar se o body tem  a classe do modo-escuro */
const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")


body.classList.toggle("modo-escuro");

if(modoEscuroEstaAtivo){
        
        /* remover a classe do modo escuro body*/
                
        imagemBotaotrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    }

    else{
        /* adicionar a classe modo-escuro no body*/
        body.classList.add("modo-escuro");

        /* trocar a imagem do botão de alterar tema pra lua*/
        imagemBotaotrocaDeTema.setAttribute("src", "./src/imagens/moon.png");

    }

    

   
    
});



