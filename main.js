function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Mostrar u ocultar el botón de scroll to top al hacer scroll
  const btnScrollTop = document.getElementById('btn-scroll-top');
  
  function toggleScrollTopButton() {
    if (window.scrollY > 200) {
      btnScrollTop.style.display = 'block';
    } else {
      btnScrollTop.style.display = 'none';
    }
  }
  
  window.addEventListener('scroll', toggleScrollTopButton);
  