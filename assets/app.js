
const menu=document.querySelector('.menu');
const nav=document.querySelector('.navlinks');
if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('.faq-q').forEach(b=>b.addEventListener('click',()=>b.parentElement.classList.toggle('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const y=document.querySelector('[data-year]'); if(y)y.textContent=new Date().getFullYear();

const scopeForm=document.getElementById('scopeForm');
if(scopeForm){
  scopeForm.addEventListener('input',()=>{
    const target=document.getElementById('target').value;
    const auth=document.getElementById('auth').value;
    const roles=document.getElementById('roles').value;
    let title='Website Pentest'; let note='A fixed public-facing assessment with a clearly authorised boundary.';
    if(target==='api' || auth==='yes'){title='Web Application Pentest';note='Best for authenticated applications and their primary API with a defined workflow scope.';}
    if(roles==='multi'){title='Full Application Pentest';note='A larger scope is more credible when multiple roles, admin surfaces or complex business logic matter.';}
    if(target==='unclear'){title='Discovery Sprint';note='Start by mapping the product, attack surface and evidence needs before committing to a larger test.';}
    document.getElementById('resultTitle').textContent=title;
    document.getElementById('resultNote').textContent=note;
  });
}
const contact=document.getElementById('contactForm');
if(contact){
 contact.addEventListener('submit',e=>{
   e.preventDefault();
   const data=new FormData(contact);
   const name=data.get('name').trim(), email=data.get('email').trim(), msg=data.get('message').trim();
   const status=document.getElementById('formStatus');
   if(!name||!email||!msg){status.style.display='block';status.textContent='Please complete name, work email and the scope message.';return;}
   const subject=encodeURIComponent('Security assessment enquiry — '+(data.get('company')||name));
   const body=encodeURIComponent(`Name: ${name}\nWork email: ${email}\nCompany: ${data.get('company')||'-'}\nWebsite: ${data.get('website')||'-'}\n\nSituation / scope:\n${msg}`);
   status.style.display='block';status.textContent='Your email client will open with the scope details prepared.';
   window.location.href=`mailto:global@kotav.org?subject=${subject}&body=${body}`;
 });
}
