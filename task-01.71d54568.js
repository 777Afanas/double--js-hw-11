function e(){return{searchForm:document.querySelector(".search-form"),photosContainer:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more")}}const t=e();function o(e){const o=e.map((({webformatURL:e,tags:t,likes:o,views:n,comments:s,downloads:r})=>`<div class="photo-card">\n        <img src="${e}" alt="${t}" loading="lazy" />\n       <div class="info">\n        <p class="info-item">\n            <b>Likes: ${o}</b>\n        </p>\n        <p class="info-item">\n            <b>Views: ${n}</b>\n        </p>\n        <p class="info-item">\n            <b>Comments: ${s}</b>\n        </p>\n        <p class="info-item">\n            <b>Downloads: ${r}</b>\n        </p>\n        </div>\n          </div>`)).join("");t.photosContainer.insertAdjacentHTML("beforeend",o)}const n=e(),s=new class{fetchPhotos(){const e=new URLSearchParams({key:"39342201-f813eddd1adb93dcbf05db88a",q:this.searchQuery,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:"40",page:this.page});return fetch(`https://pixabay.com/api/?${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}get query(){return this.searchQuery}set query(e){this.searchQuery=e}incrementPage(){this.page+=1}resetPage(){this.page=1}constructor(){this.searchQuery="",this.page=1,this.per_page="40"}};n.loadMoreBtn.classList.add("is-hidden"),n.searchForm.addEventListener("submit",(function(e){if(e.preventDefault(),n.loadMoreBtn.classList.add("is-hidden"),function(){n.photosContainer.innerHTML=" "}(),s.query=e.currentTarget.elements.searchQuery.value,s.resetPage(),!s.query)return void alert("Pole puste");s.fetchPhotos().then((e=>{console.log(e),0!=e.hits.length?(console.log(e.totalHits),e.totalHits&&alert(`Hooray! We found ${e.totalHits} images.`),o(e.hits),n.loadMoreBtn.classList.remove("is-hidden")):alert("Sorry, there are no images matching your \n              search query. Please try again")})).catch((e=>console.log(e)))})),n.loadMoreBtn.addEventListener("click",(function(){s.incrementPage(),s.fetchPhotos().then((e=>{console.log(e),0!=e.hits.length?o(e.hits):alert("We're sorry, but you've reached the end of \n         search results.")})).catch((e=>console.log(e)))}));
//# sourceMappingURL=task-01.71d54568.js.map
