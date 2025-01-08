const buttonElm = document.getElementById("myBtn");
const container = document.getElementById("container")
const imageElm = document.getElementById("image");
buttonElm.addEventListener("click", () => {
    container.textContent = "Mẫn nè";
    imageElm.style.display = "block";
});