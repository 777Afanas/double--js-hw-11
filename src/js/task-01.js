
import { FetchApiService }  from "./01-api-service";
import getRefs from "./get-refs";
import { renderHits } from "./01-renderMarkup"; 
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = getRefs(); 
const fetchApiService = new FetchApiService(); 

refs.loadMoreBtn.classList.add('is-hidden');
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoad);  

function onSearch(e) {
  e.preventDefault();

  refs.loadMoreBtn.classList.add('is-hidden');
  clearPhotosContainer();   
  fetchApiService.query = e.currentTarget.elements.searchQuery.value;
  fetchApiService.resetPage();
 
  if (!fetchApiService.query) {
    alert(`Pole puste`);
    return;
  }

  fetchApiService.fetchPhotos()
    .then(data => {       
        if (data.hits.length == 0) {
        alert(`Sorry, there are no images matching your 
              search query. Please try again`);
        return;
      } 
      console.log(data.totalHits);
       if (data.totalHits) {
        alert(`Hooray! We found ${data.totalHits} images.`);
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

function onLoad() {   
  fetchApiService.incrementPage();   
  fetchApiService.fetchPhotos()
    .then(data => { 
      console.log(data);     
      if (data.hits.length == 0) {
        alert(`We're sorry, but you've reached the end of 
         search results.`);
        return;
      } 
      renderHits(data.hits);
    })
    .catch(error => console.log(error));
}

function clearPhotosContainer() {
  refs.photosContainer.innerHTML = ' ';
}
