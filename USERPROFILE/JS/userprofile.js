document.getElementById('upload-photo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photoPreview = document.getElementById('photo-preview');
            photoPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('phone-code').addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    const flagIcon = document.getElementById('flag-icon');
    flagIcon.src = selectedOption.getAttribute('data-flag');
});

document.getElementById('profile-form').addEventListener('submit', function(event) {
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    if (age >= 25) {
        alert('Age must be below 25 to create a profile.');
        event.preventDefault();
    }
});
// function removeInput(element) {
//     $(element).parent().remove();
// }

// $(document).ready(function() {
//     // Function to remove a multi-input item
//     function removeItem(element) {
//         $(element).parent().remove();
//     }

//     // Function to handle input for skills, languages, and services
//     function handleInput(inputId, containerId) {
//         var input = $('#' + inputId);
//         var container = $('#' + containerId);

//         // Event listener for the input field
//         input.on('keydown', function(event) {
//             if (event.keyCode === 13 || event.keyCode === 188) {
//                 event.preventDefault();
//                 var value = input.val().trim();
//                 if (value !== '') {
//                     // Create a new multi-input item
//                     var newItem = $('<div class="multi-input-item"><div class="value">' + value + '</div><div class="remove" onclick="removeItem(this)">x</div></div>');
//                     // Append the new item to the container
//                     container.append(newItem);
//                     // Clear the input field
//                     input.val('');
//                 }
//             }
//         });
//     }

//     // Call handleInput for each input field
//     handleInput('skills', 'skills-container');
//     handleInput('languages', 'languages-container');
//     handleInput('services', 'services-container');
// });
// Function to remove a multi-input item
function removeItem(element) {
    element.parentNode.remove();
}

// Function to handle input for skills, languages, and services
function handleInput(inputId, containerId) {
    var input = document.getElementById(inputId);
    var container = document.getElementById(containerId);

    // Event listener for the input field
    input.addEventListener('keydown', function(event) {
        if (event.keyCode === 13 || event.keyCode === 188) {
            event.preventDefault();
            var value = input.value.trim();
            if (value !== '') {
                // Create a new multi-input item
                var newItem = document.createElement('div');
                newItem.className = 'multi-input-item';
                newItem.innerHTML = '<div class="value">' + value + '</div><div class="remove" onclick="removeItem(this)">x</div>';
                // Append the new item to the container
                container.appendChild(newItem);
                // Clear the input field
                input.value = '';
            }
        }
    });
}

// Call handleInput for each input field
handleInput('skills', 'skills-container');
handleInput('languages', 'languages-container');
handleInput('services', 'services-container');

