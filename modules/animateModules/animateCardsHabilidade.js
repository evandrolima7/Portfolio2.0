export default function animateCardsHabilidades(){
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
