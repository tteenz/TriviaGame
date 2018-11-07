var myQuestions = [{
    ques: "How many Infinity Stones exist in the Universe?",
    answers: [
        "20 ",
        "6 ",
        "13 ",
        "2"
    ],
    correct: "6 ",
},
{
    ques: "What power source Fuels Tony Stark's Iron Man suit?",
    answers: [
        "Tesseract ",
        "Arkenstone ",
        "Lithium Ion Battery ",
        "Arc Reactor"
    ],
    correct: "Arc Reactor",
},
{
    ques: "What war was Captain America frozen in?",
    answers: [
        "Cold War ",
        "World War I ",
        "World War II ",
        "American Civil War"
    ],
    correct: "World War II ",
},
{
    ques: "Where does Dr. Strange seek out a cure for his damaged hands?",
    answers: [
        "Japan ",
        "Tibet ",
        "China ",
        "Mongolia"
    ],
    correct: "Tibet ",
},
{
    ques: "Star-Lord's mother is from Earth and his father was from?",
    answers: [
        "Spartax ",
        "Jupiter ",
        "Scarif ",
        "D'esmondia"
    ],
    correct: "Spartax ",
},
{
    ques: "What allowed Hulk to turn?",
    answers: [
        "Radiation ",
        "Food ",
        "Spider bites ",
        "Rage"
    ],
    correct: "Rage",
},
{
    ques: "What is the name of Thor's hammmer?",
    answers: [
        "Balder ",
        "Aesir ",
        "Mjoinir ",
        "Vanir"
    ],
    correct: "Mjoinir ",
},
{
    ques: "Shield's highest ranking agent is?",
    answers: [
        "Steven Rogers ",
        "Nick Fury ",
        "Phil Coulson ",
        "Maria Hill "
    ],
    correct: "Nick Fury ",
},
{
    ques: "What vehicle is the Avengers primary mode of trasnport?",
    answers: [
        "The Quinjet ",
        "Car ",
        "The Blackbird ",
        "The Blackhawk"
    ],
    correct: "The Quinjet ",
},
{
    ques: "Peter Parker worked as a photographer for?",
    answers: [
        "The Daily Planet ",
        "The Rolling Stones ",
        "The New York Times ",
        "The Daily Bugle"
    ],
    correct: "The Daily Bugle",
}
]

var num = ["a", "b", "c", "d"];

var startGame = $("#start-btn").on('click', function () {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    buildQuiz();
});

var buildQuiz = function () {
    for (var j = 0; j < myQuestions.length; j++) {
        $('.questions').prepend('<div class="' + myQuestions[j] + '"></div>');
        $('.questions').append('<h2>' + myQuestions[j].ques + '</h2>');
        for (var i = 0; i < myQuestions[j].answers.length; i++) {
            $('.questions').append('<input type="radio"  name="' + myQuestions[j].ques + '" value="' + myQuestions[j].answers[i] + '"/><label for="' + num[i] + '">' + myQuestions[j].answers[i] + '</label>');
        }
    }
}


var countdown = function (seconds) {

    var timer = setInterval(function () {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            for (var i = 0; i < myQuestions.length; i++) {

                if ($('input:radio[name="' + myQuestions[i].ques + '"]:checked').val() === myQuestions[i].correct) {

                    correctAnswers++;
                } else {
                    wrongAnswers++;
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();

            clearInterval(timer);
            return;
        }
    }, 1000);


    $('#stop-btn').on('click', function () {
        clearInterval(timer);
    })
};

var gradeQuiz = $('#stop-btn').on('click', function () {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    for (var i = 0; i < myQuestions.length; i++) {

        if ($('input:radio[name="' + myQuestions[i].ques + '"]:checked').val() === myQuestions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    countdown();
    $('.container').fadeOut(500);
    $('#resultBox').show();
    $('#correctScreen').append(correctAnswers);
    $('#wrongScreen').append(wrongAnswers);

});


