// Get modal elements
const modal = document.getElementById("projectModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector('.close');
const cancelBtn = document.querySelector(".cancel-btn1");

// Open the modal when "Start a New Project" button is clicked
openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// Close the modal and refresh the form when the 'x' button is clicked
closeModalBtn.addEventListener("click", function() {
    closeModalAndResetForm();
});

// Close the modal and refresh the form when the cancel button is clicked
cancelBtn.addEventListener("click", function() {
    closeModalAndResetForm();
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        closeModalAndResetForm();
    }
});

// Function to close modal and reset the form
function closeModalAndResetForm() {
    modal.style.display = "none";
    resetForm();
}

// Function to reset the form
function resetForm() {
    document.getElementById("projectForm").reset(); // Reset all form fields
    const pdfDescriptionText = document.getElementById('pdfDescriptionText');
    pdfDescriptionText.style.display = 'none'; // Hide PDF description when form is reset
    const pdfLink = document.getElementById('pdfLink');
    pdfLink.href = '#'; // Reset the link
    pdfLink.textContent = 'No Project Selected'; // Reset the description text
}
