
$(document).ready(function(){

  $('.playerName').on('mouseenter',function(){
    $(this).css('background','lightgrey');
  });

  $('.playerName').on('mouseleave',function(){
    $(this).css('background', 'green');
  });

  $('.playerName').on('click',function(){
    if ($(this).text()=='NS') $(this).text('WE')
    else $(this).text('NS') ;
  });

  $('.NSvulnarable').on('click',function(){
    console.log('click');
    if ($(this).attr('background')=='green') $(this).css('background','red');
  });

});
