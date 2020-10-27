
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

    
    // 글씨가 안보이다가 나오게 해주려면 active클래스를 주는 것처럼 글씨를 없앴다가 show를 줘서 나타나게 해야한다. 
    // Text Animation
    if(wScroll >= cont.eq(0).offset().top){
        cont.eq(0).addClass("show");
    }
    if(wScroll >= cont.eq(1).offset().top - $(window).height()/3 ){
        cont.eq(1).addClass("show");
    }
    if(wScroll >= cont.eq(2).offset().top - $(window).height()/3 ){
        cont.eq(2).addClass("show");
    }
    if(wScroll >= cont.eq(3).offset().top - $(window).height()/3 ){
        cont.eq(3).addClass("show");
    }
    if(wScroll >= cont.eq(4).offset().top - $(window).height()/3 ){
        cont.eq(4).addClass("show");
    }
    if(wScroll >= cont.eq(5).offset().top - $(window).height()/3 ){
        cont.eq(5).addClass("show");
    }

    


});


