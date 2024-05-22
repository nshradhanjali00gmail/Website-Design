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