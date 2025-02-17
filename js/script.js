document.addEventListener("DOMContentLoaded", function () {
    console.log("Script.js funcionando correctamente.");

    // Slider automático
    let slider = document.querySelector(".slider");
    let scrollAmount = 0;
    let slideTimer;

    function startSlider() {
        slideTimer = setInterval(() => {
            slider.scrollLeft += 100;
            scrollAmount += 100;
            if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
                scrollAmount = 0;
                slider.scrollLeft = 0;
            }
        }, 2000);
    }

    startSlider();

    // Detener slider al pasar el mouse
    slider.addEventListener("mouseover", () => clearInterval(slideTimer));
    slider.addEventListener("mouseleave", startSlider);
});
