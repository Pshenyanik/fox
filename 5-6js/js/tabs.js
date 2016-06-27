

$(document).ready(function() {
    var n;
    $(".tabs").on("click", "li:not(.active)", function() {
        n =  $(this).parents(".tabs_block"),  $(this).dmtabs(n)
    }),  $.fn.dmtabs = function(n) {
         $(this).addClass("active").siblings().removeClass("active"), n.find(".box").eq( $(this).index()).show(1, function() {
             $(this).addClass("open_tab")
        }).siblings(".box").hide(1, function() {
             $(this).removeClass("open_tab")
        })
    }
    
    
       $("#inputEmail3").mouseover(function(){
        $("#pods1").css('display','block');
    })
    $("#inputEmail3").mouseout(function(){
        $("#pods1").css('display','none');
    })
   
   
    $("#inputPassword3").mouseover(function(){
        $("#pods2").css('display','block');
    })
    $("#inputPassword3").mouseout(function(){
        $("#pods2").css('display','none');
    })
});

 
 
