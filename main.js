function scrollSuaveActive(){
const linksInternos = document.querySelectorAll('.js-menu a');

function scrollSuave(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);       
    const topo = section.offsetTop;
    window.scrollTo({
        top: topo,
        behavior:'smooth',
    })
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollSuave)
})
};

scrollSuaveActive();

function scrollBotaoSobre(){
const botao = document.querySelector('.botaoSobre');

function scrollSobre(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
        top: topo,
        behavior:'smooth',
    })
}

botao.addEventListener('click', scrollSobre);
}

scrollBotaoSobre();


function scrollBotaoContato(){
const botaoContato = document.querySelector('.js-btn-contato');

function scrollContato(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
        top:topo,
        behavior:'smooth'
    })
}

botaoContato.addEventListener('click', scrollContato);
}

scrollBotaoContato();

function animationScrollSection(){
    const sections = document.querySelectorAll('.js-scroll');
    const metadeWindow = window.innerHeight * 0.25;

    function scrollSection(){
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - metadeWindow;
            const isSectionVisible = (sectionTop - metadeWindow) < 0 ;
            if(isSectionVisible){
                section.classList.add('ativo');
            } else {
                section.classList.remove('ativo');
            }
        })
    }
    scrollSection();


    window.addEventListener('scroll', scrollSection);
}
animationScrollSection();


function animateCardsSection(){
const cards = document.querySelectorAll('.js-cards');
const metadeCard = window.innerHeight * 0.25;

function scrollCards(){
    cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top - metadeCard;
        const isCardTopVisible = (cardTop - metadeCard) < 0;
        if(isCardTopVisible){
            card.classList.add('ativo')
        }else{
            card.classList.remove('ativo')
        }
    })
}

window.addEventListener('scroll', scrollCards);
}

animateCardsSection();

function animateBtnContato(){
const botaoContato = document.querySelector('.js-btn-contato');
const metadeBtn = window.innerHeight * 0.25;

function animateBtn(){
    const btnTopo = botaoContato.getBoundingClientRect().top - metadeBtn;
    const isBotaoContatoVisible = (btnTopo - metadeBtn) < 0;
    if(isBotaoContatoVisible){
        botaoContato.classList.add('ativo')
    }else{
        botaoContato.classList.remove('ativo')
    }
}

window.addEventListener('scroll', animateBtn);
}

animateBtnContato();


function animateCardsHabilidades(){
    const cardsHabilidade = document.querySelectorAll('.js-card-habilidade');
    const metadeCard = window.innerHeight * 0.25;
    
    function scrollCardsHabilidades(){
        cardsHabilidade.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top - metadeCard;
            const isCardTopVisible = (cardTop - metadeCard) < 0;
            if(isCardTopVisible){
                card.classList.add('ativo')
            }else{
                card.classList.remove('ativo')
            }
        })
    }
    
    window.addEventListener('scroll', scrollCardsHabilidades);
    }
    
    animateCardsHabilidades();


function animateForm(){
const formulario = document.querySelector('.js-formulario');
const metadeForm = window.innerHeight * 0.15;

function animateForm(){
    const formularioTopo = formulario.getBoundingClientRect().top - metadeForm;
    const isFormularioVisible = (formularioTopo - metadeForm) < 0;
    if(isFormularioVisible){
        formulario.classList.add('ativo')
    }else{
        formulario.classList.remove('ativo')
    }
}

window.addEventListener('scroll', animateForm);
}

animateForm();