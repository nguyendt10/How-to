const  image = document.getElementById("myImage");
const  modal = document.getElementById("myModal");
const image01 = document.getElementById("img01");
const close = document.getElementById("myClose");
const caption = document.getElementsByClassName("myCaption")[0];

image.onclick = function () {
    modal.style.display = "block";
    image.style.display = "none";
    close.innerHTML = "&times;";
    image01.src = this.src;
    caption.innerHTML = this.alt;
};

close.onclick = function () {
    modal.style.display = "none";
    image.style.display = "block";
};
