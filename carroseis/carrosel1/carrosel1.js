const prev = document.getElementById('prev');//Volta o slide anterior
const next = document.getElementById('next');//Anavça um slide
const slides = [...document.querySelectorAll('.card')];//Pega o dado dos slides
const marcador = [...document.querySelectorAll('.bola')];//Pega os marcadores dos slides
let indexAtivo  = 0;//Indentifica qual e o slide em que estamos

const descobrirIndex = slides.map((el,index)=>{//Descobre em qual slide estamos
    if(el.classList.contains('active')){
        indexAtivo = index;//Adiciona o index do slide atual na variável
    }
})

const nextSlide = ()=>{
    const avancarIndex = indexAtivo + 1;//Cria uma variavel que guarda o valor do proximo index
    if(slides[avancarIndex]){//Altera o valor do proximo slide
        slides[indexAtivo].classList.remove('active')//Remove a ativação do slide anterior
        slides[avancarIndex].classList.add('active');//Adiciona a classe ativado no atual
        indexAtivo = avancarIndex;//Adiciona o valor do index atual na variável
        atualizarMarc();
    }
    if(avancarIndex >= slides.length){
        slides[indexAtivo].classList.remove('active')//Remove a ativação do slide anterior
        slides[0].classList.add('active');//Adiciona a classe ativado no atual
        indexAtivo = 0;
    }
}

const prevSlide = ()=>{
    const voltarIndex = indexAtivo - 1;//Cria uma variavel que guarda o valor do proximo index
    if(slides[voltarIndex]){//Altera o valor do slide anterior
        slides[indexAtivo].classList.remove('active')//Remove a ativação do slide anterior
        slides[voltarIndex].classList.add('active');//Adiciona a classe ativado no atual
        indexAtivo = voltarIndex;//Adiciona o valor do index atual na variável
        atualizarMarc();
    }
}


const atualizarMarc = ()=>{//Função para atualizar o marcador
    marcador.map((el,index)=>{//Descobre qual sera o marcador atual
        if(indexAtivo == index){//Faz a verificação
            el.classList.add('active');//Atualiza a classe ('active')
        }else{//Se nenhum marcador for o atual
            el.classList.remove('active')//Remove a clase de ativação
        }
    })
}
atualizarMarc();
prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)