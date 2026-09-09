document.querySelectorAll('.swatch').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.swatch').forEach(x=>x.classList.remove('active'));btn.classList.add('active')}));
const header=document.querySelector('.topbar');window.addEventListener('scroll',()=>{header.style.boxShadow=scrollY>20?'0 8px 30px rgba(0,0,0,.06)':'none'});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
