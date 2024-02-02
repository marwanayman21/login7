const Loginform = document.querySelector('#Loginform');
const Registerform = document.querySelector('#Registerform');
const btn = document.querySelector('#btn');

function Register(){
    Loginform.style.left = "-400px";
    Registerform.style.left = "50px";
    btn.style.left = "110px";
}
function Login(){
    Loginform.style.left = "50px";
    Registerform.style.left = "450px";
    btn.style.left = "0px";
}