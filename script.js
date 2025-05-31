document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.querySelector('.all');

    fetch('https://shopapi20250530165108.azurewebsites.net/api/Products')
        .then(response => response.json())
        .then(data => {
            console.log('data', data)
            data.slice(0, 5).forEach(product => { // only first 6 products
                const productCard = document.createElement('div');
                productCard.classList.add('card');


                productCard.innerHTML = `
                    <div class="container1">
                        <div class="img-container">
                            <img class="img1" src="${product.image}" alt="${product.title}">
                        </div>
                        <div class="buttons">
                            <input class="add" type="button" value="ADD TO CART">
                            <input class="buy" type="button" value="BUY NOW">
                        </div>
                        <div class="pricetag">25% OFF</div>
                    </div>
                    <div class="container2">
                        <div class="group">
                            <p class="text1">${product.category.toUpperCase()}</p>
                            <p class="text">${product.title}</p>
                            <p class="price">$ ${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                `;

                productContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error:', error));
});
