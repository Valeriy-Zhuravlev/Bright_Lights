export default class Audioplayer {
    isPaused = true;

    tracks = [
        {name: 'How You Love Me', path:'tracks/3LAU,Bright_Lights—How_You_Love_Me.mp3'},
        {name: 'War For Love', path:'tracks/Bright_Lights,Kaleena_Zanders,Kandy—War_For_Love.mp3'},
        {name: 'Ghost', path:'tracks/Pink_Is_Punk,Benny_Benassi,Bright_Lights—Ghost.mp3'},
        {name: 'Never Say Goodbye', path:'tracks/Hardwell,Dyro,Bright_Lights—Never_Say_Goodbye.mp3'},
        {name: 'Where Are You Now', path:'tracks/Zeds_Dead,Dirtyphonics,Bright_Lights—Where_Are_You_Now.mp3'},
        {name: 'Follow You Down', path:'tracks/Zedd,Bright_Lights—Follow_You_Down.mp3'},
    ];

    constructor(playerNode) {
        this.player = playerNode;

        this.playBtn = this.player.querySelector('.audioplayer__play');
        this.playImg = this.player.querySelector('.audioplayer__play-img');

        this.progressBar = this.player.querySelector('.progress-bar');
        this.progress = this.player.querySelector('.progress-bar__passed');      
        this.slider = this.player.querySelector('.progress-bar__slider');

        this.timerPassed = this.player.querySelector('.audioplayer__timer-passed');
        this.timerTotal = this.player.querySelector('.audioplayer__timer-total');        

        this.audio = this.player.querySelector('.audio');
        this.playlist = this.player.querySelector('.playlist');
    }

    clickPlayBtn() {
        
        if (this.isPaused) {
            this.playImg.src = 'img/audioplayer/pause-icon.svg';
            this.audio.play();            
            this.audio.addEventListener('timeupdate', () => this.timeUpdate());
            this.isPaused = false;
        } 
        else {
            this.playImg.src = 'img/audioplayer/play-icon.svg';
            this.audio.pause();
            this.isPaused = true;
        }

        this.getTotalTime();
        this.audio.addEventListener('ended', () => {
            this.playImg.src = 'img/audioplayer/play-icon.svg';
            this.isPaused = true;
        });

    }

    getTotalTime() {
        let totalMin = parseInt(this.audio.duration / 60);
            let totalSec = Math.floor(this.audio.duration - totalMin * 60);
        
            if (totalMin < 10) {
                totalMin = '0' + totalMin;
            }
            if (totalSec < 10) {
                totalSec = '0' + totalSec;
            }
            
            this.timerTotal.innerText = `${totalMin}:${totalSec}`;
    }
      
    timeUpdate() {        
        const currentTime = new Date(this.audio.currentTime * 1000);
        let currentMin = currentTime.getMinutes();
        let currentSec = currentTime.getSeconds();
    
        if (currentMin < 10) {
            currentMin = '0' + currentMin;
        }
        if (currentSec < 10) {
            currentSec = '0' + currentSec;
        }
            
        this.timerPassed.innerText = `${currentMin}:${currentSec}`;
        
        this.setCurrentSliderPosition();
    }

    setCurrentSliderPosition() {

        const step = this.progressBar.offsetWidth / this.audio.duration;
        const progressPosition = step * this.audio.currentTime;

        this.slider.style.left = progressPosition + 'px';
        this.progress.style.width = progressPosition + 'px';

    }

    markTrack(track) {
        if (!track.classList.contains('playlist__item')) return;
    
        const tracks = this.playlist.children;
        
        for(let track of tracks) {
            track.classList.remove('plays');
        }
    
        track.classList.add('plays');
    
        this.changeTrack(track);
    }

    changeTrack(markedTrack) {
        const markedTrackName = markedTrack.innerText.split('— ')[1];

        for(let track of this.tracks) {

            if (markedTrackName == track.name) {
                if(!this.audio.paused) {
                    this.audio.src = track.path;
                    this.audio.play();
                } else {
                    this.audio.src = track.path;
                }
            }
        }

        this.audio.addEventListener('loadedmetadata', () => {
            this.getTotalTime();
        });
    }

    mouseDown(event) {
        event.preventDefault();
        
        const shiftX = event.clientX - this.slider.getBoundingClientRect().left;
    
        const mouseMoveBinded = mouseMove.bind(this);
        document.addEventListener('mousemove', mouseMoveBinded);
        document.addEventListener('mouseup', mouseUp.bind(this));

        function mouseMove(event) {
            setPause.call(this);
    
            let currentLeft = event.clientX - shiftX - this.progressBar.getBoundingClientRect().left;
    
            if (currentLeft < 0) {
                currentLeft = 0;
            }
    
            const rightEdge = this.progressBar.offsetWidth - this.slider.offsetWidth;
    
            if (currentLeft > rightEdge) {
                currentLeft = rightEdge;
            }
    
            this.slider.style.left = currentLeft + 'px';    
            this.progress.style.width = currentLeft + 'px';
    
            if (currentLeft == rightEdge) {
                this.progress.style.width = currentLeft + this.slider.offsetWidth + 'px';
            }
    
            this.audio.currentTime = currentLeft / (this.progressBar.offsetWidth / this.audio.duration);

            this.timeUpdate();
        }
    
        function mouseUp() {
            document.removeEventListener('mousemove', mouseMoveBinded);
            document.removeEventListener('mouseup', mouseUp);
            setPlay.call(this);
        }

        function setPause() {
            if(this.audio.paused) return;
            this.audio.pause();
        }

        function setPlay() {
            if ( this.playImg.src.endsWith('pause-icon.svg') ) {
                this.audio.play();
            } else { 
                return;
            }
        }
    }

    clickProgressBar(event) {
        event.preventDefault();

        let currentLeft = event.clientX - this.progressBar.getBoundingClientRect().left;
    
        if (currentLeft < 0) {
            currentLeft = 0;
        }

        const rightEdge = this.progressBar.offsetWidth - this.slider.offsetWidth;

        if (currentLeft > rightEdge) {
            currentLeft = rightEdge;
        }

        this.slider.style.left = currentLeft + 'px';    
        this.progress.style.width = currentLeft + 'px';

        if (currentLeft == rightEdge) {
            this.progress.style.width = currentLeft + this.slider.offsetWidth + 'px';
        }

        this.audio.currentTime = currentLeft / (this.progressBar.offsetWidth / this.audio.duration);

        this.timeUpdate();
        this.mouseDown(event);
    }

};