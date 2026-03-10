//barra del navegador


window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0 )
})



//show/hide faq answer

const faqs  = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');


        //change icon 
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fi fi-sr-angle-right') {
            icon.className = "fi fi-rr-angle-down";
        } else {
            icon.className = "fi fi-sr-angle-right";
        }
    })
})
