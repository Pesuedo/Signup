const signUpPageLink = document.querySelector('#signupageLink');
const loginPageLink =document.querySelector('#loginpageLink');
const wrapper = document.querySelector('.wrapper');



const signUpButton = document.querySelector('#signup-button');
const signUpEmail =document.querySelector('.signup-email');
const signUpPassword = document.querySelector('.signup-password');
const signUpName = document.querySelector('.signUp-name');



signUpPageLink.addEventListener('click',function(){
    wrapper.style.top = '-100%';
})

sloginPageLink.addEventListener('click',function(){
    wrapper.style.top = '0%';
})

signUpButton.addEventListener('click',function(){
    console.log(signUpemail.value);
    console.log(signUppassword.value);
    console.log(signUpname.value);
})