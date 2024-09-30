export default function animateForm(){
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