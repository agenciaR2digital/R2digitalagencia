/**
 * CONFIGURAÇÃO CENTRALIZADA DA CLÍNICA
 * Facilita a personalização para futuros clientes e gerenciamento institucional.
 */
const CONFIG = {
    nomeClinica: "Vitta Odontologia",
    slogan: "Seu sorriso merece o melhor cuidado.",
    whatsappNumero: "", // Preencha o número no formato DDI + DDD + Número (Ex: 5531999999999). Deixe vazio para tratamento seguro.
    whatsappAtivo: false, // Altere para true quando o número real for configurado
    instagram: "vittaodontologia",
    email: "contato@vittaodontologia.com.br",
    endereco: "Avenida Fleming, região da Pampulha",
    bairro: "Pampulha",
    cidade: "Belo Horizonte",
    estado: "MG",
    horarios: "Segunda a Sexta: 08h às 18h | Sábado: 08h às 12h",
    experienciaAnos: "10+",
    especialidadesQtd: "5"
};

document.addEventListener("DOMContentLoaded", () => {
    initYear();
    initMobileMenu();
    initHeaderScroll();
    initSmoothScroll();
    initActiveNav();
    initFilters();
    initAccordion();
    initCounters();
    initWhatsAppLinks();
});

// Atualizar ano automaticamente no rodapé
function initYear() {
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

// Menu Mobile Funcional
function initMobileMenu() {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        });
    }
}

// Header dinâmico com sombra e transparência na rolagem
function initHeaderScroll() {
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.classList.add("shadow-md", "bg-white/95");
        } else {
            header.classList.remove("shadow-md", "bg-white/95");
        }
    });
}

// Scroll suave para links internos
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
}

// Destacar seção ativa no menu
function initActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("text-sky-600", "font-bold");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("text-sky-600", "font-bold");
            }
        });
    });
}

// Filtros funcionais para a seção de tratamentos
function initFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".treatment-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => {
                b.classList.remove("bg-sky-600", "text-white", "shadow-md");
                b.classList.add("bg-white", "text-slate-600", "border", "border-slate-200");
            });
            btn.classList.add("bg-sky-600", "text-white", "shadow-md");
            btn.classList.remove("bg-white", "text-slate-600", "border", "border-slate-200");

            const filter = btn.getAttribute("data-filter");

            cards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (filter === "all" || category === filter) {
                    card.style.display = "flex";
                    setTimeout(() => card.classList.remove("hidden-filter"), 10);
                } else {
                    card.classList.add("hidden-filter");
                    setTimeout(() => {
                        if (card.classList.contains("hidden-filter")) {
                            card.style.display = "none";
                        }
                    }, 300);
                }
            });
        });
    });
}

// Accordion de perguntas frequentes
function initAccordion() {
    const items = document.querySelectorAll(".accordion-item");

    items.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");
        const icon = header.querySelector("span:last-child");

        header.addEventListener("click", () => {
            const isOpen = !content.classList.contains("hidden");

            // Fechar todos
            items.forEach(i => {
                i.querySelector(".accordion-content").classList.add("hidden");
                i.querySelector(".accordion-header span:last-child").textContent = "+";
            });

            // Abrir o atual se não estava aberto
            if (!isOpen) {
                content.classList.remove("hidden");
                icon.textContent = "−";
            }
        });
    });
}

// Contadores animados na seção de experiência
function initCounters() {
    const counters = document.querySelectorAll("[data-target]");
    let animated = false;

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const section = document.querySelector(".bg-sky-900");

        if (section && !animated) {
            const sectionTop = section.offsetTop;
            if (scrollPosition >= sectionTop + 100) {
                counters.forEach(counter => {
                    const target = +counter.getAttribute("data-target");
                    let count = 0;
                    const speed = target / 30;

                    const updateCount = () => {
                        count += speed;
                        if (count < target) {
                            counter.innerText = Math.ceil(count) + "+";
                            setTimeout(updateCount, 40);
                        } else {
                            counter.innerText = target + "+";
                        }
                    };
                    updateCount();
                });
                animated = true;
            }
        }
    });
}

// Gestão de modais para detalhes dos tratamentos
function openModal(title, description) {
    const modal = document.getElementById("treatment-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalWhatsapp = document.getElementById("modal-whatsapp");

    if (modal && modalTitle && modalDesc) {
        modalTitle.textContent = title;
        modalDesc.textContent = description;
        if (modalWhatsapp) {
            modalWhatsapp.setAttribute("data-message", `Olá! Tenho interesse no tratamento ${title} e gostaria de agendar uma avaliação na Vitta Odontologia.`);
            updateSingleWhatsAppLink(modalWhatsapp);
        }
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    }
}

function closeModal() {
    const modal = document.getElementById("treatment-modal");
    if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }
}

// Lightbox para a galeria da estrutura
function openLightbox(element) {
    const modal = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-img");
    const img = element.querySelector("img");

    if (modal && lightboxImg && img) {
        lightboxImg.src = img.src;
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    }
}

function closeLightbox() {
    const modal = document.getElementById("lightbox-modal");
    if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }
}

// Fechar modais com ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
        closeLightbox();
    }
});

// Configuração centralizada e segura dos links de WhatsApp
function initWhatsAppLinks() {
    const ctaButtons = document.querySelectorAll(".whatsapp-cta");

    ctaButtons.forEach(btn => {
        updateSingleWhatsAppLink(btn);
    });
}

function updateSingleWhatsAppLink(btn) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const customMessage = btn.getAttribute("data-message") || "Olá! Gostaria de mais informações sobre a Vitta Odontologia.";

        if (!CONFIG.whatsappAtivo || !CONFIG.whatsappNumero) {
            alert("O atendimento via WhatsApp será integrado em breve. Por favor, utilize o formulário de contato ou aguarde a configuração do número oficial.");
            return;
        }

        const encodedMessage = encodeURIComponent(customMessage);
        const whatsappURL = `https://wa.me/${CONFIG.whatsappNumero}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    });
}

// Validação e envio do formulário de contato para o WhatsApp
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("form-name").value.trim();
    const phone = document.getElementById("form-phone").value.trim();
    const service = document.getElementById("form-service").value;
    const message = document.getElementById("form-message").value.trim();

    if (!name || !phone) {
        alert("Por favor, preencha seu nome e telefone.");
        return;
    }

    const fullMessage = `Olá! Meu nome é *${name}* (Tel: ${phone}). Tenho interesse no serviço: *${service}*. ${message ? 'Mensagem: ' + message : ''}`;

    if (!CONFIG.whatsappAtivo || !CONFIG.whatsappNumero) {
        alert(`Obrigado pelo contato, ${name}! Sua mensagem foi preparada, mas o número de WhatsApp ainda não foi configurado no sistema.`);
        return;
    }

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/${CONFIG.whatsappNumero}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
}
