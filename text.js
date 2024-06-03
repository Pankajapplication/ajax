


function formOTP(){
    let resetBtn = document.querySelector('#reset');
    // console.log(resetBtn);
    resetBtn.addEventListener('click', function(){
        OTPS = {
            OTPValue : OTP,
        };
        console.log('request submitted will log the OTP with in 10 seconds')
        setTimeout(function(){
            let newOTP =  genrateOTP();
            sessionStorage.setItem("oldOTP", OTPS.OTPValue);
            console.log(`last otp value is ${OTPS.OTPValue}`);
        },10000)
    })

    let OTPform = document.getElementById('otpForm');
    let otpFeild = document.getElementById('otpFeild');
    OTPform.addEventListener('submit', function(e){
        e.preventDefault();
        if(otpFeild.value == ''){
            console.log('Please Enter OTP');
        }else if(otpFeild.value == OTP){
            console.log('Correct OTP');
        }else if(otpFeild.value == sessionStorage.getItem("oldOTP")){
            console.log('OTP Expired');
        }else{
            console.log('Incorrect OTP');
        }
    })
}

formOTP()

  