
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
    }
}


function login(){
    // document.getElementById('form1').value;
    var fail = false;
    var name = form1.name1.value;
    var password = form1.password1.value;
    if(name == "" || name == " "){
        fail = "Вы не ввели своё имя";
    }else if(password == "" || password == " "){
        fail = "Вы не ввели пароль";
    }if(name){
        fail = "Пользователь не найден";
    }if(password){
        fail = "Неправильный пароль";
    }if(fail){
        alert(fail);
    }else{
        postq();
    }
}

function postq(){

    var input = document.getElementById('email').value;
    fetch('https://cors-anywhere.herokuapp.com/http://nurs.ml/api/tables/',{

        method: 'post',
        headers: {"Content-Type":"application/json"},

        body: JSON.stringify({
            name_of_tables: input
        })
    }).then(res => res.json());
}
function getEmail(){
    var input = document.getElementById('name1').value;
    fetch('https://cors-anywhere.herokuapp.com/http://nurs.ml/api/tables/').
    then(data=>data.json()).
    then(data=>data).
    then(function(data){
        for(i = 0;i < data.length; i++){
            console.log(data[i].name_of_tables);
            if(input === data[i].name_of_tables){
                window.open('http://github.com/' + input);
            }else{
                console.log(false)
            }
        }
    })
}
