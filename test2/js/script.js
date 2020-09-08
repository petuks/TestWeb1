// Background
let wrapper = document.getElementById('wrapper');
wrapper.addEventListener('mousemove', (event) => {
    let moveX = ((window.screen.width / 2) - event.pageX) * 0.02;
    let moveY = ((window.screen.height / 2) - event.pageY) * 0.02;
    let background = document.getElementById('background');
    background.style.marginLeft = moveX + 'px';
    background.style.marginTop = moveY + 'px';
});

// Particles
particlesJS.load('particles', 'assets/particles.json');

// Minecraft players status
MinecraftAPI.getServerStatus(document.getElementById('server-ip').innerHTML, { port: 25565 }, (error, status) => {
    if (error) {
        return document.getElementById('server-status').innerHTML = 'Error Loading Status!';
    }
    document.getElementById('server-players').innerHTML = status.players.now;
});







function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}