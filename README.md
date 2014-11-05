Equal-Height-jQeury-Responsive-Plugin
==============================

jQuery Equal Height Plugin Responsive and Lightest

Wiew the example. All you need to do is copy the equal_height.js plugin to your website and include it. 
To make it work you have to add the code bellow:


$(document).ready(function(){
$(".column").equalHeight();
});


$(window).resize(function() {
        $('.column').css('height','auto');
        $('.column').equalHeight();
});


Where you have to replace .column with the class of your div or table or id. 
(for id put #name between the quotes marks)
