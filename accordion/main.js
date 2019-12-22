const plus = document.getElementsByClassName("plus");
const minus = document.getElementsByClassName("minus");
const panel = document.getElementsByClassName("panel");

function myFunction(n) {
    panel[n-1].classList.toggle("active");
    plus[n-1].classList.toggle("active");
    minus[n-1].classList.toggle("active");
}