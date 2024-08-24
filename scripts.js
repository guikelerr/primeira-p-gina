const products = [
    { id: 1, name: "Tênis kobe 8", price: 569.99, Image: "https://www.kickscrew.com/cdn/shop/products/main-square_9c06bda7-7a2c-4c32-8cd7-ee56e0075e84_759x.jpg?v=1696303970" },
    { id: 2, name: "Tênis elevate renew 3", price: 531.99, Image: "https://sportbras.vtexassets.com/arquivos/ids/1157975-800-auto?v=638536360895400000&width=800&height=auto&aspect=true" },
    { id: 3, name: "Tênis nike GT cut", price: 523.44, Image: "https://acdn.mitiendanube.com/stores/001/226/115/products/air-zoom-gt-cut-ep-university-red-11-f4df9de9e326e70a1d16357864149235-640-0.jpg" },
    { id: 4, name: "under Armour Spawn 3", price: 223.70, Image: "https://m.media-amazon.com/images/I/41cF6gUhaGL._AC_SY300_.jpg" },
    { id: 5, name: "Aero blaze", price: 189.00, Image: "https://dcdn.mitiendanube.com/stores/003/315/849/products/opera-instantaneo_2023-07-08_233936_useconforto-com1-4b20f2ef902361a25f16888705242084-1024-1024.png" },
];

const cart = []


function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
        <img src="${product.Image}" alt="${product.id}">
        <h3>${product.name}</h3>
        <p>R$ ${product.price.toFixed(2)}</p>
        <button class="btn" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        productGrid.appendChild(productCard);

    });
}

renderProducts();


function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
        <p>${item.name} - R$ ${item.price.toFixed(2)} <button onclick="removeFromCart(${item.id})">Remover</button></p>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);0
0}


function addToCart(productId) {
    const product = products.find(p => p.id === productId) ;
    if (product) {
        cart.push({ ...product});
        renderCart();
    }
}
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        renderCart();
    }
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Compra finalizada! Obrigado por escolher nossa loja.');
        cart.length = 0;
        renderCart();
    } else {
        alert('Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.');
    }
});
renderProducts();
renderCart();
