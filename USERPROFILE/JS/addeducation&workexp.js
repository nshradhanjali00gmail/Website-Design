// document.getElementById('saveButton').addEventListener('click', function() {
//     const form = document.getElementById('workExperienceForm');
//     if (form.checkValidity()) {
//         // Perform your save logic here
//         console.log("Form data can be processed.");
//         $('#workExperienceModal').modal('hide');
//     } else {
//         form.reportValidity();
//     }
// });

// // Disable end date fields if currently working
// document.getElementById('currentRole').addEventListener('change', function() {
//     const endDateMonth = document.getElementById('endDateMonth');
//     const endDateYear = document.getElementById('endDateYear');
//     if (this.checked) {
//         endDateMonth.disabled = true;
//         endDateYear.disabled = true;
//     } else {
//         endDateMonth.disabled = false;
//         endDateYear.disabled = false;
//     }
// });

function clearEducationForm() {
    document.getElementById('educationForm').reset();
}

function saveEducation() {
    const form = document.getElementById('educationForm');
    if (form.checkValidity()) {
        // Perform your save logic here
        console.log("Education form data can be processed.");
        clearEducationForm();
    } else {
        form.reportValidity();
    }
}

function clearWorkExperienceForm() {
    document.getElementById('workExperienceForm').reset();
}

function saveWorkExperience() {
    const form = document.getElementById('workExperienceForm');
    if (form.checkValidity()) {
        // Perform your save logic here
        console.log("Work experience form data can be processed.");
        clearWorkExperienceForm();
    } else {
        form.reportValidity();
    }
}

// Disable end date fields if currently working
document.getElementById('currentRole').addEventListener('change', function() {
    const endDateMonth = document.getElementById('endDateMonth');
    const endDateYear = document.getElementById('endDateYear');
    if (this.checked) {
        endDateMonth.disabled = true;
        endDateYear.disabled = true;
    } else {
        endDateMonth.disabled = false;
        endDateYear.disabled = false;
    }
});
