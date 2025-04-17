export default function initAnimaWrite() {
    const text = "Bem vindo(a) ao meu portfólio!";
    const welcomeMessage = document.getElementById("welcomeMessage");
    let index = 0;
    let isDeleting = false;
    let typingSpeed = 150;
  
    function typeWriter() {
      
      if (isDeleting) {
        welcomeMessage.innerHTML = text.substring(0, index - 1);
        index--;
        typingSpeed = 50; // Velocidade mais rápida ao apagar
      } 
      
      else {
        welcomeMessage.innerHTML = text.substring(0, index + 1);
        index++;
        typingSpeed = 150; 
      }
  
      
      if (!isDeleting && index === text.length) {
        isDeleting = true;
        typingSpeed = 1000; 
      } 
      
      else if (isDeleting && index === 0) {
        isDeleting = false; 
        typingSpeed = 150; 
      }
  
      setTimeout(typeWriter, typingSpeed); 
    }
  
    typeWriter();
  }