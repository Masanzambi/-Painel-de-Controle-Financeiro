let saldoAtual = 10000.00;

function atualizarSaldo() {
    document.getElementById('saldo-atual').innerText = saldoAtual.toFixed(2);
    document.getElementById('ultima-atualizacao').innerText = new Date().toLocaleDateString('pt-BR');
}

function adicionarDespesa() {
    const nome = document.getElementById('nova-despesa-nome').value;
    const valor = parseFloat(document.getElementById('nova-despesa-valor').value);

    if (nome && !isNaN(valor)) {
        const listaDespesas = document.getElementById('lista-despesas');
        const novaDespesa = document.createElement('li');
        novaDespesa.innerText = `${nome}: R$ ${valor.toFixed(2)}`;
        listaDespesas.appendChild(novaDespesa);

        saldoAtual -= valor;
        atualizarSaldo();
        
        document.getElementById('nova-despesa-nome').value = '';
        document.getElementById('nova-despesa-valor').value = '';
    } else {
        alert('Por favor, insira um nome e um valor válido para a despesa.');
    }
}

function adicionarReceita() {
    const nome = document.getElementById('nova-receita-nome').value;
    const valor = parseFloat(document.getElementById('nova-receita-valor').value);

    if (nome && !isNaN(valor)) {
        const listaReceitas = document.getElementById('lista-receitas');
        const novaReceita = document.createElement('li');
        novaReceita.innerText = `${nome}: R$ ${valor.toFixed(2)}`;
        listaReceitas.appendChild(novaReceita);

        saldoAtual += valor;
        atualizarSaldo();
        
        document.getElementById('nova-receita-nome').value = '';
        document.getElementById('nova-receita-valor').value = '';
    } else {
        alert('Por favor, insira um nome e um valor válido para a receita.');
    }
}

atualizarSaldo();