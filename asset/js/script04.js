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
});


        800이하일때, navBtn을 toggle로 닫으면 .menu에 style= "display: none"이 생긴다. 
        이렇게 생기면, 다시 window를 800이상으로 늘렸을 때도 기존의 .menu가 안보이는 현상이 일어나게 된다.
        script는 작업을 하게 되면, 작동이 일어날 때 html이나 css에 속성을 주는 것이 아니라, 태그에 직접적으로 style을 만들어 주기 때문에, 
        우선순위가 가장 최우선이 되어버린다. 
        그렇기 때문에 script로 만들어준 style은 script로 없애줘야 한다. 
    
$(window).resize(function(){ // 브라우저의 스크롤이 바꼈을때는 scroll, 사이즈가 바꼈을때는 resize
    var wWidth = $(this).width(); // 현재의 브라우저의 크기를 알아내기 위한 변수를 할당.

    // 화면 크기가 800px 보다 커질때, style="display: none"을 삭제해야 한다. => 원인을 적어넣고 해석하듯이 script를 짜면 된다. 
    if(wWidth > 800 && $(".menu").is(":hidden")){       // .is() => 검색해주다. / :hidden -> display: none되어 있는 것을 찾아주는 것
        $(".menu").removeAttr("style");                 // .removeAttr() => 속성값 삭제.
    }
});
*/

// 버튼을 클릭하면 사이드 바를 0으로 
$(".navBtn").click(function(e){
    e.preventDefault();
    // $("#side-nav").css("left", "0"); -> 한번 밖에 사용하지 못함.
    // $("#side-nav").addClass("open");                 // .open 클래스를 추가 -> 이렇게 적용하면 animation이 작동이 되질 않는다. 
    // $("#side-nav").animate({"left": "0"}, 200);      // 처음부터 jquery한테 .animate를 적용. -> transition이 없어도 자동으로 animation이 적용이 된다. 
    $("#side-nav").toggleClass("on");
    
    if( $("#side-nav").hasClass("on") ){                // .hasClass() = class가 있는지 물어보는 것.
        $("#side-nav").animate( {"left": "0"}, 200);    // side-nav한테 left를 0으로 주는데 0.2초간 애니메이션 할 것.
        $(".navBtn").text("Close");                     // class가 있어서 열리게 되면 글씨를 open에서 close로 바꿔줘라.
    } else {                                            // 만약에 class가 없으면
        $("#side-nav").animate( {"left": "-300"}, 200); // 다시 left로 -300으로 주는데 0.2초간 애니메이션 할 것. \
        $(".navBtn").text("Open");
    }                
});

var nav = $(".menu li");
var cont = $("#contents > div");

nav.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    var section = cont.eq(index);
    var offset = section.offset().top;
    $("html, body").animate( {"scrollTop": offset }, 600, "easeInSine");
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if( wScroll >= cont.eq(0).offset().top ){
        nav.removeClass("active");
        nav.eq(0).addClass("active");
    }
    if( wScroll >= cont.eq(1).offset().top ){
        nav.removeClass("active");
        nav.eq(1).addClass("active");
    }
    if( wScroll >= cont.eq(2).offset().top ){
        nav.removeClass("active");
        nav.eq(2).addClass("active");
    }
    if( wScroll >= cont.eq(3).offset().top ){
        nav.removeClass("active");
        nav.eq(3).addClass("active");
    }
    if( wScroll >= cont.eq(4).offset().top ){
        nav.removeClass("active");
        nav.eq(4).addClass("active");
    }
    if( wScroll >= cont.eq(5).offset().top ){
        nav.removeClass("active");
        nav.eq(5).addClass("active");
    }
});