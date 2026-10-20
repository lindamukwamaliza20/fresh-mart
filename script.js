let total = 0;
let count = 1;
const itemSelect = document.getElementById("itemSelect");
const priceInput = document.getElementById("price");
// Show price automatically
itemSelect.addEventListener("change", function () {
const selectedOption = itemSelect.options[itemSelect.selectedIndex];
const price = selectedOption.getAttribute("data-price");
priceInput.value = price || "";
});
function addItem() {
const item = itemSelect.value;
6
const price = parseInt(priceInput.value);
const quantity = parseInt(document.getElementById("quantity").value);
if (!item || !price || !quantity) {
alert("Please fill all fields");
return;
}
const itemTotal = price * quantity;
total += itemTotal;
document.getElementById("totalAmount").innerText = total;
const billBody = document.getElementById("billBody");
const row = `
 <tr>
 <td>${count}</td>
 <td>${item}</td>
 <td>${price}</td>
 <td>${quantity}</td>
 <td>${itemTotal}</td>
 </tr>
 `;
billBody.innerHTML += row;
count++;
document.getElementById("quantity").value = "";
}
function calculateChange() {
const paid = parseInt(document.getElementById("amountPaid").value);
if (!paid) {
alert("Enter amount paid");
return;
}
const change = paid - total;
document.getElementById("change").innerText = change;
}
function clearAll() {
7
document.getElementById("billBody").innerHTML = "";
document.getElementById("totalAmount").innerText = 0;
document.getElementById("change").innerText = 0;
document.getElementById("amountPaid").value = "";
document.getElementById("quantity").value = "";
document.getElementById("price").value = "";
document.getElementById("itemSelect").value = "";
total = 0;
count = 1;
}