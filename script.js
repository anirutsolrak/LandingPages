// Função para controlar o slider de depoimentos
let slideIndex = 0;

function showTestimonials() {
    const testimonials = document.getElementsByClassName("testimonial");
    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > testimonials.length) {slideIndex = 1}    
    testimonials[slideIndex-1].style.display = "block";  
    setTimeout(showTestimonials, 5000); // Trocar de depoimento a cada 5 segundos
}

showTestimonials();

// Adicionar animações suaves ao rolar a página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validar o formulário de contato antes de enviar
document.getElementById("contact-form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        event.preventDefault();
    }
});

// Redirecionar o usuário para uma página de agradecimento após o envio do formulário
document.getElementById("contact-form").addEventListener("submit", function(event) {
    alert("Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso.");
    window.location.href = "thank-you.html"; // Redirecionar para a página de agradecimento
    event.preventDefault();
});