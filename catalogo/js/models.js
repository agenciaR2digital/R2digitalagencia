/* CATÁLOGO — para adicionar um site, copie um objeto; para excluir, apague-o.
   status: "Disponível" (tag verde) ou "Vendido" (tag vermelha). Ao vender, troque para "Vendido".
   category: qualquer nome (os filtros são criados automaticamente a partir das categorias usadas)
   image: ex. "../assets/images/modelo.jpg" (opcional: sem imagem, gera-se uma prévia automática)
   url: link da demonstração (opcional) */
window.R2_MODELS = [
  //{ name: "Clínica Médica Advanced", category: "Saúde", description: "Ideal para médicos, clínicas e profissionais da saúde.", status: "Disponível", image: "", url: "" },
  { name: "Burger Blast", category: "Alimentação", description: "Hamburgueres artesanais, combos, acompanhamentos e pedidos direto pelo WhatsApp.", status: "Disponível", image: "modelos/burguerblast/img/preview.jpeg", url: "modelos/burguerblast/" },
  { name: "Odonto Vitta", category: "Odontologia", description: "Site para clínicas odontológicas, moderno e responsivo.", status: "Disponível", image: "modelos/odontovittacl/img/preview.jpeg", url: "modelos/odontovittacl"},
  { name: "Azure Detailing", category: "Automotivo", description: "Site premium para estética automotiva, com correção de pintura, vitrificação cerâmica e PPF.", status: "Disponível", image: "modelos/estetica-automotiva/img/preview.jpg", url: "modelos/estetica-automotiva/" }
];