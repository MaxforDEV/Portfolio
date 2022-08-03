const btnOpen = document.querySelector('.open-menu'),
      nav = document.querySelector('nav');

      btnOpen.addEventListener('click', () => {
        nav.classList.add('nav-Open')
    });







/* 
const wipe = document.querySelector('.wipe-transition');
const TLAnim = new TimelineMax();

barba.init({
    sync: true,

    transitions: [{
    
    async leave() {
    
        TLAnim.to(wipe,{left: '0%', ease: "power2.out", duration: 0.5})

      }
      
        
      }
    ]
  
}); */