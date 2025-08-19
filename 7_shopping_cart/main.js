let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let content = (x, search) => {
  return `
    <div id=product-id-${x.id} class="item">
        <img src="${x.img}" alt="" width="200" />
        <div class="details">
            <h3>${x.name}</h3>
            <p>${x.desc}</p>
            <div class="price-quantity">
            <h2>$${x.price}</h2>
            <div class="buttons">
                <i onclick=decrement(${x.id}) class="bi bi-dash-lg"></i>
                <div id=${x.id} class="quantity">
                    ${search.count === undefined ? 0 : search.count}
                </div>
                <i onclick=increment(${x.id}) class="bi bi-plus-lg"></i>
            </div>
            </div>
        </div>
    </div>
    `;
};

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let search = basket.find((z) => z.id === x.id) || [];
      let new_content = content(x, search);
      return new_content;
    })
    .join(""));
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
  }
  else if (search_item.count === 0) {
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
  document.getElementById(id).innerHTML = search_item.count;
  calculation();
  basket = basket.filter((x) => x.count != 0);
  localStorage.setItem("data", JSON.stringify(basket));
};

// generateShop();
document.addEventListener("DOMContentLoaded", calculation);
document.addEventListener("DOMContentLoaded", generateShop);
