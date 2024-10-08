// Adiciona um evento de escuta ao formulário para interceptar a submissão
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Coleta os dados do formulário
    const formData = new FormData(event.target);
    
    // Converte os dados do formulário em um objeto
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value; // Adiciona cada valor ao objeto data
    });

    // Envia os dados para o back-end
    fetch('enviar', {
        method: 'POST', // Método de envio
        headers: {
            'Content-Type': 'application/json', // Tipo de conteúdo
        },
        body: JSON.stringify(data) // Converte o objeto data em JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar os dados'); // Lança um erro se a resposta não for ok
        }
        return response.json(); // Converte a resposta para JSON
    })
    .then(data => {
        // Exibe uma mensagem de sucesso
        document.getElementById('responseMessage').textContent = data.message; 
        document.getElementById('cadastroForm').reset(); // Reseta o formulário
    })
    .catch(error => {
        // Exibe uma mensagem de erro
        document.getElementById('responseMessage').textContent = error.message;
    });
});