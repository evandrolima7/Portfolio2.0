export default function animateBtnContato(){
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
    