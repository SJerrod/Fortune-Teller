$(document).ready(function() {
  $("form#luck_survey").submit(function(event) {
    event.preventDefault();
    $("#lucky-responses").show();
    $("input:checkbox[name=lucky]:checked").each(function() {
      const luckyResponses = $(this).val();
      $('#lucky-responses').append(luckyResponses + "<br>");
    });
    $("#unlucky-responses").show();
    $("input:checkbox[name=unlucky]:checked").each(function(){
      const unluckyResponses = $(this).val();
      $('#unlucky-responses').append(unluckyResponses + "<br>");
    });
    $('#luck_survey').hide();
  });
});