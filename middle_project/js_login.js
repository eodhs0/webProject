$('#login_button').click(function(){
    var d = $("#id1").val(); /* id1에 입력된 값 받아오기 */
    if(d.length > 15 || d.length < 4)
    {
        alert("아이디를 잘못 입력하셨습니다. 아이디는 4자 이상, 15자 이하입니다.");
        $("#text_welcome").text("Fail SignIn");
        for(var i = 0; i < 3; i++)
        {
            $(".loginImage").fadeOut(1000);
            $(".loginImage").fadeIn(1000);
        }
    }
    else 
    {
        alert("로그인되셨습니다.");
        $("#text_welcome").text("Seccess SignIn");
    }
});

$('input').focus(function() {  /*input에 마우스 클릭했을 때 옆의 span에 속성중 hidden 속성 삭제하기 */
    $(this).next('span').removeAttr('hidden');
});
$('input').blur(function() {
    $(this).next('span').attr('hidden', 'hidden');
});

$('#signup_button').click(function(){
    var msg = "";
    var id = $('#id2').val();
    var email = $('#email1').val();
    var pw = $('#pw1').val();
    var name = $('#name1').val();
    var phone = $('#phone1').val();

    var flag = 0;

    if(id.length > 15 || id.length < 4)
    {
        msg += "ID의 길이가 잘못되었습니다.\n";
        flag = 1;
    }
    if(email.indexOf("@") == -1) /* email문자열 안에 @가 포함되지 않았을 경우*/
    {
        msg += "email 형식이 잘못되었습니다.\n";
        flag = 1;
    }
    if(pw.length > 15 || pw.length < 6)
    {
        msg += "비밀번호의 길이가 잘못되었습니다.\n";
        flag = 1;
    }
    if(phone.length != 11)
    {
        msg += "번호의 형식이 잘못되었습니다.\n";
        flag = 1;
    }
    
    if(flag == 1)  /* 입력에 오류가 있을 때 */
    {
        alert(msg);
        $("#text_welcome").text("Fail SignUp");
        for(var i = 0; i < 3; i++)
        {
            $(".loginImage").fadeOut(1000);
            $(".loginImage").fadeIn(1000);
        }
    }
    else
    {
        alert("회원가입에 성공하셨습니다.");
        $("#text_welcome").text("Seccess SignUp");
    }
});

$("#text_welcome").animate({opacity:"1"}, 3000);  /* 3초동안 텍스트 투명도 0으로 만들기! */

/* 전체화면에서 scroll의 Y좌표가 50보다 크면 navigation bar 투명도 조절 */
var changeNavi = setInterval(function(){
    if((window).scrollY <= 50)
        {$('ul').animate({opacity:"1"}, 1000);}
    else
        {$('ul').animate({opacity:"0.7"}, 1000);}
}, 1000);