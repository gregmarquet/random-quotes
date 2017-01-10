$(document).ready(function() {

  let quote;
  let author;

  function getQuote(){
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        console.log(response);
        quote = response.quoteText;
        author = response.quoteAuthor || 'unknown';
        $('#quote').text(quote);
        $('#author').text(` - ${author}`);
      }
    });
  }

  function windowPopup(url, width, height) {
  // Calculate the position of the popup so
  // it’s centered on the screen.
    var left = (screen.width / 2) - (width / 2),
        top = (screen.height / 2) - (height / 2);

    window.open(
      url,
      "",
      "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
    );
  }

  getQuote();

  $('#get-quote').click(function(e){
    e.preventDefault();
    getQuote();
  });

  $('#tweet-quote').click(function(e) {
    e.preventDefault();

    windowPopup('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + " - " + author), 500, 300);

  });







});


