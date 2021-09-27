document.getElementById("show-hide").style.display = "none";

$('#cover').on('click', function () {
    hideCover();
    showContent();
    
    anime.timeline({loop: false})
    .add({
        targets: '.ml6',
        opacity: 0,
        duration: 25,
        easing: "easeOutExpo",
        delay: 0
    });
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

var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  })
;


