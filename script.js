// Define the YouTube video ID (replace with your actual video ID)
const videoId = "6YLl-_0XIBc"; // Replace with your YouTube live video ID

// Create the iframe element
const iframe = document.createElement("iframe");
iframe.id = "YTPlayer"
iframe.src = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&autoplay=1&controls=0&showinfo=0&enablejsapi=1`;
iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
iframe.style.aspectRatio = 16 / 9;
iframe.style.width = "100%";
iframe.frameBorder = "0";
iframe.style.borderRadius = "2%";

// Select the container div
const mediaDiv = document.querySelector(".media");
const dess = document.querySelector(".descp");
const paragraph = document.querySelector(".para");
const title = document.querySelector(".title");

divProp = mediaDiv.getBoundingClientRect();
paraProp = paragraph.getBoundingClientRect();

const overlaydiv = document.createElement("div");
overlaydiv.style.position = "absolute";
overlaydiv.style.backgroundColor = "transparent";
overlaydiv.style.zIndex = "1";
overlaydiv.style.width = divProp.width;
overlaydiv.style.height = divProp.height;
overlaydiv.style.left = divProp.left;
overlaydiv.style.top = divProp.top;
dess.style.width = divProp.width;
dess.style.height = divProp.height;
dess.style.left = divProp.left;
dess.style.top = divProp.top;
dess.style.height = paraProp.height

// Append the iframe to the container
mediaDiv.appendChild(iframe);
mediaDiv.appendChild(overlaydiv);

function updatePosition() {
    divProp = mediaDiv.getBoundingClientRect();
    paraProp = paragraph.getBoundingClientRect();

    overlaydiv.style.width = divProp.width;
    overlaydiv.style.height = divProp.height;
    overlaydiv.style.top = divProp.top;
    overlaydiv.style.left = divProp.left;
    dess.style.width = divProp.width;
    dess.style.height = divProp.height;
    dess.style.left = divProp.left;
    dess.style.top = divProp.top;
    dess.style.height = paraProp.height

    if (window.innerWidth <= 950) {

        mediaDiv.style.width = "100%";
        mediaDiv.style.marginTop = "0%";
        mediaDiv.style.marginLeft = "0%";
        dess.style.width = "100%";
        dess.style.marginLeft = "0%";
        title.style.marginLeft = "0%";
        title.style.width = "100%"
    }
    else if (window.innerWidth > 950) {

        mediaDiv.style.width = "55%";
        mediaDiv.style.marginTop = "3%";
        mediaDiv.style.marginLeft = "5%";
        dess.style.width = "53.7%";
        dess.style.marginTop = "0.5%";
        dess.style.marginLeft = "5%";
        title.style.marginLeft = "5.5%";
        title.style.width = "53.7%"
    }
}

setInterval(updatePosition, 1000);

const scriptTag = document.createElement('script');
scriptTag.src = 'https://www.youtube.com/iframe_api';
document.body.appendChild(scriptTag);

let player;

// Initialize YouTube player after the API script is loaded
function onYouTubeIframeAPIReady() {
    player = new YT.Player('YTPlayer'); // Use the ID of the iframe here
}

// Load the YouTube API

// Ensure the player is initialized after the script is loaded
scriptTag.onload = function () {
    onYouTubeIframeAPIReady();
}

const play = document.getElementById('play-pause');

play.addEventListener('click', toggleImage)

function toggleImage() {

    play.style.opacity = 0;

    setTimeout(() => {
        if (play.src.includes('play.png')) {
            if (player && player.pauseVideo) {
                player.pauseVideo();
                play.src = 'pause.png';
            }
        } else {
            if (player && player.playVideo) {
                player.playVideo();
                play.src = 'play.png';
            }
        }
        play.style.opacity = 1;
    }, 100);
}