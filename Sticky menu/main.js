const topNav = document.getElementsByClassName("topNav")[0];
const sticky = topNav.offsetTop;
window.onscroll = function () {
    if (window.pageYOffset >= sticky){
        topNav.classList.add("sticky");
    } else {
        topNav.classList.remove("sticky");
    }
};