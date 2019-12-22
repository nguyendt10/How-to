const x = document.getElementById("myNav");
function myFunction() {
    if (x.className === "topNav"){
        x.className += " responsive";
    }else {
        x.className = "topNav";
    }

}

