let stars = []
let cursorX = 0
let cursorY = 0
let cursorRadius = (window.innerHeight * 10)/100
let offset = 5

document.addEventListener("DOMContentLoaded", function() {
  let mainBackground = document.querySelector(".main-background")
  let starCount = 600
  for(let i = 0; i < starCount; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    let startX = Math.random() * window.innerWidth
    let startY = Math.random() * window.innerHeight
    stars.push({
      element: star,
      x: startX,
      y: startY,
      speed: Math.random() * 2 + 0.5
    });
    star.style.width = Math.random() * 10 + "px"
    star.style.height = Math.random() * 10 + "px"
    //star.style.left = Math.random() * 100 + "%"
    //star.style.animationDuration = Math.random() * 5 + 3 + "s"
    mainBackground.appendChild(star)
  }
});

document.addEventListener("mousemove", (e) => {
  cursorX = e.clientX;
  cursorY = e.clientY;
});

function animate() {
  for(let star of stars){
    let dx = star.x - cursorX
    let dy = star.y - cursorY
    //console.log(star.x)
    let distance = Math.sqrt(dx*dx + dy*dy)
    if(distance < cursorRadius) {
        star.x += (dx / distance) * offset
        star.y += (dy / distance) * offset
    }
    star.y += star.speed

    let percent = (window.innerHeight - star.y)/window.innerHeight
    star.element.style.opacity = percent

    if(star.y > window.innerHeight) {
        star.y = Math.random() * window.innerHeight
        star.x = Math.random() * window.innerWidth
    }

    star.element.style.left = star.x + "px"
    star.element.style.top  = star.y + "px"
  }
  requestAnimationFrame(animate)
}

animate()