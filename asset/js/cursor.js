let btn_yes,
    btn_no,
    cursorItem,
    circle,
    x = 0,
    y = 0,
    mouseX = 0,
    mouseY = 0,
    followingSpeed = 0.09;

window.onload = function(){
    btn_yes = document.querySelector('#yes');
    btn_no = document.querySelector('#no');
    cursorItem = document.querySelector('.cursorItem');
    circle = cursorItem.querySelector('.circle');

    // yes 버튼 이벤트
    btn_yes.addEventListener('mouseover', function(e){
        circle.style.transform = 'scale(0.3)';
    });
    btn_yes.addEventListener('mouseout', function(){
        circle.style.transform = 'scale(1)';
    });

    // no 버튼 이벤트
    btn_no.addEventListener('mouseover', function(e){
        circle.style.transform = 'scale(0.3)';
    });
    btn_no.addEventListener('mouseout', function(e){
        circle.style.transform = 'scale(1)';
    });

    window.addEventListener('mousemove', function(e){
        x = e.clientX;
        y = e.clientY;
        // cursorItem.style.transform = `translate(${x}px , ${y}px)`
    });
    loop()
};

function loop(){
    mouseX += ( x - mouseX ) * followingSpeed;
    mouseY += ( y - mouseY ) * followingSpeed;

    cursorItem.style.transform = `translate( ${mouseX}px, ${mouseY}px )`

    window.requestAnimationFrame(loop);
};