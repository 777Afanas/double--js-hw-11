
import { FetchApiService }  from "./01-api-service";
import getRefs from "./get-refs";
import { renderHits } from "./01-renderMarkup"; 

const refs = getRefs();

const fetchApiService = new FetchApiService();
console.log(fetchApiService);
// let page = 1;
// let per_page = 40;
// let query;
// let params;
// let q;

refs.loadMoreBtn.classList.add('is-hidden');
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoad);  


function onSearch(e) {
  e.preventDefault();

  refs.loadMoreBtn.classList.add('is-hidden');
  clearPhotosContainer();
  console.log(e.currentTarget.elements.searchQuery.value);
  fetchApiService.query1 = e.currentTarget.elements.searchQuery.value;
  console.log(fetchApiService);
 
  // if (!fetchApiService.query) {
  //   alert(`Pole puste`);
  //   return;
  // }

  // console.dir(FetchApiService);

  fetchApiService.fetchPhotos()
    .then(data => {
      console.log(data);
      if (data.hits.length == 0) {
        alert(`Sorry, there are no images matching your 
              search query. Please try again`);
        return;
      }

      renderHits(data.hits);
      refs.loadMoreBtn.classList.remove('is-hidden');
    })
    .catch(error => console.log(error));
}

function onLoad() {
  page += 1;

  fetchApiService.fetchPhotos()
    .then(data => {
      console.log(data.totalHits);
      if (page - 1 > data.totalHits / per_page) {
        alert(`We're sorry, but you've reached the end of 
         search results.`);
        return;
      }

      renderHits(data.hits);
    })
    .catch(error => console.log(error));
}


// function fetchPhotos() {
//   const BASE_URL = 'https://pixabay.com/api';
//   const params = new URLSearchParams({
//     key: '39342201-f813eddd1adb93dcbf05db88a',
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page,
//     page,
//   });
//   const url = `${BASE_URL}/?${params}`;

//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

function clearPhotosContainer() {
  refs.photosContainer.innerHTML = ' ';
}
