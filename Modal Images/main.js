const image = document.getElementById("myImage");
const close = document.getElementById("myClose");
const img = document.getElementById("img01");
const caption = document.getElementById("myCaption");
const modal = document.getElementById("myModal");

image.onclick = function () {
    image.style.display = "none";
    modal.style.display = "block";
    close.innerHTML = "&times;";
    img.src = image.src;
    caption.innerHTML = image.alt;
};
close.onclick = function () {
    image.style.display = "block";
    modal.style.display = "none";
};
