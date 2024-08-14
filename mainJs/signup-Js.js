let checkELmt = document.querySelector('.checkbox');

checkELmt.addEventListener('click', () => {
    if(!checkELmt.classList.contains('New')){
        checkELmt.classList.add('New');
    }else{
        checkELmt.classList.remove('New');
    }
});

function checkPassword(){
    let inputElmt = document.querySelector('.user-input');    
    let inputEmail = document.querySelector('.user-Eamil');    
    let passwordElmt = document.querySelector('.user-password');
    let confirmElmt = document.querySelector('.confirm-password');

    if(inputElmt.value === '' || inputEmail.value === ''){
         inputElmt.value = '';
         inputEmail.value = '';
         return alert('Fill the requirements.');
    }

    if(passwordElmt.value !== confirmElmt.value || passwordElmt.value === ''){
        confirmElmt.value = '';
        return alert('Enter Your Password Correctly!');
    }

    if(!checkELmt.classList.contains('New')){
        alert('Agree to terms and conditions.')
    }else {
        alert('Signed up succesfully.')
    }
}


let signupBtn = document.querySelector('.signup-Btn-main');
signupBtn.addEventListener('click', checkPassword);
