$(document).ready(function() {

  $("#previousCard").click(function() {
    if ($(".flashcard-active").prev().length > 0) {
      $(".flashcard-active").hide().removeClass("flashcard-active")
        .prev().addClass("flashcard-active").show();
    }

  });

  $("#nextCard").click(function() {
    if ($(".flashcard-active").next().length > 0) {
      $(".flashcard-active").hide().removeClass("flashcard-active")
        .next().addClass("flashcard-active").show();
    }

  });



  $(".flashcard").click(function() {
    $("h4, p").toggle();
  });


});
