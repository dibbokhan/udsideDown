const first = document.querySelector(".1st");

const second = document.querySelector(".2nd");



first.addEventListener("mouseover", () => {
    second.style.display = "none";
})