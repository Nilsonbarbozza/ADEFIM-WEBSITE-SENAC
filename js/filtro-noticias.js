document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona os elementos do DOM
    const applyButton = document.getElementById('apply-filters');
    const newsCards = document.querySelectorAll('.news-card');

    // Função principal de filtragem
    const applyFilters = () => {
        // Pega os valores selecionados dos dropdowns
        const selectedType = document.getElementById('filter-type').value;
        const selectedCategory = document.getElementById('filter-category').value;
        const selectedKeywords = document.getElementById('filter-keywords').value;

        // Itera sobre todos os cards de notícia
        newsCards.forEach(card => {
            // Pega os dados do card. Se não tiver o atributo, retorna uma string vazia.
            const cardType = card.getAttribute('data-type') || '';
            const cardCategory = card.getAttribute('data-category') || '';
            const cardKeywords = card.getAttribute('data-keywords') || '';

            // 2. Define as condições de filtragem
            
            // Condição 1: Tipo (Exige correspondência exata ou 'all')
            const typeMatch = selectedType === 'all' || selectedType === cardType;
            
            // Condição 2: Categoria (Exige correspondência exata ou 'all')
            const categoryMatch = selectedCategory === 'all' || selectedCategory === cardCategory;
            
            // Condição 3: Palavras-chave (Verifica se a keyword selecionada está contida na lista do card)
            const keywordMatch = selectedKeywords === 'all' || cardKeywords.includes(selectedKeywords);

            // 3. Aplica o filtro: mostra o card se todas as condições forem verdadeiras
            if (typeMatch && categoryMatch && keywordMatch) {
                card.style.display = 'block'; // Mostra o card (ou use seu estilo de display padrão, ex: 'flex')
            } else {
                card.style.display = 'none'; // Esconde o card
            }
        });
    };

    // 4. Adiciona o Event Listener ao botão "Aplicar"
    if (applyButton) {
        applyButton.addEventListener('click', applyFilters);
    }
});