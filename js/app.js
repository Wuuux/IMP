
$(document).ready(function(){

  var editStatus        = false;
  var $spansInBar       = $('section.scoreTable.navTable').find('span');
  var $dataContracts    = $('[data-contract]');
  var $dataTricks       = $('[data-tricks]');
  var $dataHandPoints   = $('[data-handpoints]');

  function gameClass() {
    this.nr             = 1;
    this.player         = 'NS';
    this.nsVulnarable   = false;
    this.weVulnarable   = false;
    this.levelContract  = 0;
    this.colorContract  = 'pass';
    this.double         = false;
    this.redouble       = false;
    this.handPoints     = 0;
    this.tricks         = 0;
    this.overtricks     = 0;
    this.undertricks    = 0;
    this.pointsToWin    = 0;
    this.wonPoints      = 0;
    this.impPoints      = 0;

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
      this.pointsToWin        = 0;
      this.wonPoints          = 0;
      this.impPoints          = 0;
      this.countOverTricks();
    }



    this.print = function (){
      this.impPoints = -Math.floor((Math.random() * 10) + 1);
      $spansInBar.eq(0).text(this.nr);
      $spansInBar.eq(1).text(this.player);

      if (this.player == 'NS') $spansInBar.eq(2).text('WE')
      else $spansInBar.eq(2).text('NS');

      // if ((this.player == 'NS') && (this.nsVulnarable == true))   $spansInBar.eq(1).removeClass('notvulnarable').addClass('vulnarable');
      // if ((this.player == 'NS') && (this.nsVulnarable == false))  $spansInBar.eq(1).removeClass('vulnarable').addClass('notvulnarable');
      // if ((this.player == 'WE') && (this.weVulnarable == true))   $spansInBar.eq(1).removeClass('notvulnarable').addClass('vulnarable');
      // if ((this.player == 'WE') && (this.weVulnarable == false))  $spansInBar.eq(1).removeClass('vulnarable').addClass('notvulnarable');
      // if ((this.player == 'NS') && (this.weVulnarable == true))   $spansInBar.eq(2).removeClass('notvulnarable').addClass('vulnarable');
      // if ((this.player == 'NS') && (this.weVulnarable == false))  $spansInBar.eq(2).removeClass('vulnarable').addClass('notvulnarable');
      // if ((this.player == 'WE') && (this.nsVulnarable == true))   $spansInBar.eq(2).removeClass('notvulnarable').addClass('vulnarable');
      // if ((this.player == 'WE') && (this.nsVulnarable == false))  $spansInBar.eq(2).removeClass('vulnarable').addClass('notvulnarable');

      if (this.player == 'NS') {
        if (this.nsVulnarable == true) {
          $spansInBar.eq(1).removeClass('notvulnarable').addClass('vulnarable');
        } else {
          $spansInBar.eq(1).removeClass('vulnarable').addClass('notvulnarable');
        };
        if (this.weVulnarable == true) {
          $spansInBar.eq(2).removeClass('notvulnarable').addClass('vulnarable');
        } else {
          $spansInBar.eq(2).removeClass('vulnarable').addClass('notvulnarable');
        };
      } else {
        if (this.weVulnarable == true) {
          $spansInBar.eq(1).removeClass('notvulnarable').addClass('vulnarable');
        } else {
          $spansInBar.eq(1).removeClass('vulnarable').addClass('notvulnarable');
        };
        if (this.nsVulnarable == true) {
          $spansInBar.eq(2).removeClass('notvulnarable').addClass('vulnarable');
        } else {
          $spansInBar.eq(2).removeClass('vulnarable').addClass('notvulnarable');
        };
      }

      if (parseInt(this.levelContract) == 0) {
        $spansInBar.eq(3).html('pass');
        $spansInBar.eq(3).data('color','pass');

      } else if (this.colorContract == 'NT')  {
                  $spansInBar.eq(3).html(this.levelContract+'NT');
                  $spansInBar.eq(3).data('color','NT');

             } else {
               $spansInBar.eq(3).html(this.levelContract+'&'+this.colorContract+';');
               $spansInBar.eq(3).data('color',this.colorContract);
             };

      if (this.double == true) {
        $spansInBar.eq(3).addClass('doubled')
      } else {
        $spansInBar.eq(3).removeClass('doubled');
      };
      if (this.redouble == true) {
        $spansInBar.eq(3).removeClass('doubled').addClass('redoubled')
      } else {
        $spansInBar.eq(3).removeClass('redoubled');
      };

      $spansInBar.eq(4).text(this.tricks);

      if (this.levelContract == 0) {
        $spansInBar.eq(5).text('0')
      } else {
        this.countOverTricks();
        if (this.overtricks > 0 ) {
          $spansInBar.eq(5).text('+'+this.overtricks);
        } else if (this.undertricks > 0 ) {
                $spansInBar.eq(5).text('-'+this.undertricks)
              } else {
                $spansInBar.eq(5).text('0');
              }
      };

      $spansInBar.eq(6).text(this.handPoints);
      $spansInBar.eq(8).text(this.impPoints);
    }; // end of this.print()
  };// end of GameClass

  // do przeniesienia
  var game0 = new gameClass();
  game0.init(1,'NS',false,false,0,'pass', false, false, 20, 6);
  game0.print();
  $dataContracts.eq(35).addClass('choosen'); // contract choosen : 'pass'


  $('.playerName').on('click',function(){
      if ($(this).text()=='NS') {
                $(this).text('WE');
                game0.player = 'WE';
                if (game0.weVulnarable == true) {
                  $(this).removeClass('notvulnarableColor').addClass('vulnarableColor')
                } else {
                  $(this).removeClass('vulnarableColor').addClass('notvulnarableColor')
                };
      } else {
                $(this).text('NS');
                game0.player = 'NS';
                if (game0.nsVulnarable == true) {
                  $(this).removeClass('notvulnarableColor').addClass('vulnarableColor')
                } else {
                  $(this).removeClass('vulnarableColor').addClass('notvulnarableColor')
                };
      };
      game0.print();
  });

  $('.NSvulnarable').on('click',function(){
    if (game0.nsVulnarable) {
      game0.nsVulnarable = false;
      $(this).removeClass('vulnarableColor').addClass('notvulnarableColor')
    } else {
      game0.nsVulnarable = true;
      $(this).removeClass('notvulnarableColor').addClass('vulnarableColor')
    };
    if ((game0.nsVulnarable == true)  && (game0.player == 'NS')) $('.playerName').removeClass('notvulnarableColor').addClass('vulnarableColor');
    if ((game0.nsVulnarable == false) && (game0.player == 'NS')) $('.playerName').removeClass('vulnarableColor').addClass('notvulnarableColor');
    game0.print();
  });

  $('.WEvulnarable').on('click',function(){
    if (game0.weVulnarable) {
      game0.weVulnarable = false;
      $(this).removeClass('vulnarableColor').addClass('notvulnarableColor');
    } else {
      game0.weVulnarable = true;
      $(this).removeClass('notvulnarableColor').addClass('vulnarableColor');
    }
    if ((game0.weVulnarable == true)  && (game0.player == 'WE')) $('.playerName').removeClass('notvulnarableColor').addClass('vulnarableColor');
    if ((game0.weVulnarable == false) && (game0.player == 'WE')) $('.playerName').removeClass('vulnarableColor').addClass('notvulnarableColor');
    game0.print();
  });


  $dataContracts.on('click', function(){
      $dataContracts.removeClass('choosen');
      $(this).addClass('choosen');
      game0.levelContract = $(this).data('contract')[0];
      game0.colorContract = $(this).data('contract').slice(2);

      game0.double = false;
      game0.redouble = false;
      $('[data-doubled]').css('color','black');
      $('[data-redoubled]').css('color','black');

      game0.print();
  });

  $('div[data-doubled]').on('click',function(){
    if (game0.levelContract > 0) {
        if ($(this).data('doubled') == 'no') {
          $(this).data('doubled','yes');
          $(this).css('color','red');
          game0.double = true;
        } else {
          $(this).data('doubled','no');
          game0.double = false;
          $(this).css('color','black');
          game0.redouble = false;
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
                game0.redouble = true;
              } else {
                $(this).data('redoubled','no');
                $(this).css('color','black');
                game0.redouble = false;
              }
            }
            game0.print();
    }
  });



  $dataTricks.on('click',function(){
        $dataTricks.removeClass('choosen');
        $(this).addClass('choosen');
        game0.tricks = $(this).data('tricks');
        game0.print();
  });



  $dataHandPoints.on('click',function(){
    $dataHandPoints.removeClass('choosen');
    $(this).addClass('choosen');
    game0.handPoints = parseInt($(this).data('handpoints'));
    game0.print();

  });

  $('.save h1').on('click',function(){

    var $copy = $('section.scoreTable.navTable').eq(0).clone(true);

    $copy.removeClass('navTable').addClass('saved');
    if (game0.nr < 10) $copy.find('span').eq(0).text("0"+game0.nr);
    $copy.css('border-bottom','1px solid lightgrey');
    $copy.append($("<span class='edit'>EDIT</span><span class='delete'>DELETE</span>"));

    $copy.find('.delete').on('click',deleteSavedBar);
    $copy.find('.edit').on('click', editGame);

    if (editStatus == true) {
      var nrToRemove = parseInt($copy.find('span.number').eq(0).text());

      var nrLast = parseInt($('.saved').find('span.number').last().text());

      if (nrToRemove == nrLast){
        $('.saved').last().remove();
        $copy.appendTo($('body'));
      } else {
          $('.saved').eq(nrToRemove-1).remove();
          $copy.insertBefore($('.saved').eq(nrToRemove-1));
      }
      editStatus = false;
      $('.save h1').text('SAVE');
      $('.edit').show();
      $('.delete').show();
      game0.init(nrLast+1,'NS',false,false,0,'pass', false, false, 20, 6);
      resetView();

    } else {
        $copy.appendTo($('body'));
        game0.init(game0.nr+1,'NS',false,false,0,'pass', false, false, 20, 6);
        game0.print();
        resetView();

    }

    game0.print();
    recountTotalSums();
  });


  function editGame(){
    // resetView();
    var _nr             = parseInt($(this).parent().find('.number').eq(0).text());
    var _player         = $(this).parent().find('.player').eq(0).text();

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

      if ($contract.hasClass('redoubled')) {
        _double = true;
        _redouble = true;
      } else if ($contract.hasClass('doubled')) {
        _double = true;
        _redouble = false;
      } else {
        _double = false;
        _redouble = false;
      }
    };

    _handPoints = parseInt($(this).parent().find('.handPoints').eq(0).text());
    _tricks = parseInt($(this).parent().find('.tricks').eq(0).text());

    game0.init(_nr, _player, _nsVulnarable, _weVulnarable, _levelContract, _colorContract, _double, _redouble, _handPoints, _tricks);

    game0.print();
    console.log('spans',$spansInBar);
    console.log('player',$('.playersVulnarable'));
    resetView();
    console.log('player2',$('.playersVulnarable'));

    editStatus = true;
    $('.save h1').text('SAVE (nr: '+game0.nr+')');
    $('.edit').hide();
    $('.delete').hide();

  };

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


  }

  function recountTotalSums(){
    var $savedNS = $('.saved').find('span.NStotalImpPoints');
    var $savedWE = $('.saved').find('span.WEtotalImpPoints');
    var $savedPlayer = $('.saved').find('span.player');
    var $savedImpPoints = $('.saved').find('span.impPoints');
    var sumNS = 0;
    var sumWE = 0;


    for (var i=0;i < $savedNS.length;i++){
      if (($savedPlayer.eq(i).text() == 'NS') && ($savedImpPoints.eq(i).text() >= 0)) {
        sumNS = parseInt(sumNS) + parseInt($savedImpPoints.eq(i).text());

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

  function resetView(){
    $('.playerName').text(game0.player);
    console.log('resetView',game0);
    if ((game0.player == 'NS') && (game0.nsVulnarable == true ))  $('.playerName').removeClass('notvulnarableColor').addClass('vulnarableColor');
    if ((game0.player == 'NS') && (game0.nsVulnarable == false)) $('.playerName').removeClass('vulnarableColor').addClass('notvulnarableColor');
    if ((game0.player == 'WE') && (game0.weVulnarable == true ))  $('.playerName').removeClass('notvulnarableColor').addClass('vulnarableColor');
    if ((game0.player == 'WE') && (game0.weVulnarable == false)) $('.playerName').removeClass('vulnarableColor').addClass('notvulnarableColor');
    if (game0.nsVulnarable == true) $('.NSvulnarable').removeClass('notvulnarableColor').addClass('vulnarableColor');
    else $('.NSvulnarable').removeClass('vulnarableColor').addClass('notvulnarableColor');
    if (game0.weVulnarable == true) $('.WEvulnarable').removeClass('notvulnarableColor').addClass('vulnarableColor');
    else $('.WEvulnarable').removeClass('vulnarableColor').addClass('notvulnarableColor');
    var index;
    if (game0.colorContract=='clubs') {
      index = game0.levelContract-1;
    } else if (game0.colorContract=='diams') {
              index = game0.levelContract-1+7;
           } else if (game0.colorContract=='hearts') {
                     index = game0.levelContract-1+14;
                  } else if (game0.colorContract=='spades') {
                            index = game0.levelContract-1+21;
                         } else if (game0.colorContract=='NT') {
                                   index = game0.levelContract-1+28;
                                } else {
                                  index = 35;
                                }
    $dataContracts.removeClass('choosen');
    $dataContracts.eq(index).addClass('choosen');
    if (game0.double == true) {
      $('[data-doubled]').data('doubled','yes').css('color','red')
    } else {
      $('[data-doubled]').data('doubled','no').css('color','black');
      $('[data-redoubled]').data('redoubled','no').css('color','black');
    };
    if (game0.redouble == true) {
      $('[data-doubled]').data('doubled','yes').css('color','red');
      $('[data-redoubled]').data('redoubled','yes').css('color','red');
    } else {
      $('[data-redoubled]').data('redoubled','no').css('color','black');
    };
    $dataTricks.removeClass('choosen');
    $dataTricks.eq(game0.tricks).addClass('choosen');
    $dataHandPoints.removeClass('choosen');
    $dataHandPoints.eq(game0.handPoints).addClass('choosen');

    // $('.NSvulnarable').css('background','green');
    // $('.WEvulnarable').css('background','green');
    // $('[data-contract]').css('background','lightgrey').css('color','black');
    // $('[data-contract]').last().css('background','grey').css('color','red');
    // $('[data-doubled]').data('doubled','no').css('color','black');
    // $('[data-redoubled]').data('redoubled','no').css('color','black');
    // $('[data-tricks]').css('background','lightgrey').css('color','black');
    // $('[data-handpoints]').css('background','lightgrey').css('color','black');



  };

});
