export default function animationScrollSection(){
    const sections = document.querySelectorAll('.js-scroll');
    const metadeWindow = window.innerHeight * 0.35;

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