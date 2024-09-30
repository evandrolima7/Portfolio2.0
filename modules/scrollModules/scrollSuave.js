export default function scrollSuaveActive(){
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
    