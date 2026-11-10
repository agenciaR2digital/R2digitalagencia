/* ==========================================================================
   BURGER BLAST — SCRIPT PRINCIPAL (script.js)
   ========================================================================== */

/**
 * 1. CONFIGURAÇÕES CENTRALIZADAS
 */
const CONFIG = {
    nome: "Burger Blast",
    slogan: "Explosão de sabor a cada mordida!",
    whatsapp: "5531999999999", // Número placeholder seguro para montagem de link
    instagram: "burgerblast.bh",
    cidade: "Belo Horizonte",
    estado: "MG",
    endereco: "Avenida Fleming, região da Pampulha, Belo Horizonte – MG",
    horarios: {
        semana: "18h às 23h",
        sextaSab: "18h às 00h"
    },
    categorias: [
        { id: "todos", nome: "Todos" },
        { id: "hamburgueres", nome: "Hambúrgueres" },
        { id: "combos", nome: "Combos" },
        { id: "acompanhamentos", nome: "Acompanhamentos" },
        { id: "bebidas", nome: "Bebidas" },
        { id: "sobremesas", nome: "Sobremesas" }
    ],
    produtos: [
        // HAMBÚRGUERES
        {
            id: 1,
            nome: "Classic Burger",
            descricao: "Pão brioche, hambúrguer bovino, queijo cheddar, alface, tomate e molho especial.",
            preco: 24.90,
            categoria: "hamburgueres",
            imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
            etiqueta: "Mais pedido"
        },
        {
            id: 2,
            nome: "Double Blast",
            descricao: "Dois hambúrgueres bovinos, cheddar duplo, cebola caramelizada e molho da casa.",
            preco: 32.90,
            categoria: "hamburgueres",
            imagem: "https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&w=600&q=80",
            etiqueta: "Novidade"
        },
        {
            id: 3,
            nome: "Bacon Explosion",
            descricao: "Hambúrguer bovino, cheddar, bacon crocante, cebola crispy e molho barbecue.",
            preco: 34.90,
            categoria: "hamburgueres",
            imagem: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
            etiqueta: "Favorito"
        },
        {
            id: 4,
            nome: "Chicken Crunch",
            descricao: "Frango empanado crocante, queijo, alface e maionese especial.",
            preco: 27.90,
            categoria: "hamburgueres",
            imagem: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80",
            etiqueta: null
        },
        {
            id: 5,
            nome: "Cheddar Supreme",
            descricao: "Hambúrguer bovino, cheddar cremoso, bacon e molho cheddar.",
            preco: 33.90,
            categoria: "hamburgueres",
            imagem: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80",
            etiqueta: "Cremoso"
        },
        {
            id: 6,
            nome: "BBQ Master",
            descricao: "Hambúrguer bovino, queijo prato, bacon, cebola caramelizada e barbecue.",
            preco: 35.90,
            categoria: "hamburgueres",
            imagem: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
            etiqueta: null
        },
        {
            id: 7,
            nome: "Mega Blast",
            descricao: "Dois hambúrgueres bovinos, queijo cheddar, bacon, alface, tomate e molho especial.",
            preco: 39.90,
            categoria: "hamburgueres",
            imagem: "https://images.unsplash.com/photo-1583543238262-b2cb2aafef13?auto=format&fit=crop&w=600&q=80",
            etiqueta: "Monstro"
        },
        {
            id: 8,
            nome: "Veggie Burger",
            descricao: "Hambúrguer vegetal, queijo, alface, tomate e molho especial.",
            preco: 29.90,
            categoria: "hamburgueres",
            imagem: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=600&q=80",
            etiqueta: "Vegetariano"
        },

        // COMBOS
        {
            id: 9,
            nome: "Combo Classic",
            descricao: "Classic Burger + batata frita pequena + refrigerante lata.",
            preco: 34.90,
            categoria: "combos",
            imagem: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80",
            etiqueta: "Queridinho"
        },
        {
            id: 10,
            nome: "Combo Double",
            descricao: "Double Blast + batata frita média + refrigerante lata.",
            preco: 42.90,
            categoria: "combos",
            imagem: "https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&w=600&q=80",
            etiqueta: "Mais pedido"
        },
        {
            id: 11,
            nome: "Combo Bacon",
            descricao: "Bacon Explosion + batata frita média + refrigerante lata.",
            preco: 44.90,
            categoria: "combos",
            imagem: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
            etiqueta: "Pra matar a fome"
        },
        {
            id: 12,
            nome: "Combo Chicken",
            descricao: "Chicken Crunch + batata frita pequena + refrigerante lata.",
            preco: 37.90,
            categoria: "combos",
            imagem: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80",
            etiqueta: null
        },

        // ACOMPANHAMENTOS
        {
            id: 13,
            nome: "Batata Frita Tradicional",
            descricao: "Porção de batatas fritas crocantes.",
            preco: 14.90,
            categoria: "acompanhamentos",
            imagem: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
            etiqueta: "Crocante"
        },
        {
            id: 14,
            nome: "Batata Cheddar & Bacon",
            descricao: "Batatas fritas com cheddar cremoso e bacon crocante.",
            preco: 22.90,
            categoria: "acompanhamentos",
            imagem: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80",
            etiqueta: "Irresistível"
        },
        {
            id: 15,
            nome: "Onion Rings",
            descricao: "Anéis de cebola empanados e crocantes.",
            preco: 17.90,
            categoria: "acompanhamentos",
            imagem: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=600&q=80",
            etiqueta: null
        },
        {
            id: 16,
            nome: "Nuggets",
            descricao: "Porção de nuggets crocantes acompanhada de molho.",
            preco: 18.90,
            categoria: "acompanhamentos",
            imagem: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
            etiqueta: null
        },

        // BEBIDAS
        {
            id: 17,
            nome: "Refrigerante Lata",
            descricao: "Refrigerante em lata (Coca-Cola, Guaraná Antarctica, Sprite).",
            preco: 6.00,
            categoria: "bebidas",
            imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
            etiqueta: "Gelado"
        },
        {
            id: 18,
            nome: "Milkshake de Chocolate",
            descricao: "Milkshake cremoso de chocolate com cobertura e chantilly.",
            preco: 15.90,
            categoria: "bebidas",
            imagem: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80",
            etiqueta: "Cremoso"
        },

        // SOBREMESAS
        {
            id: 19,
            nome: "Brownie com Chocolate",
            descricao: "Brownie de chocolate com cobertura cremosa.",
            preco: 12.90,
            categoria: "sobremesas",
            imagem: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
            etiqueta: "Doce"
        },
        {
            id: 20,
            nome: "Sundae Especial",
            descricao: "Sorvete com cobertura de chocolate ou morango e castanhas.",
            preco: 10.90,
            categoria: "sobremesas",
            imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
            etiqueta: "Geladinho"
        }
    ]
};

