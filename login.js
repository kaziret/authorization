var obj = {};
function signin(){
    // document.getElementById('form').value;
    var fail = false; 
    var name = form.name.value;
    var email = form.email.value;
    var password = form.password.value;
    var repassword = form.repassword.value;
    if(name == "" || name == " "){
        fail = "Вы не ввели своё имя";
    }else if(email == "" || email == " "){
        fail = "Вы не ввeли email";
    }else if(email.split('@').length - 1 == 0){
        fail = "Вы ввели email неправильно";
    }else if(password == "" || password == " "){
        fail = "Вы не ввели пароль";
    }else if(repassword == "" || repassword == " "){
        fail = "Введите пароль повторно";
    }else if(password != repassword){
        fail = "Пароли не совпадают";
    }if(fail){
        alert(fail);
    }
    else{
        var sign = document.getElementById('form');
        sign.style.display = 'none';
        var auth = document.getElementById('form1');
        auth.style.display = 'block';
        obj.name = email;
        obj.pass = password;
    }
}


function login(){
    // document.getElementById('form1').value;
    var fail = false;
    var name = form1.name1.value;
    var password = form1.password1.value;
    if(name == "" || name == " "){
        fail = "Вы не ввели своё имя";
    }else if(name.split('@').length - 1 == 0){
        fail = "Вы ввели имя неправильно";
    }else if(password == "" || password == " "){
        fail = "Вы не ввели пароль";
    }if(name != obj.name){
        fail = "Пользователь не найден";
    }if(password != obj.pass){
        fail = "Неправильный пароль";
    }if(fail){
        alert(fail);
    }else{
        window.location.href = "users.html";
    }
}