'use strict';
const CATS={
 pants:{ar:'بنطلون',e:'👖',d:'قصّات مظبوطة من الشارع للسهرة.',h:220},
 tshirts:{ar:'تيشيرتات',e:'👕',d:'قطن تقيل وطبعات هادية.',h:30},
 caps:{ar:'كابات',e:'🧢',d:'التفصيلة اللي بتكمّل اللوك.',h:260},
 coats:{ar:'كوتات',e:'🧥',d:'طبقة واحدة بتغيّر الشكل كله.',h:15},
 shoes:{ar:'أحذية',e:'👟',d:'مريحة طول اليوم، ومميزة.',h:200},
 accessories:{ar:'إكسسوارات',e:'👜',d:'قطع صغيرة، أثر كبير.',h:45}
};
// image: leave "" to use the generated artwork, or paste any image URL.
const products=[
 {name:'بنطلون كارجو أسود',category:'pants',price:1450,image:'',description:'جيوب واسعة وقصة مريحة.'},
 {name:'جينز واسع ديني',category:'pants',price:1600,image:'',description:'دنيم تقيل بغسلة داكنة.'},
 {name:'بنطلون تشينو رملي',category:'pants',price:1300,image:'',description:'قصة مستقيمة للمواعيد المهمة.'},
 {name:'بنطلون جوجر رمادي',category:'pants',price:1100,image:'',description:'قطن ناعم بخصر مطاطي.'},
 {name:'بنطلون قماش أوف وايت',category:'pants',price:1750,image:'',description:'ثنية مكوية وقماش خفيف.'},
 {name:'جينز سكيني أزرق',category:'pants',price:1250,image:'',description:'ستريتش مريح مع قصة ضيقة.'},
 {name:'تيشيرت أوفرسايز أبيض',category:'tshirts',price:650,image:'',description:'قطن ١٨٠ جرام بكتف نازل.'},
 {name:'تيشيرت أسود بطبعة ظهر',category:'tshirts',price:750,image:'',description:'طبعة سيلك سكرين هادية.'},
 {name:'تيشيرت بولو كريمي',category:'tshirts',price:850,image:'',description:'ياقة كلاسيك بلمسة عصرية.'},
 {name:'تيشيرت كحلي بوكس',category:'tshirts',price:700,image:'',description:'قصة مربعة ورقبة سميكة.'},
 {name:'تيشيرت مقلّم',category:'tshirts',price:720,image:'',description:'خطوط رفيعة بروح بحرية.'},
 {name:'تيشيرت رمادي واش',category:'tshirts',price:680,image:'',description:'غسلة فينتدج ناعمة.'},
 {name:'كاب أسود سادة',category:'caps',price:450,image:'',description:'قطن مع إغلاق قابل للضبط.'},
 {name:'كاب أزرق مطرّز',category:'caps',price:520,image:'',description:'تطريز بسيط على الأمام.'},
 {name:'كاب بيج كورديروي',category:'caps',price:560,image:'',description:'قماش مضلّع بحس قديم.'},
 {name:'بيني صوف رمادي',category:'caps',price:380,image:'',description:'دافئ وخفيف للشتا.'},
 {name:'كوت صوف طويل',category:'coats',price:4200,image:'',description:'صوف مخلوط بقصة أنيقة.'},
 {name:'جاكيت بومبر أسود',category:'coats',price:2900,image:'',description:'بطانة خفيفة ورِباط مرن.'},
 {name:'جاكيت دنيم أوفرسايز',category:'coats',price:2300,image:'',description:'دنيم كلاسيك واسع.'},
 {name:'ترنش بيج',category:'coats',price:3800,image:'',description:'مقاوم للمطر وقصة نضيفة.'},
 {name:'سنيكر أبيض جلد',category:'shoes',price:2400,image:'',description:'جلد طبيعي ونعل مريح.'},
 {name:'حذاء رانر أسود',category:'shoes',price:2700,image:'',description:'خفيف وبنعل ماصّ للصدمات.'},
 {name:'بوت جلد بني',category:'shoes',price:3300,image:'',description:'تفصيل يدوي وعمر طويل.'},
 {name:'لوفر كحلي',category:'shoes',price:2100,image:'',description:'شيك ومريح لليوم كله.'},
 {name:'شنطة كروس سوداء',category:'accessories',price:950,image:'',description:'مقاومة للماء وتتسع للأساسيات.'},
 {name:'حزام جلد أسود',category:'accessories',price:480,image:'',description:'إبزيم معدني مطفي.'},
 {name:'نضارة شمس مربعة',category:'accessories',price:780,image:'',description:'حماية UV400 بإطار خفيف.'},
 {name:'محفظة جلد صغيرة',category:'accessories',price:520,image:'',description:'تتسع لـ٨ كروت.'}
].map((p,i)=>({id:i+1,...p}));

