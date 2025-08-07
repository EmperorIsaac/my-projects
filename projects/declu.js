const form = document.getElementById("marketForm");
const marketItems = document.getElementById("marketItems");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("itemName").value.trim();
  const price = document.getElementById("itemPrice").value.trim();
  const imageInput = document.getElementById("itemImage");
  const file = imageInput.files[0];

  if (!name || !price || !file) {
    alert("Please fill in all fields.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    const imageURL = event.target.result;
    addItemToMarketplace(name, price, imageURL);
    form.reset();
  };

  reader.readAsDataURL(file);
});

function addItemToMarketplace(name, price, image) {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("market-item");

  itemDiv.innerHTML = `
    <img src="${image}" alt="${name}">
    <div class="name">${name}</div>
    <div class="price">₦${parseFloat(price).toLocaleString()}</div>
  `;

  marketItems.appendChild(itemDiv);
}
