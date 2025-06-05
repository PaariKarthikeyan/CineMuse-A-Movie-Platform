console.log("Tablet script loaded");
const icon = document.getElementById("nav")
const clos = document.getElementById("nav-close")
const display = document.getElementById("nav-content")
const prev1 = document.getElementById("tab-prev1")
const next1 = document.getElementById("tab-next1")
const prev2 = document.getElementById("tab-prev2")
const next2 = document.getElementById("tab-next2")
const prev3 = document.getElementById("tab-prev3")
const next3 = document.getElementById("tab-next3")
const prev4 = document.getElementById("tab-prev4")
const next4 = document.getElementById("tab-next4")
const prev5 = document.getElementById("tab-prev5")
const next5 = document.getElementById("tab-next5")
const slide1 = document.getElementById("tablet-arrows1")
const slide2 = document.getElementById("tablet-arrows2")
const slide3 = document.getElementById("tablet-arrows3")
const slide4 = document.getElementById("tablet-arrows4")
const slide5 = document.getElementById("tablet-arrows5")

icon.addEventListener("click",() => {
    icon.style.display = "none";
    clos.style.display = "block";
    display.style.display = "block";
})

clos.addEventListener("click",() => {
    icon.style.display = "block";
    clos.style.display = "none";
    display.style.display = "none";
})

next1.addEventListener("click",() => {
    slide2.style.display = "block";
    slide1.style.display = "none";
})

next2.addEventListener("click",() => {
    slide3.style.display = "block";
    slide2.style.display = "none";
})

next3.addEventListener("click",() => {
    slide4.style.display = "block";
    slide3.style.display = "none";
})

next4.addEventListener("click",() => {
    slide5.style.display = "block";
    slide4.style.display = "none";
})

next5.addEventListener("click",() => {
    slide1.style.display = "block";
    slide5.style.display = "none";
})

prev1.addEventListener("click",() => {
    slide5.style.display = "block";
    slide1.style.display = "none";
})

prev2.addEventListener("click",() => {
    slide1.style.display = "block";
    slide2.style.display = "none";
})

prev3.addEventListener("click",() => {
    slide2.style.display = "block";
    slide3.style.display = "none";
})

prev4.addEventListener("click",() => {
    slide3.style.display = "block";
    slide4.style.display = "none";
})

prev5.addEventListener("click",() => {
    slide4.style.display = "block";
    slide5.style.display = "none";
})