document.documentElement.classList.add('js');
const header=document.querySelector('[data-header]');const menuButton=document.querySelector('[data-menu-button]');const nav=document.querySelector('[data-nav]');
const updateHeader=()=>header?.classList.toggle('is-scrolled',window.scrollY>20);updateHeader();window.addEventListener('scroll',updateHeader,{passive:true});
menuButton?.addEventListener('click',()=>{const isOpen=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!isOpen));nav?.classList.toggle('is-open',!isOpen)});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menuButton?.setAttribute('aria-expanded','false');nav.classList.remove('is-open')}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav?.classList.contains('is-open')){nav.classList.remove('is-open');menuButton?.setAttribute('aria-expanded','false');menuButton?.focus()}});
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const reveals=document.querySelectorAll('[data-reveal]');
if(reducedMotion||!('IntersectionObserver'in window)){reveals.forEach(item=>item.classList.add('is-visible'))}else{const observer=new IntersectionObserver((entries,activeObserver)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');activeObserver.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});reveals.forEach(item=>observer.observe(item))}
const year=document.querySelector('[data-year]');if(year)year.textContent=String(new Date().getFullYear());
