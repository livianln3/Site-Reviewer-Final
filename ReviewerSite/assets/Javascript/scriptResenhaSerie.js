function enviarResenha() {
    var nickS = document.getElementById("nickS").value;
    var generoS = document.getElementById("generoS").value;
    var nomeLivro = document.getElementById("nomeLivro").value;
    var resenhaL = document.getElementById("resenhaL").value;

    if (nickS.trim() !== "" && generoS.trim() !== "" && nomeLivro.trim() !== "" && resenhaL.trim() !== "")
     {
        criarResenha(nickS, generoS, nomeLivro, resenhaL);
        limparCampos();
    } else {
        alert("Por favor, preencha todos os campos antes de enviar a resenha.");
    }
}

function criarResenha(nickS, generoS, nomeLivro, resenhaL) {
    var novaResenha = document.createElement("div");
    novaResenha.classList.add("resenhaL");

    var conteudoResenha = `
        <div class="campo">
            <strong>Nick:</strong> ${nickS}
        </div>
        <div class="campo">
            <strong>Genero:</strong> ${generoS}
        </div>
        <div class="campo">
            <strong>Nome da Série:</strong> ${nomeLivro}
        </div>
        <div class="campo">
            <strong>Resenha:</strong><br>
            ${resenhaL}
        </div>
    `;

    novaResenha.innerHTML = conteudoResenha;

    var formulario = document.getElementById("formulario");
    formulario.parentNode.insertBefore(novaResenha, formulario);

    limparCampos();
}

function limparCampos() {
    document.getElementById("nickS").value = "";
    document.getElementById("generoS").value = "";
    document.getElementById("nomeLivro").value = "";
    document.getElementById("resenhaL").value = "";
}

