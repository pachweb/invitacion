// Preloader
$(window).on('load', function() {
    $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
  });
 // Typewriter Effect
 const text = "Hola, qué gusto saludarte. ¡Únete a nosotros para celebrar la Primera Comunión de Emilio Elizalde Sandoval! Esperamos verte allí para compartir este día tan especial.";
 let i = 0;
 function typeWriter() {
   if (i < text.length) {
     document.getElementById("typewriter").innerHTML += text.charAt(i);
     i++;
     setTimeout(typeWriter, 50);
   }
 }
 // Agregar el cursor intermitente después de 1 segundo
setTimeout(function() {
    document.getElementById("typewriter").insertAdjacentHTML("afterend", '<span class="cursor"></span>');
  }, 1000);
 // Retrasar la animación de máquina de escribir después de 3 segundos
setTimeout(typeWriter, 3600); // 3000 milisegundos = 3 segundos
 
 
  $(document).ready(function() {
    // Agregar clase hover después de 10 segundos
    setTimeout(function() {
      $('.logo').addClass('hover');
      
      // Remover clase hover después de otros 10 segundos
      setTimeout(function() {
        $('.logo').removeClass('hover');
      }, 1000); // 10000 milisegundos = 10 segundos
    }, 17400); // 10000 milisegundos = 10 segundos
  });
  // Obtener el elemento del título
const rotatingSpan = document.querySelector(".rotating");
// Función para cambiar dinámicamente el texto del span
function rotateLetters() {
  if (rotatingSpan.textContent === "O") {
    rotatingSpan.textContent = "A";
  } else {
    rotatingSpan.textContent = "O";
  }
  rotatingSpan.classList.add("flipInX"); // Agregar la clase de animación flipInX
  setTimeout(() => {
    rotatingSpan.classList.remove("flipInX");
  }, 500); // Eliminar clase después de 0.5 segundos
}
// Llamar a la función para rotar las letras cada cierto intervalo
setInterval(rotateLetters, 3300); // Cambiar cada segundo (ajusta el intervalo según sea necesario)

// Animacion para titulo
document.addEventListener('DOMContentLoaded', function() {
  var heading = document.getElementById('animatedHeading');
  heading.classList.add('animate__animated', 'animate__bounceInDown');
});


document.addEventListener('DOMContentLoaded', function() {
  // Obtener el botón
  var boton = document.getElementById("miBoton");

  // Agregar la clase con la animación después de 20 segundos
  setTimeout(function() {
      boton.classList.add("animate__heartBeat");
      boton.style.animationIterationCount = "3"; // Repetir la animación 3 veces

      // Agregar un tiempo de espera entre cada repetición (segundos)
      for (var i = 1; i <= 500; i++) {
          setTimeout(function() {
              boton.style.animationIterationCount = "10000000000"; // Repetir la animación
              boton.style.animationDelay = "10s"; // Establecer el tiempo de espera entre repeticiones
          }, 20000 * i); // Esperar los segundos multiplicados por el número de repetición
      }
  }, 20000); // 20 segundos
});

    // Bloquear el scroll al cargar la página
    document.body.style.overflow = "hidden"

 
    
  





  

  
  
  
  
  
  
