
export default function scrollBotaoSobre(){
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
    
    