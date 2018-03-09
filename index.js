$(document).ready(function(){
  $("#circle").click(function(){
    $("#circle").animate({height: "300px", width: "300px", top: "30%", left: "35%"})
  })
  $("#square").click(function(){
    $("#square").css({height: "300px", width: "300px", top: "30%", left: "35%"})
  })

  $("#triangle-up").click(function(){
    $("#triangle-up").css({"animation-name": "move",
    "animation-duration": ".6s",
    "animation-iteration-count": "infinite",
    "animation-direction": "alternate"})
  })
});
