var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("lpPzL"),s=o("hBbqO"),a=o("iQIUW");const i=(0,n.default)(),h=new class{fetchPhotos(){const e=new URLSearchParams({key:"39342201-f813eddd1adb93dcbf05db88a",q:this.searchQuery,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:this.per_page,page:this.page});return fetch(`https://pixabay.com/api/?${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}get query(){return this.searchQuery}set query(e){this.searchQuery=e}incrementPage(){this.page+=1}resetPage(){this.page=1}constructor(){this.searchQuery="",this.page=1,this.per_page=40}};i.loadMoreBtn.classList.add("is-hidden"),i.searchForm.addEventListener("submit",(function(e){if(e.preventDefault(),i.loadMoreBtn.classList.add("is-hidden"),function(){i.photosContainer.innerHTML=" "}(),h.query=e.currentTarget.elements.searchQuery.value,h.resetPage(),!h.query)return void a.Notify.warning("Sorry, but the search field \n    cannot be left blank, to start searching,\n    please fill it out");h.fetchPhotos().then((e=>{0!=e.hits.length?(console.log(e.totalHits),e.totalHits&&a.Notify.success(`Hooray! We found ${e.totalHits} images.`),(0,s.renderHits)(e.hits),i.loadMoreBtn.classList.remove("is-hidden")):a.Notify.failure("Sorry, there are no images matching your \n              search query. Please try again")})).catch((e=>console.log(e)))})),i.loadMoreBtn.addEventListener("click",(function(){h.incrementPage(),h.fetchPhotos().then((e=>{console.log(e),0!=e.hits.length?(0,s.renderHits)(e.hits):a.Notify.info("We're sorry, but you've reached the end of \n         search results.")})).catch((e=>console.log(e)))}));
//# sourceMappingURL=task-01.ee000148.js.map