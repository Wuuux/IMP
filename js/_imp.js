function imp(_playerVulnarable, _oponentVulnarable, _levelContract, _colorContract, _points, _tricks, _double){
  var playerPointsToWin;
  var oponentPointsToWin;
  var wonPoints;
  var contractValue = '' + _levelContract + _colorContract;


  if (_points >= 20) {
                    playerPointsToWin = pointsToWin[ _playerVulnarable ][ _points ];

                    if ( _tricks >= _levelContract+6 ) {
                      // wonPoints: contract + overtricks

                      wonPoints = contractPoints[_playerVulnarable][contractValue][_double] + overtricksValue(_playerVulnarable, _levelContract, _colorContract, _double, _tricks);
                      if ( wonPoints >= pointsToWin) {
                        return impPoints(wonPoints - pointsToWin);
                      } else {
                        return -impPoints(pointsToWin - wonPoints);
                      };
                    } else {
                      // undertricks
                      wonPoints = pointsToWin + underTricksValue(_playerVulnarable, _double, _levelContract+6-_tricks);
                      return -impPoints(wonPoints);
                    };
  } else {
                    if ( _tricks >= _levelContract+6 ) {
                      wonPoints = contractPoints[_playerVulnarable][contractValue][_double] + overtricksValue(_playerVulnarable, _levelContract, _colorContract, _double, _tricks);
                      wonPoints += pointsToWin[ _oponentVulnarable ][ 40-_points ];
                      return impPoints(wonPoints);
                    } else {
                      oponentPointsToWin = pointsToWin[ _oponentVulnarable ][ 40 - _points ];
                      wonPoints = oponentPointsToWin - underTricksValue(_playerVulnarable, _double, _levelContract+6-_tricks);
                      if (wonPoints > 0) return impPoints(wonPoints)
                      else return -impPoints(wonPoints);
                    };
  }

};


function underTricksValue(vulnarability, double, undertricks){
  if (undertricks > 7) {
    if ((vulnarability=='notvunarable') && (double=='notdoubled'))  return (underTricksValue[vulnarability][double][7]+(undertricks-7)*50);
    if ((vulnarability=='notvunarable') && (double=='doubled'))     return (underTricksValue[vulnarability][double][7]+(undertricks-7)*300);
    if ((vulnarability=='notvunarable') && (double=='redoubled'))   return (underTricksValue[vulnarability][double][7]+(undertricks-7)*600);
    if ((vulnarability=='vulnarable')   && (double=='notdoubled'))  return (underTricksValue[vulnarability][double][7]+(undertricks-7)*100);
    if ((vulnarability=='vulnarable')   && (double=='doubled'))     return (underTricksValue[vulnarability][double][7]+(undertricks-7)*300);
    if ((vulnarability=='vulnarable')   && (double=='redoubled'))   return (underTricksValue[vulnarability][double][7]+(undertricks-7)*600);
  }
  else return underTricksValue[vulnarability][double][undertricks];
}



function overtricksValue(vulnarability, levelContract, colorContract, double, tricks){

  if ((tricks-6-contractValue[0]) > 0) {
      switch(vulnarability){
        case 'notvunarable':
        if ((colorContract=='clubs') || (colorContract=='diams')) {
          if (double == 'notdoubled')  { return (tricks-6-levelContract)*20;};
          if (double == 'doubled')     { return (tricks-6-levelContract)*100;};
          if (double == 'redoubled')   { return (tricks-6-levelContract)*200;};
        };
        if ((colorContract=='hearts') || (colorContract=='spades')) {
          if (double == 'notdoubled')  { return (tricks-6-levelContract)*30;};
          if (double == 'doubled')     { return (tricks-6-levelContract)*100;};
          if (double == 'redoubled')   { return (tricks-6-levelContract)*200;};
        };
        if (colorContract=='NT')                                  {
          if (double == 'notdoubled')  { return (tricks-6-levelContract)*30;};
          if (double == 'doubled')     { return (tricks-6-levelContract)*100;};
          if (double == 'redoubled')   { return (tricks-6-levelContract)*200;};
        };
        return 0;
        break;

        case 'vulnarable':
        if ((colorContract=='clubs') || (colorContract=='diams')) {
          if (double == 'notdoubled')  { return (tricks-6-levelContract)*20;};
          if (double == 'doubled')     { return (tricks-6-levelContract)*100;};
          if (double == 'redoubled')   { return (tricks-6-levelContract)*200;};
        };
        if ((colorContract=='hearts') || (colorContract=='spades')) {
          if (double == 'notdoubled')  { return (tricks-6-levelContract)*30;};
          if (double == 'doubled')     { return (tricks-6-levelContract)*200;};
          if (double == 'redoubled')   { return (tricks-6-levelContract)*400;};
        };
        if (colorContract=='NT')                                  {
          if (double == 'notdoubled')  { return (tricks-6-levelContract)*30;};
          if (double == 'doubled')     { return (tricks-6-levelContract)*200;};
          if (double == 'redoubled')   { return (tricks-6-levelContract)*400;};
        };
        return 0;
        break;

        default:
          return 0;
        break;
      }
    } else {
      return 0;
    }
}

