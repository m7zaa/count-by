$(document).ready(function(){
  $(".formOne").submit(function(){
    event.preventDefault();
    var countBy= parseInt($("input#countBy").val());
    console.log(countBy);
    var countTo= parseInt($("input#countTo").val());
    console.log(countTo);
    // var returnArray = [];

      for (var i = 0; i <= countTo; i += countBy) {
        $("#list").append("<li>" + i + "</li>");
      console.log(i);
      }
  });
});
