var li_correct_cls = document.getElementsByTagName('li');
var score_span = document.getElementById('score');
var per_span = document.getElementById('per');
var begin_contain = document.getElementById('begin');
var start_btn = document.getElementById('start');
var get_rslt_contain = document.getElementById('get-rslt')
var get_rslt_btn = document.getElementById('get-rslt-btn');
var result_contain = document.getElementById('result');
var ques_cls = document.getElementsByClassName('ques');
var current_ques = document.getElementById('current');
var time_span = document.getElementById('time');
var time_rslt_span = document.getElementById('time-rslt');
var gadget_contain = document.getElementById('gadgets');
var play_again_btn = document.getElementById('play-again');
var l = li_correct_cls.length;
var score = 0;
var quesNo = 1;
var sec = 0;
var min = 0;

function showTime() {
    sec++;
    if (sec >= 59) {
        sec = 0;
        min++;
    }
    time_span.innerHTML = min + " : " + sec;
    console.log(sec + ' ' + min);
}

start_btn.addEventListener('click', function () {
    begin_contain.className += ' hidden';
    ques_cls[0].className = "show";
    gadget_contain.className = "show";
    timer = setInterval(showTime, 900);
})

for (var i = 0; i < li_correct_cls.length; i++) {
    li_correct_cls[i].addEventListener('click', function () {
        if (this.className == 'correct') {
            score++;
        }
        else {
            score--;
        }
        var show = this.parentElement.parentElement.parentElement.parentElement;
        current_ques.innerHTML = ++quesNo;
        show.className = 'hidden';
        show.nextElementSibling.className = 'show';
    }, false)
}

get_rslt_btn.addEventListener('click', function () {
    get_rslt_contain.className = 'hidden';
    result_contain.className = 'show';
    time_rslt_span.innerHTML = min + " : " + sec;
    if (score > 1) {
        var per = (score * 100) / 10;
        score_span.innerHTML = score;
        per_span.innerHTML = per + '%';
    }
    else {
        score_span.innerHTML = "0";
        per_span.innerHTML = "0%";
    }
})

for (var i = l - 3; i < l - 1; i++) {
    li_correct_cls[i].onclick = function () {
        clearInterval(timer);
        gadget_contain.className = 'hidden';
    }
}

play_again_btn.onclick = function() {
    location.reload();
}
