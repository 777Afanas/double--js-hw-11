export class FetchApiService {
     constructor() {
         this.searchQuery = '';
         this.page = 1;
         this.per_page = '40';
        }

    fetchPhotos() {        
        console.log(this);
        const BASE_URL = 'https://pixabay.com/api';

        const params = new URLSearchParams({
            key: '39342201-f813eddd1adb93dcbf05db88a',
            q: this.searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: '40',
            page: this.page,             
        });
        const url = `${BASE_URL}/?${params}`;
        console.log(url);
        return fetch(url).then(response => {             
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();             
        });         
    }

    get query() {
        return this.searchQuery;         
    }

    set query(newQuery) {
        this.searchQuery = newQuery;         
    }

    incrementPage() {
        this.page += 1; 
    }
 
    resetPage() {
        this.page = 1; 
    }    
}

