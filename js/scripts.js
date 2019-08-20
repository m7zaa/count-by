$(document).ready(function(){
  $(".formOne").submit(function(){
    event.preventDefault();
    var countBy= parseInt($("input#countBy").val());
    // console.log(countBy);
    var countTo= parseInt($("input#countTo").val());
    // console.log(countTo);
      if (countBy<=countTo) {
        for (var i = 0; i <= countTo; i += countBy) {
          $("#list").append("<li>" + i + "</li>");
        }
      }
      else if (countBy > countTo) {
         alert('please enter count by number smaller than count to');
      } else if (countBy < 1 || countTo < 1) {
         alert('Please enter a positive number');
      } else if (countBy === NaN || countTo === NaN) {
         alert('please enter a number');
      } else {
         alert('enter a  number greter than 0 ')
      }
  });


});