/**
 * 2. ESTADO DO CARRINHO (LocalStorage)
 */
let cart = JSON.parse(localStorage.getItem("burger_blast_cart")) || [];

/**
 * 3. DOM ELEMENTS
 */
const header = document.getElementById("header");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");
const menuGrid = document.getElementById("menuGrid");
const featuredCombosGrid = document.getElementById("featuredCombosGrid");
const filterBtns = document.querySelectorAll(".filter-btn");
const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const cartBody = document.getElementById("cartBody");
const cartBadge = document.getElementById("cartBadge");
const cartCountLabel = document.getElementById("cartCountLabel");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");
const whatsappCheckoutBtn = document.getElementById("whatsappCheckoutBtn");
const customerNameInput = document.getElementById("customerName");
const deliveryTypeSelect = document.getElementById("deliveryType");
const customerAddressInput = document.getElementById("customerAddress");
const addressLabel = document.getElementById("addressLabel");
const toastNotification = document.getElementById("toastNotification");
const toastMsg = document.getElementById("toastMsg");
const currentYearSpan = document.getElementById("currentYear");

/**
 * 4. INICIALIZAÇÃO DA APLICAÇÃO
 */
document.addEventListener("DOMContentLoaded", () => {
    initHeaderScroll();
    initMobileMenu();
    renderCombos();
    renderMenu("todos");
    initFilters();
    initCartDrawer();
    updateCartUI();
    setDynamicYear();
});

