// ==================== GALERÍA DINÁMICA ==================== //

// Configura las carpetas y fotos de cada categoría
const galleryImages = {
  'aniversario': [
    'img/galeria/aniversario/foto1.jpeg',
    'img/galeria/aniversario/foto2.jpeg',
    'img/galeria/aniversario/foto3.jpeg',
    'img/galeria/aniversario/foto01.jpeg',
    'img/galeria/aniversario/foto02.jpeg',
    'img/galeria/aniversario/foto03.jpeg',
    'img/galeria/aniversario/foto04.jpeg',
    'img/galeria/aniversario/foto05.jpeg',
    'img/galeria/aniversario/foto06.jpeg',
    'img/galeria/aniversario/foto07.jpeg',
    'img/galeria/aniversario/foto08.jpeg',
    'img/galeria/aniversario/foto09.jpeg',
    'img/galeria/aniversario/foto10.jpeg',
    'img/galeria/aniversario/foto11.jpeg',
    'img/galeria/aniversario/foto12.jpeg',
    'img/galeria/aniversario/foto13.jpeg',
    'img/galeria/aniversario/foto14.jpeg',
    'img/galeria/aniversario/foto15.jpeg',
    'img/galeria/aniversario/foto16.jpeg',
    'img/galeria/aniversario/foto17.jpeg',
    'img/galeria/aniversario/foto18.jpeg',
  ],
  'marcha-paz': [
    'img/galeria/marcha-por-la-paz/foto01.jpeg',
    'img/galeria/marcha-por-la-paz/foto02.jpeg',
    'img/galeria/marcha-por-la-paz/foto03.jpeg',
    'img/galeria/marcha-por-la-paz/foto04.jpg',
    'img/galeria/marcha-por-la-paz/foto05.jpg',
    'img/galeria/marcha-por-la-paz/foto06.jpg',
    'img/galeria/marcha-por-la-paz/foto07.jpg',
    'img/galeria/marcha-por-la-paz/foto08.jpg',
    'img/galeria/marcha-por-la-paz/foto09.jpg',
    'img/galeria/marcha-por-la-paz/foto10.jpg',
    'img/galeria/marcha-por-la-paz/foto11.jpg',
    'img/galeria/marcha-por-la-paz/foto12.jpg',
    'img/galeria/marcha-por-la-paz/foto13.jpg',
    'img/galeria/marcha-por-la-paz/foto14.jpg',
    'img/galeria/marcha-por-la-paz/foto15.jpg',
    'img/galeria/marcha-por-la-paz/foto16.jpg',
    'img/galeria/marcha-por-la-paz/foto17.jpg',
    'img/galeria/marcha-por-la-paz/foto18.jpg',
  ],
    'ajedrez': [
    'img/galeria/ajedrez/foto01.jpeg',
    'img/galeria/ajedrez/foto02.jpeg',
    'img/galeria/ajedrez/foto03.jpeg',
    'img/galeria/ajedrez/foto04.jpeg',
    'img/galeria/ajedrez/foto05.jpeg',
  ],
  'carrera': [
    'img/galeria/carrera/foto01.jpeg',
    'img/galeria/carrera/video01.mp4',
    'img/galeria/carrera/foto03.jpeg',
    'img/galeria/carrera/foto04.jpeg',
    'img/galeria/carrera/foto05.jpeg',
  ]
};

// Selecciona los elementos del DOM
const buttons = document.querySelectorAll('[data-gallery]');
const galleryContainer = document.getElementById('gallery-container');

// Función para mostrar imágenes
function loadGallery(category) {
  const images = galleryImages[category];
  if (!images) return;

  galleryContainer.innerHTML = ''; // Limpia antes de mostrar nuevas fotos

  images.forEach((src, index) => {
    const col = document.createElement('div');
    col.classList.add('col-6', 'col-md-4', 'col-lg-3');

    col.innerHTML = `
      <img src="${src}" 
           class="img-fluid rounded shadow-sm gallery-img" 
           alt="${category} ${index + 1}" 
           data-bs-toggle="modal" 
           data-bs-target="#imageModal" 
           data-bs-img="${src}">
    `;

    galleryContainer.appendChild(col);
  });
}

// Escucha clics en los botones de categoría
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-gallery');
    loadGallery(category);
  });
});

// ==================== MODAL DE IMAGEN ==================== //

// Referencia al modal y a la imagen dentro del modal
const imageModal = document.createElement('div');
imageModal.innerHTML = `
  <div class="modal fade" id="imageModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content bg-transparent border-0">
        <img src="" id="modalImage" class="img-fluid rounded shadow">
      </div>
    </div>
  </div>
`;
document.body.appendChild(imageModal);

// Detecta qué imagen se clickea
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('gallery-img')) {
    const src = e.target.getAttribute('data-bs-img');
    document.getElementById('modalImage').src = src;
  }
});
