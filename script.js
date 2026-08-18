// Script de interações do site Bueno3D

document.addEventListener('DOMContentLoaded', () => {
  console.log('Bueno3D Web - Carregado com sucesso!');

  // Rastreamento simples de cliques no botão de orçamento (para analytics futuro)
  const whatsappButtons = document.querySelectorAll('.btn-whatsapp, .btn-primary');

  whatsappButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      // Exemplo de registro ou ação adicional quando o usuário clica no WhatsApp
      console.log('Cliente redirecionado para o WhatsApp de orçamento.');
    });
  });

  // Animação suave adicional ao rolar a página
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Aplica efeito suave nos cards do portfólio ao rolar a tela
  const cards = document.querySelectorAll('.portfolio-card, .feature-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.4s ease-out';
    observer.observe(card);
  });
});