/**
 * 5. HEADER SCROLL & MOBILE MENU
 */
function initHeaderScroll() {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

function initMobileMenu() {
    mobileMenuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        mobileMenuBtn.classList.toggle("active");
    });

    // Fechar menu ao clicar em links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            mobileMenuBtn.classList.remove("active");
        });
    });
}

function setDynamicYear() {
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}

/**
 * 6. RENDERIZAÇÃO DOS COMBOS EM DESTAQUE
 */
function renderCombos() {
    if (!featuredCombosGrid) return;
    
    // Seleciona três combos específicos (IDs 9, 10, 11)
    const comboIds = [9, 10, 11];
    const combos = CONFIG.produtos.filter(p => comboIds.includes(p.id));

    featuredCombosGrid.innerHTML = combos.map(combo => `
        <div class="featured-combo-card">
            <span class="combo-tag-badge">${combo.etiqueta || 'COMBO ESPECIAL'}</span>
            <div class="combo-card-img">
                <img src="${combo.imagem}" alt="${combo.nome}" loading="lazy">
            </div>
            <div class="combo-card-body">
                <h3>${combo.nome}</h3>
                <p>${combo.descricao}</p>
                <div class="combo-card-footer">
                    <span class="combo-price">R$ ${combo.preco.toFixed(2).replace('.', ',')}</span>
                    <button class="btn btn-yellow" onclick="addToCart(${combo.id})">Escolher combo</button>
                </div>
            </div>
        </div>
    `).join("");
}

/**
 * 7. RENDERIZAÇÃO DO CARDÁPIO & FILTROS
 */
function renderMenu(category) {
    if (!menuGrid) return;

    const filtered = category === "todos" 
        ? CONFIG.produtos 
        : CONFIG.produtos.filter(p => p.categoria === category);

    menuGrid.innerHTML = filtered.map(product => `
        <div class="menu-card" data-category="${product.categoria}">
            ${product.etiqueta ? `<span class="menu-item-tag">${product.etiqueta}</span>` : ''}
            <div class="menu-img-wrap">
                <img src="${product.imagem}" alt="${product.nome}" loading="lazy">
            </div>
            <div class="menu-card-content">
                <h3>${product.nome}</h3>
                <p>${product.descricao}</p>
                <div class="menu-card-footer">
                    <span class="menu-price">R$ ${product.preco.toFixed(2).replace('.', ',')}</span>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">+ Adicionar</button>
                </div>
            </div>
        </div>
    `).join("");
}

function initFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterBtns.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            const filterValue = e.target.getAttribute("data-filter");
            renderMenu(filterValue);
        });
    });
}

// Função auxiliar global para filtros disparados pelo footer
window.filterBy = function(category) {
    filterBtns.forEach(b => {
        if (b.getAttribute("data-filter") === category) {
            b.classList.add("active");
        } else {
            b.classList.remove("active");
        }
    });
    renderMenu(category);
};

/**
 * 8. GERENCIAMENTO DO CARRINHO (LocalStorage)
 */
function addToCart(productId) {
    const product = CONFIG.produtos.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            nome: product.nome,
            preco: product.preco,
            imagem: product.imagem,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.nome} adicionado ao carrinho! 🍔`);
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }

    saveCart();
    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem("burger_blast_cart", JSON.stringify(cart));
}

function updateCartUI() {
    // Atualizar badge do carrinho
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) cartBadge.textContent = totalItems;
    if (cartCountLabel) cartCountLabel.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`;

    if (!cartBody) return;

    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="cart-empty-state">
                <span>🛒</span>
                <h4>Seu carrinho está vazio</h4>
                <p>Escolha suas delícias no cardápio e adicione aqui!</p>
            </div>
        `;
    } else {
        cartBody.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.imagem}" alt="${item.nome}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.nome}</h4>
                    <span class="cart-item-price">R$ ${(item.preco * item.quantity).toFixed(2).replace('.', ',')}</span>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="cart-item-qty">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remover</button>
                    </div>
                </div>
            </div>
        `).join("");
    }

    // Cálculos de Subtotal e Total
    const subtotal = cart.reduce((sum, item) => sum + (item.preco * item.quantity), 0);
    if (cartSubtotal) cartSubtotal.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (cartTotal) cartTotal.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
}

