function fun(){
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username === 'user@gmail.com' && password === 'pass')
    {
        alert('Login sucessfull')
    }
    else
    {
        alert('Enter a correct password or username')
    }
    

}