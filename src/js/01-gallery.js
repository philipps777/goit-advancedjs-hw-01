import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ original, preview, description }) => ` <li class="galleryItem">
<a class="galleryLink" href="${original}">
  <img class="galleryImage" src="${preview}" alt="${description}" />
</a>
</li>`
  )
  .join(' ');

gallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.galleryLink', {
  captionsData: 'alt',
  captionDelay: 250,
});
