const centerDot = document.querySelectorAll(".center-dot")[0]
const circle = document.querySelectorAll(".circle")[0]

window.addEventListener("mousemove" , function(e) {
    const posX = e.clientX
    const posY = e.clientY

    centerDot.style.left = `${posX}px`
    centerDot.style.top = `${posY}px`
    circle.style.left = `${posX}px`
    circle.style.top = `${posY}px`

    circle.animate({
        left: `${posX}px`,
        top: `${posY}px`
    } , {
        duration: 500,
        fill: "forwards"
    })

})