const products=[['MacBook Pro 13 اینچ اپل مدل M1','💻','۳۸,۹۰۰,۰۰۰'],['لپ تاپ ایسوس مدل ROG Strix G15','💻','۵۶,۴۰۰,۰۰۰'],['لپ تاپ گیمینگ ROG Zephyrus G14','💻','۴۸,۷۵۰,۰۰۰'],['لپ تاپ ایسوس مدل VivoBook X150','💻','۲۷,۹۹۰,۰۰۰']];
const phones=[['گوشی موبایل شیائومی Redmi Note 8','📱','۶,۴۹۰,۰۰۰'],['گوشی شیائومی Poco M4 Pro 5G','📱','۹,۸۹۰,۰۰۰'],['گوشی شیائومی Mi 10T 5G','📱','۱۲,۷۵۰,۰۰۰'],['گوشی موبایل Poco F3','📱','۱۵,۴۹۰,۰۰۰']];
const clothes=[['تیشرت زنانه نخی مدل ساده','👕','۴۹۰,۰۰۰'],['پیراهن مردانه آبی مدل کلاسیک','👔','۸۹۰,۰۰۰'],['پیراهن چهارخانه مردانه','👕','۱,۱۹۰,۰۰۰'],['کفش اسپرت روزمره','👟','۱,۵۹۰,۰۰۰']];
function card(p,i){return `<article class="product"><span class="badge">${i%2?'پیشنهاد ویژه':'فروش ویژه'}</span><div class="pimg">${p[1]}</div><h3>${p[0]}</h3><div class="rating">★★★★★ <span>(${12+i*7})</span></div><div class="price">${p[2]} تومان</div></article>`}
const productSections=document.querySelectorAll('.products');
if(productSections[0])productSections[0].querySelector('.product-grid').innerHTML=products.map(card).join('');
if(productSections[1])productSections[1].querySelector('.product-grid').innerHTML=phones.map(card).join('');
if(productSections[2])productSections[2].querySelector('.product-grid').innerHTML=clothes.map(card).join('');
const p2=[...phones].reverse().slice(0,3);document.querySelectorAll('.second .product-grid').forEach(el=>el.innerHTML=p2.map(card).join(''));
window.addEventListener('scroll',()=>document.querySelector('header').classList.toggle('scrolled',scrollY>20));
document.querySelectorAll('.faq details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('.faq details').forEach(x=>{if(x!==d)x.open=false})}));