/**
 * 9. CONTROLE DO DRAWER DO CARRINHO
 */
function initCartDrawer() {
    if (!cartBtn || !cartDrawer || !cartOverlay || !cartCloseBtn) return;

    cartBtn.addEventListener("click", () => {
        cartDrawer.classList.add("active");
        cartOverlay.classList.add("active");
    });

    cartCloseBtn.addEventListener("click", () => {
        cartDrawer.classList.remove("active");
        cartOverlay.classList.remove("active");
    });

    cartOverlay.addEventListener("click", () => {
        cartDrawer.classList.remove("active");
        cartOverlay.classList.remove("active");
    });

    // Controlar exibição do campo de endereço conforme o tipo de atendimento
    if (deliveryTypeSelect && customerAddressInput) {
        deliveryTypeSelect.addEventListener("change", (e) => {
            if (e.target.value === "Delivery") {
                customerAddressInput.style.display = "block";
                addressLabel.style.display = "block";
            } else {
                customerAddressInput.style.display = "none";
                addressLabel.style.display = "none";
            }
        });
    }

    // Checkout WhatsApp
    if (whatsappCheckoutBtn) {
        whatsappCheckoutBtn.addEventListener("click", handleWhatsAppCheckout);
    }
}

/**
 * 10. INTEGRAÇÃO WHATSAPP
 */
function handleWhatsAppCheckout() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio! Adicione produtos antes de finalizar o pedido.");
        return;
    }

    const customerName = customerNameInput ? customerNameInput.value.trim() : "";
    if (!customerName) {
        alert("Por favor, informe seu nome para continuar com o pedido.");
        if (customerNameInput) customerNameInput.focus();
        return;
    }

    const deliveryType = deliveryTypeSelect ? deliveryTypeSelect.value : "Delivery";
    const address = customerAddressInput ? customerAddressInput.value.trim() : "";

    if (deliveryType === "Delivery" && !address) {
        alert("Por favor, informe o endereço de entrega.");
        if (customerAddressInput) customerAddressInput.focus();
        return;
    }

    let message = `Olá! Gostaria de fazer um pedido na ${CONFIG.nome}:\n\n`;
    message = `*Cliente:* ${customerName}\n`;
    message += `*Atendimento:* ${deliveryType}\n`;
    if (deliveryType === "Delivery" && address) {
        message += `*Endereço:* ${address}\n`;
    }
    message += `\n*Itens do Pedido:*\n`;

    cart.forEach(item => {
        message += `• ${item.quantity}x ${item.nome} — R$ ${(item.preco * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });

    const subtotal = cart.reduce((sum, item) => sum + (item.preco * item.quantity), 0);
    message += `\n*Total:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    message += `\nGostaria de confirmar meu pedido.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
}

/**
 * 11. LIGHTBOX DA GALERIA
 */
function openLightbox(element) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const img = element.querySelector("img");

    if (lightbox && lightboxImg && img) {
        lightboxImg.src = img.src;
        lightbox.classList.add("active");
    }
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.classList.remove("active");
    }
}

// Fechar com tecla ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
        if (cartDrawer) {
            cartDrawer.classList.remove("active");
            cartOverlay.classList.remove("active");
        }
    }
});

/**
 * 12. TOAST DE FEEDBACK
 */
function showToast(message) {
    if (!toastNotification || !toastMsg) return;

    toastMsg.textContent = message;
    toastNotification.classList.add("show");

    setTimeout(() => {
        toastNotification.classList.remove("show");
    }, 3000);
}
