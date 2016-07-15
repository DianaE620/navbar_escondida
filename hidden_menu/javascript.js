$(document).ready(function(){

  var show = 0;

  $(".menu").click(function(){
    //alert();
    if(show == 0){
      $("nav").toggle(1000);
      $(".container").animate({ "margin-left" : "150px"}, 1000);
      show = 1
    }else {
      $("nav").toggle(1000);
      $(".container").animate({ "margin-left" : "60px"}, 1000);
      show = 0
    }

  });

});

