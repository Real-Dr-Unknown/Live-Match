let pauseTime = 300000;
const array = [300000, 270000, 240000, 210000, 180000, 150000, 120000];


function isVideoPaused() {
    state = player.getPlayerState();
    return state === YT.PlayerState.PAUSED;
}

setInterval(function() {
    if (!isVideoPaused()) {
        toggleImage();
        pauseTime = array[Math.floor(Math.random() * array.length)];
    }
}, pauseTime);