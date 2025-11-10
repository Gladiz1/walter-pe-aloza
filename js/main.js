// ==================== GALERÍA DINÁMICA ==================== //

// Configura las carpetas y fotos de cada categoría
const galleryImages = {
  'aniversario': [
    'img/galeria/aniversario/foto1.jpeg',
    'img/galeria/aniversario/foto2.jpeg',
    'img/galeria/aniversario/foto3.jpeg'
  ],
  'marcha-paz': [
    'img/galeria/marcha-paz/marcha1.jpg',
    'img/galeria/marcha-paz/marcha2.jpg',
    'img/galeria/marcha-paz/marcha3.jpg'
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
