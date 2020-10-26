/*
var navBtn = $(".menu li")
var cont = $("#contents > div")

navBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    var section = cont.eq(index);
    var offset = section.offset().top;
    $(`html, body`).animate( {scrollTop: offset}, 600, "easeInSine" )
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll >= cont.eq(0).offset().top ){
        navBtn.removeClass(`active`);
        navBtn.eq(0).addClass(`active`);
    }
    if(wScroll >= cont.eq(1).offset().top ){
        navBtn.removeClass(`active`)
        navBtn.eq(1).addClass(`active`)
    }
    if(wScroll >= cont.eq(2).offset().top ){
        navBtn.removeClass(`active`);
        navBtn.eq(2).addClass(`active`);
    }
    if(wScroll >= cont.eq(3).offset().top ){
        navBtn.removeClass(`active`);
        navBtn.eq(3).addClass(`active`);
    }
    if(wScroll >= cont.eq(4).offset().top ){
        navBtn.removeClass(`active`);
        navBtn.eq(4).addClass(`active`);
    }
    if(wScroll >= cont.eq(5).offset().top ){
        navBtn.removeClass(`active`);
        navBtn.eq(5).addClass(`active`);
    }
    
});

$(".mNav").click(function(){ // mNav를 클릭했을때, 동작이 일어나라.
    // $(".menu").css("display", "block");
    // $(".menu").show();  // => .show() = .css("display", "block") // .show()의 반대는 .hide()
    // $(".menu").fadeIn(); // 반대는 .fadeOut()
    // $(".menu").slideDown(); // .slideUp()
    $(".menu").toggle();
    // $(".menu").fadeToggle();
    //$(".menu").slideToggle();

        800이하일때, navBtn을 toggle로 닫으면 .menu에 style= "display: none"이 생긴다. 
        이렇게 생기면, 다시 window를 800이상으로 늘렸을 때도 기존의 .menu가 안보이는 현상이 일어나게 된다.
        script는 작업을 하게 되면, 작동이 일어날 때 html이나 css에 속성을 주는 것이 아니라, 태그에 직접적으로 style을 만들어 주기 때문에, 
        우선순위가 가장 최우선이 되어버린다. 
        그렇기 때문에 script로 만들어준 style은 script로 없애줘야 한다. 
    
});

$(window).resize(function(){ // 브라우저의 스크롤이 바꼈을때는 scroll값, 사이즈가 바꼈을때는 resize
    var wWidth = $(this).width(); // 현재의 브라우저의 크기를 알아내기 위한 변수를 할당.

    // 화면 크기가 800px 보다 커질때, style="display: none"을 삭제해야 한다. => 원인을 적어넣고 해석하듯이 script를 짜면 된다. 
    if(wWidth > 800 && $(".menu").is(":hidden")){            // .is() => 검색해주다. / :hidden -> display: none되어 있는 것을 찾아주는 것
        $(".menu").removeAttr("style");             // .removeAttr() => 속성값 삭제.
    }
});
*/

/* 
    핵심 포인트는 nav가 스크롤 했을때, 브라우저의 top에 딱 도착을 했을때를 감지해야 한다. 
    offset값과 scroll값을 이용해서 만들면 된다. 
*/

$("#nav").each(function(){          /* 항상 함수를 주는 것을 감지를 시켜야 한다. =>  .each / 예를 들어 li태그가 여러개가 있을때, li 각각에다가 class를 주려면 li한번만 적어주면 된다. 
                                        li:nth-child() {} -> li {}, li한테 한꺼번에 준다.
                                        .each는 li 각각한테 한번에 다 함수를 주겠다는 것.
                                        => 결과적으로 #nav한테 계속해서 함수를 주겠다는 것.
                                    */
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

// $(window).scroll(function(){
//     var wScroll = $(this).scrollTop();

//     if(wScroll >= cont.eq(0).offset().top ){
//         navBtn.removeClass(`active`);
//         navBtn.eq(0).addClass(`active`);
//     }
//     if(wScroll >= cont.eq(1).offset().top ){
//         navBtn.removeClass(`active`)
//         navBtn.eq(1).addClass(`active`)
//     }
//     if(wScroll >= cont.eq(2).offset().top ){
//         navBtn.removeClass(`active`);
//         navBtn.eq(2).addClass(`active`);
//     }
//     if(wScroll >= cont.eq(3).offset().top ){
//         navBtn.removeClass(`active`);
//         navBtn.eq(3).addClass(`active`);
//     }
//     if(wScroll >= cont.eq(4).offset().top ){
//         navBtn.removeClass(`active`);
//         navBtn.eq(4).addClass(`active`);
//     }
//     if(wScroll >= cont.eq(5).offset().top ){
//         navBtn.removeClass(`active`);
//         navBtn.eq(5).addClass(`active`);
//     }
    
// });

