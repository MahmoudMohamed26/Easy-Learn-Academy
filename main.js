const phoneNav = document.querySelectorAll(".phoneNav")[0]
const bars = document.querySelectorAll(".bars")[0]
const animatedbar = document.querySelectorAll(".bars span")[1]
let worked = false
const increaseSection = document.getElementsByClassName("increaseSection")
const increase = document.querySelectorAll(".increase span")

bars.onclick = function() {
    if(phoneNav.classList.contains("h-0")){
        animatedbar.classList.replace("w-[20px]" , "w-full")
        phoneNav.classList.replace("h-0", "h-[380px]")
    }
    else {
        animatedbar.classList.replace("w-full" , "w-[20px]")
        phoneNav.classList.replace("h-[380px]", "h-0")
    }
}

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.replace("notshow1" , "show1")
        }
    })
})
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.replace("notshow2" , "show2")
        }
    })
})

const hiddenElements1 = document.getElementsByClassName("notshow1")
const hiddenElements2 = document.getElementsByClassName("notshow2")
Array.from(hiddenElements1).forEach((el) => observer1.observe(el))
Array.from(hiddenElements2).forEach((el) => observer2.observe(el))


const increaseObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if(!worked){
                increase.forEach((el) => increasing(el))
            }
            worked = true
        }
    });
});

Array.from(increaseSection).forEach((el) => increaseObserver.observe(el));

function increasing(el){
    let goal = el.dataset.goal
    let count = setInterval(() => {
        el.textContent++
        if(el.textContent == goal){
            clearInterval(count)
        }
    }, 1000 / goal);
}

////////////////////////////////////////

const error = document.querySelectorAll(".error")[0]
const inputs = document.querySelectorAll("form input")
const select = document.querySelectorAll("form select")
const form = document.querySelectorAll("form")[0]
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


form.onsubmit = function(e) {
    if (inputs[0].value !== "" && inputs[1].value !== "" && inputs[2].value !== "" && inputs[3].value !== "" && emailRegex.test(inputs[4].value)) {
        error.textContent = "";
    } else {
        error.textContent = "Check Your fields";
        e.preventDefault();
    }
}

///////////////////////

let currentDate = new Date()
let currentYear = currentDate.getFullYear()
const year = document.querySelectorAll(".year")[0]
year.textContent= currentYear

//////////////////////

const pageup = document.querySelectorAll(".pageup")[0]

window.onscroll = function() {
    if(window.scrollY >= 500){
        pageup.classList.remove("invisible")
        pageup.classList.replace("opacity-0" , "opacity-100")
    }
    else {
        pageup.classList.replace("opacity-100" , "opacity-0")
        pageup.classList.add("invisible")
    }
}

////////////////////////////////////

window.addEventListener("DOMContentLoaded" , function() {
    setTimeout(() => {
        const loader = document.querySelectorAll(".loader")[0]
        loader.classList.add("hidden")
        const page = this.document.querySelectorAll(".page")[0]
        page.classList.remove("hidden")
    }, 1500);
})
