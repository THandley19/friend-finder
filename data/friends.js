var userAnswers = [];

$("#submitButton").on("click", function () {
    event.preventDefault();

    var userInput = {
        name: $('#nameInput').val().trim(),
        photo: $('#photoInput').val().trim(),
        scores: [
            $('#question1').val().trim(),
            $('#question2').val().trim(),
            $('#question3').val().trim(),
            $('#question4').val().trim(),
            $('#question5').val().trim(),
            $('#question6').val().trim(),
            $('#question7').val().trim(),
            $('#question8').val().trim(),
            $('#question9').val().trim(),
            $('#question10').val().trim()
        ]
    };
    console.log(userInput)
})

