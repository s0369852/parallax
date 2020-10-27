
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
    if(wScroll >= cont.eq(0).offset().top ){
        cont.eq(0).addClass("show");
    }
    /*
    if(wScroll >= cont.eq(1).offset().top - 350 ){
        cont.eq(1).addClass("show");
    }

    => -350이라는 값은 데스크탑이나 태블릿, 모바일에서 보았을 때 다 다른 수치이므로 최적화된 방법은 아니다.
        화면 크기에 따라 불러올 수 있는 값은 $(window).height()
        각각의 디바이스의 브라우저의 height값을 불러온뒤, 똑같은 수치로 나누어주면 각 디바이스의 height값에 맞춰 나온다.
    */
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


