var _a;
// listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (envent) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experiecne');
    var skillsElement = document.getElementById('skills');
    var RollElement = document.getElementById('rollnumber');
    var QtrElement = document.getElementById('quarter');
    if (nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement && RollElement && QtrElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var rollNumer = RollElement.value;
        var qtr = QtrElement.value;
        //create resume output
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ".concat(name_1, " </span></p>\n<p><strong>Email:</strong> <span id=\"edit-edit\" class=\"editable\"> ").concat(email, "</span> </p>\n<p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n<p><strong>Rollnumber:</strong> <span id=\"edit-rollnumber\" class=\"editable\">").concat(rollNumer, "</span></p>\n<p><strong>Quarter:</strong> <span id=\"edit-edit\" class=\"editable\">").concat(qtr, "</span></p>\n\n<h3>Education</h3>\n<p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n<h3>Expereince</h3>\n<p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error('the resume output are missing');
        }
    }
    else {
        console.error('one or more output are missing');
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll('.editable');
    editableElement.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // replace content
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
