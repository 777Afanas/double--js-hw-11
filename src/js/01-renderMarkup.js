import getRefs from './get-refs';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = getRefs();

export function renderHits(arr) { 

  //  let gallery = new SimpleLightbox('.gallery a', {
  //    captions: true,
  //    captionsData: 'alt',
  //    captionsDelay: 250,
  //  });
  //  gallery.refresh();
  // console.log(gallery); 
  
  const markup = arr
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
      <a class="photo-link" href="${largeImageURL}">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>          
       <div class="info">
        <p class="info-item">
            <b>Likes: ${likes}</b>
        </p>
        <p class="info-item">
            <b>Views: ${views}</b>
        </p>
        <p class="info-item">
            <b>Comments: ${comments}</b>
        </p>
        <p class="info-item">
            <b>Downloads: ${downloads}</b>
        </p>
        </div>
          </div>`;
      }
    )
    .join('');
  
   let gallery = new SimpleLightbox('.gallery a', {
     captions: true,
     captionsData: 'alt',
     captionsDelay: 250,
   });
   gallery.refresh();
   console.log(gallery);    

  refs.photosContainer.insertAdjacentHTML('beforeend', markup);
}
