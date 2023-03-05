$(document).ready(function () {
  $("#carrosel-imagens").slick({
    autoplay: true,
  });

  $(".menu-hamburger").click(function () {
    $("nav").slideToggle();
  });

  $("#telefone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      }
    },
    messages: {
      nome: "Por favor insira deu nome!",
    },
    submitHandler: function (form) {
      console.log(form);
    },

    invalidHandler: function (event, validate) {
      let camposIncorretos = validate.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} compos incorretos!`);
      }
    }
  });

  $(".lista-veiculos button").click(function(){
    const destino = $("#contato");
    const nomeVeiculo =$(this).parent().find('h3').text();

    $('#veiculo').val(nomeVeiculo);

    $("html").animate({
      scrollTop: destino.offset().top
    }, 1000);
  })

});
