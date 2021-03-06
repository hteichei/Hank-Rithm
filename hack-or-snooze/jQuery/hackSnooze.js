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
      `<li class='liRegular'><i class="far fa-star"></i>${newArticle} <span id='hostName'>(${url})</span></li>`
    );
    $(this)[0].reset();
  });

  //favorites code block not fully functional:

  //give favorite star yellow color when clicked and add link to favorites div
  $(document).on('click', 'fa-star', function() {
    $(this).toggleClass('farClicked', 'far');
    if ($('.liRegular > i').hasClass('farClicked')) {
      $('#favorites').append('<p>');
      // .hasClass('farClicked');
    } else {
      $('#favorites').remove();
    }
  });
  //toggling works for class, but display is still set to none;
  $('#favoritesLink').on('click', function() {
    $('#favoritesDiv').toggleClass('favoritesClicked', 'favorites');
    $('#formContainer').toggleClass('formContainerHidden');
  });
});

// //give favorite star yellow color when clicked and add link to favorites div
// $(document).on('click', '.fa-star', function() {
//   $('.liRegular').toggleClass('farClicked', 'far');

//   if ($('.liRegular').hasClass('farClicked')) {
//     $('#favorites').append('<p>');
//     // .hasClass('farClicked');
//   } else {
//     $('#favorites').remove();
//   }
// });
