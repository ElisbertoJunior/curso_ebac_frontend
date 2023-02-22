$(document).ready(() => {
  $("header button").click(() => {
    $("form").slideDown();
  });

  $("#button-cancel").click(() => {
    $("form").slideUp();
  });

  $("form").on("submit", (event) => {
    event.preventDefault();
    const newImageAddress = $('#image-address').val();
    const newItem = $(`<li style="display: none"></li>`);
    $(`<img src="${newImageAddress}" />`).appendTo(newItem);
    $(`
        <div class="overlay-image-link">
          <a href="${newImageAddress}" target="_blank" title="Ver imagem em tamanho real"/>
            Ver imagem em tamanho real
          </a>
        </div>
      `).appendTo(newItem);

      $(newItem).appendTo('ul');
      $(newItem).fadeIn(1000);
      $('#image-address').val('');
  });
});
