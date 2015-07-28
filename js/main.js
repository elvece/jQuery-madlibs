// add scripts

$(function() {

  // hide the story from view
  $("#story").hide();


  // ---- event handler ---- //
  $("#btn-click").click(function(e) {
    // grab the values from the input boxes, then append them to the DOM
    $(".person").empty().append($("input.person").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".noun").empty().append($("input.noun").val());
    $(".insect").empty().append($("input.insect").val());
    $(".noun2").empty().append($("input.plural-noun").val());
    $(".verb").empty().append($("input.verb").val());

      // show the story
    $("#story").show(); //Please note: Instead of using jQuery, $("#story").hide(); to hide the story, you could also use CSS - #story {display: none;}

    // empty the form's values
    $(':input').val('');//why : ? - see bookmarked stackoverflow answer

    // hide the questions
    $("#questions").hide();
  });

  // ---- event handler ---- //
  // $("#btn-click").click(function(e) {
  //   e.preventDefault()
  //   // grab the value from the input box after the button click
  //   var input = $("input").val()
  //   // display value within the browser's JS console
  //   console.log(input)
  //   // add the value to the DOM
  //   $(".results").empty().append(input);
  // });

});

  $("#play-btn").click(function(e) {
    $("#questions").show();
    $("#story").hide();
  });
