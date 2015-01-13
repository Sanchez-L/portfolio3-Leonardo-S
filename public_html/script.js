/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".whatever").css("background-color", "green");
    $(".sibling").css("background-color", "blue");
    
    $('#onebutton').bind('click', alertButtonClick);
            
    $('.whatever').bind('mouseover', mouseoverme).bind('mouseout', "mouseoutme");
});

function alertButtonClick() {
    alert("there was a button clicked");
}

function mouseoverme() {
    $("#second").html("no touching");
}

function mouseoutme(){
    $("#second").html("cant you read i said dont touch that");
}