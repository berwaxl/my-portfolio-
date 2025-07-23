const products = [
  {
    name: "Wireless Headphones",
    category: "electronics",
    price: "₹2,199",
  },
  {
    name: "Casual Shirt",
    category: "fashion",
    price: "₹749",
  },
  {
    name: "Ceramic Mug",
    category: "home",
    price: "₹399",
  },
  {
    name: "Bluetooth Speaker",
    category: "electronics",
    price: "₹1,499",
  },
  {
    name: "Table Lamp",
    category: "home",
    price: "₹850",
  },
  {
    name: "Summer Dress",
    category: "fashion",
    price: "₹1,200",
  }
];

const productList = document.getElementById('productList');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search');

function renderProducts(productArray) {
  if (productArray.length === 0) {
    productList.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding:2rem;">No products found.</div>';
    return;
  }
  productList.innerHTML = productArray.map(
  (product, idx) => `
    <div class="product-card">
      <div class="product-image product-image-${idx}"></div>
      <div class="product-info">
        <div class="product-title">${product.name}</div>
        <div class="product-category">${product.category.charAt(0).toUpperCase()+product.category.slice(1)}</div>
        <div class="product-price">${product.price}</div>
      </div>
    </div>
  `
).join('');

}

let activeCategory = 'all';

function filterProducts() {
  let filtered = products;
  const searchVal = searchInput.value.toLowerCase();
  if (activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === activeCategory);
  }
  if (searchVal) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(searchVal));
  }
  renderProducts(filtered);
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.getAttribute('data-filter');
    filterProducts();
  });
});

searchInput.addEventListener('input', filterProducts);

renderProducts(products);
