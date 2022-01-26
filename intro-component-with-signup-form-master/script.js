function update(){
    let firstName = document.getElementById('fname');
 /*   const firstNameBlock = document.querySelector('.firts-name'); */
    let lastName = document.getElementById('lname');
 /*   const lastNameBlock = document.querySelector('.last-name'); */
    let eMail = document.getElementById('email');
  /*  const eMailBlock = document.querySelector('.email'); */
    let custPassword = document.getElementById('password');
  /*  const passwordBlock = document.querySelector('.password'); */
    const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const valid = re.test(eMail);

     //First name error message
     if (firstName.value.length === 0){
         firstName.placeholder='missing';}
    /*    firstNameBlock.classList.add('missing');
    } else{
        firstNameBlock.classList.remove('missing');
    } */

    //Last name error message
    if (lastName.value.length === 0){
        lastName.placeholder='missing';
    }/* else{
        lastNameBlock.classList.remove('missing');
    } */

    //Email error message
    if (!valid){
       
        eMail.placeholder = 'email@example/com';
    }/* else{
        eMailBlock.classList.remove('missing');
    } */

    //Password error message
    if(custPassword.value.length === 0){
        custPassword.placeholder='missing';
    }/* else{
        passwordBlock.classList.remove('missing');
    }*/
}