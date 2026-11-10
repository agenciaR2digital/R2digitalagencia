/* PORTFÓLIO DINÂMICO DA HOME — Espelha 100% o comportamento do Catálogo */
window.R2_PROJECTS = (typeof window.R2_MODELS !== 'undefined' && window.R2_MODELS.length > 0) ? window.R2_MODELS.map(m => {
    const statusText = m.status || "Disponível";
    const isVendido = statusText.toLowerCase() === 'vendido';
    
    return {
        name: m.name,
        // Garante que a categoria use exatamente a mesma palavra cadastrada no models.js
        category: m.category ? m.category.trim() : "Outros",
        description: m.description,
        type: statusText, // Status (Disponível / Vendido)
        badgeClass: isVendido ? "vendido" : "disponivel", // Classe da tag para cor vermelha/verde
        image: m.image ? "catalogo/" + m.image : "",
        // Se tiver URL, exibe o link de demonstração; se não tiver, força o comportamento de Ver Demonstração
        url: m.url ? (m.url.startsWith("http") ? m.url : "catalogo/" + m.url) : "#"
    };
}) : [
    { name: "OdontoVitta", category: "Clínicas", description: "Site institucional.", type: "Disponível", badgeClass: "disponivel", image: "", url: "#" }
];
