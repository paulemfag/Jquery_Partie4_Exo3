$ (function(){
  $('#btn').click(function(){
    var lastName = $('#lastName').val();
    var firstName = $('#firstName').val();
    var mailBox = $('#mailBox').val();
    var Phone = $('#Phone').val();
})

    // test nom et prénom

    $('#firstName, #lastName').keyup(function nameCheck() {
      let input = ($(this).val()).trim()
      let pattern = /^[a-zA-Z.'-]*$/;
      if (pattern.test(input) && input != '') {
        $(this).css('border', '2px solid green')
      } else {
        $(this).css('border', '3px solid red')
      }
    });

    //test adresse mail

    $('#mailBox').keyup(function mailCheck() {
      let input = ($(this).val()).trim()
      let pattern = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
      if (pattern.test(input) && input != '') {
        $(this).css('border', '2px solid green')
      } else {
        $(this).css('border', '3px solid red')
      }
    });

    //test telephone

    $('#Phone').keyup(function phoneCheck() {
      let input = ($(this).val()).trim()
      let pattern = /^([0])([0-9]{9})*$/;
      if (pattern.test(input) && input != '') {
        $(this).css('border', '2px solid green')
      } else {
        $(this).css('border', '3px solid red')
      }
    });
})
