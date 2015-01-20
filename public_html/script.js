/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    
    $('.jumbotron').css('background',' url('+image_url') no-repeat center center');
    
    $('#onebutton').bind('click', alertButtonClick);
            
    $('#show').css('visibility', 'hidden');
    
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage); 
    
    $('#superHumans').accordion({header: "button"});
 
    $('#superHumans2').accordion({header: "button"});
    
    $("body").css("background-image","url(http://www.metalinjection.net/wp-content/uploads/2014/07/space-metal.jpg )");   
    
   
});


function hideThePage() {
    $('div').hide('slide', {},  2500);
    $('#hide').css('visibiliy','visible');
    $('div').show('fold', {},  2500);
}
function showThePage() {
     $('div').show('fold', {},  2500);
     $('#show').hide('puff',{}, 2500);
}

function alertButtonClick() {
    alert("you clicked my button");
}

function mouseoverme() {
    $("#second").html("no touching");
    $('div').hide('flip', {},  2500);

}

function mouseoutme(){
    $("#second").html("cant you read i said dont touch that");
    $('div').show('flip', {},  2500);
}