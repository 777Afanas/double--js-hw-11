!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("8MBJY"),a=o("a2hTj"),s=function(){"use strict";function t(){e(i)(this,t),this.searchQuery="",this.page=1,this.per_page=40}return e(a)(t,[{key:"fetchPhotos",value:function(){var e=new URLSearchParams({key:"39342201-f813eddd1adb93dcbf05db88a",q:this.searchQuery,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:this.per_page,page:this.page}),t="".concat("https://pixabay.com/api","/?").concat(e);return fetch(t).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}}]),t}(),c=o("3vKGz"),u=o("hmCZE"),h=o("h6c0i"),l=(0,c.default)(),f=new s;l.loadMoreBtn.classList.add("is-hidden"),l.searchForm.addEventListener("submit",(function(e){if(e.preventDefault(),l.loadMoreBtn.classList.add("is-hidden"),function(){l.photosContainer.innerHTML=" "}(),f.query=e.currentTarget.elements.searchQuery.value,f.resetPage(),!f.query)return void h.Notify.warning("Sorry, but the search field \n    cannot be left blank, to start searching,\n    please fill it out");f.fetchPhotos().then((function(e){0!=e.hits.length?(console.log(e.totalHits),e.totalHits&&h.Notify.success("Hooray! We found ".concat(e.totalHits," images.")),(0,u.renderHits)(e.hits),l.loadMoreBtn.classList.remove("is-hidden")):h.Notify.failure("Sorry, there are no images matching your \n              search query. Please try again")})).catch((function(e){return console.log(e)}))})),l.loadMoreBtn.addEventListener("click",(function(){f.incrementPage(),f.fetchPhotos().then((function(e){console.log(e),0!=e.hits.length?(0,u.renderHits)(e.hits):h.Notify.info("We're sorry, but you've reached the end of \n         search results.")})).catch((function(e){return console.log(e)}))}))}();
//# sourceMappingURL=task-02.f606e6c3.js.map
