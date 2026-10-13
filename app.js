const links=[...document.querySelectorAll('.nav-links a')];
const sections=links.map(a=>document.querySelector(a.hash));
let scheduled=false;
function track(){scheduled=false;let current=sections[0];for(const section of sections){if(section.getBoundingClientRect().top<=innerHeight*.35)current=section;}for(const link of links){const active=link.hash==='#'+current.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');}}
addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(track)}},{passive:true});addEventListener('resize',track);track();
const toggle=document.querySelector('#motion-toggle');toggle.addEventListener('click',()=>{const paused=document.body.classList.toggle('animations-paused');toggle.setAttribute('aria-pressed',String(paused));toggle.textContent=paused?'Resume animations':'Pause animations';});
