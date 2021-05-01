$(document).ready(function(){
    //js for navbar toggle
    if($(window).width() < 1024)
    {
        $(".nav-toggler-menu").css("display" , "none"); 
    }
 $(".nav-toggler").click(function(){   
   $(".nav-toggler-menu").toggle();
 });
});