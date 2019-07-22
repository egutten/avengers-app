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

$(document).ready(function(){
	$("#title").keyup(function(){
		$("#results").empty();
		var that = this;
		var value = $(this).val();
        $.ajax({
          url: 'https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=' + value,
          type: 'GET',
          dataType: 'json',
          beforeSend: setHeader,
		  error: function() { alert('boo!'); },
          success: function(msg) { 
			 $("#results").show();
			 if(value==$(that).val() && msg["Error"] == undefined) {
				 msg["Search"].forEach (function(e){
					 var option = document.createElement("li");
					 option.innerHTML = e["Title"];
					 option.classList.add("select");
					 $("#results").append(option);
					 $("#results").trigger("chosen:updated");
				});
			 }
		  },
        });
	});
});

$("#results").on("click", "li.select", function(){
	$("#title").val($(this).text());
	$("#results").hide();
});

function setHeader(xhr) {
        xhr.setRequestHeader('X-RapidAPI-Host', 'movie-database-imdb-alternative.p.rapidapi.com');
        xhr.setRequestHeader('X-RapidAPI-Key', '744649b923msh40807d2067eaedcp1232b1jsn3a6f0d89e715');
     }
