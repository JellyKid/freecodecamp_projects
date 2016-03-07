function searchWiki(search) {
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php',
    type: 'GET',
    dataType: 'jsonp',
    headers: { 'Api-User-Agent': 'CeraSearch/1.0' },
    data: {
      action: 'opensearch',
      search: search,
      limit: 10,
      format: 'json',
      warningsaserror: true
    }
  })
  .done(function(data) {
    console.log("success");
    console.log(data);
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
}

$(document).ready(function() {
  $("#search-button").click(function() {
    var input = $("#search-box").val();
    if(input){
      searchWiki(input);
    }
  });
});
