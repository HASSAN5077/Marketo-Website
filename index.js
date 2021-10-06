let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
let scrollBtn = document.querySelector('#scroll-btn');
window.onscroll = ()=>{
    scrollfunction();
    console.log(document.documentElement.scrollTop);
}
const scrollfunction = ()=>{
    if(document.documentElement.scrollTop > 200){
        scrollBtn.style.display = "block";
    }
    else{
        scrollBtn.style.display = "none";
    }
}
const scrollTopFunc = ()=>{
    document.documentElement.scrollTop = 0;
}