// MUSIC PLAYER BY GLENTHEMES

// you may study the code to see how I did things but please do not steal or claim as your own!
// learning resource 01: https://www.w3schools.com/jsref/dom_obj_audio.asp
// learning resource 02: https://www.w3schools.com/tags/tag_audio.asp

$(document).ready(function(){
    $(".playy").click(function() {
        $(".pausee").show();
        $(".playy").hide();
    });

    $(".pausee").click(function() {
        $(".playy").show();
        $(".pausee").hide();
    });
});

function songstart() {
var harmonia = document.getElementById("tune");
    if (harmonia.paused) {
        harmonia.play();
    } else { 
        harmonia.pause();
    }
}

$(document).ready(function(){
var owari = document.getElementById("tune");
owari.onended = function() {
    $(".playy").show();
    $(".pausee").hide();
};
});