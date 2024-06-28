document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            title: "Fico Candle Holder",
            description: "Hand-crafted ceramic candle holder, perfect for adding a touch of warmth and ambiance to any room.",
            price: "$29.99",
            image: "https://rachanastones.com/wp-content/uploads/2015/02/granite-stone-exporter-india-rachana-stones-600x450.jpeg"
        },
        {
            title: "Woven Wall Hanging",
            description: "Beautiful woven wall hanging made from natural fibers, adds a touch of boho style to your home.",
            price: "$45.00",
            image: "https://rachanastones.com/wp-content/uploads/2015/02/marble-stone-exporter-india-rachana-stones-600x450.jpeg"
        },
        {
            title: "Wooden Serving Tray",
            description: "Eco-friendly wooden serving tray, perfect for serving drinks, snacks, or appetizers.",
            price: "$19.99",
            image: "https://rachanastones.com/wp-content/uploads/2019/08/Quartzite-Stone-Exporter-India-Rachana-Stones-600x450.jpg"
        }
    ];

    function performSearch() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const productGrid = document.getElementById('productGrid');
        productGrid.innerHTML = '';

        const filteredProducts = products.filter(product => 
            product.title.toLowerCase().includes(searchInput) || 
            product.description.toLowerCase().includes(searchInput)
        );

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" />
                    <div class="product-card-content">
                        <h3 class="product-card-title">${product.title}</h3>
                        <p class="product-card-description">${product.description}</p>
                        <span class="product-card-price">${product.price}</span>
                    </div>
                `;
                productGrid.appendChild(productCard);
            });
        } else {
            productGrid.innerHTML = '<p>No results found</p>';
        }
    }

    // Attach the performSearch function to the search input
    document.getElementById('searchInput').addEventListener('keyup', performSearch);
});
