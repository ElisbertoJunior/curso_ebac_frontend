document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('btn-search-cep')
    .addEventListener('click', () => {
      const xhttp = new XMLHttpRequest();
      const cep = document.getElementById('cep').value;
      const endpoint = `https://viacep.com.br/ws/${cep}/json`;

      xhttp.open('GET', endpoint);
      xhttp.send();
    })
});

$(document).ready(() => {
  $('btn-search-cep').click(() => {
    const cep = $('cep').val()
    const endpoint = `https://viacep.com.br/ws/${cep}/json`
    
  })
})