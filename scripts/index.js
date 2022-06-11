
let botao = document.querySelector('button')
let containerRate = document.getElementById('containerRate')
let containerThanks = document.getElementById('containerThanks')
let notas = document.querySelectorAll('.rating-value')

botao.addEventListener('click', (event) => {
    containerRate.style.display = 'none'
    containerThanks.style.display = 'flex'
    
    event.preventDefault()
})

for(let nota of notas){
    nota.addEventListener('click', ()=>{
        tiraSelecao(notas)
        nota.classList.add('selecionado')
        document.querySelector('.ty-value').innerText = `You selected ${nota.innerHTML} out of 5`
    })
}

function tiraSelecao(notas){
    for(let nota of notas){
        nota.classList.remove('selecionado')
    }
}

