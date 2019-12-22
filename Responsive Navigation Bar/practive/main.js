const x = document.getElementsByClassName("topNav")[0];
function myFunction() {
    if (x.className === "topNav"){
        x.className += " responsive";
    }else{
        x.className = "topNav";
    }
}