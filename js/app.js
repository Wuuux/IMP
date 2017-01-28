
$(document).ready(function(){

  function gameClass() {
    this.nr = 0;
    this.player = '';
    this.nsVulnarable = false;
    this.weVulnarable = false;
    this.levelContract = 0;
    this.colorContract = 'pass';
    this.double = false;
    this.redouble = false;
    this.handPoints = 0;
    this.tricks = 0;
    this.overtricks = 0;
    this.undertricks = 0;
    this.pointsToWin = 0;
    this.wonPoints = 0;
    this.impPoints = 0;

    this.init = function(_nr, _player, _nsVulnarable, _weVulnarable, _levelContract, _colorContract, _double, _redouble, _handPoints, _tricks) {
      this.nr                 = _nr;
      this.player             = _player;
      this.nsVulnarable       = _nsVulnarable;
      this.weVulnarable       = _weVulnarable;
      this.levelContract      = _levelContract;
      this.colorContract      = _colorContract;
      this.double             = _double;
      this.redouble           = _redouble;
      this.handPoints         = _handPoints;
      this.tricks             = _tricks;

      this.countOverTricks();

      this.pointsToWin        = 0;
      this.wonPoints          = 0;
      this.impPoints          = 0;
    }
    this.countOverTricks = function (){
      if (this.levelContract == 0){

        this.levelContract    = 0;
        this.tricks           = 0;
        this.undertricks      = 0;
        this.overtricks       = 0;

      } else {

        if (this.tricks >= 6 + parseInt(this.levelContract)) {
          this.overtricks   = parseInt(this.tricks) - 6 - parseInt(this.levelContract);
          this.undertricks  = 0;
        } else {
          this.undertricks  = 6 + parseInt(this.levelContract)-parseInt(this.tricks);
          this.overtricks   = 0;
        };

      }
    };
    var spans = $('section.scoreTable.navTable').find('span');
    this.print = function (){


      spans.eq(0).text(this.nr);
      spans.eq(1).text(this.player);

      if (this.player == 'NS') spans.eq(2).text('WE')
      else spans.eq(2).text('NS');

      if ((this.player == 'NS') && (this.nsVulnarable==true)) spans.eq(1).removeClass('notvulnarable').addClass('vulnarable');
      if ((this.player == 'NS') && (this.nsVulnarable==false)) spans.eq(1).removeClass('vulnarable').addClass('notvulnarable');
      if ((this.player == 'WE') && (this.weVulnarable==true)) spans.eq(1).removeClass('notvulnarable').addClass('vulnarable');
      if ((this.player == 'WE') && (this.weVulnarable==false)) spans.eq(1).removeClass('vulnarable').addClass('notvulnarable');
      if ((this.player == 'NS') && (this.weVulnarable==true)) spans.eq(2).removeClass('notvulnarable').addClass('vulnarable');
      if ((this.player == 'NS') && (this.weVulnarable==false)) spans.eq(2).removeClass('vulnarable').addClass('notvulnarable');
      if ((this.player == 'WE') && (this.nsVulnarable==true)) spans.eq(2).removeClass('notvulnarable').addClass('vulnarable');
      if ((this.player == 'WE') && (this.nsVulnarable==false)) spans.eq(2).removeClass('vulnarable').addClass('notvulnarable');

      if (this.levelContract == 0) spans.eq(3).html('pass')
      else if (this.colorContract == 'NT')  spans.eq(3).html(this.levelContract+'NT')
           else spans.eq(3).html(this.levelContract+'&'+this.colorContract+';');
      if (this.doubled == true) spans.eq(3).addClass('doubled')
      else spans.eq(3).removeClass('doubled');
      if (this.redoubled == true) spans.eq(3).removeClass('doubled').addClass('redoubled')
      else spans.eq(3).removeClass('redoubled');
      spans.eq(4).text(this.tricks);

      if (this.levelContract == 0) {
        spans.eq(5).text('0')
      } else {
        this.countOverTricks();
        if (this.overtricks > 0 ) {
          spans.eq(5).text('+'+this.overtricks);
        } else if (this.undertricks > 0 ) {
                spans.eq(5).text('-'+this.undertricks)
              } else {
                spans.eq(5).text('0');
              }
      };

      spans.eq(6).text(this.handPoints);


      // if (ns)
      // spans.eq(2).text(this.nr);
      // spans.eq(3).text(this.nr);
      console.log(this);
      // spans[0].text(this.nr);
      // spans[1].text(this.player);
      // spans[2].text();
    };
  };

  var game0 = new gameClass();
  game0.init(1,'NS',false,false,0,'pass', false, false, 20, 6);
  game0.print();
  $('[data-contract]').eq(35).css('background','grey').css('color','red');


  $('.playerName').on('click',function(){
    if ($(this).text()=='NS') {
      $(this).text('WE');
      game0.player = 'WE';
      if (game0.weVulnarable == true) $(this).css('background', 'red')
      else $(this).css('background', 'green');
    } else {
      $(this).text('NS');
      game0.player = 'NS';
      if (game0.nsVulnarable == true) $(this).css('background', 'red')
      else $(this).css('background', 'green');
    };
    game0.print();
  });

  $('.NSvulnarable').on('click',function(){
    if (game0.nsVulnarable) {
      game0.nsVulnarable = false;
      $(this).css('background','green');
    } else {
      game0.nsVulnarable = true;
      $(this).css('background','red');
    };
    if ((game0.nsVulnarable) && (game0.player == 'NS')) $('.playerName').css('background','red');
    if ((game0.nsVulnarable == false) && (game0.player == 'NS')) $('.playerName').css('background','green')
    game0.print();
  });

  $('.WEvulnarable').on('click',function(){
    if (game0.weVulnarable) {
      game0.weVulnarable = false;
      $(this).css('background','green');
    } else {
      game0.weVulnarable = true;
      $(this).css('background','red');
    }
    if ((game0.weVulnarable) && (game0.player == 'WE')) $('.playerName').css('background','red');
    if ((game0.weVulnarable == false) && (game0.player == 'WE')) $('.playerName').css('background','green');
    game0.print();
  });


  var dataContracts = $('[data-contract]');
  dataContracts.on('click', function(){
    dataContracts.css('background','lightgrey').css('color','black');
    $(this).css('background','grey').css('color','red');
    game0.levelContract = $(this).data('contract')[0];
    game0.colorContract = $(this).data('contract').slice(2);

      game0.doubled = false;
      game0.redoubled = false;
      $('[data-doubled]').css('color','black');
      $('[data-redoubled]').css('color','black');

    game0.print();
  });
  console.log($('div[data-doubled]'));
  $('div[data-doubled]').on('click',function(){
    console.log('click');
    if (game0.levelContract > 0) {
        if ($(this).data('doubled') == 'no') {
          $(this).data('doubled','yes');
          $(this).css('color','red');
          game0.doubled = true;
        } else {
          $(this).data('doubled','no');
          game0.doubled = false;
          $(this).css('color','black');
          game0.redoubled = false;
          $('[data-redoubled]').css('color','black');
          $('[data-redoubled]').data('redoubled','no');
        }
        game0.print();
    }
  });

  $('div[data-redoubled]').on('click',function(){
    if (game0.levelContract > 0) {

            if ($('[data-doubled]').data('doubled') == 'yes') {
              if ($(this).data('redoubled') == 'no') {
                $(this).data('redoubled','yes');
                $(this).css('color','red');
                game0.redoubled = true;
              } else {
                $(this).data('redoubled','no');
                $(this).css('color','black');
                game0.redoubled = false;
              }
            }
            game0.print();
    }
  });

  var $dataTricks = $('[data-tricks]');

  $dataTricks.on('click',function(){
    $dataTricks.css('background','lightgrey').css('color','black');
    $(this).css('background','grey').css('color','red');
    game0.tricks = $(this).data('tricks');
    game0.print();

  });

  var $dataHandPoints = $('[data-handpoints]');

  $dataHandPoints.on('click',function(){
    $dataHandPoints.css('background','lightgrey').css('color','black');
    $(this).css('background','grey').css('color','red');
    game0.handPoints = parseInt($(this).data('handpoints'));
    game0.print();

  });

  $('.save h1').on('click',function(){
    var $copy = $('section.scoreTable.navTable').clone();
    $copy.removeClass('navTable').addClass('saved');
    if (game0.nr < 10) $copy.find('span').eq(0).text("0"+game0.nr);
    $copy.css('border-bottom','1px solid lightgrey');
    $copy.append($("<span class='edit'>EDIT</span><span class='delete'>DELETE</span>"));

    $copy.find('.delete').on('click',deleteSavedBar);

    $copy.appendTo($('body'));

    game0.init(++game0.nr,'NS',false,false,0,'pass', false, false, 20, 6);
    game0.print();
  });

  function deleteSavedBar(){
      $(this).parent().remove();
      var $spanNumbers = $('.saved').find('span.number');
      for (var i=1;i <= $spanNumbers.length;i++){
        if (i<10) $spanNumbers.eq(i-1).text('0'+i)
        else $spanNumbers.eq(i-1).text(i);
      };
      game0.nr = $spanNumbers.length+1;
      game0.print();
      console.log($spanNumbers);

  }



});
