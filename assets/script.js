// Função para carregar e inserir conteúdo HTML em uma seção específica
function loadAndInsertContent(url, targetElementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(targetElementId).innerHTML = data;
        });
}

// Carregar o conteúdo do cabeçalho (header.html) e inserir na seção "header"
loadAndInsertContent('pages/header.html', 'header');

// Carregar o conteúdo da seção de conteúdo (content.html) e inserir na seção "content"
loadAndInsertContent('pages/content.html', 'content');

// Carregar o conteúdo do rodapé (footer.html) e inserir na seção "footer"
loadAndInsertContent('pages/footer.html', 'footer');

