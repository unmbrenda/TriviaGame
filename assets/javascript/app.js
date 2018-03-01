
function meowClick() {
    $(".grid").hide();
    $(".grid1").show();
    $(".grid2").show();
    $(".grid3").show();
    run();
};

function run() {
    var counter = 60;
    $("#littleTimer").html(counter);
    var interval = setInterval(function () {

        counter--;
        $("#littleTimer").html(counter);
        if (counter === 0) {
            clearInterval(interval);
            finished();
        }
    }, 1000);
};

function check() {
    var numberCorrect = 0;
    var q1 = document.getElementById("question1");
    if (q1.checked === true) {
        numberCorrect++;
    }

    var q2 = document.getElementById("question2");
    if (q2.checked === true) {
        numberCorrect++;
    }

    var q3 = document.getElementById("question3");
    if (q3.checked === true) {
        numberCorrect++;
    }

    var q4 = document.getElementById("question4");
    if (q4.checked === true) {
        numberCorrect++
    }

    var q5 = document.getElementById("question5");
    if (q5.checked === true) {
        numberCorrect++;
    }
    return numberCorrect;
}

function finished() {
    var correctAnswers = check();
    if (correctAnswers === 5){
        $(".grid2").show();
        $(".grid").hide();
        $(".grid1").hide();
        $(".grid3").hide();

    }else {
        $(".grid3").show();
        $(".grid").hide();
        $(".grid1").hide();
        $(".grid2").hide();
    }
}

