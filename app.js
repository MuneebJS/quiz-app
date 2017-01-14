var li_correct_cls = document.getElementsByTagName('li');
var score_span = document.getElementById('score');
var per_span = document.getElementById('per');
var begin_contain = document.getElementById('begin');
var start_btn = document.getElementById('start');
var ques1_contain = document.getElementById('ques1');
var get_rslt_contain = document.getElementById('get-rslt')
var get_rslt_btn = document.getElementById('get-rslt-btn');
var result_contain = document.getElementById('result');

var score = 0;

start_btn.addEventListener('click', function () {
    begin_contain.className += ' hidden';
    ques1_contain.className = "show";
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
        show.className = 'hidden';
        show.nextElementSibling.className = 'show';
    }, false)
}

get_rslt_btn.addEventListener('click', function () {
    get_rslt_contain.className = 'hidden';
    result_contain.className = 'show';
    if (score > 1) {
        var per = (score * 100) / 10;
        score_span.innerHTML = " " + score;
        per_span.innerHTML = " " + per + '%';
    }
    else {
        score_span.innerHTML += "0";
        per_span.innerHTML = "0 %" ;
    }
})
// result_btn.onclick = function () {
    // get_result_contain.className = 'hidden';
    // result_contain.className += ' show';
    // if (score > 1) {
    //     var per = (score * 100) / 10;
    //     score_span.innerHTML = " " + score;
    //     per_span.innerHTML = " " + per + '%';
    // }
    // else {
    //     score_span.innerHTML += " 0";
    // }
// }




