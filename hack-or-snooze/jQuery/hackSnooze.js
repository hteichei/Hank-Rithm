$('#formToggle').on('click', function() {
  $('form').slideToggle(200, function() {});
});

$('form').on('submit', function(event) {
  event.preventDefault();
  const newArticle = $('#title').val();
  const hostName = $('#url').val();

  $('ol').append(
    `<li><i class="far fa-star"></i>${newArticle} <span id='hostName'>(${
      hostName.hostname
    })</span></li>`
  );
  $(this)[0].reset();
});
