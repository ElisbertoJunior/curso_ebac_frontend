const form = document.getElementById("form-atividade");
const imgApproved = `<img src="./images/aprovado.png">`;
const imgDisapproved = `<img src="./images/reprovado.png">`;
const activities = [];
const grades = [];
const spanApproved = `<span class="result approved">Aprovado</span>`;
const spanDisapproved = `<span class="result disapproved">Reprovado</span>`;
const minGrade = parseFloat(prompt(`Digite qual será a nota minima para aprovação`));

let row;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  addRow();
  updateTable();
  upateFinalMedia();

});


const addRow = () => {
  const inputNomeAtividade = document.getElementById("nome-atividade");
  const inputNotaAtividade = document.getElementById("nota-atividade");

  
  if (activities.includes(inputNomeAtividade.value)) { 
    alert(`A atividadde - ${inputNomeAtividade.value} ja existe.`); 
    row = '';
    return
  } 

  activities.push(inputNomeAtividade.value);
  grades.push(parseFloat(inputNotaAtividade.value));

  row = `<tr>`;
  row += `<td>${inputNomeAtividade.value}</td>`;
  row += `<td>${inputNotaAtividade.value}</td>`;
  row += `<td>${
    inputNotaAtividade.value >= minGrade ? imgApproved : imgDisapproved
  }</td>`;
  row += `</tr>`;

  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";

  
};

const updateTable = () => {
  const tableBody = document.querySelector("table");
  tableBody.innerHTML += row;
};

const calcfinalMedia = () => {
 const soma = grades.reduce((acc, curretValue) => acc + curretValue);
 const media = soma / grades.length;
 return media.toFixed(1);
  
}
  

const upateFinalMedia = () => {
  const tableFooter = document.querySelector("tfoot");
  const finalMedia = calcfinalMedia();
   
  const tFootRow = `
      <tr>
        <td>Media final</td>
        <td>${finalMedia}</td>
        <td>${finalMedia >= minGrade ? spanApproved : spanDisapproved}</td>
      </tr>
  `;

  tableFooter.innerHTML = tFootRow;
};


