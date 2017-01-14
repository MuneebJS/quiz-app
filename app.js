var li_correct_cls = document.getElementsByTagName('li');
var score_span = document.getElementById('score');
var per_span = document.getElementById('per');
var begin_contain = document.getElementById('begin');
var start_btn = document.getElementById('start');
var ques1_contain = document.getElementById('ques1');
var score = 0;


start_btn.addEventListener('click', function(){
    begin_contain.className += ' hidden';
    ques1_contain.className = "show";
})
for (var i = 0; i < li_correct_cls.length; i++) {
    li_correct_cls[i].addEventListener('click', function () {
        if (this.className == 'correct') {
            score++;
            console.log(score);
        }
        else {
            score--;
            console.log(score);
        }
        var show = this.parentElement.parentElement.parentElement.parentElement;
        show.className = 'hidden';
        show.nextElementSibling.className = 'show';
    }, false)
}

result_btn.onclick = function () {
    get_result_contain.className = 'hidden';
    result_contain.className += ' show';
    if (score > 1) {
        var per = (score * 100) / 10;
        score_span.innerHTML += " " + score;
        per_span.innerHTML += " " + per + '%';
    }
    else {
        score_span.innerHTML += " 0";
    }
}




