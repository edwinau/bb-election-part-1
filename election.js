$(document).ready(function() {

  // Imagination!

    $.ajax({
      url: 'bb-election-api.herokuapp.com',
      method: 'GET'
      dataType: 'json'
    }).done(function(data) {
      for (var i=0; i < data.candidates.length; i++) {
        candidate = data.candidate[i]
        $('<li>').html(candidate.name + ' has ' + candidate.votes + ' votes.').appendTo('#everyCandidate');
      }
  });
});
