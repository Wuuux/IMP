
$(document).ready(function(){

  var mode = '';
  var contractFromLocalStorage = '';
  var contractCounter = 0;

    $('#start button').on('click',function(){
        if ($(this).text() == 'SINGLE') {
          $('#mask').hide();
          mode = 'single';
          $("section.save").hide();
          $("section.singleButton").hide();
          $("section.matchButton").show();
          $("section.resetMatchButton").hide();
        } else {
          $('#mask').hide();
          mode = 'match';
          $("section.singleButton").show();
          $("section.save").show();
          $("section.matchButton").hide();
          $("section.resetMatchButton").show();
          var matchExist = false;
          if (typeof(Storage) !== "undefined") {

            $.each(localStorage, function(item){
              console.log(item);
              if (item == 'contractCounter') {
                contractCounter = parseInt(localStorage.getItem('contractCounter'));
                matchExist = true;
              };
            });

          } else {
              alert('No local storage!');
          };
          console.log('match exist :', matchExist);
          if (matchExist == true) {
                for (var i = 1; i <= contractCounter; i++) {
                  if (i<10)
                      {
                        if (localStorage.getItem('bridgeGame0' + i) != 'undefined')
                        {
                          contractFromLocalStorage = localStorage.getItem('bridgeGame0' + i);
                        }
                        else {
                          contractCounter = i-1;

                        };
                      }
                  else
                      {
                        if (localStorage.getItem('bridgeGame' + i) != 'undefined')
                        {
                          contractFromLocalStorage = localStorage.getItem('bridgeGame' + i);
                        }
                        else {
                          contractCounter = i-1;

                        };

                      } ;

                  //insertContract from local Storage
                  var $copy = $('section.scoreTable.navTable').eq(0).clone(true);

                  $copy.removeClass('navTable').addClass('saved');
                  console.log('kopia',$copy);

                };
          };
        };


      });




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
    this.tricks         = 6;
    this.overtricks     = 0;
    this.undertricks    = 0;
    this.pointsToWin    = 0;
    this.wonPoints      = 0;
    this.impPoints      = 0;

    this.countOverTricks = function (){
          if (this.levelContract == 0){
                                    this.levelContract    = 0;
                                    this.tricks           = 6;
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



    this.print = function(){
      // this.impPoints = -Math.floor((Math.random() * 10) + 1);


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



      this.impPoints = this.countImp();
      $spansInBar.eq(8).text(this.impPoints);
    }; // end of this.print()

    this.countImp = function(){
      var result;
      var nsV;
      var weV;

      if (this.nsVulnarable == true) nsV = 'vulnarable'
      else nsV = 'notVulnarable';
      if (this.weVulnarable == true) weV = 'vulnarable'
      else weV = 'notVulnarable';

      if (this.player == 'NS') {
            if (this.redouble == true) {
              return imp( nsV, weV, this.levelContract, this.colorContract, this.handPoints, this.tricks, 'redouble');

            } else {
              if (this.double == true) {
                return imp( nsV, weV, this.levelContract, this.colorContract, this.handPoints, this.tricks, 'double');

              } else {
                result = imp( nsV, weV, this.levelContract, this.colorContract, this.handPoints, this.tricks, 'notdouble');
                return result;

              };
            };
      } else {
              if (this.redouble == true) {
                    return imp( weV, nsV, this.levelContract, this.colorContract, this.handPoints, this.tricks, 'redouble');
              } else {
                if (this.double == true) {
                    return imp( weV, nsV, this.levelContract, this.colorContract, this.handPoints, this.tricks, 'double');
                } else {
                    return imp( weV, nsV, this.levelContract, this.colorContract, this.handPoints, this.tricks, 'notdouble');
                };
              };
      };

    };

    this.getGame = function(){
      var nr   = (this.nr < 10) ? '0'+this.nr : ''+this.nr;
      var NS_v = (this.nsVulnarable == true) ? 'x':'.';
      var WE_v = (this.weVulnarable == true) ? 'x':'.';
      var contract = '';
      console.log('kolor contract',this.colorContract);
      console.log('jestem', this);
      if (this.colorContract == 'clubs') contract = 'clubs_';
      if (this.colorContract == 'diams') contract = 'diams_';
      if (this.colorContract == 'hearts') contract = 'hearts';
      if (this.colorContract == 'spades') contract = 'spades';
      if (this.colorContract == 'NT') contract = 'NT____';
      if (this.levelContract == 0) contract = 'pass__';
      var dbl = (this.double == false) ? '.' : 'x';
      var redbl = (this.redouble == false) ? '.' : 'x';
      var tricks   = (this.tricks < 10) ? '0'+this.tricks : ''+this.tricks;
      var handpoints = (this.handPoints < 10) ? '0'+this.handPoints : '' + this.handPoints;
      var sign = (this.impPoints < 0) ? '-' : '+';
      var imp = ((this.impPoints < 10) && (this.impPoints >= 0)) ? '0'+this.impPoints : ''+this.impPoints;
      if (imp < 0) {
        imp = -imp;
        imp = ((imp < 10) && (imp >= 0)) ? '0'+imp : ''+imp;
      };
      return '' + nr + ' ' +this.player + ' ' + NS_v + WE_v + ' ' + this.levelContract + '_' + contract + ' '+ dbl+redbl + ' ' + tricks + '_tricks ' + handpoints + '_points' + ' ' + sign+imp+'_imp';
    };

  };// end of GameClass




  // do przeniesienia
  var game0 = new gameClass();
  game0.init(1,'NS',false,false,0,'pass', false, false, 20, 6);
  game0.print();
  // $dataContracts.eq(35).addClass('choosen'); // contract choosen : 'pass'


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
          $(this).css('color','white');
          $(this).css('background','red');
          game0.double = true;
        } else {
          $(this).data('doubled','no');
          game0.double = false;
          $(this).css('color','black');
          $(this).css('background','lightgrey');
          game0.redouble = false;
          $('[data-redoubled]').css('color','black');
          $('[data-redoubled]').css('background','lightgrey');
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
                $(this).css('color','white');
                $(this).css('background','red');
                game0.redouble = true;
              } else {
                $(this).data('redoubled','no');
                $(this).css('color','black');
                $(this).css('background','lightgrey');
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

  $('.resetMatchButton h1').on('click',function(){
    localStorage.setItem('contractCounter',0);
    contractCounter = 0;
    $('.saved').remove();
    game0.init(1,'NS',false,false,0,'pass', false, false, 20, 6);
    game0.print();
    resetView();

  });

  $('.matchButton h1').on('click',function(){
    $('section.save').show();
    $('section.singleButton').show();
    $('section.matchButton').hide();
    $('section.resetMatchButton').show();
    mode = 'match';

    if (typeof(Storage) !== "undefined") {
        console.log(localStorage);

    } else {
        alert('No local storage!');
    };


  });

  $('.singleButton h1').on('click',function(){
    $('section.save').hide();
    $('section.singleButton').hide();
    $('section.matchButton').show();
    $('section.resetMatchButton').hide();
    mode = 'single';
  });

  $('.save h1').on('click',function(){

    var $copy = $('section.scoreTable.navTable').eq(0).clone(true);

    $copy.removeClass('navTable').addClass('saved');
    if (game0.nr < 10) $copy.find('span').eq(0).text("0"+game0.nr);
    // $copy.css('border-bottom','1px solid lightgrey');
    $copy.find('.pencil').append($("<span class='edit'>EDIT</span>"));

    //<span class='details'>&dArr;</span>

    $copy.find('.delete').on('click',deleteSavedBar);
    $copy.find('.edit').on('click', editGame);

    if (editStatus == true) {
      var nrToRemove = parseInt($copy.find('span.number').eq(0).text());

      var nrLast = parseInt($('.saved').find('span.number').last().text());
      if (nrToRemove < 10) localStorage.setItem('game0'+nrToRemove, game0.getGame())
      else localStorage.setItem('game'+nrToRemove, game0.getGame());
      if (nrToRemove == nrLast){
        $('.saved').last().remove();
        $copy.appendTo($('#match'));
      } else {
          $('.saved').eq(nrToRemove-1).remove();
          $copy.insertBefore($('.saved').eq(nrToRemove-1));
      }
      editStatus = false;
      $('.save h1').html("SAVE <span class='delete glyphicon glyphicon-floppy-save'></span>");
      $('.edit').show();
      $('.delete').show();
      game0.init(nrLast+1,'NS',false,false,0,'pass', false, false, 20, 6);
      resetView();
      $('section.singleButton').show();

      $('html, body').animate({
        scrollTop: $('.saved').eq(nrToRemove-1).offset().top
      }, 1000);

    } else {
        $copy.appendTo($('#match'));
        contractCounter++;
        console.log('game0:',game0, game0.getGame());
        if (game0.nr < 10)
          {
            localStorage.setItem('bridgeGame0'+game0.nr, game0.getGame() )
          }
        else
          {
            localStorage.setItem('bridgeGame'+game0.nr, game0.getGame() );
          };
        localStorage.setItem('contractCounter',contractCounter);
        game0.init(game0.nr+1,'NS',false,false,0,'pass', false, false, 20, 6);

        game0.print();
        resetView();
        //scroll
        $('html, body').animate({
        scrollTop: $('.saved').last().offset().top
      }, 1000);

    }

    game0.print();
    recountTotalSums();
  });


  function editGame(){
    // resetView();
    var _nr             = parseInt($(this).parent().parent().find('.number').eq(0).text());
    var _player         = $(this).parent().parent().find('.player').eq(0).text();

    var _nsVulnarable;
    var _weVulnarable;
    var _levelContract;
    var _colorContract;
    var _double;
    var _redouble;
    var _handPoints;
    var _tricks;

    var $player  = $(this).parent().parent().find('.player').eq(0);
    var $oponent = $(this).parent().parent().find('.oponent').eq(0);
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

    var $contract = $(this).parent().parent().find('.contract').eq(0);

    if ($contract.text()=='pass') {
      _levelContract = 0;
      _colorContract = 'pass';
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

    _handPoints = parseInt($(this).parent().parent().find('.handPoints').eq(0).text());
    _tricks = parseInt($(this).parent().parent().find('.tricks').eq(0).text());

    game0.init(_nr, _player, _nsVulnarable, _weVulnarable, _levelContract, _colorContract, _double, _redouble, _handPoints, _tricks);

    game0.print();

    resetView();


    editStatus = true;
    $('.save h1').text('SAVE (nr: '+game0.nr+')');
    $('.edit').hide();
    $('.delete').hide();
    $('section.singleButton').hide();

    $('html, body').animate({
    scrollTop: $('.playersVulnarable').last().offset().top
    }, 1000);

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

    if ((game0.player == 'NS') && (game0.nsVulnarable == true ))  $('.playerName').removeClass('notvulnarableColor').addClass('vulnarableColor');
    if ((game0.player == 'NS') && (game0.nsVulnarable == false)) $('.playerName').removeClass('vulnarableColor').addClass('notvulnarableColor');
    if ((game0.player == 'WE') && (game0.weVulnarable == true ))  $('.playerName').removeClass('notvulnarableColor').addClass('vulnarableColor');
    if ((game0.player == 'WE') && (game0.weVulnarable == false)) $('.playerName').removeClass('vulnarableColor').addClass('notvulnarableColor');
    if (game0.nsVulnarable == true) $('.NSvulnarable').removeClass('notvulnarableColor').addClass('vulnarableColor');
    else $('.NSvulnarable').removeClass('vulnarableColor').addClass('notvulnarableColor');
    if (game0.weVulnarable == true) $('.WEvulnarable').removeClass('notvulnarableColor').addClass('vulnarableColor');
    else $('.WEvulnarable').removeClass('vulnarableColor').addClass('notvulnarableColor');
    var index;

    $dataContracts.removeClass('choosen');
    // $dataContracts.eq(index).addClass('choosen');
    for (var i = 0; i < $dataContracts.length; i++) {
      if ($dataContracts.eq(i).data('contract') == game0.levelContract+'_'+game0.colorContract) $dataContracts.eq(i).addClass('choosen');
    };


    if (game0.double == true) {
      $('[data-doubled]').data('doubled','yes').css('color','white');
      $('[data-doubled]').data('doubled','yes').css('background','red');
    } else {
      $('[data-doubled]').data('doubled','no').css('color','black');
      $('[data-doubled]').data('doubled','no').css('background','white');
      $('[data-redoubled]').data('redoubled','no').css('color','black');
      $('[data-redoubled]').data('redoubled','no').css('background','white');
    };
    if (game0.redouble == true) {
      $('[data-doubled]').data('doubled','yes').css('color','white');
      $('[data-doubled]').data('doubled','yes').css('background','red');
      $('[data-redoubled]').data('redoubled','yes').css('color','white');
      $('[data-redoubled]').data('redoubled','yes').css('background','red');
    } else {
      $('[data-redoubled]').data('redoubled','no').css('color','black');
      $('[data-redoubled]').data('redoubled','no').css('background','white');
    };
    $dataTricks.removeClass('choosen');
    for (var i = 0; i < $dataTricks.length; i++) {
      if ($dataTricks.eq(i).data('tricks') == game0.tricks) $dataTricks.eq(i).addClass('choosen');
    };

    $dataHandPoints.removeClass('choosen');

    for (var i = 0; i < $dataHandPoints.length; i++) {
      if ($dataHandPoints.eq(i).data('handpoints') == game0.handPoints) $dataHandPoints.eq(i).addClass('choosen');
    };

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
