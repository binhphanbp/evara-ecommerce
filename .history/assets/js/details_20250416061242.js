function renderProductDetails() {
  let detailsContainer = document.getElementById('productDetails');
  if (!detailsContainer) return;

  let product = JSON.parse(localStorage.getItem('selectedProduct'));
  if (!product) {
    detailsContainer.innerHTML = '<p>Product not found!</p>';
    return;
  }

  // Tính phần trăm giảm giá
  let discount =
    (((product.oldPrice - product.newPrice) / product.oldPrice) * 100).toFixed(
      0
    ) + '% Off';

  // Tạo HTML cho màu sắc
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
}

// Chạy khi DOM tải xong
window.onload = function () {
  renderProductDetails();
};

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector('.details__img'),
    smallImg = document.querySelectorAll('.details__small-img');

  smallImg.forEach((img) => {
    img.addEventListener('click', function () {
      mainImg.src = this.src;
    });
  });
}
