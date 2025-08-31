 // Mock product database
    const products = [
      { id: 1, name: "Laptop", price: 600, stock: 5 },
      { id: 2, name: "Phone", price: 300, stock: 10 },
      { id: 3, name: "Headphones", price: 100, stock: 15 },
      { id: 4, name: "Keyboard", price: 50, stock: 20 }
    ];

    let cart = [];
    let couponApplied = false;

    function addToCart() {
      const id = parseInt(document.getElementById("productId").value);
      let qty = parseInt(document.getElementById("quantity").value);

      const product = products.find(p => p.id === id);
      if (!product) {
        alert("Product not available");
        return;
      }

      if (qty <= 0) {
        alert("Invalid quantity");
        return;
      }

      if (qty > product.stock) {
        alert(`Only ${product.stock} available. Adjusting quantity.`);
        qty = product.stock;
      }

      const existing = cart.find(item => item.id === id);
      if (existing) {
        existing.quantity = Math.min(existing.quantity + qty, product.stock);
        existing.total = existing.quantity * product.price;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: qty,
          total: qty * product.price
        });
      }

      renderCart();
    }

    function applyCoupon() {
      const code = document.getElementById("coupon").value.trim();
      if (code === "SAVE10") {
        couponApplied = true;
        alert("Coupon applied!");
      } else {
        alert("Invalid coupon");
      }
      renderCart();
    }

    function renderCart() {
      const tbody = document.querySelector("#cartTable tbody");
      tbody.innerHTML = "";

      let subtotal = 0;
      cart.forEach(item => {
        subtotal += item.total;
        tbody.innerHTML += `
          <tr>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>$${item.total}</td>
          </tr>`;
      });

      let discount = 0;
      if (couponApplied && subtotal >= 500) {
        discount = subtotal * 0.10;
      }

      let tax = (subtotal - discount) * 0.14;
      let shipping = (subtotal - discount) > 1000 ? 0 : 50;
      let overall = (subtotal - discount) + tax + shipping;

      document.getElementById("summary").innerHTML = `
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Discount: -$${discount.toFixed(2)}</p>
        <p>Tax (14%): $${tax.toFixed(2)}</p>
        <p>Shipping: $${shipping.toFixed(2)}</p>
        <h3>Total: $${overall.toFixed(2)}</h3>
      `;
    }