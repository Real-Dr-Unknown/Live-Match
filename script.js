// Define the YouTube video ID (replace with your actual video ID)
const videoId = "8bY0FO3NUp4"; // Replace with your YouTube live video ID

// Create the iframe element
const iframe = document.createElement("iframe");
iframe.src = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&autoplay=1&controls=1&showinfo=0`;
iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
iframe.allowFullscreen = true; // Allow fullscreen mode
iframe.style.aspectRatio = 16 / 9;
iframe.style.width = "100%";
iframe.frameBorder = "0";
iframe.style.borderRadius = "2%";
const ovelaydiv = document.createElement("div");

// Select the container div
const mediaDiv = document.querySelector(".media");

// Append the iframe to the container
mediaDiv.appendChild(iframe);
mediaDiv.appendChild(overlaydiv);