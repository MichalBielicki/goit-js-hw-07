import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", galleryCardMarkup(galleryItems));

function galleryCardMarkup(img) {
  return img
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                    <a class="gallery__link"
                     href=${original}>
                         <img class="gallery__image"
                          src=${preview}
                          data-source=${original}
                          alt=${description} />
                    </a>
                    </div>`;
    })
    .join("");
}
function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  for (const item of galleryItems) {
    const modal = basicLightbox.create(`<img src=${item.original}>`);
    if (event.target.src === item.preview) {
      modal.show();
    }
    if (modal.visible() === true) {
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          modal.close();
        }
      });
    }
  }
}

createGalleryItems(galleryItems);
gallery.addEventListener("click", selectImage);
