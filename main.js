const container = document.querySelector(".container");

function showCustomers(clients) {
  for (let customers of clients) {
    // create customerCard div //
    let customerCard = document.createElement("div");
    customerCard.classList.add("customer");
    container.appendChild(customerCard);
    // customer picture //
    let customerImage = document.createElement("img");
    customerImage.classList.add("image");
    customerImage.src = `${customers.picture.large}`;
    customerCard.appendChild(customerImage);
    // customer name div //
    let customerName = document.createElement("div");
    customerName.classList.add("name");
    customerName.innerText = `${customers.name.first} ${customers.name.last}`;
    customerCard.appendChild(customerName);
  }
}
showCustomers(customers);
