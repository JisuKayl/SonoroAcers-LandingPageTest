const wrapper = document.querySelector('.wrapper');
const inLink = document.querySelector('.sIn');
const upLink = document.querySelector('.sUp');
const inBtn = document.querySelector('.bLogin');
const closeIcon = document.querySelector('.closeIcon');

upLink.addEventListener('click', ()=>{
    wrapper.classList.add('link');
});

inLink.addEventListener('click', ()=>{
    wrapper.classList.remove('link');
});

inBtn.addEventListener('click', ()=>{
    wrapper.classList.add('link-inBtn');
});

closeIcon.addEventListener('click', ()=>{
    wrapper.classList.remove('link-inBtn');
});