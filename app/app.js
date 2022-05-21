import Audioplayer from './audioplayer.js';

const audioplayer1 = new Audioplayer(document.querySelector('#player1'));
const audioplayer2 = new Audioplayer(document.querySelector('#player2'));

//  ============================================================================

audioplayer1.playBtn.addEventListener('pointerdown', function(event) {
    audioplayer1.playBtn.ondragstart = () => false;

    audioplayer1.playBtn.onpointerup = () => {
        audioplayer1.clickPlayBtn();
    };
 
});

audioplayer1.player.addEventListener('pointerdown', function(event) {

    if (event.target.closest('.progress-bar')) {
        audioplayer1.clickProgressBar(event);
    }
    if (event.target.closest('.progress-bar__slider')) {
        audioplayer1.pointerDown(event);
    }   
});

//  ============================================================================

audioplayer2.playBtn.addEventListener('pointerdown', function(event) {
    audioplayer2.playBtn.ondragstart = () => false;

    audioplayer2.playBtn.onpointerup = () => {
        audioplayer2.clickPlayBtn();
    }   
 
});

audioplayer2.playlist.addEventListener('click', function(event) {
    if (event.target.closest('.playlist__item')) {
        audioplayer2.markTrack(event.target);
    }
});

audioplayer2.player.addEventListener('pointerdown', function(event) {

    if (event.target.closest('.progress-bar')) {
        audioplayer2.clickProgressBar(event);
    }
    if (event.target.closest('.progress-bar__slider')) {
        audioplayer2.pointerDown(event);
    }   

});