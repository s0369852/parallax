
var dotBtn = $("#dot ul li");
var cont = $("#contents > div");

dotBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    var section = cont.eq(index);
    var offset = section.offset().top;
    $("html, body").animate( {"scrollTop": offset}, 600, "easeInSine" ); 
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll >= cont.eq(0).offset().top ){
        dotBtn.removeClass("active");
        dotBtn.eq(0).addClass("active");
    }
    if(wScroll >= cont.eq(1).offset().top ){
        dotBtn.removeClass("active");
        dotBtn.eq(1).addClass("active");
    }
    if(wScroll >= cont.eq(2).offset().top ){
        dotBtn.removeClass("active");
        dotBtn.eq(2).addClass("active");
    }
    if(wScroll >= cont.eq(3).offset().top ){
        dotBtn.removeClass("active");
        dotBtn.eq(3).addClass("active");
    }
    if(wScroll >= cont.eq(4).offset().top ){
        dotBtn.removeClass("active");
        dotBtn.eq(4).addClass("active");
    }
    if(wScroll >= cont.eq(5).offset().top ){
        dotBtn.removeClass("active");
        dotBtn.eq(5).addClass("active");
    }
});

