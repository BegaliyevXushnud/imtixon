const barses = document.querySelector('.barses')
const headerList = document.querySelector('.header-list')

barses.addEventListener('click', () => {
    headerList.classList.toggle('header_toogle')
})