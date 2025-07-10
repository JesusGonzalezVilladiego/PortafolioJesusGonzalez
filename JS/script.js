 const textoTitulo = "Jesús González";
  const textoSubtitulo = "Desarrollador de Software";

  const titulo = document.getElementById("titulo-principal");
  const subtitulo = document.getElementById("subtitulo-principal");

  function escribirTexto(elemento, texto, velocidad, callback) {
    let i = 0;
    const intervalo = setInterval(() => {
      if (i < texto.length) {
        elemento.textContent += texto.charAt(i);
        i++;
      } else {
        clearInterval(intervalo);
        if (callback) callback();
      }
    }, velocidad);
  }

  window.addEventListener("DOMContentLoaded", () => {
    escribirTexto(titulo, textoTitulo, 100, () => {
      subtitulo.classList.add("typewriter-cursor"); // Cursor solo en el h2
      escribirTexto(subtitulo, textoSubtitulo, 80);
    });
  });

   // Animaciones al hacer scroll
        const sections = document.querySelectorAll('section');
        
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            observer.observe(section);
        });
        
        // Navegación suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
