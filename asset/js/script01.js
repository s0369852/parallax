

var navBtn = $('#nav ul li');          // 변수 nav에 버튼 지정 (=버튼을 변수에 할당(저장))
var cont = $('#contents > div');        // contents를 변수에 할당

navBtn.click(function(event){          // 버튼을 클릭했을때 (.click 이벤트)
    event.preventDefault();             // #의 기본 기능을 차단 시킨다. (#으로 넘어가면 애니메이션이 끊기기 때문.)
    var target = $(this);               /*  버튼을 클릭하면 클릭한 대상을 저장 시켜주는 변수 (버튼을 클릭하면 자기자신을 저장한다.) -> 클릭한 타겟을 변수에 할당
                                            this를 사용하는 이유 => 1. 자기자신을 표현, 2. 내가 몇 번째 버튼을 클릭했는지 알고 싶을때.
                                        */
    var index = target.index();         // 클릭한 타겟에 번호를 할당. (할당된 번호랑 contents랑 연결을 시켜주면 된다.)
    var section = cont.eq(index);       // 클릭한 버튼과 컨텐츠를 연결.
    var offset = section.offset().top;  /* 브라우저의 각 section의 왼쪽 끝 모서리를 offset값이라고 한다. offset값을 알아야 한다. contents안에 들어있는 각 section의 오프셋 값을 할당.
                                            offset값은 각 section의 height값만 추가되는 것을 볼 수 있다. 
                                            보이는 화면에 맞게 나타내고 싶다면, offset값이랑 scroll top값이랑 똑같으면 화면에 보인다. 
                                            offset top값을 scroll top값에 대입해주면 된다. 
                                        */ 

    $("html, body").animate({ scrollTop: offset }, 600, "easeInSine");  // 전체에다가 animate를 줘서 scrollTop값에다가 offset값을 넣어준 것. 
                                                                        // "easeInSine" => jQuery UI 넣어준 것. (효과)
});

/*
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