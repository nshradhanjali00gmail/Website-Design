document.getElementById('submit-btn').addEventListener('click', function() {
    var code = document.getElementById('code-editor').value.trim(); // Trim whitespace

    // Check if code is empty
    if (code === "") {
        alert("Please write some code before submitting.");
        return; // Stop execution
    }

    // Here you would verify the code, for simplicity let's just display a success message
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = "<p class='text-success'>Code submitted successfully!</p>";
});
// add any other verification

$(document).ready(function(){
    // Function to handle clicking on a question in the question list
    $('#question-list li').click(function(){
        // Remove 'active' class from all list items
        $('#question-list li').removeClass('active');
        // Add 'active' class to the clicked list item
        $(this).addClass('active');
        // Get the question ID from the data attribute
        var questionId = $(this).data('question-id');
        // Hide all answer sheets
        $('.answer-sheet').hide();
        // Show the answer sheet corresponding to the clicked question
        $('#answer-sheet-' + questionId).show();
    });
});

