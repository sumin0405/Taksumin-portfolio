window.addEventListener('scroll', () => {
    let content = document.querySelector('.project1_img');
    let contentPossition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;
    if (contentPossition < screenPosition) {
        content.classList.add('img_active')
    } else {
        content.classList.remove('img_active');
    }
})

window.addEventListener('scroll', () => {
    let content = document.querySelector('.project2_img');
    let contentPossition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;
    if (contentPossition < screenPosition) {
        content.classList.add('img_active')
    } else {
        content.classList.remove('img_active');
    }
})

window.addEventListener('scroll', () => {
    let content = document.querySelector('.project3_img');
    let contentPossition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;
    if (contentPossition < screenPosition) {
        content.classList.add('img_active')
    } else {
        content.classList.remove('img_active');
    }
})