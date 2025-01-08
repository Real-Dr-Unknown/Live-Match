const videoId = "iDpOPCRN2FM";

const iframe = document.createElement("iframe");
iframe.id = "YTPlayer"
iframe.src = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&autoplay=0&controls=0&showinfo=0&enablejsapi=1`;
iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
iframe.style.aspectRatio = 16 / 9;
iframe.style.width = "100%";
iframe.frameBorder = "0";
iframe.style.borderRadius = "2%";

const mediaDiv = document.querySelector(".media");
const dess = document.querySelector(".descp");
const paragraph = document.querySelector(".para");
const title = document.querySelector(".title");
const controls = document.querySelector(".controls");

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

    overlaydiv.style.left = divProp.left;
    dess.style.width = divProp.width;
    dess.style.height = divProp.height;
    dess.style.left = divProp.left;
    dess.style.top = divProp.top;
    dess.style.height = paraProp.height

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
    }
    else if (window.innerWidth > 950) {

        overlaydiv.style.top = (window.innerWidth / 100) * 3;
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
