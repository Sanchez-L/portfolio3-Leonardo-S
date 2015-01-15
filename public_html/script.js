/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".whatever").css("background-color", "yellow");
    $(".sibling").css("background-color", "blue");
    
    $('#onebutton').bind('click', alertButtonClick);
            
    $('.whatever').bind('mouseover', mouseoverme).bind('mouseout', "mouseoutme");
    
    $('#show').css('visibility', 'hidden');
    
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage); 
    
    $('#superHumans').accordion({header: "h4"});
 
});

function hideThePage() {
    $('div').hide('flip', {},  2500);
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
}

function mouseoutme(){
    $("#second").html("cant you read i said dont touch that");
}