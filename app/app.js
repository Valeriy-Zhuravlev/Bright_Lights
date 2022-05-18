import Audioplayer from './audioplayer.js';

const audioplayer1 = new Audioplayer(document.querySelector('#player1'));
const audioplayer2 = new Audioplayer(document.querySelector('#player2'));

window.audioplayer1 = audioplayer1;
window.audioplayer2 = audioplayer2;

//  ============================================================================

audioplayer1.player.addEventListener('click', function(event) {
    
    if (event.target.closest('.audioplayer__play-btn')) {
        audioplayer1.clickPlayBtn();
    }    
});

audioplayer1.player.addEventListener('mousedown', function(event) {

    if (event.target.closest('.progress-bar__slider')) {
        audioplayer1.mouseDown(event);
    }   
    if (event.target.closest('.progress-bar')) {
        audioplayer1.clickProgressBar(event);
    }
});

//  ============================================================================

audioplayer2.player.addEventListener('click', function(event) {

    if (event.target.closest('.audioplayer__play-btn')) {
        audioplayer2.clickPlayBtn();
    }
    if (event.target.closest('.playlist__item')) {
        audioplayer2.markTrack(event.target);
    }

});

audioplayer2.player.addEventListener('mousedown', function(event) {

    if (event.target.closest('.progress-bar__slider')) {
        audioplayer2.mouseDown(event);
    }   
    if (event.target.closest('.progress-bar')) {
        audioplayer2.clickProgressBar(event);
    }

});