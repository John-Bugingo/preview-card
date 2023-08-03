
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const email = document.getElementById('email')
const password= document.getElementById('password')

document.getElementById('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    return checkInput(); 
})
function checkInput() {
    const firstNamevalue = firstName.value
    const lastNamevalue = lastName.value
    const emailvalue = email.value
    const passwordvalue = password.value
    
    if (firstNamevalue === '' || firstNamevalue === null){
        document.getElementById('firstNameError').style.display='block';
        firstName.style.borderColor ='red';
        setTimeout(() => {
            document.getElementById('firstNameError').style.display='none';
            firstName.style.borderColor ='rgba(56, 53, 53, 0.371)';
        }, 4000);
    }else{
        firstName.style = 'border: 2px solid green';
    }

if(lastNamevalue === '' || !lastNamevalue ){
    document.getElementById('lastNameError').style.display='block';
    lastName.style.borderColor = 'red';
    
    setTimeout(() => {
        document.getElementById('lastNameError').style.display='none';
        lastName.style.borderColor = 'rgba(56, 53, 53, 0.371)';
    }, 4000);
}else{
    lastName.style = 'border: 2px solid green';
}

if( passwordvalue === '' || ! passwordvalue){
    document.getElementById('passwordError').style.display = 'block';
    password.style.borderColor='red';
    setTimeout(() => {
        document.getElementById('passwordError').style.display = 'none';
        password.style.borderColor='rgba(56, 53, 53, 0.371)';        
    }, 4000);
}else{
    password.style = 'border: 2px solid green';
}

if(emailvalue ==='' || !emailvalue){
    document.getElementById('emailError').style.display = 'block';
    email.style.borderColor = 'red';
    setTimeout(() => {
        document.getElementById('emailError').style.display = 'none';
        email.style.borderColor = 'black';
    }, 4000);
}else{
    email.style = 'border: 2px solid green';
}
}
    
// button.addEventListener('success', (input)=>{
//         const result = input.
//     })



