// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryItemsRef = galleryItems
  .map(
    ({ original, description }) => `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${original} alt=${description}/>
</a>`
  )
  .join('');

const galleryRef = document.querySelector('.gallery');
('');
galleryRef.insertAdjacentHTML('afterbegin', galleryItemsRef);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
