/*
   ClickMap jQuery Plugin
   By Jay Salvat
   http://www.jaysalvat.com/
*/

(function($) { 

$.fn.saveClicks = function() { 
    $(this).bind('mousedown.clickmap', function(evt) { 
        $.post('./clickmap.php', {  
            x:evt.pageX,  
            y:evt.pageY,  
            l:$(".id").val() 
        }); 
    }); 
}; 
 
$.fn.stopSaveClicks = function() { 
     $(this).unbind('mousedown.clickmap'); 
}; 

$.displayClicks = function(settings) { 
    $('<div id="clickmap-overlay"></div>').appendTo('body'); 
 
    $('<div id="clickmap-loading"></div>').appendTo('body'); 
 
    $.get('./clickmap.php', { l:$(".id").val() },  
        function(html) { 
            $(html).appendTo('body');     
            $('#clickmap-loading').remove(); 
        } 
    ); 
}; 
 
$.removeClicks = function() { 
    $('#clickmap-overlay').remove(); 
    $('#clickmap-container').remove(); 
}; 
         
})(jQuery); 