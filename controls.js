const scriptTag = document.createElement('script');
scriptTag.src = 'https://www.youtube.com/iframe_api';
document.body.appendChild(scriptTag);

let player;
let duration;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('YTPlayer', {
        events: {
            'onReady': onPlayerReady
        }
    });
}


// scriptTag.onload = function () {
//     onYouTubeIframeAPIReady();
// }

const play = document.getElementById('play-pause');
const rewind = document.getElementById('back');
const skip = document.getElementById('skip');
const live = document.getElementById('live');

function onPlayerReady() {
    duration = player.getDuration();
    if (duration === 0 || duration > 43500) {
        live.style.visibility = "visible";
    }
}

play.addEventListener('click', toggleImage)

function toggleImage() {

    play.style.opacity = 0;
    let temp = false;

    setTimeout(() => {
        if (play.src.includes('pause.png')) {
            if (player && player.pauseVideo) {
                player.pauseVideo();
                play.src = 'play.png';
                temp = false
            }
        } else {
            if (player && player.playVideo) {
                player.playVideo();
                play.src = 'pause.png';
                temp = true
            }
        }
        play.style.opacity = 1;
    }, 100);
    return temp
}

rewind.addEventListener('click', skipback)

function skipback() {

    rewind.style.opacity = 0;

    setTimeout(() => {
        if (rewind.src.includes('replay.png')) {
            if (player && player.seekTo) {
                let currentTime = player.getCurrentTime();
                let newTime = Math.max(currentTime - 10, 0);
                player.seekTo(newTime, true);
            }
        }
        rewind.style.opacity = 1;
    }, 100);
}

skip.addEventListener('click', skipforword)

function skipforword() {

    skip.style.opacity = 0;

    setTimeout(() => {
        if (skip.src.includes('skipforword.png')) {
            if (player && player.seekTo) {
                let currentTime = player.getCurrentTime();
                let newTime = currentTime + 10
                player.seekTo(newTime, true);
            }
        }
        skip.style.opacity = 1;
    }, 100);
}

live.addEventListener('click', skipLive)

function skipLive() {

    live.style.opacity = 0;
    setTimeout(() => {
        if (duration === 0 || duration > 43500) {
            if (player && player.seekTo) {
                player.seekTo(9999999, true);
            }
        }
        live.style.opacity = 1;
    }, 100);
}