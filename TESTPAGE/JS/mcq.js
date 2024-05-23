$(document).ready(function() {
    // Show MCQ test on MCQ test link click
    $("a[href='#']").eq(0).click(function() {
      $("#mcqTest").show();
      $("#codingTest").hide();
      return false;
    });

    // Show Coding test on Coding test link click
    $("a[href='#']").eq(1).click(function() {
      $("#mcqTest").hide();
      $("#codingTest").show();
      return false;
    });

    // Handle MCQ form submission
    $("#mcqForm").submit(function(event) {
      event.preventDefault(); // Prevent form submission
      var selectedOption = $("#mcqOptions").val();
      // You can perform further processing with selectedOption here
      alert("Selected Option: " + selectedOption);
    });

    // Handle Coding test submission
    $("#submitCode").click(function() {
      var code = $("#code").val();
      if (code.trim() === "") {
        $("#codingError").show();
      } else {
        $("#codingError").hide();
        // You can perform further processing with the submitted code here
        alert("Submitted Code:\n" + code);
      }
    });
  });





