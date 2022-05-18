const tape = document.querySelector('.events__tape');
const item = document.querySelector('.events__item');
let currentPos = 0;
let shiftQuantity = 3;

document.querySelector('.events').onclick = (event) => {
    if(!event.target.closest('.events__btn')) return;

    const shiftX = item.offsetWidth + parseInt(getComputedStyle(item).marginRight);

    window.innerWidth <= 1241 ? shiftQuantity = 2 : shiftQuantity;
    window.innerWidth <= 800 ? shiftQuantity = 1 : shiftQuantity;

    if(event.target.closest('#events__btn-prev')) {
        btnPrevClick();
    };
    if(event.target.closest('#events__btn-next')) {
        btnNextClick();
    };

    function btnPrevClick() {
        currentPos += shiftX * shiftQuantity;
        currentPos = Math.min(currentPos, 0);
    };

    function btnNextClick() {
        currentPos -= shiftX * shiftQuantity;
        currentPos = Math.max(currentPos, -shiftX * (tape.children.length - shiftQuantity));
    };

    tape.style.transform = `translateX(${currentPos}px)`;
};


// =============================================================


// const btnPrev = document.querySelector('#events__btn-prev');
// const btnNext = document.querySelector('#events__btn-next');
// const tape = document.querySelector('.events__tape');
// const item = document.querySelector('.events__item');

// let currentPos = 0;
// let shiftQuantity = 3;

// btnPrev.onclick = () => {
//     const shiftX = item.offsetWidth + parseInt(getComputedStyle(item).marginRight);

//     if (window.innerWidth <= 1241) { shiftQuantity = 2 };
//     if (window.innerWidth <= 800) { shiftQuantity = 1 };
    
//     currentPos += shiftX * shiftQuantity;
//     currentPos = Math.min(currentPos, 0);

//     setTapePosition();
// };

// btnNext.onclick = () => {
//     const shiftX = item.offsetWidth + parseInt(getComputedStyle(item).marginRight);

//     if (window.innerWidth <= 1241) { shiftQuantity = 2 };
//     if (window.innerWidth <= 800) { shiftQuantity = 1 };

//     currentPos -= shiftX * shiftQuantity;
//     currentPos = Math.max(currentPos, -shiftX * (tape.children.length - shiftQuantity));

//     setTapePosition();
// };

// function setTapePosition() {
//     tape.style.transform = `translateX(${currentPos}px)`;
// };