
export default function scrollBotaoContato(){
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