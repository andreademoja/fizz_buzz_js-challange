var onReadyEvents = function(){
  $('#calculate').click(function() {
    var number = $('#number').val();
    $('#display_message').html(fizzBuzz(number));
  });
}
