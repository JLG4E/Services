// JLG4E shared script
// To send form submissions without an email app, create a free form at formspree.io or web3forms.com and paste its URL here:
const FORM_ENDPOINT = "";
const toggle=document.getElementById('menuToggle'),nav=document.getElementById('navLinks');
if(toggle&&nav){toggle.addEventListener('click',()=>{const o=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(o));toggle.textContent=o?'\u2715':'\u2630';});}
document.querySelectorAll('.year').forEach(e=>e.textContent=new Date().getFullYear());
if('IntersectionObserver' in window){const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ob.unobserve(e.target);}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>ob.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
const choice=document.getElementById('interest');
function pick(v){if(!choice||!v)return;for(const o of choice.options){if(o.text===v){choice.value=o.value;break;}}}
pick(new URLSearchParams(location.search).get('interest'));
document.querySelectorAll('[data-interest]').forEach(a=>a.addEventListener('click',()=>pick(a.getAttribute('data-interest'))));
const form=document.getElementById('contactForm');
if(form){const note=form.querySelector('.form-note'),btn=form.querySelector('button[type=submit]');
if(FORM_ENDPOINT){btn.textContent='Send message \u2197';note.textContent='Your message is sent securely to JLG4E Services.';}
form.addEventListener('submit',async e=>{e.preventDefault();const f=form.elements;
if(FORM_ENDPOINT){btn.disabled=true;try{const r=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(form)});if(r.ok){form.reset();note.textContent='Thank you! We have received your message and will reply soon.';}else throw 0;}catch(_){note.textContent='Could not send. Please email jlg@jlg4e.com directly.';}btn.disabled=false;return;}
const s=encodeURIComponent('JLG4E Services enquiry: '+f.interest.value);
const b=encodeURIComponent('Hello JLG4E Services,\n\nName: '+f.name.value.trim()+'\nEmail: '+f.email.value.trim()+'\nArea of interest: '+f.interest.value+'\n\nMessage:\n'+f.message.value.trim());
window.location.href='mailto:jlg@jlg4e.com?subject='+s+'&body='+b;});}
