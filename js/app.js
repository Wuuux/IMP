
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

      if (_colorContract == 'pass'){

        this.levelContract    = 0;
        this.tricks           = 0;
        this.undertricks      = 0;
        this.overtricks       = 0;

      } else {

        if (this.tricks >= 6+this.levelContract) {
          this.overtricks   = this.tricks - 6 - this.levelContract;
          this.undertricks  = 0;
        } else {
          this.undertricks  = 6+this.levelContract-this.tricks;
          this.overtricks   = 0;
        };

      }

      this.pointsToWin        = 0;
      this.wonPoints          = 0;
      this.impPoints          = 0;
    }
    this.print = function (){
      console.log(this);
      var spans = $('section.scoreTable.navTable').find('span');
      console.log(spans);
      // spans[0].text(this.nr);
      // spans[1].text(this.player);
      // spans[2].text();
    };
  };

  var game0 = new gameClass();
  game0.init(0,'NS',false,false,0,'pass', false, false, 20, 7);
  game0.print();

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
  });


});
