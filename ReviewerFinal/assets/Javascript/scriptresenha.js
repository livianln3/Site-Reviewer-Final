function enviarResenha() {
    var nick = document.getElementById("nick").value;
    var categoria = document.getElementById("categoria").value;
    var nomeJogo = document.getElementById("nomeJogo").value;
    var resenha = document.getElementById("resenha").value;

    if (nick.trim() !== "" && categoria.trim() !== "" && nomeJogo.trim() !== "" && resenha.trim() !== "") {
        criarResenha(nick, categoria, nomeJogo, resenha);
        limparCampos();
    } else {
        alert("Por favor, preencha todos os campos antes de enviar a resenha.");
    }
}

function criarResenha(nick, categoria, nomeJogo, resenha) {
    var novaResenha = document.createElement("div");
    novaResenha.classList.add("resenha");

    var conteudoResenha = `
        <div class="campo">
            <strong>Nick:</strong> ${nick}
        </div>
        <div class="campo">
            <strong>Categoria:</strong> ${categoria}
        </div>
        <div class="campo">
            <strong>Nome do Jogo:</strong> ${nomeJogo}
        </div>
        <div class="campo">
            <strong>Resenha:</strong><br>
            ${resenha}
        </div>
    `;

    novaResenha.innerHTML = conteudoResenha;

    var formulario = document.getElementById("formulario");
    formulario.parentNode.insertBefore(novaResenha, formulario);

    limparCampos();
}

function limparCampos() {
    document.getElementById("nick").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("nomeJogo").value = "";
    document.getElementById("resenha").value = "";
}

