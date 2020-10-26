/*
var navBtn = $("#nav ul li");
var cont =$("#contents > div");

// navBtn.click(function(){}) -> 무언가를 클릭했을때, 어떤 동작이 일어나게 하려면.
    navBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        //alert(index);
        var section = cont.eq(index);
        var offset = section.offset().top;
        //alert(offset); -> 각 section의 offset Top값.
        $(`html, body`).animate({ scrollTop : offset }, 600, "easeInSine");
    });

    $(window).scroll(function(){                // (브라우저를 window라고 표현.) 브라우저에 scroll(.scroll = 이벤트)이 됐을때 함수를 설정.
        var wScroll = $(this).scrollTop()       /* 현재 이 브라우저의 scrollTop값을 알아낸다. -> 왜냐면 스크롤 값하고 오프셋 값을 비교해야, 내가 현재 몇번째 박스에 있는지 알아야 하기 때문.
                                                    offset값하고 scrollTop 똑같으면 화면에 보인다. 
                                                
    
        css로 미리 .active class를 설정해 놓는다. (active를 붙여주면 color 변경)
        2번째 section으로 넘어가면 첫번째 section의 버튼에 active를 지우고 두번째 section의 버튼에다가 active클래스를 달아준다.
        3번째 section으로 넘아가면 두번째 section의 버튼에 active를 지우고 세번째 section의 버튼에다가 active클래스를 달아준다.
    
        if(wScroll >= cont.eq(0).offset().top ){     // "현재 브라우저의 scrollTop값과 section1의 offset Top값이 같거나 크면" 이라는 조건. (스크롤을 내릴 수록 scrollTop값은 커지기 때문.)
            navBtn.removeClass(`active`);           // 조건이 맞아서 화면이 보이면 기존에 있던 active클래스를 지워라.
            navBtn.eq(0).addClass(`active`);        // 첫번째 버튼에 다가 addClass로 active클래스를 추가해줘라. 
        }
        if(wScroll >= cont.eq(1).offset().top ){
            navBtn.removeClass(`active`);
            navBtn.eq(1).addClass(`active`);
        }
        if(wScroll >= cont.eq(2).offset().top ){
            navBtn.removeClass(`active`);
            navBtn.eq(2).addClass(`active`)
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
*/

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

    /*
        script는 작업을 하게 되면, 작동이 일어날 때 html이나 css에 속성을 주는 것이 아니라, 태그에 직접적으로 style을 만들어 주기 때문에, 
        우선순위가 가장 최우선이 되어버린다. 
        그렇기 때문에 script로 만들어준 style은 script로 없애줘야 한다. 
    */
});

$(window).resize(function(){ // 브라우저의 스크롤이 바꼈을때는 scroll값, 사이즈가 바꼈을때는 resize
    var wWidth = $(this).width(); // 현재의 브라우저의 크기를 알아내기 위한 변수를 할당.

    // 화면 크기가 800px 보다 커질때, style="display: none"을 삭제해야 한다. => 원인을 적어넣고 해석하듯이 script를 짜면 된다. 
    if(wWidth > 800 && $(".menu").is(":hidden")){            // .is() => 검색해주다. / :hidden -> display: none되어 있는 것을 찾아주는 것
        $(".menu").removeAttr("style");             // .removeAttr() => 속성값 삭제.
    }
});