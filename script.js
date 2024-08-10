const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {

    const int = setInterval(() => {

        const current = +counter.textContent
        const target = +counter.getAttribute('data-target')
        const inc = target / 250

        counter.textContent = '+' + Math.round(current + inc)

        if(current >= target) {
            counter.textContent = '+' + target
            clearInterval(int)
        }
    }, 1)
})

