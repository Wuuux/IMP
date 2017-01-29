
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

      if (parseInt(this.levelContract) == 0) {
        spans.eq(3).html('pass');
        spans.eq(3).data('color','pass');
        // console.log('pass',spans.eq(3).data('color'));
      } else if (this.colorContract == 'NT')  {
                  spans.eq(3).html(this.levelContract+'NT');
                  spans.eq(3).data('color','NT');
                  // console.log('nt',spans.eq(3).data('color'));
             } else {
               spans.eq(3).html(this.levelContract+'&'+this.colorContract+';');
               spans.eq(3).data('color',this.colorContract);
              //  console.log('kolor',spans.eq(3).data('color'));
             };
      console.log('spans',spans);
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
      spans.eq(8).text(this.impPoints);


      // if (ns)
      // spans.eq(2).text(this.nr);
      // spans.eq(3).text(this.nr);
      console.log('print', this, spans.eq(3).data('color'));
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

  $('div[data-doubled]').on('click',function(){
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

    $copy.find('.edit').on('click',function(){
      var _nr             = parseInt($(this).parent().find('.number').eq(0).text());
      var _player         = $(this).parent().find('.player').eq(0).text();
      console.log('player',$(this).parent().find('.player').eq(0).text());
      var _nsVulnarable;
      var _weVulnarable;
      var _levelContract;
      var _colorContract;
      var _double;
      var _redouble;
      var _handPoints;
      var _tricks;

      var $player  = $(this).parent().find('.player').eq(0);
      var $oponent = $(this).parent().find('.oponent').eq(0);
      if ($player.text() == 'NS') {
        _nsVulnarable = $player.hasClass('vulnarable');
      } else {
        _weVulnarable = $player.hasClass('vulnarable');
      };
      if ($oponent.text() == 'NS') {
        _nsVulnarable = $oponent.hasClass('vulnarable');
      } else {
        _weVulnarable = $oponent.hasClass('vulnarable');
      };

      var $contract = $(this).parent().find('.contract').eq(0);
      if ($contract.text()=='pass') {
        _levelContract = 0;
        _double = false;
        _redouble = false;
      } else {
        _levelContract = parseInt($contract.text()[0]);
        _colorContract = $contract.data('color');
        console.log('edit', $contract.html());
        if ($contract.hasClass('redoubled')) {
          _double = true;
          _redouble = true;
        } else if ($contract.hasClass('redoubled')) {
          _double = true;
          _redouble = false;
        } else {
          _double = false;
          _redouble = false;
        }
      };

      _handPoints = $(this).parent().find('.handPoints').eq(0).text();
      _tricks = parseInt($(this).parent().find('.tricks').eq(0).text());


      // _nr, _player, _nsVulnarable, _weVulnarable, _levelContract, _colorContract, _double, _redouble, _handPoints, _tricks
      game0.init(_nr, _player, _nsVulnarable, _weVulnarable, _levelContract, _colorContract, _double, _redouble, _handPoints, _tricks);
      game0.print();
      editStatus = true;
      $('.save h1').text('SAVE (nr: '+game0.nr+')');
      console.log(game0);
    });

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
      recountTotalSums();
      game0.nr = $spanNumbers.length+1;
      game0.print();
      console.log($spanNumbers);

  }

  function recountTotalSums(){
    var $savedNS = $('.saved').find('span.NStotalImpPoints');
    var $savedWE = $('.saved').find('span.WEtotalImpPoints');
    var $savedPlayer = $('.saved').find('span.player');
    var $savedImpPoints = $('.saved').find('span.impPoints');
    var sumNS = 0;
    var sumWE = 0;
    console.log('savedNS',$savedNS);
    console.log('savedWE',$savedWE);
    console.log('savedPlayer',$savedPlayer);
    console.log('savedImpPoints',$savedImpPoints);

    for (var i=0;i < $savedNS.length;i++){
      if (($savedPlayer.eq(i).text() == 'NS') && ($savedImpPoints.eq(i).text() >= 0)) {
        sumNS = parseInt(sumNS) + parseInt($savedImpPoints.eq(i).text());
        console.log('sumNS',sumNS);
      };
      if (($savedPlayer.eq(i).text() == 'NS') && (parseInt($savedImpPoints.eq(i).text()) < 0)) {
        sumWE -= parseInt($savedImpPoints.eq(i).text());
      }
      if (($savedPlayer.eq(i).text() == 'WE') && (parseInt($savedImpPoints.eq(i).text()) >= 0)) {
        sumWE += parseInt($savedImpPoints.eq(i).text());
      };
      if (($savedPlayer.eq(i).text() == 'WE') && (parseInt($savedImpPoints.eq(i).text()) < 0)) {
        sumNS -= parseInt($savedImpPoints.eq(i).text());
      };
      $savedNS.eq(i).text(parseInt(sumNS));
      $savedWE.eq(i).text(sumWE);

    };

  };



});
