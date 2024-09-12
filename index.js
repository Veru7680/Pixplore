
const BuscarB = document.getElementById('BuscarB');
const BuscarI = document.getElementById('BuscarI');
const imageResults = document.getElementById('imageResults');

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

// evento de búsqueda al botón
BuscarB.addEventListener('click', () => {
    const query = BuscarI.value.trim();
    if (query !== '') {
        BuscarImages(query);
    }
});
