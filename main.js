$(function() {
    $("#containerHeaderH2").hover(function(){
        let temp = $(this).width();
        console.log(temp | 0);
        $(this).css("box-shadow", "inset "+ ((temp | 0)+50) +"px 0 0 0 black");
        $(this).css("padding", "20px");
        }, function(){
        $(this).css("box-shadow", "inset 0 0 0 0 black");
      });
});