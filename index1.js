// $("p").html("Meow meowww");
// $("p").css(
//     {
//     color:"blue"
//     }
//     );

var p=$('p');
var p1=p.eq(0);
p1.html("Hello Jquery");
p.eq(2).css({color:"blue"})

//single
$('.para1').css('color','red');

//for multiple properties
$(".para1").css({
    fontSize:"100px",
    color:"blue"

});

$('#div1').css({
    backgroundColor:"cyan",
    height:"100px",
    width:"300px"
});

$('#div1 p').css({
   fontSize:"60px",
   color:"black"
});

// $('#div1 p').click(function(){
//     alert("ola guys");
// });
// or use on it is pretty much same as event handler
$('#div1 p').on('click',function(){
    var element=$(this);
    element.width(element.width()+10+"px"); //nnot working
//    $('#div1 p').html("ola" )
  element.html("ola");
});
