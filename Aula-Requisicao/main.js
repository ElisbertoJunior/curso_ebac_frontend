/*
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
*/

$(document).ready(function () {
  $('#cep').mask('00000-000');
  
  $("#btn-search-cep").click(function () {
    const cep = $("#cep").val();
    const endpoint = `https://viacep.com.br/ws/${cep}/json`;
    const button = $(this);

    $(button).find('i').addClass('d-none');
    $(button).find('span').removeClass('d-none');

    $.ajax(endpoint).done(function (res) {
      const { logradouro, bairro, localidade, uf } = res;

      const address = `${logradouro}, ${bairro}, ${localidade}, ${uf}`;

      $("#address").val(address);

      setTimeout(function() {
        $(button).find('i').removeClass('d-none');
        $(button).find('span').addClass('d-none');
      }, 1000);

      
    });
  });
});
