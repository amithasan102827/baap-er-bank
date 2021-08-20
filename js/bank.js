document.getElementById('login-submit').addEventListener('click', function(){
    console.log('mouse clicked')
    
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail= emailField.value;
    console.log(userEmail);
     
    // get user password
    const passField = document.getElementById('user-password');
    const userPass = passField.value;
    console.log(userPass);
    
    // check emial and password
    if(userEmail== 'baap@gmail.com' && userPass=='secret'){
      window.location.href= ' js/banking.html'
    }
})
