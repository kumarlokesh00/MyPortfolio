const NavLinks = document.getElementById("NavLinks");



function openLinks(){
    NavLinks.style.right = "0";

}

function closeLinks(){
    NavLinks.style.right = "-200px";
}
function sendMsg(){
    
}

window.addEventListener( "scroll",()=>{
    let NavBar=document.querySelector("nav");
    NavBar.classList.toggle("sticky-navbar",window.scrollY>25);

})
