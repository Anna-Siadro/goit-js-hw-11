import{a as u,S as d,i}from"./assets/vendor-BGqwtSVv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",m="56825027-65265643f7aa1f6dd5a6771aa";function p(s){return u.get(f,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(r=>`
        <li class="gallery-item">
          <a href="${r.largeImageURL}">
            <img
              src="${r.webformatURL}"
              alt="${r.tags}"
            />
          </a>

          <div class="info">
            <p><b>Likes</b><br>${r.likes}</p>
            <p><b>Views</b><br>${r.views}</p>
            <p><b>Comments</b><br>${r.comments}</p>
            <p><b>Downloads</b><br>${r.downloads}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",S);function S(s){s.preventDefault();const o=s.currentTarget,r=s.currentTarget.elements["search-text"].value.trim();if(!r){i.error({message:"Please enter a search query!"});return}g(),b(),setTimeout(()=>{p(r).then(n=>{if(n.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(n.hits),o.reset()}).catch(n=>{i.error({message:"Something went wrong. Please try again!"}),console.error(n)}).finally(()=>{L()})},1e3)}
//# sourceMappingURL=index.js.map
