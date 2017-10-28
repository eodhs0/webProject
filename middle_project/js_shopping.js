var tableArray = ["#foodTable", "#toyTable", "#clothTable", "#houseTable"]; /*각 테이블을 배열에 저장 */

/* 해당 카테고리 선택했을때 나머지 표 다 숨기고 해당 카테고리만 출력 */
$("#clickFood").click(function(){
    for(var i = 0; i < 4; i++)
    {
        $(tableArray[i]).css("display","none");
    }
    $("#foodTable").css("display","block");
})

$("#clickToy").click(function(){
    for(var i = 0; i < 4; i++)
    {
        $(tableArray[i]).css("display","none");
    }
    $("#toyTable").css("display","block");
})

$("#clickCloth").click(function(){
    for(var i = 0; i < 4; i++)
    {
        $(tableArray[i]).css("display","none");
    }
    $("#clothTable").css("display","block");
})

$("#clickHouse").click(function(){
    for(var i = 0; i < 4; i++)
    {
        $(tableArray[i]).css("display","none");
    }
    $("#houseTable").css("display","block");
})


/* 마우스가 테이블안에 들어갔을때, 나왔을때 변화 */
$('td').mouseenter(function(){
    $(this).animate({opacity:"1"}, 10);
})

$('td').mouseleave(function(){
    $(this).animate({opacity:"0.8"}, 10);
})

/* 전체화면에서 scroll의 Y좌표가 50보다 크면 navigation bar 투명도 조절 */
var changeNavi = setInterval(function(){
    if((window).scrollY <= 50)
        {$('ul').animate({opacity:"1"}, 1000);}
    else
        {$('ul').animate({opacity:"0.7"}, 1000);}
}, 1000);

/* 리뷰 텍스트들에 마우스를 올리면 글자 크기 키우기 */
$('#natural').click(function(){
    $(this).stop().animate({'border-radius':120}, 1000);
})

$('.tdText').mouseenter(function(){
    $(this).animate({'font-size':'25px'});
})

$('.tdText').mouseleave(function(){
    $(this).animate({'font-size':'16px'});
})