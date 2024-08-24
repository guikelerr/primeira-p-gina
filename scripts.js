const products = [
    { id: 1, name: "Tênis kobe 8", price: 569.99, Image: "" },
    { id: 2, name: "Tênis elevate renew 3", price: 531.99, Image: "" },
    { id: 3, name: "Tênis kyrie 7", price: 597.90, Image: "" },
    { id: 4, name: "Tênis nike GT cut", price: 523.44, Image: ""},
    { id: 5, name: "under Armour Spawn 3", price: 223.70, Image: ""},
    { id: 6, name: "Aero blaze", price: 189.00, image: ""},
];

const cart = []


function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
        <img src="${product.image}" alt="${product.id}">
        <h3>${product.name}</h3>
        <p>R$ ${product.price.toFixed(2)}</p>
        <button class="btn" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        productGrid.appendChild(productCard);

    });
}

renderProducts();
renderCart();