function pointsIMP(differance){
  var x = differance;
  if (differance < 0) x = -differance;
  switch(true){
    case (x<20):    return 0;  break;
    case (x<50):    return 1;  break;
    case (x<90):    return 2;  break;
    case (x<130):   return 3;  break;
    case (x<170):   return 4;  break;
    case (x<220):   return 5;  break;
    case (x<260):   return 6;  break;
    case (x<320):   return 7;  break;
    case (x<370):   return 8;  break;
    case (x<430):   return 9;  break;
    case (x<500):   return 10; break;
    case (x<600):   return 11; break;
    case (x<750):   return 12; break;
    case (x<900):   return 13; break;
    case (x<1100):  return 14; break;
    case (x<1300):  return 15; break;
    case (x<1500):  return 16; break;
    case (x<1750):  return 17; break;
    case (x<2000):  return 18; break;
    case (x<2250):  return 19; break;
    case (x<2500):  return 20; break;
    case (x<3000):  return 21; break;
    case (x<3500):  return 22; break;
    case (x<4000):  return 23; break;
    default:        return 24; break;
  };
};

// points to win.
var pointsToWin= [];
pointsToWin['notVunarable'] = [];
pointsToWin['vunarable'] = [];
pointsToWin['notVunarable'][20] = 0;
pointsToWin['notVunarable'][21] = 50;
pointsToWin['notVunarable'][22] = 70;
pointsToWin['notVunarable'][23] = 110;
pointsToWin['notVunarable'][24] = 200;
pointsToWin['notVunarable'][25] = 300;
pointsToWin['notVunarable'][26] = 350;
pointsToWin['notVunarable'][27] = 400;
pointsToWin['notVunarable'][28] = 430;
pointsToWin['notVunarable'][29] = 460;
pointsToWin['notVunarable'][30] = 490;
pointsToWin['notVunarable'][31] = 600;
pointsToWin['notVunarable'][32] = 700;
pointsToWin['notVunarable'][33] = 900;
pointsToWin['notVunarable'][34] = 1000;
pointsToWin['notVunarable'][35] = 1100;
pointsToWin['notVunarable'][36] = 1200
pointsToWin['notVunarable'][37] = 1400;
pointsToWin['notVunarable'][38] = 1400;
pointsToWin['notVunarable'][39] = 1400;
pointsToWin['notVunarable'][40] = 1400;

pointsToWin['vunarable'][20] = 0;
pointsToWin['vunarable'][21] = 50;
pointsToWin['vunarable'][22] = 70;
pointsToWin['vunarable'][23] = 110;
pointsToWin['vunarable'][24] = 290;
pointsToWin['vunarable'][25] = 440;
pointsToWin['vunarable'][26] = 520;
pointsToWin['vunarable'][27] = 600;
pointsToWin['vunarable'][28] = 630;
pointsToWin['vunarable'][29] = 660;
pointsToWin['vunarable'][30] = 690;
pointsToWin['vunarable'][31] = 800;
pointsToWin['vunarable'][32] = 1050;
pointsToWin['vunarable'][33] = 1350;
pointsToWin['vunarable'][34] = 1500;
pointsToWin['vunarable'][35] = 1650;
pointsToWin['vunarable'][36] = 1800
pointsToWin['vunarable'][37] = 2100;
pointsToWin['vunarable'][38] = 2100;
pointsToWin['vunarable'][39] = 2100;
pointsToWin['vunarable'][40] = 2100;

