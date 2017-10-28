var text = "론다의 홈페이지에 오신 것을 환영합니다 :)    ";
var cnt = 0;

/* 타이핑효과 주기 */
function printText(){
    document.getElementById('texts').innerHTML = text.substring(0, cnt); /* texts에서 cnt만큼 글자 가져옴 */
    cnt++;
    setTimeout('printText()', 200); /* 불러온 글자만큼 타이핑 후 다음 글자 칠 때 지연 시간. 클수록 느림 */
    
    if(text.length < cnt){ /* text 끝까지 다 출력했을 때 cnt 0으로 줘서 다시 처음부터 */
        cnt = 0;
    }
}

printText(); /* 함수 호출 */





/* 양쪽 론다 사진 깜빡이기 */
$("#londa1").fadeOut(2000).delay(6000).fadeIn(2000).delay(2000); /* fadeout 되면 display는 none으로 됨 */
$("#londa4").delay(2000).fadeIn(2000).delay(2000).fadeOut(2000).delay(4000);  /* 다음 사진이 fadein  되었다가 fadeout */


$("#londa2").fadeOut(2000).delay(6000).fadeIn(2000).delay(2000);
$("#londa3").delay(2000).fadeIn(2000).delay(2000).fadeOut(2000).delay(4000);


var changeImage = setInterval(function(){   /* setInterval 사용해서 12 초간 밑의 코드 반복 */
    $("#londa1").fadeOut(2000).delay(6000).fadeIn(2000).delay(2000); /* fadeout 되면 display는 none으로 됨 */
    $("#londa4").delay(2000).fadeIn(2000).delay(2000).fadeOut(2000).delay(4000);  /* 다음 사진이 fadein  되었다가 fadeout */
    

    $("#londa2").fadeOut(2000).delay(6000).fadeIn(2000).delay(2000);
    $("#londa3").delay(2000).fadeIn(2000).delay(2000).fadeOut(2000).delay(4000);
    
}, 12000);

/* 전체화면에서 scroll의 Y좌표가 50보다 크면 navigation bar 투명도 조절 */
var changeNavi = setInterval(function(){
    if((window).scrollY <= 50)
        {$('ul').animate({opacity:"1"}, 1000);}
    else
        {$('ul').animate({opacity:"0.7"}, 1000);}
}, 1000);

