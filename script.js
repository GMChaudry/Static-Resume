// Function to toggle the visibility of the Skills section
function toggleSkills() {
    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    }
}
// Adding event listener to the button
var toggleButton = document.getElementById('toggle-skills');
if (toggleButton) {
    toggleButton.addEventListener('click', toggleSkills);
}
