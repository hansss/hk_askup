// $(document).ready(function(q){


$(document).ready(function(q){

    $("#mine-radio").click(function(){
      $('.my-question').removeClass('hidden');
      $('.other-question').addClass('hidden');
    });

    $('#other-radio').click(function(){
      $('.my-question').addClass('hidden');
      $('.other-question').removeClass('hidden');
    });

});


// $("#mine-radio").click(
//   function(){
//     alert("I Work!")
//   });




// $(document).on("click", "#mine-radio", function(){
//   alert("I Work!")
// });
