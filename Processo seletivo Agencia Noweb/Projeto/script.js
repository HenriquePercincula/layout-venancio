$("#1").hover(function() {
    $('#service-thumb').css('background-image', 'url(img/area-externa.png)');
});

$("#2").hover(function() {
    $('#service-thumb').css('background-image', 'url(img/mezanino.png)');
});

$("#3").hover(function() {
    $('#service-thumb').css('background-image', 'url(img/bar.png)');
});

$("#4").hover(function() {
    $('#service-thumb').css('background-image', 'url(img/mural.png)');
});

$("#5").hover(function() {
    $('#service-thumb').css('background-image', 'url(img/musica.png)');
});
  
$(".itens").mouseout(function() {
    $('#service-thumb').css('background-image', 'url(img/conheca-mais.png)');
});
$(".seta").click(function()  {
    window.scroll(0, 450);
});