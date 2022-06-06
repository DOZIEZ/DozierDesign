// window.addEventListener('scroll', function(){
//     const header =document.querySelector('header');
//     header.classList.toggle("sticky", window.scrollY > 600 );
// });

function toggleMenu(){
    
    const navbar= document.querySelector('.navbar');
    navbar.classList.toggle('nav');
    

}

let long=window.innerWidth;

console.log(long);