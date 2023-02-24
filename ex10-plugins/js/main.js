$(document).ready(function () {
 
  $("#telefone").mask('(00) 00000-0000', {
    placeholder: '(00) 00000-0000'
  });

  $("#CPF").mask('000.000.000-00', {
    placeholder: '000.000.000-00'
  });

  $("#CEP").mask('00000-000', {
    placeholder: '00000-000'
  })
  
});