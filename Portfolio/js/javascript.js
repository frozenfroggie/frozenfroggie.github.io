document.addEventListener("DOMContentLoaded", function(event) {

/*
function getPosition(id)
{
  var position = $("#"+id).position().top;
  return position;
}

function newPosition(position,x)
{
  var newPosition = position + x;
  return newPosition;
}

var about = newPosition(getPosition("about"),0);
var portfolio = newPosition(getPosition("portfolio"),30);
var contact = newPosition(getPosition("contact"),10);
*/

  $.scrollTo(0);
  $("#link1").click(function(){
    $.scrollTo("#about",500);
                              });

  $("#link0").click(function(){
  $.scrollTo("#about",500);
                              });

  $("#link2").click(function(){
  $.scrollTo("#portfolio",500);
                              });

  $("#link3").click(function(){
  $.scrollTo("#contact",500);
                              });

});
