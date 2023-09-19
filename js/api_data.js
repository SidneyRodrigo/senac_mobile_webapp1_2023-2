document.addEventListener('DOMContentLoaded', function () { 
    const apiEndpoint = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=92f20617c6884e43b4effb0a54a8a252&query=chicken'; // URL da API pública

    // Seleciona a div onde os dados da API serão exibidos
    const apiDataElement = document.getElementById('api-data');

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados da API:', error);
        });
});
