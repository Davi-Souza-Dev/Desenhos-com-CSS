const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const containerSlides = document.getElementById('container-slides');
const slides = [...document.querySelectorAll('.slide')];

// const criarSlides = ()=>{//Função para criar os slides direto no js
//     const novoSlide = document.createElement('div');
//     novoSlide.setAttribute('class', 'card');
//     return novoSlide;
// }

// for(let i=0; i<=6;i++){
//     containerSlides.appendChild(criarSlides());
// }

//Verificar qual deles esta selecionado

const verificarSelecionado = () =>{
    const slideSelecionado = [...document.querySelectorAll('.foco')];
    return slideSelecionado[0];
}

//Faz a animação de se mover para frente
const animacaoMoverFrente = ()=>{
    containerSlides.style.animation = "moverFrente 1s both";
    console.log( containerSlides.style.animation)
}
//Faz a animação de se mover para trâs
const animacaoMoverTras = ()=>{
    containerSlides.style.animation = "moverTras 1s both";
    console.log( containerSlides.style.animation)
}

//Pega o primeor slide e passa para o final
const moverSlide = ()=>{
    const firstSlide = containerSlides.firstElementChild;//pega o primerio elemento
    containerSlides.firstChild.remove()//remove o primeiro elemento
    containerSlides.appendChild(firstSlide);//clona o primeiro elemento no final
}

//pega o ultimo slide e passa para o começo
const moverSlideLast = ()=>{
    const firstSlide = containerSlides.firstElementChild;//pega o primerio elemento
    const lastSlide = containerSlides.lastElementChild;//pega o ultimo elemento
    containerSlides.insertBefore(lastSlide,firstSlide)//adiciona o ultimo elemento antes do primeiro

}

//Pega o ultimo elemento e joga para o começo
btnNext.addEventListener('click', (evt)=>{
  
    const slideSelecionado = verificarSelecionado();
    // console.log(slideSelecionado);
    const nextSlide = slideSelecionado.nextElementSibling;
    slideSelecionado.classList.remove('foco');
    nextSlide.classList.toggle('foco');
    moverSlide();
    animacaoMoverFrente();

});

btnPrev.addEventListener('click', (evt)=>{
    const slideSelecionado = verificarSelecionado();
    // console.log(slideSelecionado);
    const pevSlide = slideSelecionado.previousElementSibling;
    slideSelecionado.classList.remove('foco');
    pevSlide.classList.toggle('foco');
    moverSlideLast();
});
