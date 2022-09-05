console.log("Working");
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>30){
            $(".navbar").addClass("stickey")
        }
        else{
            $(".navbar").removeClass("stickey")

        }
        if(this.scrollY > 450){
            $('.scroll-up-btn').addClass("show")
        }
        else{
            $('.scroll-up-btn').removeClass("show")
        }
    })

    //toggle menu

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    })


    // typing
    var typed = new Typed(".typing",{
        strings:['Youtuber.', 'Developer.', 'Designer.'],
        typeSpeed:100,
        backSpeed:80,
        loop:true
    })
    var typed = new Typed(".typing2",{
        strings:['Developer.','Youtuber.', 'Designer.',  "Freelancer."],
        typeSpeed:100,
        backSpeed:80,
        loop:true
    })


    // team section
    $('.carousel').owlCarousel({
        margin:30,
        loop:true,
        autoplayTimeOut:1000,
        autoplayHoverPause:true,
        responsive:{
           0:{
               items:1,
               nav:false
           }, 
           600:{
               items:2,
               nav:false
           } ,
           1000:{
               items:3,
               nav:false
           } 
        }
    })
})

// smooth scroll
$('.navbar a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop:$(hash).offset().top
        },850)
    }
})
$('.scroll-up-btn a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop:$(hash).offset().top
        },850)
    }
})
