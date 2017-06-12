$(document).ready(function() {
    $('.button-collapse').sideNav({
        menuWidth: 280, // Default is 280
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });
    $(".dropdown-button").dropdown();
    $('.chips').material_chip();
    $('.collapsible').collapsible();
    $('.parallax').parallax();
    $('.modal').modal();
    $('select').material_select();
});