var contractPoints = [];

contractPoints['notVunarable'] = [
  '1clubs','1diams','1hearts','1spades','1NT',
    '2clubs','2diams','2hearts','2spades','2NT',
      '3clubs','3diams','3hearts','3spades','3NT',
        '4clubs','4diams','4hearts','4spades','4NT',
          '5clubs','5diams','5hearts','5spades','5NT',
            '6clubs','6diams','6hearts','6spades','6NT',
              '7clubs','7diams','7hearts','7spades','7NT'];

contractPoints['vulnarable'] = [
  '1clubs','1diams','1hearts','1spades','1NT',
    '2clubs','2diams','2hearts','2spades','2NT',
      '3clubs','3diams','3hearts','3spades','3NT',
        '4clubs','4diams','4hearts','4spades','4NT',
          '5clubs','5diams','5hearts','5spades','5NT',
            '6clubs','6diams','6hearts','6spades','6NT',
              '7clubs','7diams','7hearts','7spades','7NT'];

contractPoints['notVunarable']['1clubs']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['1clubs']['notdoubled']=70;
contractPoints['notVunarable']['1clubs']['doubled']=140;
contractPoints['notVunarable']['1clubs']['redoubled']=230;
contractPoints['notVunarable']['1diams']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['1diams']['notdoubled']=70;
contractPoints['notVunarable']['1diams']['doubled']=140;
contractPoints['notVunarable']['1diams']['redoubled']=230;
contractPoints['notVunarable']['1hearts']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['1hearts']['notdoubled']=80;
contractPoints['notVunarable']['1hearts']['doubled']=160;
contractPoints['notVunarable']['1hearts']['redoubled']=520;
contractPoints['notVunarable']['1spades']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['1spades']['notdoubled']=80;
contractPoints['notVunarable']['1spades']['doubled']=160;
contractPoints['notVunarable']['1spades']['redoubled']=520;
contractPoints['notVunarable']['1NT']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['1NT']['notdoubled']=90;
contractPoints['notVunarable']['1NT']['doubled']=180;
contractPoints['notVunarable']['1NT']['redoubled']=560;
contractPoints['notVunarable']['2clubs']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['2clubs']['notdoubled']=90;
contractPoints['notVunarable']['2clubs']['doubled']=180;
contractPoints['notVunarable']['2clubs']['redoubled']=560;
contractPoints['notVunarable']['2diams']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['2diams']['notdoubled']=90;
contractPoints['notVunarable']['2diams']['doubled']=180;
contractPoints['notVunarable']['2diams']['redoubled']=560;
contractPoints['notVunarable']['2hearts']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['2hearts']['notdoubled']=110;
contractPoints['notVunarable']['2hearts']['doubled']=470;
contractPoints['notVunarable']['2hearts']['redoubled']=640;
contractPoints['notVunarable']['2spades']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['2spades']['notdoubled']=110;
contractPoints['notVunarable']['2spades']['doubled']=470;
contractPoints['notVunarable']['2spades']['redoubled']=640;
contractPoints['notVunarable']['2NT']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['2NT']['notdoubled']=120;
contractPoints['notVunarable']['2NT']['doubled']=490;
contractPoints['notVunarable']['2NT']['redoubled']=680;
contractPoints['notVunarable']['3clubs']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['3clubs']['notdoubled']=110;
contractPoints['notVunarable']['3clubs']['doubled']=470;
contractPoints['notVunarable']['3clubs']['redoubled']=640;
contractPoints['notVunarable']['3diams']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['3diams']['notdoubled']=110;
contractPoints['notVunarable']['3diams']['doubled']=470;
contractPoints['notVunarable']['3diams']['redoubled']=640;
contractPoints['notVunarable']['3hearts']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['3hearts']['notdoubled']=140;
contractPoints['notVunarable']['3hearts']['doubled']=530;
contractPoints['notVunarable']['3hearts']['redoubled']=760;
contractPoints['notVunarable']['3spades']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['3spades']['notdoubled']=140;
contractPoints['notVunarable']['3spades']['doubled']=530;
contractPoints['notVunarable']['3spades']['redoubled']=760;
contractPoints['notVunarable']['3NT']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['3NT']['notdoubled']=400;
contractPoints['notVunarable']['3NT']['doubled']=550;
contractPoints['notVunarable']['3NT']['redoubled']=800;
contractPoints['notVunarable']['4clubs']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['4clubs']['notdoubled']=130;
contractPoints['notVunarable']['4clubs']['doubled']=510;
contractPoints['notVunarable']['4clubs']['redoubled']=720;
contractPoints['notVunarable']['4diams']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['4diams']['notdoubled']=130;
contractPoints['notVunarable']['4diams']['doubled']=510;
contractPoints['notVunarable']['4diams']['redoubled']=720;
contractPoints['notVunarable']['4hearts']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['4hearts']['notdoubled']=420;
contractPoints['notVunarable']['4hearts']['doubled']=590;
contractPoints['notVunarable']['4hearts']['redoubled']=880;
contractPoints['notVunarable']['4spades']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['4spades']['notdoubled']=420;
contractPoints['notVunarable']['4spades']['doubled']=590;
contractPoints['notVunarable']['4spades']['redoubled']=880;
contractPoints['notVunarable']['4NT']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['4NT']['notdoubled']=430;
contractPoints['notVunarable']['4NT']['doubled']=610;
contractPoints['notVunarable']['4NT']['redoubled']=920;
contractPoints['notVunarable']['5clubs']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['5clubs']['notdoubled']=400;
contractPoints['notVunarable']['5clubs']['doubled']=550;
contractPoints['notVunarable']['5clubs']['redoubled']=800;
contractPoints['notVunarable']['5diams']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['5diams']['notdoubled']=400;
contractPoints['notVunarable']['5diams']['doubled']=550;
contractPoints['notVunarable']['5diams']['redoubled']=800;
contractPoints['notVunarable']['5hearts']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['5hearts']['notdoubled']=450;
contractPoints['notVunarable']['5hearts']['doubled']=650;
contractPoints['notVunarable']['5hearts']['redoubled']=1000;
contractPoints['notVunarable']['5spades']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['5spades']['notdoubled']=450;
contractPoints['notVunarable']['5spades']['doubled']=650;
contractPoints['notVunarable']['5spades']['redoubled']=1000;
contractPoints['notVunarable']['5NT']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['5NT']['notdoubled']=460;
contractPoints['notVunarable']['5NT']['doubled']=670;
contractPoints['notVunarable']['5NT']['redoubled']=1040;
contractPoints['notVunarable']['6clubs']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['6clubs']['notdoubled']=920;
contractPoints['notVunarable']['6clubs']['doubled']=1090;
contractPoints['notVunarable']['6clubs']['redoubled']=1380;
contractPoints['notVunarable']['6diams']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['6diams']['notdoubled']=920;
contractPoints['notVunarable']['6diams']['doubled']=1090;
contractPoints['notVunarable']['6diams']['redoubled']=1380;
contractPoints['notVunarable']['6hearts']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['6hearts']['notdoubled']=980;
contractPoints['notVunarable']['6hearts']['doubled']=1210;
contractPoints['notVunarable']['6hearts']['redoubled']=1620;
contractPoints['notVunarable']['6spades']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['6spades']['notdoubled']=980;
contractPoints['notVunarable']['6spades']['doubled']=1210;
contractPoints['notVunarable']['6spades']['redoubled']=1620;
contractPoints['notVunarable']['6NT']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['6NT']['notdoubled']=990;
contractPoints['notVunarable']['6NT']['doubled']=1230;
contractPoints['notVunarable']['6NT']['redoubled']=1660;
contractPoints['notVunarable']['7clubs']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['7clubs']['notdoubled']=1440;
contractPoints['notVunarable']['7clubs']['doubled']=1630;
contractPoints['notVunarable']['7clubs']['redoubled']=1960;
contractPoints['notVunarable']['7diams']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['7diams']['notdoubled']=1440;
contractPoints['notVunarable']['7diams']['doubled']=1630;
contractPoints['notVunarable']['7diams']['redoubled']=1960;
contractPoints['notVunarable']['7hearts']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['7hearts']['notdoubled']=1510;
contractPoints['notVunarable']['7hearts']['doubled']=1770;
contractPoints['notVunarable']['7hearts']['redoubled']=2240;
contractPoints['notVunarable']['7spades']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['7spades']['notdoubled']=1510;
contractPoints['notVunarable']['7spades']['doubled']=1770;
contractPoints['notVunarable']['7spades']['redoubled']=2240;
contractPoints['notVunarable']['7NT']=['notdoubled','doubled','redoubled'];
contractPoints['notVunarable']['7NT']['notdoubled']=1520;
contractPoints['notVunarable']['7NT']['doubled']=1790;
contractPoints['notVunarable']['7NT']['redoubled']=2280;
contractPoints['notVunarable']['pass']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['pass']=['notdoubled','doubled','redoubled'];

