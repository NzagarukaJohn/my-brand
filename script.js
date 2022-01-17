$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

 // FORM VALIDATION


 const form = document.getElementById('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const subject = document.getElementById('subject');
 const userMsg = document.getElementById('message');

 const errorMsg = document.getElementsByClassName('error');

 form.addEventListener("submit", (e) => {
     e.preventDefault();

     validate(username, 0, "Username cannot be blank");
     validate(email, 1, "Please enter a valid email address");
     validate(subject, 2, "Subject cannot be blank");
     validate(userMsg, 3, "Message cannot be blank");
 });

 let validate = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
      } 
      
      else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
      }
 }