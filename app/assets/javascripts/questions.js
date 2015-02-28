// $(document).ready(function(q){


$(document).ready(function(q){

    $("#mine-radio").click(
      function(){
        $('.other-question').hide();
      });

    $('#all-radio').click(function(){
      $('.other-question').show();
    });

});


// $("#mine-radio").click(
//   function(){
//     alert("I Work!")
//   });




// $(document).on("click", "#mine-radio", function(){
//   alert("I Work!")
// });
