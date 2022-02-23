$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
        $(".nav_back").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp();
        $(".nav_back").stop().slideUp();
    }
);

$(".notice li:eq(0) a").click(
    function(){
        $("#pop_up").fadeIn();
        
    }
);
$(".close").click(
    function(){
        $("#pop_up").fadeOut();
        
    }
);