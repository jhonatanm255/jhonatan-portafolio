

    const form = document.querySelector('.form-contact form');
    const btnSend = document.getElementById('btn-send');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que el formulario se envíe de inmediato

        // Cambia el texto del botón a "Enviando..."
        btnSend.textContent = "Sending...";
        
        // Envía el formulario
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
        })
        .then(response => {
            if (response.ok) {
                alert("¡Mensaje enviado con éxito!");
                form.reset(); // Reinicia el formulario
            } else {
                alert("Error al enviar el mensaje. Inténtalo de nuevo.");
            }
        })
        .catch(error => {
            alert("Error: " + error);
        })
        .finally(() => {
            btnSend.textContent = "Send Message"; // Restablece el texto del botón
        });
    });

