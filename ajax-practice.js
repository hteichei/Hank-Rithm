// $(document).ready(function() {
//   $('#generate').on('click', function(event) {
//     event.preventDefault();
//     $.get(
//       'http://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=fajNPYoDN4oQpgAES88YyPaON6EeEa5d',
//       function(data) {
//         console.log(data);
//         var gif = $('<img>', {
//           src: data.data[0].images.fixed_height.url
//         });
//         $('#gifContainer').append(gif);
//       }
//     );
//   });
// });
c;
$(document).ready(function() {
  $('#generate').on('click', function(event) {
    event.preventDefault();
    $.get(
      `http://api.giphy.com/v1/gifs/search?q=${$(
        '#search'
      ).val()}&rating=g&api_key=fajNPYoDN4oQpgAES88YyPaON6EeEa5d`,
      function(data) {
        console.log(data);
        var gif = $('<img>', {
          src: data.data[0].images.fixed_height.url
        });
        $('#gifContainer').append(gif);
      }
    );
  });
});
