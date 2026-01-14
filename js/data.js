// Edite aqui: produtos, categorias, tags, preços, etc.
window.CARDAPIO_DATA = {
  config: {
    storeName: "Sushi • Unidade SP",
    logoText: "SP",
    line: "Pedido mínimo R$ 20,00 • 30-50 min • Grátis",
    headline: "Faça seu pedido!",
    subtitle: "Sushi caprichado • entrega rápida • qualidade de sempre",
    instagramUrl: "https://instagram.com/",
    location: "São Paulo",
    distance: "2,3km",
    rating: "4,8",
    reviewsCount: "1.007",
    open: { isOpen: true, message: "Fecharemos em 20 minutos. Faça seu pedido rápido!" },

    promo: {
      title: "Compre 1 leve 2 • Super Combo",
      desc: "Aproveite a promoção por tempo limitado.",
      countdownSeconds: 45 * 60
    },

    info: {
      deliveryTypes: "Motoboy • Retirada",
      payments: "Pix • Cartão",
      address: "Rua Exemplo, 123 • SP",
      areas: "Centro • Zona Sul • Zona Oeste"
    },

    categories: ["Promo", "Temaki", "Barcas", "Hot", "Bebidas"],
    drinks: [
      "Coca Cola - Lata",
      "Coca Cola Zero - Lata",
      "Guaraná - Lata",
      "Sprite - Lata",
      "Suco Uva - Lata",
      "Suco Laranja - Lata",
      "Água sem Gás",
      "Água com Gás"
    ],
    barcaItems: [
      "20 Hot Philadelphia",
      "20 Sashimi Salmão",
      "20 Niguiri Skin",
      "20 Uramaki de Shimeji",
      "20 Uramaki de Salmão Cream Cheese",
      "20 Niguiris de Salmão",
      "20 Hossomaki Salmão Grelhado",
      "20 Hossomaki Salmão"
    ],

    reviews: [
      { name: "Cinthia", stars: 5, text: "Chegou perfeito, bem embalado e tudo fresquinho." },
      { name: "Lucas", stars: 5, text: "Melhor custo-benefício. Entrega rápida." },
      { name: "Luiza", stars: 5, text: "Viciei kkk, tudo muito bem feito." },
      { name: "Ronald", stars: 5, text: "Bem servido e qualidade absurda." }
    ]
  },

  promoProducts: [
    { id:"p1", cat:"Promo", title:"2 Temaki Salmão + Bebida", desc:"Combo promocional.", oldPrice:45.80, price:19.90, tag:"Pague 1 Leve 2" },
    { id:"p2", cat:"Promo", title:"2 Temaki Hot + Bebida", desc:"Bem servido e rápido.", oldPrice:45.80, price:19.90, tag:"Promo" },
    { id:"p3", cat:"Promo", title:"Super Barca 100 peças + Bebida", desc:"Custo-benefício (limitado).", oldPrice:149.80, price:59.90, tag:"MAIS VENDIDO" },
    { id:"p4", cat:"Promo", title:"4 Temaki Salmão + Bebida", desc:"Pra dividir com geral.", oldPrice:85.80, price:32.90, tag:"Combo" }
  ],

  menuProducts: [
    { id:"m1", cat:"Temaki", title:"Temaki Salmão", desc:"Clássico bem recheado.", price:16.90, tag:"Clássico" },
    { id:"m2", cat:"Temaki", title:"Temaki Hot", desc:"Crocante e bem servido.", price:17.90, tag:"Hot" },
    { id:"m3", cat:"Barcas", title:"Barca 60 peças", desc:"Mix sushi + hot.", price:49.90, tag:"Top" },
    { id:"m4", cat:"Hot", title:"Combo Hot 30 peças", desc:"Bem recheado.", price:34.90, tag:"Hot" },
    { id:"m5", cat:"Bebidas", title:"Refrigerante 350ml", desc:"Geladinho.", price:6.00, tag:"Bebida" }
  ]
};
