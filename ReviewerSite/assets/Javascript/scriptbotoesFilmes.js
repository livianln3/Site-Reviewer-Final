function criarResenha(nick, generoF, nomeFilme, resenha) {
    // Criar elementos da resenha
    var novaResenha = document.createElement("div");
    novaResenha.classList.add("resenha");

    var conteudoResenha = `
        <div class="campo">
            <strong>Nick:</strong> ${nick}
        </div>
        <div class="campo">
            <strong>Gênero:</strong> ${generoF}
        </div>
        <div class="campo">
            <strong>Nome do Filme:</strong> ${nomeFilme}
        </div>
        <div class="campo">
            <strong>Resenha:</strong><br>
            ${resenha}
        </div>
        <div class="botoes">
            <button class="bom">Bom</button>
            <button class="medio">Médio</button>
            <button class="ruim">Ruim</button>
        </div>
        <div class="contadores">
            <span class="contador-bom">0</span> Bom,
            <span class="contador-medio">0</span> Médio,
            <span class="contador-ruim">0</span> Ruim
        </div>
    `;

    novaResenha.innerHTML = conteudoResenha;

    // Adicionar evento de clique para os botões dentro da resenha
    var botoes = novaResenha.querySelectorAll('.botoes button');
    botoes.forEach(function(botao) {
        botao.addEventListener('click', function() {
            atualizarContadores(this, novaResenha);
        });
    });

    // Inserir a nova resenha no início da lista
    var resenhasAntigas = document.getElementById("resenhasAntigas");
    resenhasAntigas.insertBefore(novaResenha, resenhasAntigas.firstChild);

    // Limpar campos do formulário
    limparCampos();
}

function atualizarContadores(botao, resenha) {
    var contadorBom = resenha.querySelector('.contador-bom');
    var contadorMedio = resenha.querySelector('.contador-medio');
    var contadorRuim = resenha.querySelector('.contador-ruim');

    if (botao.classList.contains('bom')) {
        contadorBom.innerText = parseInt(contadorBom.innerText) + 1;
    } else if (botao.classList.contains('medio')) {
        contadorMedio.innerText = parseInt(contadorMedio.innerText) + 1;
    } else if (botao.classList.contains('ruim')) {
        contadorRuim.innerText = parseInt(contadorRuim.innerText) + 1;
    }
}
