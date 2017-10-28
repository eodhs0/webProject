$('.floating-box').mouseenter(function(){  /* 그림에 마우스 들어가면 */
    $(this).css("width", "350px"); /* 넓이 살짝늘려주기 */
    $(this).children(".imagePositionZindex").css("width", "350px"); /* 이미지 넓이도 */
    $(this).children(".imagePositionZindex").animate({opacity:"0.5"}, 1000); /* 투명도 50% */
    $(this).children(".imagePositionZindex").animate({opacity:"1"}, 1000); /* 투명도 원상복귀 */
});

$('.floating-box').mouseleave(function(){  /* 그림에서 마우스 빠져 나오면 */
    $(this).css("width", "320px");
    $(this).children(".imagePositionZindex").css("width", "320px");
});

/* slide 버튼 클릭했을 때 동작 */
$('#slide_button').click(function(){

    /* 모든 content 숨김 */
    $('.divLifeContent').children('.floating-box').hide(1000);
    $('.divLifeContent').children('.floating-box-vertical').hide(1000);
    $('.divLifeContent').children('.floating-box-wide').hide(1000);

    /* 이미지들 배열로 저장 */
    var imageArray = ["#img1", "#img2", "#img3", "#img4", "#img5", "#img6", "#img7", "#img8", "#img9", "#img10", "#img11", "#img12"];
    var idx = 0;


    /* setInterval를 사용해 이미지 하나씩 띄워주고 슬라이드 끝나면 다시 모든 이미지 show*/
    var timer = setInterval(function(){
        $(imageArray[idx]).show(1000);
        $(imageArray[idx]).delay(5000).hide(1000);

        idx++;

        if(idx >= 13){ /* 모든 이미지 다 보여줬으면 */
            clearInterval(timer); /* 반복 중지 하고 */
            for(var j = 0; j < 12; j++) {
                var e = imageArray[j];
                $(e).delay(10000).show(1000);  /* 마지막 사진 없어지고 난 뒤 모든 사진 생성 */
            }
        }
    }, 3000)
    
})

/* 전체화면에서 scroll의 Y좌표가 50보다 크면 navigation bar 투명도 조절 */
var changeNavi = setInterval(function(){
    if((window).scrollY <= 50)
        {$('ul').animate({opacity:"1"}, 1000);}
    else
        {$('ul').animate({opacity:"0.7"}, 1000);}
}, 1000);