document.addEventListener('DOMContentLoaded', function() {
    const resumeForm = document.getElementById('resumeForm');
    const resumeOutput = document.getElementById('resumeOutput');

    resumeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const experience = document.getElementById('experience').value;
        const education = document.getElementById('education').value;

        document.getElementById('outputName').textContent = fullName;
        document.getElementById('outputEmail').textContent = `Email: ${email}`;
        document.getElementById('outputPhone').textContent = `Phone: ${phone}`;
        document.getElementById('outputExperience').textContent = experience;
        document.getElementById('outputEducation').textContent = education;

        resumeOutput.classList.remove('hidden');
    });
});
