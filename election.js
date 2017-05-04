$(document).ready(function() {
  console.log("success")
  // Imagination!

    $.ajax({
      url: 'https://bb-election-api.herokuapp.com',
      method: 'GET',
      data: {},
      dataType: 'json'
    }).done(function(data) {
      for (var i=0; i < data.candidates.length; i++) {
        candidate = data.candidates[i]
        var can=candidate.name + ' has ' + candidate.votes + ' votes.';
        var item = $('<li>').html(can);
        $('#everyCandidate').append(item);
      }
  });
});
