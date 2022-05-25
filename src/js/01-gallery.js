// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.gallery'),
}
 
const createList = function (elements) {
    return elements.map(el =>    `
          <a class="gallery__item" href="${el.original}">
                <img
                class="gallery__image"
                src="${el.preview}"
                alt="${el.description}"
                />
          </a>
     `,
   ).join('')
  }
 
  
const newMarkUp = createList(galleryItems)
refs.gallery.innerHTML = newMarkUp
 


refs.gallery.addEventListener('click', onImageClick)


let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',    captionDelay: 250, });   
function onImageClick(e) {}

 