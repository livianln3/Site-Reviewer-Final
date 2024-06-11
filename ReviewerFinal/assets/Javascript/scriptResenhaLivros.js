function enviarResenha() {
    var nickL = document.getElementById("nickL").value;
    var generoL = document.getElementById("generoL").value;
    var nomeLivro = document.getElementById("nomeLivro").value;
    var resenhaL = document.getElementById("resenhaL").value;

    if (nickL.trim() !== "" && generoL.trim() !== "" && nomeLivro.trim() !== "" && resenhaL.trim() !== "")
     {
        criarResenha(nickL, generoL, nomeLivro, resenhaL);
        limparCampos();
    } else {
        alert("Por favor, preencha todos os campos antes de enviar a resenha.");
    }
}

function criarResenha(nickL, generoL, nomeLivro, resenhaL) {
    var novaResenha = document.createElement("div");
    novaResenha.classList.add("resenhaL");

    var conteudoResenha = `
        <div class="campo">
            <strong>Nick:</strong> ${nickL}
        </div>
        <div class="campo">
            <strong>Genero:</strong> ${generoL}
        </div>
        <div class="campo">
            <strong>Nome do Livro:</strong> ${nomeLivro}
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
    document.getElementById("nickL").value = "";
    document.getElementById("generoL").value = "";
    document.getElementById("nomeLivro").value = "";
    document.getElementById("resenhaL").value = "";
}

