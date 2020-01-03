let register = document.getElementsByClassName("form-register");
let creatAccount = document.getElementsByClassName("form-creatAccount");
let year = document.getElementsByClassName("year");
let month =document.getElementsByClassName("month");
let day = document.getElementsByClassName("day");
function registerFunction(){
    closeFunction();
    register[0].style.display = "block";
}
function createAccountFunction() {
    closeFunction();
    creatAccount[0].style.display = "block";
}
function closeFunction() {
    register[0].style.display = "none";
    creatAccount[0].style.display = "none";
}
/*------------Thêm ngày tháng năm cho form creatAccount----------*/
addYear();
addMonth();
addDay();
function addYear() {
    for (let i=1900; i<=2020; i++){
        year[0].innerHTML += "<option value=\"" + i + "\">" + i + "</option><br>";
    }
}
function addMonth() {
    for (let i=1; i<=12; i++){
        month[0].innerHTML += "<option value=\"" + i + "\">" + i + "</option><br>";
    }
}
function addDay() {
    for (let i=1; i<=31; i++){
        day[0].innerHTML += "<option value=\"" + i + "\">" + i + "</option><br>";
    }
}
/*-------------------------------------------------------------*/