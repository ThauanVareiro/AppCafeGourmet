

document.addEventListener("DOMContentLoaded", function () {

    // Ações para o botão "Cancelar"
    const cancelarButton = document.getElementById("cancelar");
    cancelarButton.addEventListener("click", function () {
        if (confirm("Tem certeza que deseja cancelar tudo?")) {
            // Se o usuário clicar em "Sim"
            window.location.href = "index.html";
        }
    });
  
    // Seleciona o botão "Finalizar Pedido!" e os campos obrigatórios
    const finalizarButton = document.getElementById("finalizar");
    const form = document.getElementById("form-cadastro");
    const camposObrigatorios = form.querySelectorAll("input[required]");
  
    // Desabilitar o botão "Finalizar Pedido!" por padrão
    finalizarButton.disabled = true;
  
    // Função para verificar se todos os campos obrigatórios foram preenchidos
    function validarFormulario() {
        let todosPreenchidos = true;
  
        camposObrigatorios.forEach(campo => {
            if (!campo.value.trim()) {
                todosPreenchidos = false;
            }
        });
  
        // Habilitar ou desabilitar o botão "Finalizar Pedido!" baseado na validação
        finalizarButton.disabled = !todosPreenchidos;
    }
  
    // Acompanhar alterações nos campos obrigatórios
    camposObrigatorios.forEach(campo => {
        campo.addEventListener("input", validarFormulario);
    });
  
    // Função para verificar se o carrinho tem itens
    function verificarCarrinho() {
        const localCarrinho = localStorage.getItem("carrinho");
        if (localCarrinho) {
            const carrinho = JSON.parse(localCarrinho);
            return carrinho.length > 0;
        }
        return false;
    }
  
    // Ações para o botão "Finalizar Pedido!"
    finalizarButton.addEventListener("click", function (event) {
        event.preventDefault();  // Evita o envio do formulário
  
        // Verifica se o carrinho está vazio
        if (!verificarCarrinho()) {
            // Exibe a mensagem de erro se o carrinho estiver vazio
            alert("Desculpe, seu carrinho está vazio.");
            return; // Interrompe o processo se o carrinho estiver vazio
        }
  
        // Verifica se há campos obrigatórios faltando
        let camposFaltando = false;
        camposObrigatorios.forEach(campo => {
            if (!campo.value.trim()) {
                camposFaltando = true;
            }
        });
  
        if (camposFaltando) {
            // Exibe o alerta se houver campos obrigatórios faltando
            alert("Por favor, preencha todos os campos obrigatórios.");
        } else {
            // Exibe a confirmação de finalizar a compra
            if (confirm("Podemos finalizar sua compra?")) {
                // Se o usuário clicar em "Sim!"
                alert("Feito! Seu pedido já está a caminho!");
  
                // Limpa o carrinho do localStorage
                localStorage.removeItem("carrinho");
  
                // Redireciona para a página index.html
                window.location.href = "index.html";
            }
            // Caso o usuário clique em "Não", nada acontece
        }
    });
  
    // Valida o formulário ao carregar a página para garantir que o botão esteja correto
    validarFormulario();
  });
  
  document.getElementById("cep").addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
      if (value.length > 5) {
          value = value.substring(0, 5) + "-" + value.substring(5, 8); // Adiciona o hífen
      }
      e.target.value = value;
  });
  
  document.getElementById("numero").addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
      e.target.value = value.slice(0, 6); // Limita a 10 dígitos
  });

  document.getElementById("telefone").addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    if (value.length > 10) {
        value = value.substring(0, 7) + "-" + value.substring(7, 11); // Adiciona o hífen
    }
    e.target.value = value;
});

  
  


