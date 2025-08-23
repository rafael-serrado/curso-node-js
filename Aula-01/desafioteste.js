readline = require("readline-sync");

// Estoque inicial (objeto com produtos)
let estoque = {
    "camiseta": { quantidade: 10, preco: 50 },
    "calca": { quantidade: 5, preco: 120 },
    "tenis": { quantidade: 8, preco: 200 },
    "boné": { quantidade: 12, preco: 30 }
};

// Função para exibir o estoque atual
function mostrarEstoque() {
    console.log("\n📦 Estoque Atual:");
    for (let produto in estoque) {
        console.log(
            `- ${produto} | Quantidade: ${estoque[produto].quantidade} | Preço: R$ ${estoque[produto].preco.toFixed(2)}`
        );
    }
}

// Função para processar o pedido
function realizarPedido() {
    mostrarEstoque();

    let nomeProduto = readline.question("\nDigite o nome do produto desejado: ").toLowerCase();

    // Verifica se o produto existe
    if (!(nomeProduto in estoque)) {
        console.log("❌ Produto não encontrado no estoque.");
        return;
    }

    let quantidade = readline.questionInt("Digite a quantidade desejada: ");

    // Validações
    if (quantidade <= 0) {
        console.log("❌ Quantidade inválida.");
        return;
    }

    if (quantidade > estoque[nomeProduto].quantidade) {
        console.log("❌ Quantidade indisponível no estoque.");
        return;
    }

    // Atualiza o estoque e calcula o valor
    estoque[nomeProduto].quantidade -= quantidade;
    let total = quantidade * estoque[nomeProduto].preco;

    console.log(`✅ Pedido realizado com sucesso!`);
    console.log(`Produto: ${nomeProduto}`);
    console.log(`Quantidade: ${quantidade}`);
    console.log(`Valor Total: R$ ${total.toFixed(2)}`);
}

// Loop principal
while (true) {
    realizarPedido();

    let continuar = readline.question("\nDeseja realizar outro pedido? (s/n): ").toLowerCase();
    if (continuar !== "s") {
        console.log("\n👋 Saindo do sistema. Obrigado pela preferência!");
        break;
    }
}
