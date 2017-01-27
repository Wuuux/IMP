
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
      this.nr = _nr;
      this.player = _player;
      this.nsVulnarable = _nsVulnarable;
      this.weVulnarable = _weVulnarable;
      this.levelContract = _levelContract;
      this.colorContract = _colorContract;
      this.double = _double;
      this.redouble = _redouble;
      this.handPoints = _handPoints;
      this.tricks = _tricks;
      if (_colorContract != 'pass'){
        if (this.tricks >= 6+this.levelContract) {
          this.overtricks = this.tricks - 6 - this.levelContract;
          this.undertricks = 0;
        } else {
          this.undertricks = 6+this.levelContract-this.tricks;
          this.overtricks = 0;
        };
      } else {
        this.levelContract = 0;
        this.tricks = 0;
        this.undertricks = 0;
        this.overtricks = 0;
      }

      this.pointsToWin = 0;
      this.wonPoints = 0;
      this.impPoints = 0;
    }
    this.print = function (){
      console.log(this);
    };
  };

  var game0 = new gameClass();
  game0.init(0,'NS',false,false,0,'pass', false, false, 20, 7);
  game0.print();
  var game1 = new gameClass();
  game1.init(1,'NS',true,false,1,'hearts', true, false, 26, 9);
  game1.print();




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
