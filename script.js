document.addEventListener("DOMContentLoaded", function () {
    const patientBtn = document.getElementById("patient-btn");
    const doctorBtn = document.getElementById("doctor-btn");
    const patientForm = document.getElementById("patient-form");
    const doctorForm = document.getElementById("doctor-form");

    patientBtn.addEventListener("click", function () {
        patientForm.style.display = "block";
        doctorForm.style.display = "none";
        patientBtn.classList.add("active");
        doctorBtn.classList.remove("active");
    });

    doctorBtn.addEventListener("click", function () {
        doctorForm.style.display = "block";
        patientForm.style.display = "none";
        doctorBtn.classList.add("active");
        patientBtn.classList.remove("active");
    });
});
