$(document).ready(function() {
    var questions = [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
      },
      // Add more questions here
    ];
  
    var currentQuestionIndex = 0;
  
    // Function to render the current question
    function renderQuestion() {
      var currentQuestion = questions[currentQuestionIndex];
      var questionHTML = "<p>" + currentQuestion.question + "</p>";
      currentQuestion.options.forEach(function(option, index) {
        questionHTML += '<div><input type="radio" name="mcqOption" value="' + index + '"> ' + option + '</div>';
      });
      $("#questionContainer").html(questionHTML);
    }
  
    // Show MCQ test section
    $("a[href='#']").eq(0).click(function() {
      $("#mcqTest").show();
      $("#codingTest").hide();
      renderQuestion();
      return false;
    });
  
    // Handle Next button click
    $("#nextBtn").click(function() {
      var selectedOptionIndex = $("input[name='mcqOption']:checked").val();
      if (selectedOptionIndex !== undefined) {
        // Process the selected option (if needed)
        // You can access the selected option using selectedOptionIndex
        // e.g., var selectedOption = questions[currentQuestionIndex].options[selectedOptionIndex];
      }
  
      // Move to the next question
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        renderQuestion();
      } else {
        // No more questions, show completion message or perform further action
        alert("MCQ test completed!");
      }
    });
  
    // Handle Skip button click
    $("#skipBtn").click(function() {
      // Move to the next question
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        renderQuestion();
      } else {
        // No more questions, show completion message or perform further action
        alert("MCQ test completed!");
      }
    });
  
    // Handle Previous button click
    $("#prevBtn").click(function() {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
      }
    });
  });
  