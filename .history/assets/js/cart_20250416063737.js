let cart = {
  items: [], // Array of products in the cart
  add(productId) {
    // Find the product in the products array
    let product = null;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == productId) {
        product = products[i];
        break;
      }
    }
    if (product) {
      // Check if the product is already in the cart
      let existingItem = null;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id == productId) {
          existingItem = this.items[i];
          break;
        }
      }
      if (existingItem) {
        // Increase quantity if the product already exists
        existingItem.quantity += 1;
      } else {
        // Add new product to the cart
        this.items.push({
          id: product.id,
          title: product.title,
          newPrice: product.newPrice,
          imageDefault: product.imageDefault,
          quantity: 1,
        });
      }
      this.save();
    }
  },
  remove(productId) {
    // Remove a product from the cart
    let newItems = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id != productId) {
        newItems.push(this.items[i]);
      }
    }
    this.items = newItems;
    this.save();
  },
  updateQuantity(productId, quantity) {
    // Update the quantity of a product
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == productId) {
        if (quantity > 0) {
          this.items[i].quantity = quantity;
        } else {
          this.remove(productId);
        }
        break;
      }
    }
    this.save();
  },
  getTotal() {
    // Calculate the total price of the cart
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].newPrice * this.items[i].quantity;
    }
    return total;
  },
  save() {
    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(this.items));
  },
  load() {
    // Load the cart from localStorage
    let savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
    }
  },
  render() {
    // Display the cart in cart.html
    let tableBody = document.querySelector('.table tbody');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      let subtotal = (item.newPrice * item.quantity).toFixed(2);
      let row = document.createElement('tr');
      row.innerHTML = `
                <td><img src="${item.imageDefault}" alt="${
        item.title
      }" class="table__img"></td>
                <td>
                    <h3 class="table__title">${item.title}</h3>
                    <p class="table__description">Lorem ipsum dolor sit amet consectetur.</p>
                </td>
                <td><span class="table__price">$${item.newPrice.toFixed(
                  2
                )}</span></td>
                <td><input type="number" value="${
                  item.quantity
                }" class="quantity" data-id="${item.id}" min="1"></td>
                <td><span class="subtotal">$${subtotal}</span></td>
                <td><i class="fi fi-rs-trash table__trash" data-id="${
                  item.id
                }"></i></td>
            `;
      tableBody.appendChild(row);
    }

    // Update the total price
    let totalElement = document.querySelector('.cart__total-price:last-child');
    if (totalElement) {
      totalElement.textContent = `$${this.getTotal().toFixed(2)}`;
    }

    // Add event listeners for quantity inputs and remove buttons
    let quantityInputs = document.querySelectorAll('.quantity');
    let trashButtons = document.querySelectorAll('.table__trash');
    for (let i = 0; i < quantityInputs.length; i++) {
      quantityInputs[i].onchange = function () {
        let productId = this.getAttribute('data-id');
        let newQuantity = parseInt(this.value);
        cart.updateQuantity(productId, newQuantity);
        cart.render();
      };
    }
    for (let i = 0; i < trashButtons.length; i++) {
      trashButtons[i].onclick = function () {
        let productId = this.getAttribute('data-id');
        cart.remove(productId);
        cart.render();
      };
    }
  },
};
