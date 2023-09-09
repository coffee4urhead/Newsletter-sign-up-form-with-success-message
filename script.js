const myBtnForSubmission = document.querySelector('#btn');
const myInputForm = document.querySelector('#form-valid');

myBtnForSubmission.addEventListener('click', function alertMe(){
    const myInputEmail = document.querySelector('input-el');
    
    if(/@/.test(myInputEmail.value) === false){
        setTimeout(() => {
            myInputEmail.style.borderColor = 'red';
            myInputEmail.style.borderWidth = '12px';
        }, 7000)
    }
});