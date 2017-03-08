
var mode = '';
var contractFromLocalStorage = '';
var contractCounter   = 0;
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

    this.countOverTricks();
    this.init();
    this.print();
    this.countImp();
    this.getGame();
    this.setGame('01 NS .. 1_pass__ .. 06_tricks 20_points +00_imp');
    this.countOverTricks();

  };// end of GameClass

  gameClass.prototype.countImp = function(){
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

  gameClass.prototype.setGame = function(gameDescription){
    //01 NS x. 1_NT____ x. 08_tricks 09_points -09_imp
    this.nr             = parseInt(gameDescription[0]+gameDescription[1]);
    this.player         = gameDescription[3]+gameDescription[4];
    this.nsVulnarable   = (gameDescription[6] == 'x') ? true:false;
    this.weVulnarable   = (gameDescription[7] == 'x') ? true:false;
    this.levelContract  = parseInt(gameDescription[9]);
    if      (gameDescription[11] == 'p') this.colorContract  = 'pass'
    else if (gameDescription[11] == 'c') this.colorContract  = 'clubs'
    else if (gameDescription[11] == 'd') this.colorContract  = 'diams'
    else if (gameDescription[11] == 'h') this.colorContract  = 'hearts'
    else if (gameDescription[11] == 's') this.colorContract  = 'spades'
    else if (gameDescription[11] == 'N') this.colorContract  = 'NT';
    this.double         = (gameDescription[18] == 'x') ? true:false;
    this.redouble       = (gameDescription[19] == 'x') ? true:false;
    this.tricks         = parseInt(gameDescription[21]+gameDescription[22]);
    this.handPoints     = parseInt(gameDescription[31]+gameDescription[32]);
    this.overtricks     = 0;
    this.undertricks    = 0;
    this.impPoints      = parseInt(gameDescription[41]+gameDescription[42]+gameDescription[43]);
  };

  gameClass.prototype.getGame = function(){
    var nr   = (this.nr < 10) ? '0'+this.nr : ''+this.nr;
    var NS_v = (this.nsVulnarable == true) ? 'x':'.';
    var WE_v = (this.weVulnarable == true) ? 'x':'.';
    var contract = '';
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

  gameClass.prototype.countOverTricks = function (){
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

  gameClass.prototype.init = function(_nr, _player, _nsVulnarable, _weVulnarable, _levelContract, _colorContract, _double, _redouble, _handPoints, _tricks) {
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
  }



  gameClass.prototype.print = function(){

    $spansInBar.eq(0).text(this.nr);
    $spansInBar.eq(1).text(this.player);

    if (this.player == 'NS') $spansInBar.eq(2).text('WE')
    else $spansInBar.eq(2).text('NS');

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
