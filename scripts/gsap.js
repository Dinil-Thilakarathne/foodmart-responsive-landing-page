

gsap.timeline()
    .from('.header__logo', {
        x:-100,
        ease: "back",
    })

gsap.timeline()
    .from(".hero .card-1",{
        y:100,
        x:-100,
        opacity:0,
        duration: 1,
        ease: "back",
    }).from(".hero  .card-1 .card__content *", {
        y:100,
        x:-100,
        opacity:0,
        duration: .5,
        stagger: .25,
        ease: "ease",
    }, '-=.75').from(".hero .card-1 .card__image", {
        x:100,
        opacity:0,
        scale: 0,
        ease: "back",
    }, '-=.85')
    .from(".hero .card-2", {
        y:100,
        x:100,
        opacity:0,
        duration: 1,
        ease: "back",
    }, '-=1').from(".hero .card-2 .card__content *", {
        y:100,
        x:-100,
        opacity:0,
        duration: .5,
        stagger: .25,
        ease: "ease",
    }, '-=.75').from(".hero .card-2 .card__image", {
        y: -50,
        x:100,
        opacity:0,
        scale: 0,
        ease: "back",
    }, '-=.85')
    .from(".hero .card-3", {
        y:100,
        x:-100,
        opacity:0,
        duration: 1,
        ease: "back",
    }, '-=.75').from(".hero .card-3 .card__content *", {
        y:100,
        x:-100,
        opacity:0,
        duration: .5,
        stagger: .25,
        ease: "ease",
    }, '-=.75').from(".hero .card-3 .card__image", {
        y: -50,
        x:100,
        opacity:0,
        scale: 0,
        ease: "back",
    }, '-=.85')
    .from('.category__header', {
        y: 50,
        x:-100,
        opacity:0,
        scale: 0,
        ease: "back",
        scrollTrigger: {
            trigger: '.hero .card-3',
            start: 'top 85%',
            // markers: true,
            scrub: .5
        }
    }, '-=.85').from('.category .swiper-wrapper', {
        x:100,
        duration: .75,
        opacity:0,
        ease: "ease",
        scrollTrigger: {
            trigger: '.category__header',
            start: 'top 80%',
            end: '+=500',
            // markers: true,
            scrub: .5
        }
    }, '-=.85')
    .from('.brand .brand__header', {
        y: 50,
        x:-100,
        opacity:0,
        scale: 0,
        ease: "back",
        scrollTrigger: {
            trigger: '.category .swiper-wrapper',
            start: 'top 65%',
            // markers: true,
            scrub: .5
        }
    }).from('.brand .brands .card', {
        x:100,
        duration: .75,
        opacity:0,
        ease: "ease",
        stagger: .5,
        scrollTrigger: {
            trigger: '.brand .brand__header',
            start: 'top 80%',
            // markers: true,
            scrub: .5
        }
    })


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.trending-product .trending-product__cards .card');
    console.log(cards);
    
    cards.forEach((card, index) => {

        if(index === 0){
            const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: '.trending-product .trending-product__header',
                  start: 'top 100%', 
                  end: 'top 50%', 
                  scrub: true, 
                //   markers: true 
                }
              });
              tl.from(card, {
                x:200,
                y: 150,
                scale:0,
                opacity: 0,
                stagger: 0.2,
                duration: 0.5,
                ease: 'ease'
              });
        }else if(index === cards.length -1) {
            const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: cards[cards.length -1],
                  start: 'bottom 120%', 
                  end: 'top 60%', 
                  scrub: true, 
                //   markers: true 
                }
              });

              tl.from(card, {
                x:200,
                y: 150,
                scale:0,
                opacity: 0,
                stagger: 0.2,
                duration: 0.5,
                ease: 'ease'
              });
        }
        else{
            // index--;
            const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: card,
                  start: 'bottom 150%', 
                  end: 'top 80%', 
                  scrub: true, 
                //   markers: true 
                }
              });

              tl.from(card, {
                x:200,
                y: 150,
                scale:0,
                opacity: 0,
                stagger: 0.75,
                duration: 0.5,
                ease: 'ease'
              });
        }

    

    });

})

document.addEventListener('DOMContentLoaded', () => {
    gsap.timeline()
    .from('.banners .banner', {
        x:-100,
        y:100,
        scale:0,
        opacity:0,
        stagger: .75,
        duration: 2,
        scrollTrigger: {
            trigger: '.trending-product__cards .card:last-child',
            start: 'top 80%',
            scrub: .75,
            // markers: true
        }
    }).from('.subscribe',{
        y:100,
        scale:0,
        opacity:0,
        duration: .5,
        scrollTrigger:{
            trigger: '.banners .banner:last-child',
            start: 'bottom 90%',
            end: 'bottom 80%',
            scrub: .25,
            // markers: true
        }
    }).from('.footer-content .content__body',{
        x:-100,
        // scale:0,
        opacity:0,
        duration: .5,
        scrollTrigger:{
            trigger: '.subscribe',
            start: 'bottom 100%',
            end: 'bottom 93%',
            scrub: .25,
            // markers: true
        }
    }).from('.footer-content .content__tabs .tab',{
        x:100,
        // scale:0,
        opacity:0,
        duration: .5,
        stagger: .75,
        scrollTrigger:{
            trigger: '.subscribe',
            start: 'bottom 100%',
            end: 'bottom 94%',
            scrub: .5,
            // markers: true
        }
    }).from('.footer-attribute',{
        y:100,
        scale:0,
        opacity:0,
        duration: .75,
        scrollTrigger:{
            trigger: '.subscribe ',
            start: 'bottom 100%',
            end: 'bottom 95%',
            scrub: .75,
            // markers: true 
        }
    })
    
})