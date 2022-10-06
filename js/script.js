// burger-menu
let burger = document.querySelector('.menu__burger');
let menuList = document.querySelector('.menu__list')
burger.addEventListener('click', () => {
  burger.classList.toggle('open')
  menuList.classList.toggle('open')  
  document.querySelector('body').classList.toggle('lock') 
})
document.querySelector('.bg-mobile-menu').addEventListener('click', ()=>{
  burger.classList.remove('open')
  menuList.classList.remove('open')  
  document.querySelector('body').classList.remove('lock') 
});

menuList.addEventListener('click', (e)=>{
  if(e.target !== menuList){
    burger.classList.remove('open')
    menuList.classList.remove('open')  
    document.querySelector('body').classList.remove('lock') 
  }
})

const swiper = new Swiper('.slider', { 
    slidesPerView: 3,
    spaceBetween: 50, 
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: { 
        320: {
          slidesPerView: 1,  
        }, 
        680: {
          slidesPerView: 2, 
        }, 
        900: {
          slidesPerView: 3, 
        }
      }
  });