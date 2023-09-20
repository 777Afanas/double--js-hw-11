export class FetchApiService {
     constructor() {
            this.searchQuer = '';
        }

    fetchPhotos() {        
        console.log(this);
        const BASE_URL = 'https://pixabay.com/api';

        const params = new URLSearchParams({
            key: '39342201-f813eddd1adb93dcbf05db88a',
            q: this.searchQuer,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: '40',
            page: '1',
            // per_page,
            // page,
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

    get query1() {
        console.log(this.searchQuer);
        return this.searchQuer;
        
    }
}