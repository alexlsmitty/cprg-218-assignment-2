// Select all buttons and sections with the html
const buttons = document.querySelectorAll('button');
const sections = document.querySelectorAll('#main > section');

// Creating function for appling invisible class to all sections
function hideAllSections() {
    sections.forEach(section => {
        section.classList.add('invisible');
    console.log('Sections are hidden, boom');
    });
}

// Creating a function to show all sections by removing the invisible class
function showAllSections() {
    sections.forEach(section => {
        section.classList.remove('invisible');
    console.log('Sections are revealed, oooo');
    });
}

// Function for adding the 'selected' class to a button when clicked
function markButtonAsSelected(clickedButton) {
    // Removes class from every button before adding it the clicked button.
    buttons.forEach(button => {
        button.classList.remove('selected');
    });
    // Adds selected class to clicked button.
    clickedButton.classList.add('selected');
    console.log(`Button ${clickedButton.id} has been selected, woo-hoo!`)
}
// Adding event listeners to every button
buttons.forEach(button => {
    button.addEventListener('click',() =>{
        // Marking clicked button to change style
        markButtonAsSelected(button);
        // Adding a check for the showall-button, which uses showAllSection function
        if (button.id === 'showall-button') {
            showAllSections(); // Shows all sections
            console.log("Sections are unveiled, magical.");
            return; // Exit the function early, job is already done
        }
        // Using previous function to hide all sections otherwise
        console.log(sections)
        hideAllSections();
        console.log('Hiding all sections');
        sections.forEach(section => {
            console.log(`Section: ${section.id}, Classes: ${section.className}`);
        });

        // Constructing corresponding section ids based on button ids
        const targetId = button.id + '-content';
        const targetSection = document.getElementById(targetId);
        console.log(targetSection)

        // When corresponding button is clicked, remove invisible class from section
        if (targetSection) {
            targetSection.classList.remove('invisible');
        } else {
            showAllSections();
        }
    });
});