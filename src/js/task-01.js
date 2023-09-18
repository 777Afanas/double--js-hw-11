
// import { fetchPhotos } from "./api-service";
import getRefs from "./get-refs";

const refs = getRefs();


let page = 1;
let per_page = 40;
let query;

refs.loadMoreBtn.classList.add('is-hidden');
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoad);

function onSearch(e) {
  e.preventDefault();

  refs.loadMoreBtn.classList.add('is-hidden');
  clearPhotosContainer();

  page = 1;
  query = e.currentTarget.elements.searchQuery.value;

  if (!query) {
    alert(`Pole puste`);
    return;
  }

  fetchPhotos()
    .then(data => {
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

  fetchPhotos()
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

function fetchPhotos() {
  const BASE_URL = 'https://pixabay.com/api';
  const params = new URLSearchParams({
    key: '39342201-f813eddd1adb93dcbf05db88a',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page,
    page,
  });
  const url = `${BASE_URL}/?${params}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderHits(arr) {
  const markup = arr
    .map(item => {
      return `<div class="photo-card">
        <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" />
       <div class="info">
        <p class="info-item">
            <b>Likes: ${item.likes}</b>
        </p>
        <p class="info-item">
            <b>Views: ${item.views}</b>
        </p>
        <p class="info-item">
            <b>Comments: ${item.comments}</b>
        </p>
        <p class="info-item">
            <b>Downloads: ${item.downloads}</b>
        </p>
        </div>
          </div>`;
    })
    .join('');

  refs.photosContainer.insertAdjacentHTML('beforeend', markup);
}

function clearPhotosContainer() {
  refs.photosContainer.innerHTML = ' ';
}
