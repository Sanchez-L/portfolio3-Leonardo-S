/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//this whole function helps jquery to make my page better looking
$("document").ready(function() {


    //adds a big background image to the top of my page
    $('.jumbotron').css('background-image', ' url(http://www.metalinjection.net/wp-content/uploads/2014/07/space-metal.jpg ) no-repeat center center');

    //tells gogle that a button was pressed.
    $('#onebutton').bind('click', alertButtonClick);   

    //makes my project slide away from my page
    $('#hide').bind('click', hideThePage);

    //makes the accordion know what part of the page to become an accordion
    $('#superHumans').accordion({header: "h4"});

    //changes m background color
    $("body").css("background-color", "grey");

    //changes my paragraph color when mouse is over
    $('#p').bind('mouseover', 'mouseoverme').bind('mouseout', 'mouseoutme');

    //this is for my auto accordion
    $('.ui-widget-header').css("background", "black");

    $('.2').css("opcacity", '0.5');
});

//this is an accordion and it works as a dropdown
function superHumans() {
    $('#superHumans').accordion('slide', {}, 2500);
}
// this function helps my page move
function hideThePage() {
    $('div').hide('explode', {}, 2500);
    $('#hide').css('visibiliy', 'visible');
    $('div').show('explode', {}, 2500);
}

//helps the alert button tell google that it was  pressed
function alertButtonClick() {
    alert("you clicked my button");
}

//this helps me select the date date picker 
$(function() {
    $("#datepicker").datepicker();
});
$(function() {
    $("#accordion").accordion({
        event: "click hoverintent"
    });
});