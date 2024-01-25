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






