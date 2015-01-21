/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    
    
    //adds a big background image to the top of my page
    $('.jumbotron').css('background',' url(http://www.metalinjection.net/wp-content/uploads/2014/07/space-metal.jpg ) no-repeat center center');
    
    //tells gogle that a button was pressed.
    $('#onebutton').bind('click', alertButtonClick);
            
     // makes my project slide  back to the page 
    $('#show').css('visibility', 'hidden');
    
    //makes my project slide away from my page
    $('#hide').bind('click', hideThePage); 
    //makes the accordion know what part of the page to become an accordion
    $('#superHumans').accordion({header: "button"});
    
    //changes m background color
    $("body").css("background-color","turquoise");   
    
    //changes my paragraph color when mouse is over
    $('#p').bind('mouseover','mouseoverme').bind('mouseout','mouseoutme');
   
});

//this is an accordion and it works as a dropdown
function superHumans() {
    $('#superHumans').accordion('slide', {}, 2500);
}
// this function helps my page move
function hideThePage() {
    $('div').hide('slide', {},  2500);
    $('#hide').css('visibiliy','visible');
    $('div').show('fold', {},  2500);
}

function alertButtonClick() {
    alert("you clicked my button");
}

function mouseoverme() {
    $("#second").html("no touching");
    $('#p').hide('flip', {},  2500);

}

function mouseoutme(){
    $("#second").html("cant you read i said dont touch that");
    $('#p').show('flip', {},  2500);
}

