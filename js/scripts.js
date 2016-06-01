$(document).ready(function() {
    $("#blanks form").submit(function(event) {
      var repeat1Input = $("input#repeat1").val();

      var += repeat1Input.toUpperCase();

      $(".repeat1").text(repeat1Input);

      $("#yell").show();

      event.preventDefault()
    });
});
