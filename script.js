const products = [
    {
        id: 1,
        name: 'Sacola Reutilizável',
        price: 25.00,
        image: 'https://example.com/image1.jpg', // Substitua pela URL da imagem
    },
    {
        id: 2,
        name: 'Escova de Dente de Bambu',
        price: 15.00,
        image: 'https://example.com/image2.jpg', // Substitua pela URL da imagem
    },
    {
        id: 3,
        name: 'Canudo de Metal',
        price: 10.00,
        image: 'https://example.com/image3.jpg', // Substitua pela URL da imagem
    },
];

const cart = [];
let currentUser = null; // Para armazenar informações do usuário logado

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>R$ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} adicionado ao carrinho!`);
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        cart.forEach((product, index) => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `
                <p>${product.name} - R$ ${product.price.toFixed(2)}</p>
                <button onclick="removeFromCart(${index})">Remover</button>
            `;
            cartDiv.appendChild(cartItem);
        });
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    currentUser = { email }; // Simulação de login
    alert('Login realizado com sucesso!');
    displayUserProfile();
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cadastro realizado com sucesso!');
});

function displayUserProfile() {
    if (currentUser) {
        document.getElementById('user-info').textContent = `Usuário logado: ${currentUser.email}`;
        document.getElementById('perfil').style.display = 'block';
        document.getElementById('sell-button').style.display = 'block';
    }
}

document.getElementById('sell-button').addEventListener('click', function() {
    document.getElementById('sell-product').style.display = 'block';
});

document.getElementById('sell-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productImage = document.getElementById('product-image').value;

    const newProduct = {
        id: products.length + 1,
        name: productName,
        price: parseFloat(productPrice),
        image: productImage,
    };

    products.push(newProduct);
    alert(`Produto ${productName} listado com sucesso!`);
    document.getElementById('sell-message').textContent = `${productName} foi adicionado à lista de produtos.`;
    document.getElementById('sell-form').reset();
    displayProducts();
});

document.getElementById('checkout-button').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Compra finalizada com sucesso!');
        cart.length = 0; // Limpa o carrinho após finalizar a compra
        updateCart();
    }
});

window.onload = displayProducts;
