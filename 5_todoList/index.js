let items = [];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");
const storageKey = "items_todo";

function loadItems() {
  const oldItems = localStorage.getItem(storageKey);
  if (oldItems) items = JSON.parse(oldItems);
  renderItems();
}

function renderItems() {
  itemsDiv.innerHTML = null;
  for (const [idx, item] of Object.entries(items)) {
    // create a div element
    const div = document.createElement("div");
    div.className = "item";

    // creates p element
    const text = document.createElement("p");
    text.style.display = "inline";
    text.textContent = item;

    // create remove button
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.onclick = () => removeItem(idx);

    // add p and button to the div
    div.appendChild(text);
    div.appendChild(button);

    // add the div to items list
    itemsDiv.appendChild(div);
  }
}

function saveItems() {
  const stringItems = JSON.stringify(items);
  localStorage.setItem(storageKey, stringItems);
}

function addItem() {
  const value = input.value;
  if (!value) {
    alert("Enter a valid input");
    return;
  }

  items.push(value);
  renderItems();
  input.value = "";
  saveItems();
}

function removeItem(idx) {
  items.splice(idx, 1);
  renderItems();
  saveItems();
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

document.addEventListener("DOMContentLoaded", loadItems);
