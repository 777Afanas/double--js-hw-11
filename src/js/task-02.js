
import { FetchApiService }  from "./02-api-service";
import getRefs from "./get-refs";
import { renderHits } from "./01-renderMarkup"; 
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from "notiflix/build/notiflix-notify-aio";


const refs = getRefs(); 
const fetchApiService = new FetchApiService(); 
// console.log(fetchApiService.fetchPhotos());


refs.loadMoreBtn.classList.add('is-hidden');
refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMoreBtn.addEventListener('click', onLoad);  

function onSearch(e) {
  e.preventDefault();

  refs.loadMoreBtn.classList.add('is-hidden');
  clearPhotosContainer();   
  fetchApiService.query = e.currentTarget.elements.searchQuery.value;
  fetchApiService.resetPage();
 
  if (!fetchApiService.query) {     
    Notify.warning(`Sorry, but the search field 
    cannot be left blank, to start searching,
    please fill it out`);
    return;
  }

  // console.log(fetchApiService.fetchPhotos());

  fetchApiService.fetchPhotos()
    .then(data => {       
        if (data.hits.length == 0) { 
        Notify.failure(`Sorry, there are no images matching your 
              search query. Please try again`);  
        return;
      } 
      // console.log(data.totalHits);
       if (data.totalHits) {         
         Notify.success(`Hooray! We found ${data.totalHits} images.`);
        // return;
      } 
             
      renderHits(data.hits);
    //  let gallery = new SimpleLightbox('.gallery a', {
    //    captions: true,
    //    captionsData: 'alt',
    //    captionsDelay: 250,
    //  });
    //  gallery.refresh();
    //  console.log(gallery);

      refs.loadMoreBtn.classList.remove('is-hidden');
    })
    .catch(error => console.log(error));

}


// function onLoad() {
//   fetchApiService1.incrementPage();
//   fetchApiService1.fetchPhotos()
//     .then(data => {
//       console.log(data);
//       if (data.hits.length == 0) {
//         Notify.info(`We're sorry, but you've reached the end of
//          search results.`);
//         return;
//       }
//       renderHits(data.hits);
//     })
//     .catch(error => console.log(error));
// }

function clearPhotosContainer() {
    refs.photosContainer.innerHTML = ' ';
}