contractPoints['vunarable']['1clubs']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['1clubs']['notdoubled']=70;
contractPoints['vunarable']['1clubs']['doubled']=140;
contractPoints['vunarable']['1clubs']['redoubled']=230;
contractPoints['vunarable']['1diams']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['1diams']['notdoubled']=70;
contractPoints['vunarable']['1diams']['doubled']=140;
contractPoints['vunarable']['1diams']['redoubled']=230;
contractPoints['vunarable']['1hearts']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['1hearts']['notdoubled']=80;
contractPoints['vunarable']['1hearts']['doubled']=160;
contractPoints['vunarable']['1hearts']['redoubled']=720;
contractPoints['vunarable']['1spades']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['1spades']['notdoubled']=80;
contractPoints['vunarable']['1spades']['doubled']=160;
contractPoints['vunarable']['1spades']['redoubled']=720;
contractPoints['vunarable']['1NT']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['1NT']['notdoubled']=90;
contractPoints['vunarable']['1NT']['doubled']=180;
contractPoints['vunarable']['1NT']['redoubled']=760;
contractPoints['vunarable']['2clubs']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['2clubs']['notdoubled']=90;
contractPoints['vunarable']['2clubs']['doubled']=180;
contractPoints['vunarable']['2clubs']['redoubled']=760;
contractPoints['vunarable']['2diams']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['2diams']['notdoubled']=90;
contractPoints['vunarable']['2diams']['doubled']=180;
contractPoints['vunarable']['2diams']['redoubled']=760;
contractPoints['vunarable']['2hearts']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['2hearts']['notdoubled']=110;
contractPoints['vunarable']['2hearts']['doubled']=670;
contractPoints['vunarable']['2hearts']['redoubled']=840;
contractPoints['vunarable']['2spades']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['2spades']['notdoubled']=110;
contractPoints['vunarable']['2spades']['doubled']=670;
contractPoints['vunarable']['2spades']['redoubled']=840;
contractPoints['vunarable']['2NT']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['2NT']['notdoubled']=120;
contractPoints['vunarable']['2NT']['doubled']=690;
contractPoints['vunarable']['2NT']['redoubled']=880;
contractPoints['vunarable']['3clubs']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['3clubs']['notdoubled']=110;
contractPoints['vunarable']['3clubs']['doubled']=670;
contractPoints['vunarable']['3clubs']['redoubled']=840;
contractPoints['vunarable']['3diams']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['3diams']['notdoubled']=110;
contractPoints['vunarable']['3diams']['doubled']=670;
contractPoints['vunarable']['3diams']['redoubled']=840;
contractPoints['vunarable']['3hearts']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['3hearts']['notdoubled']=140;
contractPoints['vunarable']['3hearts']['doubled']=730;
contractPoints['vunarable']['3hearts']['redoubled']=960;
contractPoints['vunarable']['3spades']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['3spades']['notdoubled']=140;
contractPoints['vunarable']['3spades']['doubled']=730;
contractPoints['vunarable']['3spades']['redoubled']=960;
contractPoints['vunarable']['3NT']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['3NT']['notdoubled']=600;
contractPoints['vunarable']['3NT']['doubled']=750;
contractPoints['vunarable']['3NT']['redoubled']=1000;
contractPoints['vunarable']['4clubs']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['4clubs']['notdoubled']=130;
contractPoints['vunarable']['4clubs']['doubled']=710;
contractPoints['vunarable']['4clubs']['redoubled']=920;
contractPoints['vunarable']['4diams']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['4diams']['notdoubled']=130;
contractPoints['vunarable']['4diams']['doubled']=710;
contractPoints['vunarable']['4diams']['redoubled']=920;
contractPoints['vunarable']['4hearts']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['4hearts']['notdoubled']=620;
contractPoints['vunarable']['4hearts']['doubled']=790;
contractPoints['vunarable']['4hearts']['redoubled']=1080;
contractPoints['vunarable']['4spades']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['4spades']['notdoubled']=620;
contractPoints['vunarable']['4spades']['doubled']=790;
contractPoints['vunarable']['4spades']['redoubled']=1080;
contractPoints['vunarable']['4NT']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['4NT']['notdoubled']=630;
contractPoints['vunarable']['4NT']['doubled']=810;
contractPoints['vunarable']['4NT']['redoubled']=1120;
contractPoints['vunarable']['5clubs']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['5clubs']['notdoubled']=600;
contractPoints['vunarable']['5clubs']['doubled']=750;
contractPoints['vunarable']['5clubs']['redoubled']=1000;
contractPoints['vunarable']['5diams']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['5diams']['notdoubled']=600;
contractPoints['vunarable']['5diams']['doubled']=750;
contractPoints['vunarable']['5diams']['redoubled']=1000;
contractPoints['vunarable']['5hearts']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['5hearts']['notdoubled']=650;
contractPoints['vunarable']['5hearts']['doubled']=850;
contractPoints['vunarable']['5hearts']['redoubled']=1200;
contractPoints['vunarable']['5spades']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['5spades']['notdoubled']=650;
contractPoints['vunarable']['5spades']['doubled']=850;
contractPoints['vunarable']['5spades']['redoubled']=1200;
contractPoints['vunarable']['5NT']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['5NT']['notdoubled']=660;
contractPoints['vunarable']['5NT']['doubled']=870;
contractPoints['vunarable']['5NT']['redoubled']=1240;
contractPoints['vunarable']['6clubs']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['6clubs']['notdoubled']=1370;
contractPoints['vunarable']['6clubs']['doubled']=1510;
contractPoints['vunarable']['6clubs']['redoubled']=1830;
contractPoints['vunarable']['6diams']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['6diams']['notdoubled']=1370;
contractPoints['vunarable']['6diams']['doubled']=1510;
contractPoints['vunarable']['6diams']['redoubled']=1830;
contractPoints['vunarable']['6hearts']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['6hearts']['notdoubled']=1430;
contractPoints['vunarable']['6hearts']['doubled']=1660;
contractPoints['vunarable']['6hearts']['redoubled']=2070;
contractPoints['vunarable']['6spades']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['6spades']['notdoubled']=1430;
contractPoints['vunarable']['6spades']['doubled']=1660;
contractPoints['vunarable']['6spades']['redoubled']=2070;
contractPoints['vunarable']['6NT']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['6NT']['notdoubled']=1440;
contractPoints['vunarable']['6NT']['doubled']=1680;
contractPoints['vunarable']['6NT']['redoubled']=2110;
contractPoints['vunarable']['7clubs']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['7clubs']['notdoubled']=2140;
contractPoints['vunarable']['7clubs']['doubled']=2330;
contractPoints['vunarable']['7clubs']['redoubled']=2660;
contractPoints['vunarable']['7diams']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['7diams']['notdoubled']=2140;
contractPoints['vunarable']['7diams']['doubled']=2330;
contractPoints['vunarable']['7diams']['redoubled']=2660;
contractPoints['vunarable']['7hearts']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['7hearts']['notdoubled']=2210;
contractPoints['vunarable']['7hearts']['doubled']=2470;
contractPoints['vunarable']['7hearts']['redoubled']=2790;
contractPoints['vunarable']['7spades']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['7spades']['notdoubled']=2210;
contractPoints['vunarable']['7spades']['doubled']=2470;
contractPoints['vunarable']['7spades']['redoubled']=2790;
contractPoints['vunarable']['7NT']=['notdoubled','doubled','redoubled'];
contractPoints['vunarable']['7NT']['notdoubled']=2200;
contractPoints['vunarable']['7NT']['doubled']=2490;
contractPoints['vunarable']['7NT']['redoubled']=2980;
contractPoints['notVunarable']['pass']['notdoubled']=0;
contractPoints['notVunarable']['pass']['doubled']=0;
contractPoints['notVunarable']['pass']['redoubled']=0;
contractPoints['vunarable']['pass']['notdoubled']=0;
contractPoints['vunarable']['pass']['doubled']=0;
contractPoints['vunarable']['pass']['redoubled']=0;


