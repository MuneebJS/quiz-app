var li_correct_cls = document.getElementsByTagName('li');
var score_span = document.getElementById('score');
var per_span = document.getElementById('per');
var result_btn = document.getElementById('result-btn');
var result_contain = document.getElementById('result');
var get_result_contain = document.getElementById('get-result');
var dialogue_box_corr = document.getElementById('dialogue-box-corr');
var dialogue_box_incorr = document.getElementById('dialogue-box-incorr');
var score = 0;


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
        var show = this.parentElement.parentElement;
        show.className = 'hidden';
        show.nextElementSibling.className = 'show';
    }, false)
}


result_btn.onclick = function () {
    get_result_contain.style.display = 'none';
    result_contain.className = 'show';
    var per = (score * 100) / 10;
    score_span.innerHTML += " " + score;
    per_span.innerHTML += " " + per + '%';
}




