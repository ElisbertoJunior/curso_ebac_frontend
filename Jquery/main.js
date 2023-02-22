$(document).ready(() => {
  $('header button').click(() => {
    $('form').slideDown();
  });

  $('#button-cancel').click(() => {
    $('form').slideUp()
  })
});