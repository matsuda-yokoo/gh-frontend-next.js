const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener('click',()=>{
    const slidewidth = slide.clientWidth;
    slidesContainer.scrollLeft += slidewidth;
});

prevButton.addEventListener('click',()=>{
    const slidewidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slidewidth;
});