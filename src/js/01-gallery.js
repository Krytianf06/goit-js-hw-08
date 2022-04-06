// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "../../node_modules/simplelightbox";
import "../../node_modules/simplelightbox/dist/simple-lightbox.min.css";

const galleryItemsEl = document.querySelector(".gallery");
galleryItemsEl.insertAdjacentHTML("beforeend",createGalleryCards (galleryItems));

const gallery = new SimpleLightbox('.gallery a', {captionsData:`alt`,captionDelay:250});
gallery.on('show.simplelightbox');

function createGalleryCards (galleryItems) {
    return galleryItems.map(({preview, original, description}) =>{
        return `
        <a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
      </a>
        `;
    }).join('');
}

console.log(galleryItems);