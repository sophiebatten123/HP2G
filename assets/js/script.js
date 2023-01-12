document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.querySelector("#home");
    const goTopButton = document.querySelector(".go-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > navBar.offsetHeight) {
          goTopButton.style.display = "flex";
        } else {
          goTopButton.style.display = "none";
        }
      });
})

document.getElementById('service-one').onmouseover = function() {
    document.getElementById('service-one-text').style.display = "block";
}

document.getElementById('service-one').onmouseleave = function() {
    document.getElementById('service-one-text').style.display = "none";
}

document.getElementById('service-two').onmouseover = function() {
    document.getElementById('service-two-text').style.display = "block";
}

document.getElementById('service-two').onmouseleave = function() {
    document.getElementById('service-two-text').style.display = "none";
}

document.getElementById('service-three').onmouseover = function() {
    document.getElementById('service-three-text').style.display = "block";
}

document.getElementById('service-three').onmouseleave = function() {
    document.getElementById('service-three-text').style.display = "none";
}

document.getElementById('service-four').onmouseover = function() {
    document.getElementById('service-four-text').style.display = "block";
}

document.getElementById('service-four').onmouseleave = function() {
    document.getElementById('service-four-text').style.display = "none";
}

document.getElementById('service-five').onmouseover = function() {
    document.getElementById('service-five-text').style.display = "block";
}

document.getElementById('service-five').onmouseleave = function() {
    document.getElementById('service-five-text').style.display = "none";
}

document.getElementById('service-six').onmouseover = function() {
    document.getElementById('service-six-text').style.display = "block";
}

document.getElementById('service-six').onmouseleave = function() {
    document.getElementById('service-six-text').style.display = "none";
}

document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHTML = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });
    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel__nav">
            ${ buttonsHTML.join("") }
        </div>
    `);
    
    const buttons = carousel.querySelectorAll(".carousel__button");
    
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            //unselect items
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(button => button.classList.remove("carousel__button--selected"));

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");
        });
    });
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
});