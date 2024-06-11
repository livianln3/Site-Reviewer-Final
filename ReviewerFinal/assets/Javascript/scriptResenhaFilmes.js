function enviarResenha() {
    var nickF = document.getElementById("nickF").value;
    var generoF = document.getElementById("generoF").value;
    var nomeFilme = document.getElementById("nomeFilme").value;
    var resenhaF = document.getElementById("resenhaF").value;

    if (nickF.trim() !== "" && generoF.trim() !== "" && nomeFilme.trim() !== "" && resenhaF.trim() !== "")
     {
        criarResenha(nickF, generoF, nomeFilme, resenhaF);
        limparCampos();
    } else {
        alert("Por favor, preencha todos os campos antes de enviar a resenha.");
    }
}

function criarResenha(nickF, generoF, nomeFilme, resenhaF) {
    var novaResenha = document.createElement("div");
    novaResenha.classList.add("resenhaF");

    var conteudoResenha = `
        <div class="campo">
            <strong>Nick:</strong> ${nickF}
        </div>
        <div class="campo">
            <strong>Genero:</strong> ${generoF}
        </div>
        <div class="campo">
            <strong>Nome do Filme:</strong> ${nomeFilme}
        </div>
        <div class="campo">
            <strong>Resenha:</strong><br>
            ${resenhaF}
        </div>
    `;

    novaResenha.innerHTML = conteudoResenha;

    var formulario = document.getElementById("formulario");
    formulario.parentNode.insertBefore(novaResenha, formulario);

    limparCampos();
}

function limparCampos() {
    document.getElementById("nickF").value = "";
    document.getElementById("generoF").value = "";
    document.getElementById("nomeFilme").value = "";
    document.getElementById("resenhaF").value = "";
}

