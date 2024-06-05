let scrollcontainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");


scrollcontainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
    scrollcontainer.scrollLeft += "auto";
}); 

nextBtn.addEventListener("click", () =>{
    scrollcontainer.style.scrollBehavior = "smooth"
    scrollcontainer.scrollLeft += 900;
});

backBtntBtn.addEventListener("click", () =>{
    scrollcontainer.style.scrollBehavior = "smooth"
    scrollcontainer.scrollLeft -= 900;
});