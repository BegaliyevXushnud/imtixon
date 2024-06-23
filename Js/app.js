const barses = document.querySelector('.barses')
const headerList = document.querySelector('.header-list')
const over = document.getElementById('overplay')

barses.addEventListener('click', () => {
    headerList.classList.toggle('header_toogle')
    over.classList.toggle('overplay')
})