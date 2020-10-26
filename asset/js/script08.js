/*
var navBtn = $(".menu li");
var cont = $("#contents > div");

navBtn.click(function(e){
    e.preventDefalut();
    var target = $(this);
    var index = target.index();
    var section = cont.eq(index);
    var offset = section.offset().top;
    $("html, body").animate( {"scrollTop": offset}, 600, "easeInSine");
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

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

var wHeight = $(window).height();       // 브라우저의 height값이 필요로 하다. (보이는 화면의 높이값)
var dHeight = $(document).height();     // 문서(document)의 height값이 필요하다. (문서 전체의 높이값)
                                        // alert(wHeight);     // 937 -> 현재 보고 있는 화면의 높이값.
                                        // alert(dHeight);     // 5622 -> 문서 전체의 높이값. 
var navHeight = $("#nav").outerHeight();    // height, outerHeight, innerHeight => padding, margin의 유무에 따라서 값이 틀려진다.  (outerHeight-> padding, margin 다 포함한 높이값.)
                                            // alert(navHeight); // 61 -> 그냥 height값으로 계산해도 값은 똑같이 나온다. css설정에서 padding, margin이 따로 들어가지 않았기 떄문. 


// 스크롤 값의 마지막 위치값을 알아내서 이걸 기준으로 스크롤을 올렸는지, 내렸는지 확인해야 하기 때문. 
var lastScrollTop = 0;
var moveScroll;                       // 현재 스크롤을 감지할 수 있는 변수

$(window).scroll(function(event){     // 현재 스크롤이 제대로 움직이고 있는지, 스크롤을 감지
                                      //alert("scroll 감지 확인"); -> 새로 고침을 하게 되면 스크롤이 감지되기 때문에 무조건 뜬다.
    moveScroll = true;                // 인지하고 있는 스크롤 값을 변수 moveScroll에다가 넣어준다. 움직일때 마다 스크롤을 감지. -> 스크롤이 움직이면 moveScroll에 true값이 들어간다.
});


//    스크롤을 감지해야 하는데, 1초마다 한번씩 감지하는지, 몇초 마다 한번씩 감지할지에 대해 설정해줘야 한다.
//    함수를 일정한 간격으로 실행시켜주기 위해서는 setInterval이라는 것을 사용한다.
//    setInterval에 함수를 설정하고, 실행문 뒤에 ',시간'을 넣어주면 된다. 

setInterval(function(){               // 스크롤 감지를 0.25초마다 실행. 
    if(moveScroll){                   //  스크롤이 감지가 되면, hasScroll이라는 함수를 실행하라.
        hasScroll();
        moveScroll = false;           // hasScroll()함수가 실행이 되고 나면, 다시 moveScroll에 false를 대입해 준다.
    }
}, 250);
// 처음에 스크롤이 움직이면 moveScroll에 true라는 값이 들어가고, moveScroll이 움직이는 것을 감지하면, hasScroll 함수를 실행시키고, 실행시키고 나면 다시 moveClass에 다가 false라는 값을 넣어준다. 그 다음에도 0.25초가 지났을 때, 다시 감지하게 되면 moveScroll에 true라는 값이 들어가고 ... 를 반복한다.   

function hasScroll(){                 // hasScroll이라는 함수를 만들어 준다. (setInterval if문에서 실행이 될.)
                                      // 스크롤을 올렸을때, 내렸을때 실행 코드를 넣어주면 된다. 
    var wScroll = $(this).scrollTop();                      // 현재의 scrollTop값.

    if(wScroll > lastScrollTop && wScroll > navHeight ){    // 현재의 scrollTop값과 마지막 scrollTop값을 비교할 거다.
        // 스크롤을 내렸을 때
        $("#nav").addClass("on");
    } else {
        // 스크롤을 올렸을 때
        if (wScroll + wHeight < dHeight) {                  // 현재 스크롤 값과 현재 보이는 화면의 높이값을 더한 것보다 전체 문서의 높이값이 크다는 건 스크롤을 올렸다는 말. 
            $("#nav").removeClass("on");
        }
    }
    lastScrollTop = wScroll;    // lastScrollTop 값에 0을 넣어줬는데, 여기에 wScorll값을 넣어주지 않으면 계속 0이기 때문에 한번만 나오고 만다. (wScroll값을 넣어줘야 계속 유지가 된다.) 
};
*/


/* 함수가 실행되는 원리.
alert("함수"); // => 그냥 실행이 된다. 

function alr(){
    alert("함수"); // 이 상태로는 실행이 안된다.
}

alr();      // alr이라고 만든 함수를 실행시키고자 선언. (함수를 실행할 수 있는 호출시키는 부분이 필요하다.) 
            // 반복적으로 사용하는 것들을 함수화 시키게 되면, 재활용해서 계속 사용할 수가 있다. 
*/

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