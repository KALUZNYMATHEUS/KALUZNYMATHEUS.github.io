const form = document.querySelector("form");
const input_grupo = document.querySelector("input_grupo");
const item_form = document.querySelector("item-form");
const neme = document.querySelector("input-name");
const email = document.querySelector("item-email");
const passwordsenha = document.querySelector("input-senha");
const passwordsenha2 = document.querySelector("input-senha2");
const telefone = document.querySelector("input-telefone");



form.addEventListener("submit", (event) =>{
    event.preventDefault();
    senha8();

    var passwordsenha = document.getElementById("input-senha").value;
    var passwordsenha2 = document.getElementById("input-senha2").value;
    
    while( passwordsenha.length < 8){
        errorsenha();
        senha8(passwordsenha);
        return;
    }

    if (passwordsenha2 !== passwordsenha){
        errorsenha();
        alert("Senhas não compativeis");
        return;
    }

    else{
        success();  
        alert("Cadastro feito com sucesso"); 
    }
    

    form.submit();
});

function senha8(){
    var passwordsenha = document.getElementById("input-senha").value;
    if(passwordsenha.length < 8)
    alert("Senha com menos de 8 caracteris");
    return;
}

function errorsenha(){
    document.getElementById('input-senha2').style.color = 'red';
    document.getElementById('input-senha2').style.border = '3px solid red';
    document.getElementById('input-senha').style.color = 'red';
    document.getElementById('input-senha').style.border = '3px solid red';
}
function success(){
    document.getElementById('input-senha2').style.color = '';
    document.getElementById('input-senha2').style.border = '';
    document.getElementById('input-senha').style.color = '';
    document.getElementById('input-senha').style.border = '';
}

