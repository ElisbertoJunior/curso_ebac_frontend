$(document).ready(() => {
  $("form").on("submit", (event) => {
    event.preventDefault();
    const inputValue = $("#input-value").val();
    const newItem = $(`<li style="display: none">${inputValue}</li>`);

    $(newItem).appendTo("ul");
    $(newItem).fadeIn(1000);
    $("#input-value").val("");

    $("li").click(function () {
      $(this).css('text-decoration', 'line-through');
      
    });

  });

});
