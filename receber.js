function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "barto" && senha == "12345"){
        alert('susseco');
        location.href = "eu_sou.html";
       }else{
           alert('senha incorreta')
       }
   }

   function ver(){

    var ver = document.getElementById('ver').value;
    alert("Não Poderas Comentar Nem Dar Sujestão");
    location.href = "login.html"
   }