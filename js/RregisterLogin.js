var login= document.getElementById("login");
var register= document.getElementById("register");
var account_btn=document.getElementById("account-btn");
function Register(){
    account_btn.style.left="110px";
    register.style.left="50px";
    login.style.left="-400px"

}
function Login(){
    account_btn.style.left="0";
    login.style.left="50px";
    register.style.left="450px";

}