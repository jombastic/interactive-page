$(document).ready(function() {
  $("#clickable1").click(function() {
    $("#stuff-things").fadeIn();
  });

  $("#clickable2").click(function() {
    $("#lori").slideDown();
  });

  $("#clickable3").click(function() {
    $("#carl").show();
  });

  $("#clickable4").click(function() {
    $("#family-photo").toggle();
  });
});
