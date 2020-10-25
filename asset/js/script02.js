
/* 지난 시간
var navBtn = $("#nav ul li")
var cont = $("#contents > div")

navBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var navBtnIndex = target.index();
    var content = cont.eq(navBtnIndex);
    var offset = content.offset().top;
    $(`html, body`).animate({scrollTop : offset}, 600, "easeInSine")
});
*/

/* 기본 개념.
    내가 현재 몇번째 박스에 있는지를 알고 싶을때, offset Top과 scrollTop값을 비교해서 비교문을 쓰게 되면, 현재 어느 박스에 있고, 어디에 불이 들어오게 해야하는지를 스크립트로 짤 수 있다.
    그래서 원하는 offset Top값과 scrollTop값이 일치하면 addClass로 class를 추가시켜줘야 한다.
    다른 곳으로 넘어가면 기존의 addClass는 removeClas로 class를 삭제해 줘야 한다. 
*/

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

    $(window).scroll(function(){                // (브라우저를 window라고 표현.) 브라우저에 scroll(.scroll = 이벤트)이 됐을때 함수를 설정.
        var wScroll = $(this).scrollTop()       /* 현재 이 브라우저의 scrollTop값을 알아낸다. -> 왜냐면 스크롤 값하고 오프셋 값을 비교해야, 내가 현재 몇번째 박스에 있는지 알아야 하기 때문.
                                                    offset값하고 scrollTop 똑같으면 화면에 보인다. 
                                                */
    /* 
        css로 미리 .active class를 설정해 놓는다. (active를 붙여주면 color 변경)
        2번째 section으로 넘어가면 첫번째 section의 버튼에 active를 지우고 두번째 section의 버튼에다가 active클래스를 달아준다.
        3번째 section으로 넘아가면 두번째 section의 버튼에 active를 지우고 세번째 section의 버튼에다가 active클래스를 달아준다.
    */
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
});


/*
var navBtn = $(`#nav ul li`);
var cont = $(`contents > div`);

navBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    var section = index.eq();
    var offset = section.offset().top;
    $(`html, body`).animate( {scrollTop: offset}, 600, `easeInSine`);

    
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();

        if(wScroll >= cont.eq(0).offset().top ){
            navBtn.removeClass(`active`);
            navBtn.eq(0).addClass(`active`);
        }
        if(wScroll >= cont.eq(1).offset().top ){
            navBtn.removeClass(`active`);
            navBtn.eq(1).addClass(`active`);
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

});
*/