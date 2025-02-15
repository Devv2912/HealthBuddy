document.addEventListener("DOMContentLoaded", function () {
    // Get elements by their IDs
    const patientBtn = document.getElementById("patient-btn");
    const doctorBtn = document.getElementById("doctor-btn");
    const patientForm = document.getElementById("patient-form");
    const doctorForm = document.getElementById("doctor-form");

    // Check if all elements are present
    if (patientBtn && doctorBtn && patientForm && doctorForm) {
        // Function to toggle forms
        function toggleForm(activeBtn, inactiveBtn, activeForm, inactiveForm) {
            activeForm.classList.remove("hidden");
            inactiveForm.classList.add("hidden");
            activeBtn.classList.add("active");
            inactiveBtn.classList.remove("active");
        }

        // Event listener for patient button
        patientBtn.addEventListener("click", function () {
            toggleForm(patientBtn, doctorBtn, patientForm, doctorForm);
        });

        // Event listener for doctor button
        doctorBtn.addEventListener("click", function () {
            toggleForm(doctorBtn, patientBtn, doctorForm, patientForm);
        });
    }
});