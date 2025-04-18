let products = [
  {
    id: 1,
    category: 'Shirts',
    title: 'Colorful Pattern Shirts',
    newPrice: 29.99,
    oldPrice: 35.99,
    imageDefault: 'assets/img/product-1-1.jpg',
    imageHover: 'assets/img/product-1-2.jpg',
    badge: 'Hot',
    badgeClass: 'light-pink',
    link: 'details.html',
    brand: 'Adidas',
    description: 'A vibrant and stylish shirt perfect for casual outings.',
    sku: 'FWM15VKT001',
    tags: 'Clothes, Men, Shirt',
    stock: 10,
    colors: ['hsl(37, 100%, 65%)', 'hsl(353, 100%, 65%)', 'hsl(49, 100%, 60%)'],
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 2,
    category: 'Shirts',
    title: 'Plain Cotton T-Shirt',
    newPrice: 19.5,
    oldPrice: 24.99,
    imageDefault: 'assets/img/product-2-1.jpg',
    imageHover: 'assets/img/product-2-2.jpg',
    badge: 'Hot',
    badgeClass: 'light-green',
    link: 'details.html',
    brand: 'Nike',
    description: 'Comfortable cotton t-shirt for everyday wear.',
    sku: 'FWM15VKT002',
    tags: 'Clothes, Unisex, T-Shirt',
    stock: 15,
    colors: ['hsl(304, 100%, 78%)', 'hsl(126, 61%, 52%)'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    category: 'Shoes',
    title: 'Vintage Denim Jacket',
    newPrice: 59.99,
    oldPrice: 69.99,
    imageDefault: 'assets/img/product-3-1.jpg',
    imageHover: 'assets/img/product-3-2.jpg',
    badge: 'Hot',
    badgeClass: 'light-orange',
    link: 'details.html',
    brand: "Levi's",
    description: 'Classic denim jacket with a retro vibe.',
    sku: 'FWM15VKT003',
    tags: 'Clothes, Unisex, Jacket',
    stock: 8,
    colors: ['hsl(37, 100%, 65%)', 'hsl(49, 100%, 60%)', 'hsl(126, 61%, 52%)'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 4,
    category: 'Pants',
    title: 'Checkered Flannel Shirt',
    newPrice: 34.75,
    oldPrice: 39.99,
    imageDefault: 'assets/img/product-4-1.jpg',
    imageHover: 'assets/img/product-4-2.jpg',
    badge: 'Hot',
    badgeClass: 'light-blue',
    link: 'details.html',
    brand: 'Zara',
    description: 'Cozy flannel shirt with a checkered pattern.',
    sku: 'FWM15VKT004',
    tags: 'Clothes, Men, Shirt',
    stock: 12,
    colors: ['hsl(353, 100%, 65%)', 'hsl(304, 100%, 78%)'],
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 5,
    category: 'Accessories',
    title: 'Striped Polo Shirt',
    newPrice: 25.99,
    oldPrice: 32.5,
    imageDefault: 'assets/img/product-5-1.jpg',
    imageHover: 'assets/img/product-5-2.jpg',
    badge: '-30%',
    badgeClass: 'light-blue',
    link: 'details.html',
    brand: 'Puma',
    description: 'Sporty polo shirt with stylish stripes.',
    sku: 'FWM15VKT005',
    tags: 'Clothes, Men, Polo',
    stock: 20,
    colors: ['hsl(37, 100%, 65%)', 'hsl(126, 61%, 52%)', 'hsl(49, 100%, 60%)'],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 6,
    category: 'Shirts',
    title: 'Floral Summer Dress',
    newPrice: 45.0,
    oldPrice: 55.0,
    imageDefault: 'assets/img/product-6-1.jpg',
    imageHover: 'assets/img/product-6-2.jpg',
    badge: '-22%',
    badgeClass: 'light-blue',
    link: 'details.html',
    brand: 'H&M',
    description: 'Light and breezy dress for summer days.',
    sku: 'FWM15VKT006',
    tags: 'Clothes, Women, Dress',
    stock: 6,
    colors: ['hsl(304, 100%, 78%)', 'hsl(353, 100%, 65%)'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 7,
    category: 'Shirts',
    title: 'Polka Dot Blouse',
    newPrice: 27.8,
    oldPrice: 34.99,
    imageDefault: 'assets/img/product-7-1.jpg',
    imageHover: 'assets/img/product-7-2.jpg',
    badge: '-22%',
    badgeClass: 'light-green',
    link: 'details.html',
    brand: 'Mango',
    description: 'Elegant blouse with a playful polka dot design.',
    sku: 'FWM15VKT007',
    tags: 'Clothes, Women, Blouse',
    stock: 9,
    colors: ['hsl(49, 100%, 60%)', 'hsl(126, 61%, 52%)'],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 8,
    category: 'Shirts',
    title: 'Denim Shorts',
    newPrice: 22.99,
    oldPrice: 29.99,
    imageDefault: 'assets/img/product-8-1.jpg',
    imageHover: 'assets/img/product-8-2.jpg',
    badge: '',
    badgeClass: '',
    link: 'details.html',
    brand: 'Uniqlo',
    description: 'Casual denim shorts for a relaxed look.',
    sku: 'FWM15VKT008',
    tags: 'Clothes, Unisex, Shorts',
    stock: 14,
    colors: [
      'hsl(37, 100%, 65%)',
      'hsl(353, 100%, 65%)',
      'hsl(304, 100%, 78%)',
    ],
    sizes: ['M', 'L', 'XL'],
  },
];

function renderProductDetails() {
  let detailsContainer = document.getElementById('productDetails');
  if (!detailsContainer) return;

  let product = JSON.parse(localStorage.getItem('selectedProduct'));
  if (!product) {
    detailsContainer.innerHTML = '<p>Product not found!</p>';
    return;
  }

  let discount =
    (((product.oldPrice - product.newPrice) / product.oldPrice) * 100).toFixed(
      0
    ) + '% Off';

  let colorHTML = '';
  for (let i = 0; i < product.colors.length; i++) {
    colorHTML += `
            <li>
                <a href="#" class="color__link" style="background-color: ${product.colors[i]}"></a>
            </li>
        `;
  }

  // Tạo HTML cho kích thước
  let sizeHTML = '';
  for (let i = 0; i < product.sizes.length; i++) {
    let activeClass = i === 0 ? 'size-active' : '';
    sizeHTML += `
            <li>
                <a href="#" class="size__link ${activeClass}">${product.sizes[i]}</a>
            </li>
        `;
  }

  // Tạo HTML chi tiết sản phẩm
  let detailsHTML = `
        <div class="details__container container grid">
            <div class="details__group">
                <img src="${product.imageDefault}" alt="${
    product.title
  }" class="details__img">
                <div class="details__small-images grid">
                    <img src="${product.imageHover}" alt="${
    product.title
  }" class="details__small-img">
                    <img src="${product.imageDefault}" alt="${
    product.title
  }" class="details__small-img">
                    <img src="${product.imageHover}" alt="${
    product.title
  }" class="details__small-img">
                </div>
            </div>
            <div class="details__group">
                <h3 class="details__title">${product.title}</h3>
                <p class="details__brand">Brand: <span>${
                  product.brand
                }</span></p>
                <div class="details__price flex">
                    <span class="new__price">$${product.newPrice.toFixed(
                      2
                    )}</span>
                    <span class="old__price">$${product.oldPrice.toFixed(
                      2
                    )}</span>
                    <span class="save__price">${discount}</span>
                </div>
                <p class="short__description">${product.description}</p>
                <ul class="products__list">
                    <li class="list__item flex"><i class="fi-rs-crown"></i> 1 Year Al Jazeera Brand Warranty</li>
                    <li class="list__item flex"><i class="fi-rs-refresh"></i> 30 Days Return Policy</li>
                    <li class="list__item flex"><i class="fi-rs-credit-card"></i> Cash on Delivery available</li>
                </ul>
                <div class="details__color flex">
                    <span class="details__color-title">Color</span>
                    <ul class="color__list">
                        ${colorHTML}
                    </ul>
                </div>
                <div class="details__size flex">
                    <span class="details__size-title">Size</span>
                    <ul class="size__list">
                        ${sizeHTML}
                    </ul>
                </div>
                <div class="details__action">
                    <input type="number" class="quantity" value="3">
                    <a href="#" class="btn btn--sm">Add To Cart</a>
                    <a href="#" class="details__action-btn">
                        <i class="fi fi-rs-heart"></i>
                    </a>
                </div>
                <ul class="details__meta">
                    <li class="meta__list flex"><span>SKU:</span>${
                      product.sku
                    }</li>
                    <li class="meta__list flex"><span>Tags:</span>${
                      product.tags
                    }</li>
                    <li class="meta__list flex"><span>Availability:</span>${
                      product.stock
                    } Items in Stock</li>
                </ul>
            </div>
        </div>
    `;

  detailsContainer.innerHTML = detailsHTML;

  // Gọi hàm imgGallery sau khi render HTML
  imgGallery();

  // Render sản phẩm liên quan
  renderRelatedProducts();
}

function imgGallery() {
  let mainImg = document.querySelector('.details__img');
  let smallImg = document.querySelectorAll('.details__small-img');

  for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].addEventListener('click', function () {
      mainImg.src = this.src;
    });
  }
}

function renderRelatedProducts() {
  let relatedContainer = document.getElementById('relatedProducts');
  if (!relatedContainer) return;

  let currentProduct = JSON.parse(localStorage.getItem('selectedProduct'));
  if (!currentProduct) {
    relatedContainer.innerHTML = '<p>No related products found!</p>';
    return;
  }

  // Lọc sản phẩm có cùng category, loại bỏ sản phẩm hiện tại
  let relatedProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (
      products[i].category === currentProduct.category &&
      products[i].id !== currentProduct.id
    ) {
      relatedProducts.push(products[i]);
    }
  }

  // Nếu không có sản phẩm liên quan
  if (relatedProducts.length === 0) {
    relatedContainer.innerHTML = '<p>No related products found!</p>';
    return;
  }

  // Giới hạn tối đa 4 sản phẩm
  let maxProducts = relatedProducts.length > 4 ? 4 : relatedProducts.length;
  let relatedHTML = '';

  for (let i = 0; i < maxProducts; i++) {
    let product = relatedProducts[i];
    let badgeHTML = product.badge
      ? `<div class="product__badge ${product.badgeClass}">${product.badge}</div>`
      : '';
    relatedHTML += `
            <div class="product__item">
                <div class="product__banner">
                    <a href="details.html" class="product__images" data-id="${
                      product.id
                    }">
                        <img src="${product.imageDefault}" alt="${
      product.title
    }" class="product__img default">
                        <img src="${product.imageHover}" alt="${
      product.title
    }" class="product__img hover">
                    </a>
                    <div class="product__actions">
                        <a href="#" class="action__btn" aria-label="Quick View">
                            <i class="fi fi-rs-eye"></i>
                        </a>
                        <a href="#" class="action__btn" aria-label="Add to Wishlist">
                            <i class="fi fi-rs-heart"></i>
                        </a>
                        <a href="#" class="action__btn" aria-label="Compare">
                            <i class="fi fi-rs-shuffle"></i>
                        </a>
                    </div>
                    ${badgeHTML}
                </div>
                <div class="product__content">
                    <span class="product__category">${product.category}</span>
                    <a href="details.html" class="product__title-link" data-id="${
                      product.id
                    }">
                        <h3 class="product__title">${product.title}</h3>
                    </a>
                    <div class="product__rating">
                        <i class="fi fi-rs-star"></i>
                        <i class="fi fi-rs-star"></i>
                        <i class="fi fi-rs-star"></i>
                        <i class="fi fi-rs-star"></i>
                        <i class="fi fi-rs-star"></i>
                    </div>
                    <div class="product__price flex">
                        <span class="new__price">$${product.newPrice.toFixed(
                          2
                        )}</span>
                        <span class="old__price">$${product.oldPrice.toFixed(
                          2
                        )}</span>
                    </div>
                    <a href="#" class="action__btn cart__btn" aria-label="Add To Cart">
                        <i class="fi fi-rs-shopping-bag-add"></i>
                    </a>
                </div>
            </div>
        `;
  }

  relatedContainer.innerHTML = relatedHTML;

  // Gắn sự kiện cho link sản phẩm
  let productLinks = document.querySelectorAll(
    '.product__images, .product__title-link'
  );
  for (let i = 0; i < productLinks.length; i++) {
    productLinks[i].onclick = function (event) {
      event.preventDefault();
      let productId = this.getAttribute('data-id');
      let selectedProduct = products.find(function (p) {
        return p.id == productId;
      });
      localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
      window.location.href = 'details.html';
    };
  }
}

// Chạy khi DOM tải xong
window.onload = function () {
  renderProductDetails();
};
