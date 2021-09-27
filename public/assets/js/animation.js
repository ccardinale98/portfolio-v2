document.getElementById("show-hide").style.display = "none";

$('#cover').on('click', function () {
    hideCover();
    showContent();    
})

function hideCover() {
    setTimeout(function() {
        $('#cover').slideUp('400');
    }, 100);
}

function showContent() {
    setTimeout(function() {
        $('#show-hide').show();
    }, 50);
}

