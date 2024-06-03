function isValidOTP(otp) {
    // Implement your OTP validation logic here
    // For example, if you have a predefined OTP, you can check it like this:
    const predefinedOTP = '123456'; // This is just an example. Use your actual OTP logic.
    return otp === predefinedOTP;
}

function validateForm(step) {
    let isValid = true;
    let form;
    let min = 100000; // Corrected the min value to be 100000
    let max = 999999; // Corrected the max value to be 999999
    let OTP;

    if (step === 1) {
        document.addEventListener('keydown', function (event) {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                event.preventDefault(); // Prevent form submission on Enter key
            }
        });
        form = document.querySelector('#studentForm');
        let stFName = document.querySelector('#stFName');
        let stLName = document.querySelector('#stLName');
        let courseName = document.querySelector('#courseName');
        let stId = document.querySelector('#stID');
        let stIdFormat = /^([A-Za-z]{2}|\d{4})\d{4,}/;
        let stEmail = document.querySelector('#stEmail');
        let stEmailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let stMobile = document.querySelector('#stMobile');
        let stMobileFormat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

        if (stFName.value.trim() === '') {
            stFName.nextElementSibling.textContent = 'Enter first name';
            isValid = false;
        } else {
            stFName.nextElementSibling.textContent = ''; // Clear error message
        }
        if (stLName.value.trim() === '') {
            stLName.nextElementSibling.textContent = 'Enter last name';
            isValid = false;
        } else {
            stLName.nextElementSibling.textContent = ''; // Clear error message
        }
        if (courseName.value.trim() === '') {
            courseName.nextElementSibling.textContent = 'Enter Course Name';
            isValid = false;
        } else {
            courseName.nextElementSibling.textContent = ''; // Clear error message
        }
        if (stId.value.trim() === '') {
            stId.nextElementSibling.textContent = 'Enter your registered id';
            isValid = false;
        } else if (!stIdFormat.test(stId.value)) {
            stId.nextElementSibling.textContent = 'Enter valid registered id';
            isValid = false;
        } else {
            stId.nextElementSibling.textContent = ''; // Clear error message
        }
        if (stEmail.value.trim() === '') {
            stEmail.nextElementSibling.textContent = 'Enter registered email';
            isValid = false;
        } else if (!stEmailFormat.test(stEmail.value)) {
            stEmail.nextElementSibling.textContent = 'Enter valid registered email';
            isValid = false;
        } else {
            stEmail.nextElementSibling.textContent = ''; // Clear error message
        }
        if (stMobile.value.trim() === '') {
            stMobile.nextElementSibling.textContent = 'Enter registered mobile number';
            isValid = false;
        } else if (!stMobileFormat.test(stMobile.value)) {
            stMobile.nextElementSibling.textContent = 'Enter valid registered mobile number';
            isValid = false;
        } else {
            stMobile.nextElementSibling.textContent = ''; // Clear error message
        }
    } else if (step === 2) {
        form = document.querySelector('#studentForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission behavior

            // Reset isValid flag for step 2 validation
            isValid = true;

            // Validation for step 2 fields
            let stOTP = document.querySelector('#stOTP');
            let stOTPValue = stOTP.value.trim();

            if (stOTPValue === '') {
                stOTP.nextElementSibling.textContent = 'Enter OTP';
                isValid = false;
            } else if (stOTPValue.length !== 6 || isNaN(stOTPValue)) {
                stOTP.nextElementSibling.textContent = 'OTP must be a 6-digit number';
                isValid = false;
            } else {
                stOTP.nextElementSibling.textContent = ''; // Clear error message
            }

            // If the form is valid and OTP is correct, submit the form
            if (isValid) {
                // Check if the entered OTP is valid (you need to implement this logic)
                if (isValidOTP(stOTPValue)) {
                    form.submit(); // Submit the form
                } else {
                    stOTP.nextElementSibling.textContent = 'Invalid OTP'; // Display error message for invalid OTP
                    isValid = false;
                }
            }
        });
    } else if (step === 3) {
        // Add validation for step 3 fields
        // Similar logic as step 1
    }

    // Generate OTP if the form is valid
    if (isValid && step === 1) {
        OTP = Math.floor(Math.random() * (max - min + 1)) + min; // Generate OTP
        console.log('Generated OTP:', OTP);
    }
    return isValid;
}

$(function() {
    $("#stEDate").datepicker({
        changeMonth: true,
        changeYear: true,
        beforeShowDay: function(date) {
            var startDate = $('#stSDate').datepicker('getDate');
            if (startDate && date < startDate) {
                return [false, 'disabled', 'End date cannot be less than start date'];
            }
            return [true, ''];
        },
        beforeShow: function() {
            $('#ui-datepicker-div').css('z-index', 999999999999999);
        },
        dateFormat: 'dd/mm/yy'
    });

    $("#stSDate").datepicker({
        changeMonth: true,
        changeYear: true,
        onSelect: function(selectedDate) {
            var endDate = $('#stEDate').datepicker('getDate');
            var startDate = new Date(selectedDate);
            if (endDate && startDate > endDate) {
                $('#stSDate').datepicker('setDate', endDate);
            }
            $("#dataStart").datepicker("option", "defaultDate", startDate);
            $("#stEDate").datepicker("option", "minDate", startDate); // Update minDate of end date picker
        },
        beforeShow: function() {
            $('#ui-datepicker-div').css('z-index', 999999999999999);
        },
        dateFormat: 'dd/mm/yy'
    });
});