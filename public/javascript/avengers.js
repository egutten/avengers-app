$(document).ready(function() {
    $('#revoke-admin').change(function() {
        if($(this).is(":checked")) {
          $(".modal").show();
        }       
    });
});

$(".ok, .modal-background").on("click", function(){
  $(".modal").hide();
});

$(function() {
      $('.pop-up-likes').hide();
      $('.like-button-group').hover( function() {
          $(this).find('.pop-up-likes').fadeToggle();
      } );
});



