// var btnOpen = document.querySelector('.btn-modal')
// var modal = document.querySelector('.modal')
// var iconClose = document.querySelector('.model-header i')
// var btnClose = document.querySelector('.model-footer button')

// function toggleModal() {
//     modal.classList.toggle('hide')
// }

// btnOpen.addEventListener('click', toggleModal)
const modal = document.querySelector('.modal')
const openModalBtn = document.querySelector('.btn-modal')
const iconCloseModal = document.querySelector('.modal-header i')
const buttonCloseModal = document.querySelector('.modal-footer button')

function toggleModal() {
    modal.classList.toggle('hide')
}

openModalBtn.addEventListener('click', toggleModal)
iconCloseModal.addEventListener('click', toggleModal)
buttonCloseModal.addEventListener('click', toggleModal)

modal.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) toggleModal()
})