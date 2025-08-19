let basket = JSON.parse(localStorage.getItem("data")) || [];
let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let emptyCartHTML = `
        <h2>Cart is empty</h2>
        <a href="index.html">
            <button class="HomeBtn">Back to home</button>
        </a>
        `;

let filledCartHTML = (x) => {
  let id = x.id;
  let count = x.count;
  let search = shopItemsData.find((y) => y.id === id) || [];
  return `
    <div class="cart-item">
        <img width="200px" src=${search.img} alt="" />
        <div class="details">
            <div class="title-price-x">
                <h4 class="title-price">
                    <p>shirt</p>
                    <p class="cart-item-price">${search.price}</p>
                </h4>
                <i onclick=remove_item(${id}) class="bi bi-x-lg"></i>
            </div>
            <div class="buttons">
                <i onclick="decrement(${search.id})" class="bi bi-dash-lg"></i>
                <div id="${search.id}" class="quantity">${count}</div>
                <i onclick="increment(${search.id})" class="bi bi-plus-lg"></i>
            </div>
            <h3>$${count * search.price}</h3>
        </div>
    </div>
    `;
};

let generateCartItems = () => {
  if (basket.length != 0) {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        return filledCartHTML(x);
      })
      .join(""));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = emptyCartHTML;
  }
};

let totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let search = shopItemsData.find((y) => y.id === x.id) || [];
        return x.count * search.price;
      })
      .reduce((x, y) => x + y, 0);
    console.log(amount);
    label.innerHTML = `
            <h2>Total bill: $${amount} </h2>
            <button class="checkout">Checkout</button>
            <button onclick="clearCart()" class="clear-cart">Clear Cart</button>
        `;
  } else {
    return;
  }
};

let increment = (item) => {
  let id = item.id;
  let search_item = basket.find((x) => x.id === id);
  if (search_item === undefined) {
    basket.push({
      id: id,
      count: 1,
    });
  } else {
    search_item.count += 1;
  }
  update(id);
};

let decrement = (item) => {
  let id = item.id;
  let search_item = basket.find((x) => x.id === id);
  if (search_item === undefined) {
    return;
  } else if (search_item.count === 0) {
    return;
  } else {
    search_item.count -= 1;
  }

  update(id);
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.count).reduce((x, y) => x + y, 0);
};

let update = (id) => {
  let search_item = basket.find((x) => x.id === id);
  //   document.getElementById(id).innerHTML = search_item.count;
  calculation();
  basket = basket.filter((x) => x.count != 0);
  generateCartItems();
  totalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
};

let remove_item = (item) => {
  basket = basket.filter((x) => x.id !== item.id);
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItems();
  totalAmount();
};

let clearCart = () => {
    basket = []
    calculation();
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
}

totalAmount();
calculation();
generateCartItems();
