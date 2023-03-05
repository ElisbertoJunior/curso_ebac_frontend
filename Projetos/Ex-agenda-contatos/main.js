const form = document.querySelector("form");
const contacts = [];
let count = 0;
let row;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  addRow();
  updateRows();
  updateTotalContacts();
});

const addRow = () => {
  const inputName = document.getElementById("input_name");
  const inputTel = document.getElementById("input_tel");

  if (contacts.includes(inputName.value)) {
    alert(`O contato ${inputName.value} ja exite na agenda.`);
    row = "";
    return;
  }

  contacts.push(inputName.value);
  count++;

  row = `
      <tr>
        <td>${inputName.value}</td>
        <td>${inputTel.value}</td>
      </tr>
  `;
};

const updateRows = () => {
  const tBody = document.querySelector("tbody");

  tBody.innerHTML += row;
};

const updateTotalContacts = () => {
  const tFoot = document.querySelector("tfoot");
  const rowFooter = `
      <tr>
        <td>Total de contatos existentes</td>
        <td>${count}</td>
      </tr>
  `;

  tFoot.innerHTML = rowFooter;
};
