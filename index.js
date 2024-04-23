var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida){
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('ativa') //toggle serve para clicar e clicar devolta
    })
})
