const scriptTag = document.createElement('script');
scriptTag.src = 'https://www.youtube.com/iframe_api';
document.body.appendChild(scriptTag);


const videoId = "4hyG9su5euA";

const iframe = document.createElement("iframe");
iframe.id = "YTPlayer"
iframe.src = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&autoplay=0&controls=0&showinfo=0&enablejsapi=1`;
iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
iframe.style.aspectRatio = 16 / 9;
iframe.style.width = "100%";
iframe.frameBorder = "0";
iframe.style.borderRadius = "2%";
iframe.style.marginLeft = "auto";
iframe.style.marginRight = "auto";


const mediaDiv = document.querySelector(".media");
const dess = document.querySelector(".descp");
const paragraph = document.querySelector(".para");
const title = document.querySelector(".title");
const controls = document.querySelector(".controls");
const outer = document.querySelector(".outer");
const vOverlay = document.querySelector(".volumeOverlay");
const volume = document.getElementById('volume');
const OIvolume = document.getElementById('Ovolume');
const popup = document.getElementById("popup");


divProp = mediaDiv.getBoundingClientRect();
paraProp = paragraph.getBoundingClientRect();
volumeProp = volume.getBoundingClientRect();
vOverlayProp = vOverlay.getBoundingClientRect();
OIvolumeProp = OIvolume.getBoundingClientRect();
outerProp = outer.getBoundingClientRect();

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
dess.style.height = paraProp.height;
outer.style.width = divProp.width;

vOverlay.style.top = outerProp.top + ((vOverlayProp.height / 2))
vOverlay.style.left = volumeProp.left;

mediaDiv.appendChild(iframe);
mediaDiv.appendChild(overlaydiv);



function updatePosition() {
    divProp = mediaDiv.getBoundingClientRect();
    paraProp = paragraph.getBoundingClientRect();
    volumeProp = volume.getBoundingClientRect();
    OIvolumeProp = OIvolume.getBoundingClientRect();

    overlaydiv.style.width = divProp.width;
    overlaydiv.style.height = divProp.height;

    overlaydiv.style.left = divProp.left;
    dess.style.width = divProp.width;
    dess.style.height = divProp.height;
    dess.style.left = divProp.left;
    dess.style.top = divProp.top;
    dess.style.height = paraProp.height;
    
    
    if (window.innerWidth <= 950) {
        controls.style.width = "100%"
        overlaydiv.style.top = "8px"
        mediaDiv.style.width = "100%";
        mediaDiv.style.marginTop = "0%";
        mediaDiv.style.marginLeft = "0%";
        dess.style.width = "100%";
        dess.style.marginLeft = "0%";
        title.style.marginLeft = "0%";
        title.style.width = "100%"
        outer.style.width = "100%";
        outer.style.marginLeft = "0%";
        vOverlay.style.display = "none";
        volume.style.display = "none";
    }
    
    else if (window.innerWidth > 950) {
        overlaydiv.style.top = (window.innerWidth / 100) * 3;
        mediaDiv.style.width = "55%";
        mediaDiv.style.marginTop = "3%";
        mediaDiv.style.marginLeft = "auto";
        dess.style.width = "53.7%";
        dess.style.marginTop = "0.5%";
        title.style.width = "53.7%"
        outer.style.width = "54.5%";
        volume.style.display = "flex";
    }
}

setInterval(updatePosition, 1000);


vOverlay.addEventListener('mouseover', () => {
    vOverlay.style.display = "flex";
    volume.style.visibility = "hidden"
});

vOverlay.addEventListener('mouseout', () => {
    vOverlay.style.display = "none";
    volume.style.visibility = "visible"
});

volume.addEventListener('mouseover', () => {
    vOverlay.style.display = "flex";
    volume.style.visibility = "hidden"
});

volume.addEventListener('mouseout', () => {
    vOverlay.style.display = "none";
    volume.style.visibility = "visible"
});