const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const money=n=>n.toLocaleString('ar-EG')+' ج.م';
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch{return d}};
const save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
let cart=load('abbar-cart',{}),favs=load('abbar-favs',[]);

// generated artwork (used when image is empty or fails to load)
function art(p){const h=CATS[p.category].h,e=CATS[p.category].e;
 const s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="hsl(${h},18%,${22+p.id%3*8}%)"/><stop offset="1" stop-color="hsl(${h},30%,${10+p.id%4*5}%)"/></linearGradient></defs><rect width="400" height="500" fill="url(#g)"/><path d="M0 500 220 160 400 500z" fill="hsl(${h},35%,45%)" opacity=".18"/><text x="200" y="300" font-size="150" text-anchor="middle">${e}</text></svg>`;
 return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(s)}
const src=p=>p.image||art(p);

function card(p){
 const f=favs.includes(p.id);
 return `<article class="card"><figure><img src="${src(p)}" alt="${p.name} - ${CATS[p.category].ar}" loading="lazy" onerror="this.onerror=null;this.src=art(products[${p.id-1}])"></figure>
 <button class="fav" data-fav="${p.id}" aria-pressed="${f}" aria-label="المفضلة: ${p.name}">${f?'♥':'♡'}</button>
 <div class="info"><small>${CATS[p.category].ar}</small><h3>${p.name}</h3><p>${p.description}</p>
 <div class="pr"><b>${money(p.price)}</b><button class="add" data-add="${p.id}">أضف للسلة</button></div></div></article>`}
const fill=(el,list)=>{el.innerHTML=list.length?list.map(card).join(''):'<p class="empty">مفيش نتائج. جرّب كلمة تانية.</p>'};

function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('on'),2000)}

// cart
function renderCart(){
 const ids=Object.keys(cart).filter(id=>products[id-1]);let total=0,n=0;
 $('#cartItems').innerHTML=ids.length?ids.map(id=>{const p=products[id-1],q=cart[id];total+=p.price*q;n+=q;
  return `<div class="ci"><img src="${src(p)}" alt="${p.name}" onerror="this.onerror=null;this.src=art(products[${p.id-1}])"><div><h4>${p.name}</h4><small>${money(p.price)}</small><div class="qty"><button data-q="${id}" data-d="-1" aria-label="تقليل">−</button><span>${q}</span><button data-q="${id}" data-d="1" aria-label="زيادة">+</button></div></div><button data-rm="${id}" aria-label="حذف ${p.name}">✕</button></div>`}).join(''):'<p class="empty">السلة فاضية. ابدأ بقطعة تعجبك.</p>';
 $('#total').textContent=money(total);
 const c=$('#cartCount');c.textContent=n;c.classList.toggle('on',n>0);c.classList.remove('bump');void c.offsetWidth;if(n)c.classList.add('bump');
 save('abbar-cart',cart)}
function cartOpen(o){$('#drawer').classList.toggle('open',o);$('#drawer').setAttribute('aria-hidden',!o);$('#scrim').classList.toggle('on',o);if(o)$('#closeCart').focus()}

// routing
let current='';
function go(){
 const r=(location.hash.replace('#/','')||'home');const page=CATS[r]?r:'home';
 if(page===current)return;current=page;
 const app=$('#app');app.classList.add('leaving');
 setTimeout(()=>{
  $('#home').hidden=page!=='home';$('#cat').hidden=page==='home';
  if(page!=='home'){const c=CATS[page];$('#catEmoji').textContent=c.e;$('#catTitle').textContent=c.ar;$('#catDesc').textContent=c.d;$('#sort').value='def';fav.on=false;$('#favOnly').setAttribute('aria-pressed','false');drawCat()}
  $$('[data-nav]').forEach(a=>{const on=a.dataset.nav===page;a.classList.toggle('on',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});
  closeMenu();window.scrollTo(0,0);app.classList.remove('leaving');observe();onScroll()},250)}
const fav={on:false};
function drawCat(){
 let l=products.filter(p=>p.category===current);
 if(fav.on)l=l.filter(p=>favs.includes(p.id));
 const s=$('#sort').value;if(s==='lo')l.sort((a,b)=>a.price-b.price);if(s==='hi')l.sort((a,b)=>b.price-a.price);
 fill($('#catGridProducts'),l)}

// menu
function setMenu(o){$('#menu').classList.toggle('open',o);$('#nav').classList.toggle('open',o);$('#scrim').classList.toggle('on',o);$('#burger').setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''}
function closeMenu(){setMenu(false)}
$('#burger').onclick=()=>setMenu(!$('#menu').classList.contains('open'));

// search
function searchOpen(o){$('#searchBox').hidden=!o;if(o){$('#q').value='';$('#results').innerHTML='';$('#q').focus()}}
$('#searchBtn').onclick=()=>searchOpen(true);$('#closeSearch').onclick=()=>searchOpen(false);
$('#q').oninput=e=>{const v=e.target.value.trim();if(!v){$('#results').innerHTML='';return}
 fill($('#results'),products.filter(p=>(p.name+p.description+CATS[p.category].ar).includes(v)))};
$('#searchBox').addEventListener('click',e=>{if(e.target.closest('a'))searchOpen(false)});

// global clicks
document.addEventListener('click',e=>{
 const t=e.target.closest('button,a');if(!t)return;
 if(t.dataset.add){cart[t.dataset.add]=(cart[t.dataset.add]||0)+1;renderCart();toast('اتضافت للسلة ✓')}
 else if(t.dataset.fav){const id=+t.dataset.fav;favs=favs.includes(id)?favs.filter(x=>x!==id):[...favs,id];save('abbar-favs',favs);
  $$(`[data-fav="${id}"]`).forEach(b=>{const on=favs.includes(id);b.setAttribute('aria-pressed',on);b.textContent=on?'♥':'♡'});if(fav.on&&current!=='home')drawCat()}
 else if(t.dataset.q){const id=t.dataset.q;cart[id]+=+t.dataset.d;if(cart[id]<=0)delete cart[id];renderCart()}
 else if(t.dataset.rm){delete cart[t.dataset.rm];renderCart()}
});
$('#cartBtn').onclick=()=>cartOpen(true);$('#closeCart').onclick=$('#scrim').onclick=()=>{cartOpen(false);closeMenu()};
$('#clear').onclick=()=>{cart={};renderCart()};
$('#checkout').onclick=()=>{if(!Object.keys(cart).length)return toast('السلة فاضية');cart={};renderCart();cartOpen(false);toast('تم استلام طلبك (تجريبي) 🎉')};
$('#sort').onchange=drawCat;
$('#favOnly').onclick=e=>{fav.on=!fav.on;e.currentTarget.setAttribute('aria-pressed',fav.on);drawCat()};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){searchOpen(false);cartOpen(false);closeMenu()}});
window.addEventListener('hashchange',go);

// scroll
let tick=false;
function onScroll(){
 $('#nav').classList.toggle('solid',scrollY>60||current!=='home');
 const h=innerHeight,p=Math.min(scrollY/h,1);$('#hero').style.setProperty('--p',p.toFixed(3));
 const s=$('.statement');if(s){const r=s.getBoundingClientRect();s.classList.toggle('dark',r.top<h*.4&&r.bottom>h*.4)}
 tick=false}
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});
const io='IntersectionObserver'in window?new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15}):null;
function observe(){$$('.rv:not(.in)').forEach(el=>io?io.observe(el):el.classList.add('in'))}

// init
$('#catGrid').innerHTML=Object.entries(CATS).map(([k,c])=>`<a class="cc rv" href="#/${k}"><span class="em" aria-hidden="true">${c.e}</span><span><b>${c.ar}</b><br><small>${products.filter(p=>p.category===k).length} قطع</small></span></a>`).join('');
fill($('#featured'),[1,7,17,21,25,8,2,13].map(i=>products[i-1]));
fill($('#trending'),[18,22,9,3,14,26,10].map(i=>products[i-1]));
renderCart();go();onScroll();
