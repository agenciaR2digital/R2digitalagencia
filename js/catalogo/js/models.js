/* CATÁLOGO — para adicionar um site, copie um objeto; para excluir, apague-o.
   status: "Disponível" (tag verde) ou "Vendido" (tag vermelha). Ao vender, troque para "Vendido".
   category: qualquer nome (os filtros são criados automaticamente a partir das categorias usadas)
   image: ex. "../assets/images/modelo.jpg" (opcional: sem imagem, gera-se uma prévia automática)
   url: link da demonstração (opcional) */
window.R2_MODELS = [
  { name: "Clínica Médica Advanced", category: "Saúde", description: "Ideal para médicos, clínicas e profissionais da saúde.", status: "Disponível", image: "", url: "" },
  { name: "Burger House Pro", category: "Alimentação", description: "Desenvolvido para hamburguerias e deliverys.", status: "Vendido", image: "", url: "" },
  { name: "Azure Detailing", category: "Automotivo", description: "Site premium para estética automotiva, com correção de pintura, vitrificação cerâmica e PPF.", status: "Disponível", image: "modelos/estetica-automotiva/img/preview.jpg", url: "modelos/estetica-automotiva/" }
];
