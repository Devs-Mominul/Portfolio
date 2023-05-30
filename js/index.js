jQuery(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
// (document).ready(function(){
//     $('.preloader').delay(500).fadeOut();
// })

    $(".preloader").delay(500).fadeOut();
$('.back2_top').click(function(){
    $('html,body').animate({
        scrollTop:0,
    },1000)
})
$(window).scroll(function(){
    var minar=$(this).scrollTop();
    if(minar >20){
        $('.back2_top').fadeIn();
    }else{
        $('.back2_top').fadeOut();

    }
    if(minar > 20){
        $('.nav-bar').addClass("minar-bg")
    }
    else{
        $('.nav-bar').removeClass("minar-bg")
    }
})
$(function() {
    // Get the progress bar element
    var progressBar = $('.progress');
  
    // Set the initial value
    var progressValue = 0;
    progressBar.css('width', progressValue + '%');
  
    // Update the progress value (e.g., when a button is clicked)
    $('#increase-progress').on('click', function() {
      progressValue += 10;
      progressBar.css('width', progressValue + '%');
    });
  
    $('#decrease-progress').on('click', function() {
      progressValue -= 10;
      progressBar.css('width', progressValue + '%');
    });
  });
  