var underTricksValue = [];
underTricksValue['notvunarable']=['notdoubled','doubled','redoubled'];
underTricksValue['vulnarable']=['notdoubled','doubled','redoubled'];
underTricksValue['notvunarable']['notdoubled']=[0,1,2,3,4,5,6,7];
underTricksValue['notvunarable']['doubled']=[0,1,2,3,4,5,6,7];
underTricksValue['notvunarable']['redoubled']=[0,1,2,3,4,5,6,7];
underTricksValue['vulnarable']['notdoubled']=[0,1,2,3,4,5,6,7];
underTricksValue['vulnarable']['doubled']=[0,1,2,3,4,5,6,7];
underTricksValue['vulnarable']['redoubled']=[0,1,2,3,4,5,6,7];
underTricksValue['notvunarable']['notdoubled'][0]=0;
underTricksValue['notvunarable']['notdoubled'][1]=50;
underTricksValue['notvunarable']['notdoubled'][2]=100;
underTricksValue['notvunarable']['notdoubled'][3]=150;
underTricksValue['notvunarable']['notdoubled'][4]=200;
underTricksValue['notvunarable']['notdoubled'][5]=250;
underTricksValue['notvunarable']['notdoubled'][6]=300;
underTricksValue['notvunarable']['notdoubled'][7]=350;
underTricksValue['notvunarable']['doubled'][0]=0;
underTricksValue['notvunarable']['doubled'][1]=100;
underTricksValue['notvunarable']['doubled'][2]=300;
underTricksValue['notvunarable']['doubled'][3]=500;
underTricksValue['notvunarable']['doubled'][4]=800;
underTricksValue['notvunarable']['doubled'][5]=1100;
underTricksValue['notvunarable']['doubled'][6]=1400;
underTricksValue['notvunarable']['doubled'][7]=1700;
underTricksValue['notvunarable']['redoubled'][0]=0;
underTricksValue['notvunarable']['redoubled'][1]=200;
underTricksValue['notvunarable']['redoubled'][2]=600;
underTricksValue['notvunarable']['redoubled'][3]=1000;
underTricksValue['notvunarable']['redoubled'][4]=1600;
underTricksValue['notvunarable']['redoubled'][5]=2200;
underTricksValue['notvunarable']['redoubled'][6]=2800;
underTricksValue['notvunarable']['redoubled'][7]=3400;
underTricksValue['vulnarable']['notdoubled'][0]=0;
underTricksValue['vulnarable']['notdoubled'][1]=100;
underTricksValue['vulnarable']['notdoubled'][2]=200;
underTricksValue['vulnarable']['notdoubled'][3]=300;
underTricksValue['vulnarable']['notdoubled'][4]=400;
underTricksValue['vulnarable']['notdoubled'][5]=500;
underTricksValue['vulnarable']['notdoubled'][6]=600;
underTricksValue['vulnarable']['notdoubled'][7]=700;
underTricksValue['vulnarable']['doubled'][0]=0;
underTricksValue['vulnarable']['doubled'][1]=200;
underTricksValue['vulnarable']['doubled'][2]=500;
underTricksValue['vulnarable']['doubled'][3]=800;
underTricksValue['vulnarable']['doubled'][4]=1100;
underTricksValue['vulnarable']['doubled'][5]=1400;
underTricksValue['vulnarable']['doubled'][6]=1700;
underTricksValue['vulnarable']['doubled'][7]=2000;
underTricksValue['vulnarable']['redoubled'][0]=0;
underTricksValue['vulnarable']['redoubled'][1]=400;
underTricksValue['vulnarable']['redoubled'][2]=1000;
underTricksValue['vulnarable']['redoubled'][3]=1600;
underTricksValue['vulnarable']['redoubled'][4]=2200;
underTricksValue['vulnarable']['redoubled'][5]=2800;
underTricksValue['vulnarable']['redoubled'][6]=3400;
underTricksValue['vulnarable']['redoubled'][7]=4000;
