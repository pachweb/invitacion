// Preloader
$(window).on('load', function() {
    $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
  });

document.addEventListener("DOMContentLoaded", function() {
    // Función para actualizar el contador regresivo
    function updateCountdown() {
        // Fecha objetivo: 25 de mayo de 2024
        var countDownDate = new Date("May 25, 2024 00:00:00").getTime();

        // Calcular la diferencia entre la fecha objetivo y la fecha actual
        var now = new Date().getTime();
        var distance = countDownDate - now;
        
        // Si la cuenta regresiva ha terminado, mostrar un mensaje y detener la actualización
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "¡Llego el día de la Primera Comunión de Emilio!";
            return;
        }

        // Calcular días, horas, minutos y segundos restantes
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Asegurarse de que los valores tengan siempre dos dígitos
        days = (days < 10) ? "0" + days : days;
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        
        // Mostrar el resultado en los elementos correspondientes
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    // Actualizar el contador cada segundo
    updateCountdown(); // Llamar a la función una vez para evitar un retraso inicial
    var x = setInterval(updateCountdown, 1000);

    // Función para cambiar el formato de la cuenta regresiva
    function changeFormat() {
        var countdownContainer = document.getElementById("countdown-container");
        countdownContainer.style.width = "100vw";
        countdownContainer.style.height = "100vh";
        countdownContainer.style.top = "0";
        countdownContainer.style.right = "100vh";
        countdownContainer.style.borderRadius = "0";
        countdownContainer.style.padding = "0px";
        countdownContainer.style.zIndex = "0"; // Asegurar que el contador esté encima de todo
        document.getElementById("countdown").style.fontSize = "3rem";
    }

});

//

document.addEventListener("DOMContentLoaded", function() {
    // Función para actualizar el contador regresivo
    function updateCountdown() {
        // ... (código de actualización del contador regresivo)
    }

    // ... (código para actualizar el contador y cambiar el formato)
    // Bloquear el scroll al cargar la página
    document.body.style.overflow = "hidden"
    // Mostrar modal al cargar la página
    document.getElementById("modal-container").style.display = "flex";

    // Agregar evento de clic al botón de cierre (X)
    document.getElementById("modal-close").addEventListener("click", function() {
        document.getElementById("modal-content").classList.add("modal-closed"); // Aplicar clase para hacer el modal más pequeño
        document.getElementById("modal-container").classList.add("modal-closed"); // Aplicar clase para eliminar el fondo azul con transparencia

        // Eliminar el botón "X"
        var modalCloseButton = document.getElementById("modal-close");
        modalCloseButton.parentNode.removeChild(modalCloseButton);
        // Desbloquear el scroll
        document.body.style.overflow = "auto";
    });
});

//

document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al botón "X"
    var modalCloseButton = document.querySelector(".modal-close");

    // Función para manejar el evento de finalización de la animación
    function onAnimationEnd() {
        modalCloseButton.style.color = ""; // Restablecer el color original
        modalCloseButton.removeEventListener("animationend", onAnimationEnd); // Eliminar el evento de escucha
    }

    // Función para iniciar la animación
    function startAnimation() {
        modalCloseButton.classList.add("animate__heartBeat");
        modalCloseButton.style.color = "#f00"; // Cambiar color a rojo durante la animación
        modalCloseButton.addEventListener("animationend", onAnimationEnd); // Escuchar el evento de finalización de la animación
    }

    // Iniciar la animación después de 15 segundos
    setTimeout(startAnimation, 15000);
    modalCloseButton.style.animationIterationCount = "2"; // Repetir la animación


    // Repetir la animación unas veces más
    for (var i = 1; i <= 500; i++) {
        setTimeout(function() {
            modalCloseButton.classList.remove("animate__heartBeat"); // Eliminar la clase para detener la animación actual
            modalCloseButton.style.animationIterationCount = "4"; // Repetir la animación
            setTimeout(startAnimation, 100); // Agregar la clase nuevamente para iniciar la animación
        }, 15000 * (i + 1)); // Esperar 15 segundos multiplicados por el número de repetición
    }
});

//

//
document.addEventListener('DOMContentLoaded', async () => {
    await customElements.whenDefined('gmpx-store-locator');
    const locator = document.querySelector('gmpx-store-locator');
    locator.configureFromQuickBuilder(CONFIGURATION);
  });

  
  











