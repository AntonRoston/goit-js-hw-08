// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const divConteiner = document.querySelector('.gallery');
const cardsMarkup = createGalleryMarkup(galleryItems);

divConteiner.insertAdjacentHTML('beforeend', cardsMarkup);

divConteiner.addEventListener('click', onConteinerClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` 
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
      `;
    })
    .join('');
}

function onConteinerClick(evt) {
  evt.preventDefault();
  const isImg = evt.target.classList.contains('gallery__image');
  console.log(evt.target);
  if (isImg) {
    //   console.log(evt.target.a);
  }

  // console.log(evt.target);
}

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
