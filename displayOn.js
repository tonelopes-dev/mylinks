setTimeout(displayOn, 1600)

function displayOn () {
    const container = document.querySelector('#container')
    const VideofadeIn = document.querySelector('#bg_video')
    container.classList.add('displayOn')
    VideofadeIn.classList.add('box-black')

    }
    