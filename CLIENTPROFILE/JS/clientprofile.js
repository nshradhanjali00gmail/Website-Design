document.getElementById('upload-photo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photoPreview = document.getElementById('photo-preview');
            photoPreview.src = e.target.result;
        };
        reader.onerror = function(e) {
            console.error('File reading error:', e.target.error);
        };
        reader.readAsDataURL(file);
    } else {
        console.error('No file selected.');
    }
});

document.getElementById('phone-code').addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    const flagIcon = document.getElementById('flag-icon');
    if (selectedOption) {
        flagIcon.src = selectedOption.getAttribute('data-flag');
    } else {
        console.error('No option selected.');
    }
});

function removeItem(element) {
    element.parentNode.remove();
}

function handleInput(inputId, containerId) {
    var input = document.getElementById(inputId);
    var container = document.getElementById(containerId);
    if (input && container) {
        input.addEventListener('keydown', function(event) {
            if (event.keyCode === 13 || event.keyCode === 188) {
                event.preventDefault();
                var value = input.value.trim();
                if (value !== '') {
                    var newItem = document.createElement('div');
                    newItem.className = 'multi-input-item';
                    newItem.innerHTML = '<div class="value">' + value + '</div><div class="remove" onclick="removeItem(this)">x</div>';
                    container.appendChild(newItem);
                    input.value = '';
                }
            }
        });
    } else {
        console.error('Input or container element not found.');
    }
}

handleInput('skills', 'skills-container');
handleInput('languages', 'languages-container');
handleInput('services', 'services-container');