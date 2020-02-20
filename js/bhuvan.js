$(".logo1").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
    $(this).removeClass("animated1");
  })
  
  $(".logo1").hover(function(){
    $(this).addClass("animated1");        
  })