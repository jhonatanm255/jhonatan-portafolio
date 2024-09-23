
const typed = new Typed('.typed', {
	strings: [
		'<i class="mascota">Software Developer</i>',
		'<i class="mascota">Web Frontend</i>',
		'<i class="mascota">Design UI | UX</i>',
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

	// MODAL
	function openModal(project) {
		const modal = document.getElementById('modal');
		const modalTitle = document.getElementById('modal-title');
		const modalDescription = document.getElementById('modal-description');
		const modalImage = document.getElementById('modal-image');
		const modalButton = document.getElementById('btn-review');
		
		let projectURL;

		if (project === 'app') {
			modalTitle.style.color = 'var(--blue-bg)';
			modalTitle.style.marginBottom = '15px';
			modalTitle.textContent = 'Condominium Control';
			modalDescription.style.color = 'var(--text)';
			modalDescription.textContent = 'This application was developed to optimize and organize the data of the residents of a condominium. Initially, its focus was limited to a single condominium, but it expanded to be a generalizable tool for multiple condominiums. Its main functionalities include: a cloud database, user authentication through email and Google, CRUD operations with resident and condominium data, and data migration by reading QR codes. Currently, I am working on a new functionality that will allow the export of data through a numerical code, avoiding the need to have both devices nearby, as occurs with QR codes. The application uses HTML, CSS and JavaScript for the frontend, Firebase for the backend and version control with Git.';
			modalImage.src = '../img/app\ resident.png';
			projectURL = 'https://jhonatanm255.github.io/App-Nunoa/#';

		} else if (project === 'dashboard') {
			modalTitle.style.color = 'var(--blue-bg)';
			modalTitle.style.marginBottom = '15px';
			modalTitle.textContent = 'Dashboard Project';
			modalDescription.style.color = 'var(--text)';
			modalDescription.textContent = 'This dashboard was initially created as a practice for positioning elements with CSS. Later, interactive features were added using JavaScript, such as dark mode and a TradingView widget that shows the shares of relevant companies in the market. It was also integrated with the Binance API through WebSocket to display the price and volume of the most important cryptocurrencies in real time. In addition, the API of the "miindicador.cl" site was implemented to obtain key economic data from Chile, such as the value of the dollar, euro, UF, UTM, and IMACEC.';
			modalImage.src = '../img/dashboard.png';
			projectURL = 'https://jhonatanm255.github.io/dashboard/';

		} else if (project === 'samel') {
			modalTitle.style.color = 'var(--blue-bg)';
			modalTitle.style.marginBottom = '15px';
			modalTitle.textContent = 'Samel Castillo';
			modalDescription.style.color = 'var(--text)';
			modalDescription.textContent = 'This website was designed for Samel Castillo, a graphic artist and tattoo artist who was looking to display his work digitally to reach more clients. The site, which has a dark mode design, includes sections about his career, his portfolio of work, an image gallery, and a contact form for scheduling appointments. In addition, it has a testimonials section where customers can leave comments about their experience. An administration panel was also developed for the artist to manage their content, including the option to upload or delete images from the gallery and moderate comments.';
			modalImage.src = '../img/samel.png';
			projectURL = 'https://jhonatanm255.github.io/samel/';

		} else if (project === 'mareo') {
			modalTitle.style.color = 'var(--blue-bg)';
			modalTitle.style.marginBottom = '15px';
			modalTitle.textContent = 'Mareo Music';
			modalDescription.style.color = 'var(--text)';
			modalDescription.textContent = 'This website was designed for the musical group Mareo, recognized for its fresh and elegant style. The site highlights both the band and its individual members, with sections dedicated to their music, information about the band, live performances, and a contact page. It includes songs, new releases, upcoming performances, links to social networks, and a form to contact your manager directly. The site was developed with HTML, CSS, and JavaScript, using the Scroll Reveal library to add animations that make the content more dynamic.';
			modalImage.src = '../img/mareo.png';
			projectURL = 'https://jhonatanm255.github.io/Mareo-Music/'; 
		}
		
		// Configurar el URL del botón
		modalButton.onclick = function() {
			window.open(projectURL, '_blank');
		};
		
		modal.style.display = 'flex';
	}

    // Función para cerrar el modal
    function closeModal() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    }

	// Asegúrate de que el DOM esté cargado antes de agregar el event listener
	document.addEventListener("DOMContentLoaded", function() {
		const downloadCv = document.getElementById('downloadCv');
		
		// Verifica si el botón existe en el DOM
		if (downloadCv) {
			downloadCv.addEventListener('click', openPDF);
		}
	});
	
	// Función para abrir el PDF en una nueva ventana
	function openPDF() {
		// Ruta al archivo PDF en tu proyecto
		const pdfPath = '/cv/jhonatanHarry.pdf';
		
		// Abrir el PDF en una nueva pestaña
		window.open(pdfPath, '_blank');
	}

// COPY EMAIL 
function copyEmail(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado

    // Elige el correo que deseas copiar
    const email = 'jhonm21@gmail.com'; // Usa una cadena en lugar de un arreglo
    
    // Crea un elemento temporal para copiar el texto
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = email; // Asigna el correo como cadena
    tempInput.select();
    document.execCommand("copy"); // Copia el correo al portapapeles
    document.body.removeChild(tempInput); // Elimina el input temporal

    // Muestra un mensaje de confirmación
    const message = document.getElementById("msj-copy");
    message.style.display = "inline"; // Muestra el mensaje

    // Oculta el mensaje después de 3 segundos
    setTimeout(() => {
        message.style.display = "none";
    }, 3000);
}

// FUNCION DEL MENU HAMBURGUESA
const btnBurger = document.getElementById('btn-burger');
btnBurger.addEventListener('click', () => {
  const menuList = document.querySelector('.menu');
  menuList.classList.toggle('active')
});

