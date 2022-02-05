const images = document.querySelectorAll('.wrapper .image img')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const close = document.querySelector('.close')
const galleryImg = document.querySelector('.gallery-inner img')
const gallery = document.querySelector('.gallery')

let currentIndex = 0

const showGallery = () => {
    if (currentIndex == 0) {
        prev.classList.add('hide')
    } else {
        prev.classList.remove('hide')
    }
    if (currentIndex == images.length - 1) {
        next.classList.add('hide')
    } else {
        next.classList.remove('hide')
    }
    //display
    gallery.classList.add('show')
    galleryImg.src = images[currentIndex].src
}

images.forEach((img, index) => {
    img.addEventListener('click', function() {
        currentIndex = index
        showGallery()
    })
})
close.addEventListener('click', function() {
    gallery.classList.remove('show')
})
document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        gallery.classList.remove('show')
    }
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 39) {
        if (currentIndex < images.length - 1) {
            currentIndex++
            showGallery()
        }
    }
})
document.addEventListener('keydown', function(e) {
    if (e.keyCode === 37) {
        if (currentIndex > 0) {
            currentIndex--
            showGallery()
        }
    }
})

prev.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--
        showGallery()

    }
})
next.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
        currentIndex++
        showGallery()
    }
})