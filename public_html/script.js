/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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
    
    $('#accordion').css("background-color", "grey");

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

//helps the text change when mouse is over
function mouseoverme() {
    $("#second").html("no touching");
    $('#p').hide('flip', {}, 2500);

}

//helps text turn back its color when mouse is out
function mouseoutme() {
    $("#second").html("cant you read i said dont touch that");
    $('#p').show('flip', {}, 2500);
    
    }
  $(function() {
    $( "#datepicker" ).datepicker();
  });
  $(function() {
    $("#accordion").accordion({
        event: "click hoverintent"
    });
});
$.event.special.hoverintent = {
    setup: function() {
        $(this).bind("mouseover", jQuery.event.special.hoverintent.handler);
    },
    teardown: function() {
        $(this).unbind("mouseover", jQuery.event.special.hoverintent.handler);
    },
    handler: function(event) {
        var currentX, currentY, timeout,
                args = arguments,
                target = $(event.target),
                previousX = event.pageX,
                previousY = event.pageY;

        function track(event) {
            currentX = event.pageX;
            currentY = event.pageY;
        }
        ;

        function clear() {
            target
                    .unbind("mousemove", track)
                    .unbind("mouseout", clear);
            clearTimeout(timeout);
        }

        function handler() {
            var prop,
                    orig = event;

            if ((Math.abs(previousX - currentX) +
                    Math.abs(previousY - currentY)) < 7) {
                clear();

                event = $.Event("hoverintent");
                for (prop in orig) {
                    if (!(prop in event)) {
                        event[ prop ] = orig[ prop ];
                    }
                }
                delete event.originalEvent;

                target.trigger(event);
            } else {
                previousX = currentX;
                previousY = currentY;
                timeout = setTimeout(handler, 100);
            }
        }

        timeout = setTimeout(handler, 100);
        target.bind({
            mousemove: track,
            mouseout: clear
        });
    }
};