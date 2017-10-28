/* 그림 클릭하면 설명이 슬라이드로 출력 */
$("#food1").click(function(){
    $("#food_p1").slideToggle(500);
});

$("#food2").click(function(){
    $("#food_p2").slideToggle(500);
});

$("#food3").click(function(){
    $("#food_p3").slideToggle(500);
});

$("#food4").click(function(){
    $("#food_p4").slideToggle(500);
});

$("#food5").click(function(){
    $("#food_p5").slideToggle(500);
});

$("#food6").click(function(){
    $("#food_p6").slideToggle(500);
});

$("#food7").click(function(){
    $("#food_p7").slideToggle(500);
});

$("#food8").click(function(){
    $("#food_p8").slideToggle(500);
});

$("#food9").click(function(){
    $("#food_p9").slideToggle(500);
});

$("#food10").click(function(){
    $("#food_p10").slideToggle(500);
});


/* Quiz Code */

var tableArray = ["#info", "#Quiz1", "#Quiz2", "#Quiz3", "#Quiz4", "#Quiz5", "#Quiz6", "#sendAnswer"];
idx = 0;

$("#Q1").click(function(){
    idx = 1;
    for(var i = 0; i < 8; i++)
    {
        $(tableArray[i]).css("display", "none");
    }
    $("#Quiz1").css("display", "block");
});

$("#Q2").click(function(){
    idx = 2;
    for(var i = 0; i < 8; i++)
    {
        $(tableArray[i]).css("display", "none");
    }
    $("#Quiz2").css("display", "block");
});

$("#Q3").click(function(){
    idx = 3;
    for(var i = 0; i < 8; i++)
    {
        $(tableArray[i]).css("display", "none");
    }
    $("#Quiz3").css("display", "block");
});

$("#Q4").click(function(){
    idx = 4;
    for(var i = 0; i < 8; i++)
    {
        $(tableArray[i]).css("display", "none");
    }
    $("#Quiz4").css("display", "block");
});

$("#Q5").click(function(){
    idx = 5;
    for(var i = 0; i < 8; i++)
    {
        $(tableArray[i]).css("display", "none");
    }
    $("#Quiz5").css("display", "block");
});

$("#Q6").click(function(){
    idx = 6;
    for(var i = 0; i < 8; i++)
    {
        $(tableArray[i]).css("display", "none");
    }
    $("#Quiz6").css("display", "block");
});

$("#send").click(function(){
    idx = 7;
    for(var i = 0; i < 8; i++)
    {
        $(tableArray[i]).css("display", "none");
    }
    $("#sendAnswer").css("display", "block");

});

/* next button */
$("#next").click(function(){
    $(tableArray[idx]).css("display", "none");
    $(tableArray[++idx]).css("display", "block");  /* 선위증가로 먼저 증가하고 페이지 이동 */
    if(idx > 6){idx--;}
})

/* next/prev button */

$("#prev").dblclick(function(){
    $(tableArray[idx]).css("display", "none");
    $(tableArray[--idx]).css("display", "block");  /* 선위감소로 먼저 증가하고 페이지 이동 */
    if(idx < 0){idx++;}
})

/* 체점 */
var score1 = 0;
var score2 = 0;
var score3 = 0;
var score4 = 0;
var score5 = 0;
var score6 = 0;
var sumScore = 0;

$("#sa").click(function(){
    if($("#a1").is(":checked")) {
         score1=1;   
    }
    if($("#a2").is(":checked")) {
         score2=1;   
    }
    if($("#a3").is(":checked")) {
         score3=1;   
    }
    if($("#a4").is(":checked")) {
         score4=1;   
    }
    if($("#a5").is(":checked")) {
         score5=1;   
    }
    if($("#a6").is(":checked")) {
         score6=1;   
    }
    sumScore = score1+score2+score3+score4+score5+score6;

    switch(sumScore) {
        case 0:
            alert(score1+" "+score2+" "+score3+" "+score4+" "+score5+" "+score6+"\n0개 맞추셨어요... 론다와 강아지에 대해 너무 모르시네요.");
            break;
        case 1:
            alert(score1+" "+score2+" "+score3+" "+score4+" "+score5+" "+score6+"\n1개 맞추셨어요.. 론다와 강아지에 대해 잘 모르시네요.");
            break;
        case 2:
            alert(score1+" "+score2+" "+score3+" "+score4+" "+score5+" "+score6+"\n2개 맞추셨어요. 론다와 강아지에 대해 조금 아시네요.");
            break;
        case 3:
            alert(score1+" "+score2+" "+score3+" "+score4+" "+score5+" "+score6+"\n3개 맞추셨어요.");
            break;
        case 4:
            alert(score1+" "+score2+" "+score3+" "+score4+" "+score5+" "+score6+"\n4개 맞추셨어요! 아직 살짝 부족하지만 잘하셨어요.");
            break;
        case 5:
            alert(score1+" "+score2+" "+score3+" "+score4+" "+score5+" "+score6+"\n5개 맞추셨어요!! 강아지 한마리 키워보는거 어때요?");
            break;
        case 6:
            alert(score1+" "+score2+" "+score3+" "+score4+" "+score5+" "+score6+"\n6개 맞추셨어요!!! 강아지에게 사랑받으실 거에요.");
            break;
    }
})


/* 전체화면에서 scroll의 Y좌표가 50보다 크면 navigation bar 투명도 조절 */
var changeNavi = setInterval(function(){
    if((window).scrollY <= 50)
        {$('ul').animate({opacity:"1"}, 1000);}
    else
        {$('ul').animate({opacity:"0.7"}, 1000);}
}, 1000);
