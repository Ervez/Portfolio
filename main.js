$(function() {
    $("#containerHeaderH2").hover(function(){
        let temp = $(this).width();
        $(this).css("box-shadow", "inset "+ ((temp | 0)+50) +"px 0 0 0 black");
        $(this).css("padding", "20px");
        }, function(){
        $(this).css("box-shadow", "inset 0 0 0 0 black");
      });

      $(".menuHamb").click(function(){
        $(".bar1").toggleClass("bar1change");
        $(".bar2").toggleClass("bar2change");
        $(".bar3").toggleClass("bar3change");
        $(".navMenu").toggleClass("navMenuMobile");
      });

});