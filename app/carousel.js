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

