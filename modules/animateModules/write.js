export default function initAnimaWrite() {
    const text = "Bem vindo(a) ao meu portfólio!";
    const welcomeMessage = document.getElementById("welcomeMessage");
    let index = 0;
    let isDeleting = false;
    let typingSpeed = 150; // Velocidade de digitação inicial
  
    function typeWriter() {
      // Se estiver apagando, reduz o tamanho da string mostrada
      if (isDeleting) {
        welcomeMessage.innerHTML = text.substring(0, index - 1);
        index--;
        typingSpeed = 50; // Velocidade mais rápida ao apagar
      } 
      // Se estiver digitando, aumenta o tamanho da string mostrada
      else {
        welcomeMessage.innerHTML = text.substring(0, index + 1);
        index++;
        typingSpeed = 150; // Velocidade normal ao digitar
      }
  
      // Quando o texto completo foi digitado
      if (!isDeleting && index === text.length) {
        isDeleting = true; // Começa a apagar
        typingSpeed = 1000; // Pausa por 1 segundo antes de começar a apagar
      } 
      // Quando o texto foi completamente apagado
      else if (isDeleting && index === 0) {
        isDeleting = false; // Volta a digitar
        typingSpeed = 150; // Reinicia a velocidade de digitação
      }
  
      setTimeout(typeWriter, typingSpeed); // Controla o intervalo entre os caracteres
    }
  
    typeWriter(); // Inicia o efeito de digitação
  }