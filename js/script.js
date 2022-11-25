const playerOpcao = document.querySelectorAll('.player')
const botOpcao = document.querySelectorAll('.bot')
const jogar = document.querySelector('#jogar')
const resultado = document.querySelector('#resultado h3')

//Escolher opção

for(let i = 0; i < playerOpcao.length; i++){
    for(let j = 0; j < playerOpcao.length; j++){
        playerOpcao[i].addEventListener('click', () =>{
            if(i != j){
                playerOpcao[j].classList.remove('opcao-principal')
            }else{
                playerOpcao[i].classList.add('opcao-principal')
            }
            
        })
    }
    
}



//botão jogar

jogar.addEventListener('click', () =>{
        

    let papelVerificador = playerOpcao[0].classList.contains('opcao-principal')
    let tesouraVerificador = playerOpcao[1].classList.contains('opcao-principal')
    let pedraVerificador = playerOpcao[2].classList.contains('opcao-principal')
    if(pedraVerificador == false && tesouraVerificador == false && papelVerificador == false){
        resultado.innerHTML = 'Resultado: Sem valores'
    }else{
    let botEscolha = parseInt(Math.random() * 3)
    for(let i = 0; i < botOpcao.length; i++){
        if(i != botEscolha){
            botOpcao[i].classList.remove('opcao-principal')
        }else{
            botOpcao[botEscolha].classList.add('opcao-principal')
        }
    }
        if(papelVerificador == true){
            var escolhaAtual = 0
        }
        else if(tesouraVerificador == true){
            var escolhaAtual = 1
        }else{
            var escolhaAtual = 2
        }
        if(escolhaAtual == 0 && botEscolha == 0){
            resultado.innerHTML = 'Resultado: Empate! - limpando em 5s'

            
        }else if(escolhaAtual == 0 && botEscolha == 1){
            resultado.innerHTML = 'Resultado: Bot ganhou! - limpando em 5s'

        }else if(escolhaAtual == 0 && botEscolha == 2){
            resultado.innerHTML = 'Resultado: Você ganhou! - limpando em 5s'

        }else if(escolhaAtual == 1 && botEscolha == 0){
            resultado.innerHTML = 'Resultado: Você ganhou! - limpando em 5s'

        }else if(escolhaAtual == 1 && botEscolha == 1){
            resultado.innerHTML = 'Resultado: Empate! - limpando em 5s'

        }else if(escolhaAtual == 1 && botEscolha == 2){
            resultado.innerHTML = 'Resultado: Bot ganhou! - limpando em 5s'

        }else if(escolhaAtual == 2 && botEscolha == 0){
            resultado.innerHTML = 'Resultado: Bot ganhou! - limpando em 5s'

        }else if(escolhaAtual == 2 && botEscolha == 1){
            resultado.innerHTML = 'Resultado: Você ganhou - limpando em 5s'

        }else{
            resultado.innerHTML = 'Resultado: Empate - limpando em 5s'

        }

    }

    setTimeout(limpar,5000)
})

//limpar opções

function limpar(){
    playerOpcao[0].classList.remove('opcao-principal')
    playerOpcao[1].classList.remove('opcao-principal')
    playerOpcao[2].classList.remove('opcao-principal')
    botOpcao[0].classList.remove('opcao-principal')
    botOpcao[1].classList.remove('opcao-principal')
    botOpcao[2].classList.remove('opcao-principal')
    resultado.innerHTML = 'Resultado: Jogue novamente'
}





