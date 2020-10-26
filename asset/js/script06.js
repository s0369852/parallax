
/* 
    핵심 포인트는 nav가 스크롤 했을때, 브라우저의 top에 딱 도착을 했을때를 감지해야 한다. 
    offset값과 scroll값을 이용해서 만들면 된다. 
*/
/*
$("#nav").each(function(){          //  항상 함수를 주는 것을 감지를 시켜야 한다. =>  .each / 예를 들어 li태그가 여러개가 있을때, li 각각에다가 class를 주려면 li한번만 적어주면 된다. 
                                        li:nth-child() {} -> li {}, li한테 한꺼번에 준다.
                                        .each는 li 각각한테 한번에 다 함수를 주겠다는 것.
                                        => 결과적으로 #nav한테 계속해서 함수를 주겠다는 것.
                                    //
    var header = $(this);
    var headerOffset = header.offset().top;
    // alert(headerOffset) -> 807.1875 값이 구해진다. 

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        if( wScroll > headerOffset ){
            header.addClass("on");
        } else {
            header.removeClass("on");
        }
    });
});

var navBtn = $(".menu li");
var cont = $("#contents > div");

navBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    var section = cont.eq(index);
    var offset = section.offset().top;
    $("html, body").animate( {"scrollTop": offset}, 600, "easeInSine")

});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll >= cont.eq(0).offset().top ){
        navBtn.removeClass(`active`);
        navBtn.eq(0).addClass(`active`)
    }
    if(wScroll >= cont.eq(1).offset().top ){
        navBtn.removeClass(`active`);
        navBtn.eq(1).addClass(`active`)
    }
    if(wScroll >= cont.eq(2).offset().top ){
        navBtn.removeClass(`active`);
        navBtn.eq(2).addClass(`active`)
    }
    if(wScroll >= cont.eq(3).offset().top ){
        navBtn.removeClass(`active`);
        navBtn.eq(3).addClass(`active`)
    }
    if(wScroll >= cont.eq(4).offset().top ){
        navBtn.removeClass(`active`);
        navBtn.eq(4).addClass(`active`)
    }
    if(wScroll >= cont.eq(5).offset().top ){
        navBtn.removeClass(`active`);
        navBtn.eq(5).addClass(`active`)
    }
});
*/

/*
    script 작업을 할때에는 어떤 원리로 만들 것인지 부터 생각해야 한다. 
*/

var navBtn = $(".menu li");
var cont = $("#contents > div")

navBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    var section = cont.eq(index)
    var offset = section.offset().top;
    $("html, body").animate( {"scrollTop": offset}, 600, "easeInSine" )
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll > 200){
        $("#nav").addClass("on");
    } else if(wScroll == 0) {
        $("#nav").removeClass("on");
    }

    if(wScroll >= cont.eq(0).offset().top ){
        navBtn.removeClass("active");
        navBtn.eq(0).addClass("active");
    }
    if(wScroll >= cont.eq(1).offset().top ){
        navBtn.removeClass("active");
        navBtn.eq(1).addClass("active");
    }
    if(wScroll >= cont.eq(2).offset().top ){
        navBtn.removeClass("active");
        navBtn.eq(2).addClass("active");
    }
    if(wScroll >= cont.eq(3).offset().top ){
        navBtn.removeClass("active");
        navBtn.eq(3).addClass("active");
    }
    if(wScroll >= cont.eq(4).offset().top ){
        navBtn.removeClass("active");
        navBtn.eq(4).addClass("active");
    }
    if(wScroll >= cont.eq(5).offset().top ){
        navBtn.removeClass("active");
        navBtn.eq(5).addClass("active");
    }

});
