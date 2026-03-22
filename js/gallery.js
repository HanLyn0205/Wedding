const galleryImages = [
        'img/LOGD4223.JPG',
        'img/LOGD4161.JPG',
        'img/LOGD4437.JPG',
        'img/LOGD4819.JPG',
        'img/LOGD5172.JPG',
        'img/LOGD5382.JPG',
];
// Function to create gallery items
function createGalleryItem(imagePath) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6 col-sm-6 wow fadeInUp';
    
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = imagePath;
    img.className = 'img-fluid';
    img.alt = 'Gallery Image';
    
    galleryItem.appendChild(img);
    col.appendChild(galleryItem);
    
    return col;
}

// Function to load all images
function loadGalleryImages() {
    const galleryContainer = document.getElementById('gallery-images');
    galleryContainer.innerHTML = ''; // Clear existing content
    
    galleryImages.forEach(imagePath => {
        galleryContainer.appendChild(createGalleryItem(imagePath));
    });
}

// Initialize gallery
document.addEventListener('DOMContentLoaded', () => {
    loadGalleryImages();
});

// Function to change the image in the modal
function changeImage(direction) {
    const modalImage = document.getElementById('modalImage');
    const currentSrc = modalImage.src;
    const currentIndex = galleryImages.findIndex(img => img === currentSrc.split('/').pop());
    
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
        newIndex = galleryImages.length - 1;
    } else if (newIndex >= galleryImages.length) {
        newIndex = 0;
    }
    
    modalImage.src = galleryImages[newIndex];
}

// Next and previous buttons functionality
document.getElementById('nextBtn').addEventListener('click', () => {
    changeImage(1);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    changeImage(-1);
});

// Keyboard navigation using left and right arrow keys
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        changeImage(1); // Go to next image
    } else if (e.key === 'ArrowLeft') {
        changeImage(-1); // Go to previous image
    }
});
