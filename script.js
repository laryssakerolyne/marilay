const products = [
    {
        id: 1,
        name: 'Sacola Reutilizável',
        price: 25.00,
        image: 'data:image/jpeg;base64,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', // Substitua pela URL da imagem
    },
    {
        id: 2,
        name: 'Escova de Dente de Bambu',
        price: 15.00,
        image: 'https://cdn.awsli.com.br/64x50/1293/1293859/produto/299783895/escova-de-bambu-natural-organico-etjjzi2zoj.jfif', // Substitua pela URL da imagem
    },
    {
        id: 3,
        name: 'Canudo de Metal',
        price: 10.00,
        image: 'https://www.atecmetais.com/imagens/informacoes/canudo-metal-atacado-03.webp', // Substitua pela URL da imagem
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
