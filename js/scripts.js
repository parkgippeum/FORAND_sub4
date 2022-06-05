$(function(){
    $(".main a").click(function(){
        $(".popup").fadeIn();
    });
    $(".popup a").click(function(){
        $(".popup").fadeOut();
    });
});
