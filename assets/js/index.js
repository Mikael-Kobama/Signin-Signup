if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar a página");
    window.location.href = "./assets/html/signin.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));
userLogado.innerHTML = `Olá ${userLogado.nome}`;

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/signin.html";
}