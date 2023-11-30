const nodeX = document.querySelectorAll('.node-x');
const innerNode = document.querySelectorAll('.dropdown');
const opacity = document.querySelector('.nav-object p');
const imageDrop = document.querySelectorAll('.img-drop');
const showMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.nav-element');
const cancel = document.querySelector('.cancel');
const bgBlur = document.querySelector('.black');

const mqb = window.innerWidth >= 600;
if (mqb) {
    nodeX.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            innerNode[index].style.display = 'flex';
            imageDrop[index].classList.add('active');
        })
        item.addEventListener('mouseout', () => {
            innerNode[index].style.display = 'none';
            imageDrop[index].classList.remove('active');
        })
    });
}


showMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
    bgBlur.style.display = 'block';
});

cancel.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    bgBlur.style.display = 'none'
});
bgBlur.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    bgBlur.style.display = 'none'
})

const mqm = window.innerWidth <= 600;
if (mqm) {
    nodeX.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (innerNode[index].style.display === 'flex') {
                innerNode[index].style.display = 'none';
                imageDrop[index].classList.add('active');
            } else {
                innerNode[index].style.display = 'flex';
                imageDrop[index].classList.remove('active');
            }
        });
    });
}
