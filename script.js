$( "#icon" ).click( function() {
    $("body").toggleClass('fixed');
});

$(document).ready(function(){
    $('#icon').click(function(){
     $('ul').toggleClass('show');
    });
 });