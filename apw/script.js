// =============================
// JSON SIMULADO (como resposta de uma API)
// =============================
const dadosJSON = {
    nome: "Maria Silva",
    email: "maria.silva@example.com",
    idade: 28
};

// =============================
// Função assíncrona simulando busca de dados
// =============================
async function pegarDados() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(dadosJSON); // devolve o JSON simulado
        }, 1000); // atraso de 1 segundo
    });
}

// =============================
// Função que carrega e preenche os campos HTML
// =============================
async function carregarDados() {
    try {
        const dados = await pegarDados();

        document.getElementById("nome").value = dados.nome;
        document.getElementById("email").value = dados.email;
        document.getElementById("idade").value = dados.idade;

        console.log("Dados carregados com sucesso!");
    } catch (erro) {
        console.error("Erro ao carregar os dados:", erro);
    }
}

// =============================
// Evento do botão
// =============================
document.getElementById("btnCarregar").addEventListener("click", carregarDados);
