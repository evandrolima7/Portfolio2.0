export default function animateCardsSection(){
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