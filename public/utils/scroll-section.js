/* MAIN PAGE */

const obv = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            entry.target.classList.remove('hidden')

        }
    })
},{
    root: null, // Use the viewport as the root
    rootMargin: '-30% 0px', // Adjust the margins to reduce detection range
});

const obvLong = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            entry.target.classList.remove('hidden')

        }
    })
},{
    root: null, // Use the viewport as the root
    rootMargin: '-50% 0px', // Adjust the margins to reduce detection range
});

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








