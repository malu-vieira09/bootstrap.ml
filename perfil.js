function logar() {
    var nome = document.getElementById("fname").value
    var email = document.getElementById("email").value
    var idade = document.getElementById("birthday").value
    var senha = document.getElementById("lname").value
    var senha2 = document.getElementById("lname1").value
    var privacidade = document.getElementById("termos").checked
    
    if (senha!=senha2) return alert("As duas senhas não compatíveis!");
    if (privacidade==false) return alert("Você precisa concordar com os termos!");
    console.log("zasadsd")
    sessionStorage.setItem("login", `${nome}&_&${email}&_&${idade}`);
    window.location.href='index.html'
}

document.getElementById("nome").textContent = `Nome: ${sessionStorage.getItem("login").split("&_&")[0]}`
document.getElementById("email").textContent = `Email: ${sessionStorage.getItem("login").split("&_&")[1]}`
document.getElementById("idade").textContent = `Data de nascimento: ${sessionStorage.getItem("login").split("&_&")[2]}`


let sair = () => {
    sessionStorage.removeItem("login");
    window.location.href='index.html'
}
