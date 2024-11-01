import{a as m,S as d,i as n}from"./assets/vendor-C4-ZuMk8.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="46839543-ea16205625b8d87bc87d9a951",p="https://pixabay.com/api/";async function g(o,a){try{return(await m.get(p,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:40}})).data}catch(r){throw console.error("Помилка при отриманні зображень:",r),r}}function y(o){const{webformatURL:a,largeImageURL:r,tags:s,likes:e,views:t,comments:i,downloads:u}=o;return`
      <a href="${r}" class="gallery__item">
        <img src="${a}" alt="${s}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes</b>${e}
          </p>
          <p class="info-item">
            <b>Views</b>${t}
          </p>
          <p class="info-item">
            <b>Comments</b>${i}
          </p>
          <p class="info-item">
            <b>Downloads</b>${u}
          </p>
        </div>
      </a>
    `}function h(o){const a=document.querySelector(".gallery"),r=o.map(y).join("");a.innerHTML=r}const b=document.querySelector("#search-form");document.querySelector(".gallery");const c=document.querySelector(".loader");let L=new d(".gallery a",{captionsData:"alt",captionDelay:250}),l=1;b.addEventListener("submit",async o=>{o.preventDefault();const a=o.currentTarget.elements.searchQuery.value.trim();if(a===""){n.warning({title:"Warning",message:"Please enter a search query."});return}c.classList.remove("hidden"),l=1;try{const{hits:r,totalHits:s}=await g(a,l);r.length===0?n.info({title:"Information",message:"Sorry, there are no images matching your search query. Please try again!"}):(h(r),L.refresh())}catch{n.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{c.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
