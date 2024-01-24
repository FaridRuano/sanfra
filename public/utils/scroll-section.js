/* MAIN PAGE */

const obv = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            entry.target.classList.remove('hidden')

        }
    })
},{
    root: null,
    rootMargin: '-30% 0px',
})

const obvLong = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            entry.target.classList.remove('hidden')

        }
    })
},{
    root: null, 
    rootMargin: '-50% 0px', 
})

const mainSec = document.getElementById('mp-main')

obv.observe(mainSec)

const secondSec = document.getElementById('mp-second')

obv.observe(secondSec)

const thirdSec = document.getElementById('mp-third')

obvLong.observe(thirdSec)

const fourthSec = document.getElementById('mp-fourth')

obv.observe(fourthSec)

const fifthSec = document.getElementById('mp-fifth')

obv.observe(fifthSec)

const sixSec = document.getElementById('mp-sixth')

obvLong.observe(sixSec)

const seventSec = document.getElementById('mp-seventh')

obv.observe(seventSec)


/* FOOTER */

const obvSmall = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            entry.target.classList.remove('hidden')

        }
    })
},{
    root: null, 
    rootMargin: '-5% 0px', 
});

const footer = document.getElementById('footer')

obvSmall.observe(footer)





