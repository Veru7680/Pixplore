// Elementos del DOM
const BuscarB = document.getElementById('BuscarB');
const BuscarI = document.getElementById('BuscarI');
const imageResults = document.getElementById('imageResults');
const categoryButtons = document.querySelectorAll('.category-btn');

// Función para buscar imágenes en Unsplash-API
async function BuscarImages(query) {
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=U5u4QJkWIAaqKM8QYu-4h5b1F8D6YGGn8VxTe_4dwn4`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayImages(data.results);
    } catch (error) {
        console.error('Error al obtener las imágenes:', error);
    }
}

// Función para mostrar las imágenes
function displayImages(images) {
    imageResults.innerHTML = ''; // Limpiar los resultados anteriores
    if (images.length > 0) {
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.urls.small;
            imgElement.alt = image.alt_description;
            imgElement.classList.add('image-item');
            imageResults.appendChild(imgElement);
        });
    } else {
        imageResults.innerHTML = '<p>No se encontraron imágenes</p>';
    }
}

// Evento de búsqueda al botón
BuscarB.addEventListener('click', () => {
    const query = BuscarI.value.trim();
    if (query !== '') {
        BuscarImages(query);
    }
});

// Eventos para los botones de categorías
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        BuscarImages(category);
    });
});

// Generador de palabras aleatorias
function generarPalabraAleatoria() {
    const palabras = ['paisaje', 'animales', 'comida', 'dibujos', 'naturaleza', 'tecnología', 'deportes', 'ciudades', 'viajes', 'montañas',
'bosques', 'ríos', 'cielos', 'mares', 'cultura', 'historia', 'arquitectura', 'fotografía', 'arte', 'desiertos',
'playas', 'jardines', 'parques', 'bosques', 'selvas', 'campos', 'insectos', 'mamíferos', 'pájaros', 'peces',
'reptiles', 'anfibios', 'perros', 'gatos', 'caballos', 'vehículos', 'trenes', 'aviones', 'barcos', 'bicicletas',
'robots', 'inteligencia artificial', 'computadoras', 'redes', 'internet', 'aplicaciones', 'programación', 'videojuegos',
'automóviles', 'fútbol', 'baloncesto', 'natación', 'esquí', 'snowboard', 'boxeo', 'ciclismo', 'senderismo', 'tenis',
'golf', 'vela', 'patinaje', 'atletismo', 'escalada', 'maratón', 'ciudad', 'edificios', 'rascacielos', 'carreteras',
'tráfico', 'metro', 'aeropuertos', 'puentes', 'plazas', 'monumentos', 'fuentes', 'plazas', 'mercados', 'ferias',
'teatros', 'conciertos', 'exposiciones', 'pintura', 'escultura', 'cine', 'documentales', 'series', 'paisajes urbanos',
'pueblos', 'aldeas', 'castillos', 'iglesias', 'templos', 'museos', 'acantilados', 'volcanes', 'cascadas', 'lago',
'tormentas', 'clima', 'fauna', 'flora', 'pueblos indígenas'];
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    return palabras[indiceAleatorio];
}

// Mostrar imágenes al cargar la página con una palabra aleatoria
window.addEventListener('DOMContentLoaded', () => {
    const palabraAleatoria = generarPalabraAleatoria();
    BuscarImages(palabraAleatoria); // Buscar imágenes con una palabra aleatoria
});
 