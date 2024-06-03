function validateForm(step) {
    let isValid = true;
    let form;
    let min = 999999;
    let max = 100000;
    let OTP;
   
    if (step === 1) {
        document.addEventListener('keydown', function (event) {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                event.preventDefault(); // Prevent form submission on Enter key
            }
        });
        form = document.querySelector('#studentForm');
        let stId = document.querySelector('#stID');
        let stIdFormat = /^([A-Za-z]{2}|\d{4})\d{4,}/;
        if (stId.value.trim() === '') {
            stId.nextElementSibling.textContent = 'Enter your registered id';
            isValid = false;
        } else if (!stIdFormat.test(stId.value)) {
            stId.nextElementSibling.textContent = 'Enter valid registered id';
            isValid = false;
        } else {
            stId.nextElementSibling.textContent = ''; // Clear error message
        }
        // If the form is valid and OTP is correct, submit the form
        if (isValid) {
            // Check if the entered OTP is valid (you need to implement this logic)
                form.submit();
        }
    } else if (step === 2) {
       
    } else if (step === 3) {
        // Add validation for step 3 fields
        // Similar logic as step 1
    }

    return isValid;
   
}