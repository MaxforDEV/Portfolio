const wipe = document.querySelector('.wipe-transition'),
      body = document.querySelector('body'),
      nav = document.querySelector('nav'),
      btnOpen = document.querySelector('.open-menu'),
      btnClose = document.querySelector('.close-menu')
      TLAnim = new TimelineMax(); 

    btnOpen .addEventListener('click', () => {
        nav.classList.add('nav-Open')
    });
    body.addEventListener('click', () => {
        nav.classList.remove('nav-Open')
    }, true);

function delay(n){
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n)
    })
}

barba.init({
    sync: true,

    transitions: [{
    
        async leave() {
            const done = this.async();
    
            TLAnim.to(wipe,{left: '0%', ease: "power2.out", duration: 0.5});

            await delay(1000);
            done();

        },
        enter(){
            
            TLAnim.to(wipe,{left: '100%', ease:"power2.in", duration: 0.5})
            TLAnim.set(wipe,{left: '-100%'})

        }
      }
    ]
  
});