// listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(envent){
   event?.preventDefault();

   //type assertion
   const nameElement = document.getElementById('name') as HTMLInputElement;
   const emailElement = document.getElementById('email') as HTMLInputElement;
   const phoneElement = document.getElementById('phone') as HTMLInputElement;
   const educationElement = document.getElementById('education') as HTMLInputElement;
   const experienceElement = document.getElementById('experiecne') as HTMLInputElement;
   const skillsElement = document.getElementById('skills') as HTMLInputElement;
   const RollElement = document.getElementById('rollnumber') as HTMLInputElement;
   const QtrElement = document.getElementById('quarter') as HTMLInputElement;

   if(nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement && RollElement && QtrElement)
{
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const skills = skillsElement.value;
    const experience = experienceElement.value;
    const rollNumer = RollElement.value;
    const qtr = QtrElement.value;

    //create resume output
const resumeOutput = `
<h2>Resume</h2>
<p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span></p>
<p><strong>Email:</strong> <span id="edit-edit" class="editable"> ${email}</span> </p>
<p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
<p><strong>Rollnumber:</strong> <span id="edit-rollnumber" class="editable">${rollNumer}</span></p>
<p><strong>Quarter:</strong> <span id="edit-edit" class="editable">${qtr}</span></p>

<h3>Education</h3>
<p id="edit-education" class="editable">${education}</p>

<h3>Expereince</h3>
<p id="edit-experience" class="editable">${experience}</p>

<h3>Skills</h3>
<p id="edit-skills" class="editable">${skills}</p>

`;

const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
resumeOutputElement.innerHTML = resumeOutput
makeEditable();
}else{
    console.error('the resume output are missing')
}
}else{
    console.error('one or more output are missing')

}


})
function makeEditable(){
    const editableElement = document.querySelectorAll('.editable');
    editableElement.forEach(element =>
    {
        element.addEventListener('click', function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            // replace content
            if(currentElement.tagName === "P" || currentElement.tagName === 'SPAN'){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing-input')

                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value
                    currentElement.style.display = 'inline'
                    input.remove()
                })

                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus() 
            }
        })
    }
    )
}
