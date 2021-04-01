const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear()

const links = document.querySelector('.navLinks');
const navBar = document.querySelector('.navbar');
const btnScroll = document.querySelector('.scrollUp');
window.addEventListener('scroll', function (){
    // console.log(window.pageYOffset)
    if(window.pageYOffset >= 121){
        navBar.classList.add('fixed');
        btnScroll.style.height = '50px';
        btnScroll.style.width = '50px';
    }else if(window.pageYOffset < 121){
        navBar.classList.remove('fixed');
        btnScroll.style.height = '0px';
        btnScroll.style.width = '0px';
    }
})

const scrollinks = document.querySelectorAll('.scroll_link');

scrollinks.forEach(function (item){
    item.addEventListener("click",function(e){
        // e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        console.log(id)
        const element = document.getElementById(id);

        const navheight = navBar.getBoundingClientRect().height;
        var position  = element.offsetTop;
        position = position - navheight
        console.log(position);
        window.scrollTo(0,position)
    })
})