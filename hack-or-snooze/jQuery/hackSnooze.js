$(document).ready(function() {
  //toggle the form with the submit link
  $('#formToggle').on('click', function() {
    $('form').slideToggle(200, function() {});
  });

  //create new <li> from form entry and append to the list
  $('form').on('submit', function(event) {
    event.preventDefault();
    const newArticle = $('#title').val();

    //get the hostName of the url address
    const url =
      $('#url')
        .val()
        .split('/')[2]
        .split('.')[1] + '.com';
    $('ol').append(
      `<li><i class="far fa-star"></i>${newArticle} <span id='hostName'>(${url})</span></li>`
    );
    $(this)[0].reset();
  });

  //give favorite star yellow color when clicked and add link to favorites div
  $(document).on('click', '.fa-star', function() {
    $(this).toggleClass('farClicked', 'far');
    $('#favorites')
      .append('li')
      .hasClass('farClicked');
  });
});
//following code not working:

//   //toggling works for class, but display is still set to none;
//   $('#favoritesLink').on('click', function() {
//     // $('#favorites li').toggleClass('favoritesClicked', 'favorites');
//     $('#favorites li').show();
//   });
