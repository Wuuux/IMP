// points to win.
var pointsToWinTable= [];
pointsToWinTable['notVulnarable'] = [];
pointsToWinTable['vulnarable'] = [];
pointsToWinTable['notVulnarable'][20] = 0;
pointsToWinTable['notVulnarable'][21] = 50;
pointsToWinTable['notVulnarable'][22] = 70;
pointsToWinTable['notVulnarable'][23] = 110;
pointsToWinTable['notVulnarable'][24] = 200;
pointsToWinTable['notVulnarable'][25] = 300;
pointsToWinTable['notVulnarable'][26] = 350;
pointsToWinTable['notVulnarable'][27] = 400;
pointsToWinTable['notVulnarable'][28] = 430;
pointsToWinTable['notVulnarable'][29] = 460;
pointsToWinTable['notVulnarable'][30] = 490;
pointsToWinTable['notVulnarable'][31] = 600;
pointsToWinTable['notVulnarable'][32] = 700;
pointsToWinTable['notVulnarable'][33] = 900;
pointsToWinTable['notVulnarable'][34] = 1000;
pointsToWinTable['notVulnarable'][35] = 1100;
pointsToWinTable['notVulnarable'][36] = 1200
pointsToWinTable['notVulnarable'][37] = 1400;
pointsToWinTable['notVulnarable'][38] = 1400;
pointsToWinTable['notVulnarable'][39] = 1400;
pointsToWinTable['notVulnarable'][40] = 1400;

pointsToWinTable['vulnarable'][20] = 0;
pointsToWinTable['vulnarable'][21] = 50;
pointsToWinTable['vulnarable'][22] = 70;
pointsToWinTable['vulnarable'][23] = 110;
pointsToWinTable['vulnarable'][24] = 290;
pointsToWinTable['vulnarable'][25] = 440;
pointsToWinTable['vulnarable'][26] = 520;
pointsToWinTable['vulnarable'][27] = 600;
pointsToWinTable['vulnarable'][28] = 630;
pointsToWinTable['vulnarable'][29] = 660;
pointsToWinTable['vulnarable'][30] = 690;
pointsToWinTable['vulnarable'][31] = 800;
pointsToWinTable['vulnarable'][32] = 1050;
pointsToWinTable['vulnarable'][33] = 1350;
pointsToWinTable['vulnarable'][34] = 1500;
pointsToWinTable['vulnarable'][35] = 1650;
pointsToWinTable['vulnarable'][36] = 1800
pointsToWinTable['vulnarable'][37] = 2100;
pointsToWinTable['vulnarable'][38] = 2100;
pointsToWinTable['vulnarable'][39] = 2100;
pointsToWinTable['vulnarable'][40] = 2100;

var contractPointsTable = [];

contractPointsTable['notVulnarable'] = [
  '1clubs','1diams','1hearts','1spades','1NT',
  '2clubs','2diams','2hearts','2spades','2NT',
  '3clubs','3diams','3hearts','3spades','3NT',
  '4clubs','4diams','4hearts','4spades','4NT',
  '5clubs','5diams','5hearts','5spades','5NT',
  '6clubs','6diams','6hearts','6spades','6NT',
  '7clubs','7diams','7hearts','7spades','7NT',
  '0pass'];

contractPointsTable['vulnarable'] = [
  '1clubs','1diams','1hearts','1spades','1NT',
  '2clubs','2diams','2hearts','2spades','2NT',
  '3clubs','3diams','3hearts','3spades','3NT',
  '4clubs','4diams','4hearts','4spades','4NT',
  '5clubs','5diams','5hearts','5spades','5NT',
  '6clubs','6diams','6hearts','6spades','6NT',
  '7clubs','7diams','7hearts','7spades','7NT',
  '0pass'];

contractPointsTable['notVulnarable']['1clubs']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['1clubs']['notdouble'] =70;
contractPointsTable['notVulnarable']['1clubs']['double']    =140;
contractPointsTable['notVulnarable']['1clubs']['redouble']  =230;
contractPointsTable['notVulnarable']['1diams']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['1diams']['notdouble'] =70;
contractPointsTable['notVulnarable']['1diams']['double']    =140;
contractPointsTable['notVulnarable']['1diams']['redouble']  =230;
contractPointsTable['notVulnarable']['1hearts']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['1hearts']['notdouble']=80;
contractPointsTable['notVulnarable']['1hearts']['double']   =160;
contractPointsTable['notVulnarable']['1hearts']['redouble'] =520;
contractPointsTable['notVulnarable']['1spades']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['1spades']['notdouble']=80;
contractPointsTable['notVulnarable']['1spades']['double']   =160;
contractPointsTable['notVulnarable']['1spades']['redouble'] =520;
contractPointsTable['notVulnarable']['1NT']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['1NT']['notdouble']    =90;
contractPointsTable['notVulnarable']['1NT']['double']       =180;
contractPointsTable['notVulnarable']['1NT']['redouble']=560;
contractPointsTable['notVulnarable']['2clubs']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['2clubs']['notdouble']=90;
contractPointsTable['notVulnarable']['2clubs']['double']=180;
contractPointsTable['notVulnarable']['2clubs']['redouble']=560;
contractPointsTable['notVulnarable']['2diams']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['2diams']['notdouble']=90;
contractPointsTable['notVulnarable']['2diams']['double']=180;
contractPointsTable['notVulnarable']['2diams']['redouble']=560;
contractPointsTable['notVulnarable']['2hearts']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['2hearts']['notdouble']=110;
contractPointsTable['notVulnarable']['2hearts']['double']=470;
contractPointsTable['notVulnarable']['2hearts']['redouble']=640;
contractPointsTable['notVulnarable']['2spades']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['2spades']['notdouble']=110;
contractPointsTable['notVulnarable']['2spades']['double']=470;
contractPointsTable['notVulnarable']['2spades']['redouble']=640;
contractPointsTable['notVulnarable']['2NT']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['2NT']['notdouble']=120;
contractPointsTable['notVulnarable']['2NT']['double']=490;
contractPointsTable['notVulnarable']['2NT']['redouble']=680;
contractPointsTable['notVulnarable']['3clubs']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['3clubs']['notdouble']=110;
contractPointsTable['notVulnarable']['3clubs']['double']=470;
contractPointsTable['notVulnarable']['3clubs']['redouble']=640;
contractPointsTable['notVulnarable']['3diams']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['3diams']['notdouble']=110;
contractPointsTable['notVulnarable']['3diams']['double']=470;
contractPointsTable['notVulnarable']['3diams']['redouble']=640;
contractPointsTable['notVulnarable']['3hearts']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['3hearts']['notdouble']=140;
contractPointsTable['notVulnarable']['3hearts']['double']=530;
contractPointsTable['notVulnarable']['3hearts']['redouble']=760;
contractPointsTable['notVulnarable']['3spades']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['3spades']['notdouble']=140;
contractPointsTable['notVulnarable']['3spades']['double']=530;
contractPointsTable['notVulnarable']['3spades']['redouble']=760;
contractPointsTable['notVulnarable']['3NT']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['3NT']['notdouble']=400;
contractPointsTable['notVulnarable']['3NT']['double']=550;
contractPointsTable['notVulnarable']['3NT']['redouble']=800;
contractPointsTable['notVulnarable']['4clubs']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['4clubs']['notdouble']=130;
contractPointsTable['notVulnarable']['4clubs']['double']=510;
contractPointsTable['notVulnarable']['4clubs']['redouble']=720;
contractPointsTable['notVulnarable']['4diams']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['4diams']['notdouble']=130;
contractPointsTable['notVulnarable']['4diams']['double']=510;
contractPointsTable['notVulnarable']['4diams']['redouble']=720;
contractPointsTable['notVulnarable']['4hearts']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['4hearts']['notdouble']=420;
contractPointsTable['notVulnarable']['4hearts']['double']=590;
contractPointsTable['notVulnarable']['4hearts']['redouble']=880;
contractPointsTable['notVulnarable']['4spades']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['4spades']['notdouble']=420;
contractPointsTable['notVulnarable']['4spades']['double']=590;
contractPointsTable['notVulnarable']['4spades']['redouble']=880;
contractPointsTable['notVulnarable']['4NT']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['4NT']['notdouble']=430;
contractPointsTable['notVulnarable']['4NT']['double']=610;
contractPointsTable['notVulnarable']['4NT']['redouble']=920;
contractPointsTable['notVulnarable']['5clubs']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['5clubs']['notdouble']=400;
contractPointsTable['notVulnarable']['5clubs']['double']=550;
contractPointsTable['notVulnarable']['5clubs']['redouble']=800;
contractPointsTable['notVulnarable']['5diams']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['5diams']['notdouble']=400;
contractPointsTable['notVulnarable']['5diams']['double']=550;
contractPointsTable['notVulnarable']['5diams']['redouble']=800;
contractPointsTable['notVulnarable']['5hearts']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['5hearts']['notdouble']=450;
contractPointsTable['notVulnarable']['5hearts']['double']=650;
contractPointsTable['notVulnarable']['5hearts']['redouble']=1000;
contractPointsTable['notVulnarable']['5spades']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['5spades']['notdouble']=450;
contractPointsTable['notVulnarable']['5spades']['double']=650;
contractPointsTable['notVulnarable']['5spades']['redouble']=1000;
contractPointsTable['notVulnarable']['5NT']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['5NT']['notdouble']=460;
contractPointsTable['notVulnarable']['5NT']['double']=670;
contractPointsTable['notVulnarable']['5NT']['redouble']=1040;
contractPointsTable['notVulnarable']['6clubs']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['6clubs']['notdouble']=920;
contractPointsTable['notVulnarable']['6clubs']['double']=1090;
contractPointsTable['notVulnarable']['6clubs']['redouble']=1380;
contractPointsTable['notVulnarable']['6diams']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['6diams']['notdouble']=920;
contractPointsTable['notVulnarable']['6diams']['double']=1090;
contractPointsTable['notVulnarable']['6diams']['redouble']=1380;
contractPointsTable['notVulnarable']['6hearts']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['6hearts']['notdouble']=980;
contractPointsTable['notVulnarable']['6hearts']['double']=1210;
contractPointsTable['notVulnarable']['6hearts']['redouble']=1620;
contractPointsTable['notVulnarable']['6spades']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['6spades']['notdouble']=980;
contractPointsTable['notVulnarable']['6spades']['double']=1210;
contractPointsTable['notVulnarable']['6spades']['redouble']=1620;
contractPointsTable['notVulnarable']['6NT']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['6NT']['notdouble']=990;
contractPointsTable['notVulnarable']['6NT']['double']=1230;
contractPointsTable['notVulnarable']['6NT']['redouble']=1660;
contractPointsTable['notVulnarable']['7clubs']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['7clubs']['notdouble']=1440;
contractPointsTable['notVulnarable']['7clubs']['double']=1630;
contractPointsTable['notVulnarable']['7clubs']['redouble']=1960;
contractPointsTable['notVulnarable']['7diams']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['7diams']['notdouble']=1440;
contractPointsTable['notVulnarable']['7diams']['double']=1630;
contractPointsTable['notVulnarable']['7diams']['redouble']=1960;
contractPointsTable['notVulnarable']['7hearts']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['7hearts']['notdouble']=1510;
contractPointsTable['notVulnarable']['7hearts']['double']=1770;
contractPointsTable['notVulnarable']['7hearts']['redouble']=2240;
contractPointsTable['notVulnarable']['7spades']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['7spades']['notdouble']=1510;
contractPointsTable['notVulnarable']['7spades']['double']=1770;
contractPointsTable['notVulnarable']['7spades']['redouble']=2240;
contractPointsTable['notVulnarable']['7NT']=['notdouble','double','redouble'];
contractPointsTable['notVulnarable']['7NT']['notdouble']=1520;
contractPointsTable['notVulnarable']['7NT']['double']=1790;
contractPointsTable['notVulnarable']['7NT']['redouble']=2280;
contractPointsTable['notVulnarable']['0pass']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['0pass']=['notdouble','double','redouble'];

contractPointsTable['vulnarable']['1clubs']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['1clubs']['notdouble']=70;
contractPointsTable['vulnarable']['1clubs']['double']=140;
contractPointsTable['vulnarable']['1clubs']['redouble']=230;
contractPointsTable['vulnarable']['1diams']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['1diams']['notdouble']=70;
contractPointsTable['vulnarable']['1diams']['double']=140;
contractPointsTable['vulnarable']['1diams']['redouble']=230;
contractPointsTable['vulnarable']['1hearts']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['1hearts']['notdouble']=80;
contractPointsTable['vulnarable']['1hearts']['double']=160;
contractPointsTable['vulnarable']['1hearts']['redouble']=720;
contractPointsTable['vulnarable']['1spades']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['1spades']['notdouble']=80;
contractPointsTable['vulnarable']['1spades']['double']=160;
contractPointsTable['vulnarable']['1spades']['redouble']=720;
contractPointsTable['vulnarable']['1NT']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['1NT']['notdouble']=90;
contractPointsTable['vulnarable']['1NT']['double']=180;
contractPointsTable['vulnarable']['1NT']['redouble']=760;
contractPointsTable['vulnarable']['2clubs']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['2clubs']['notdouble']=90;
contractPointsTable['vulnarable']['2clubs']['double']=180;
contractPointsTable['vulnarable']['2clubs']['redouble']=760;
contractPointsTable['vulnarable']['2diams']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['2diams']['notdouble']=90;
contractPointsTable['vulnarable']['2diams']['double']=180;
contractPointsTable['vulnarable']['2diams']['redouble']=760;
contractPointsTable['vulnarable']['2hearts']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['2hearts']['notdouble']=110;
contractPointsTable['vulnarable']['2hearts']['double']=670;
contractPointsTable['vulnarable']['2hearts']['redouble']=840;
contractPointsTable['vulnarable']['2spades']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['2spades']['notdouble']=110;
contractPointsTable['vulnarable']['2spades']['double']=670;
contractPointsTable['vulnarable']['2spades']['redouble']=840;
contractPointsTable['vulnarable']['2NT']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['2NT']['notdouble']=120;
contractPointsTable['vulnarable']['2NT']['double']=690;
contractPointsTable['vulnarable']['2NT']['redouble']=880;
contractPointsTable['vulnarable']['3clubs']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['3clubs']['notdouble']=110;
contractPointsTable['vulnarable']['3clubs']['double']=670;
contractPointsTable['vulnarable']['3clubs']['redouble']=840;
contractPointsTable['vulnarable']['3diams']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['3diams']['notdouble']=110;
contractPointsTable['vulnarable']['3diams']['double']=670;
contractPointsTable['vulnarable']['3diams']['redouble']=840;
contractPointsTable['vulnarable']['3hearts']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['3hearts']['notdouble']=140;
contractPointsTable['vulnarable']['3hearts']['double']=730;
contractPointsTable['vulnarable']['3hearts']['redouble']=960;
contractPointsTable['vulnarable']['3spades']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['3spades']['notdouble']=140;
contractPointsTable['vulnarable']['3spades']['double']=730;
contractPointsTable['vulnarable']['3spades']['redouble']=960;
contractPointsTable['vulnarable']['3NT']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['3NT']['notdouble']=600;
contractPointsTable['vulnarable']['3NT']['double']=750;
contractPointsTable['vulnarable']['3NT']['redouble']=1000;
contractPointsTable['vulnarable']['4clubs']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['4clubs']['notdouble']=130;
contractPointsTable['vulnarable']['4clubs']['double']=710;
contractPointsTable['vulnarable']['4clubs']['redouble']=920;
contractPointsTable['vulnarable']['4diams']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['4diams']['notdouble']=130;
contractPointsTable['vulnarable']['4diams']['double']=710;
contractPointsTable['vulnarable']['4diams']['redouble']=920;
contractPointsTable['vulnarable']['4hearts']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['4hearts']['notdouble']=620;
contractPointsTable['vulnarable']['4hearts']['double']=790;
contractPointsTable['vulnarable']['4hearts']['redouble']=1080;
contractPointsTable['vulnarable']['4spades']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['4spades']['notdouble']=620;
contractPointsTable['vulnarable']['4spades']['double']=790;
contractPointsTable['vulnarable']['4spades']['redouble']=1080;
contractPointsTable['vulnarable']['4NT']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['4NT']['notdouble']=630;
contractPointsTable['vulnarable']['4NT']['double']=810;
contractPointsTable['vulnarable']['4NT']['redouble']=1120;
contractPointsTable['vulnarable']['5clubs']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['5clubs']['notdouble']=600;
contractPointsTable['vulnarable']['5clubs']['double']=750;
contractPointsTable['vulnarable']['5clubs']['redouble']=1000;
contractPointsTable['vulnarable']['5diams']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['5diams']['notdouble']=600;
contractPointsTable['vulnarable']['5diams']['double']=750;
contractPointsTable['vulnarable']['5diams']['redouble']=1000;
contractPointsTable['vulnarable']['5hearts']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['5hearts']['notdouble']=650;
contractPointsTable['vulnarable']['5hearts']['double']=850;
contractPointsTable['vulnarable']['5hearts']['redouble']=1200;
contractPointsTable['vulnarable']['5spades']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['5spades']['notdouble']=650;
contractPointsTable['vulnarable']['5spades']['double']=850;
contractPointsTable['vulnarable']['5spades']['redouble']=1200;
contractPointsTable['vulnarable']['5NT']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['5NT']['notdouble']=660;
contractPointsTable['vulnarable']['5NT']['double']=870;
contractPointsTable['vulnarable']['5NT']['redouble']=1240;
contractPointsTable['vulnarable']['6clubs']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['6clubs']['notdouble']=1370;
contractPointsTable['vulnarable']['6clubs']['double']=1510;
contractPointsTable['vulnarable']['6clubs']['redouble']=1830;
contractPointsTable['vulnarable']['6diams']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['6diams']['notdouble']=1370;
contractPointsTable['vulnarable']['6diams']['double']=1510;
contractPointsTable['vulnarable']['6diams']['redouble']=1830;
contractPointsTable['vulnarable']['6hearts']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['6hearts']['notdouble']=1430;
contractPointsTable['vulnarable']['6hearts']['double']=1660;
contractPointsTable['vulnarable']['6hearts']['redouble']=2070;
contractPointsTable['vulnarable']['6spades']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['6spades']['notdouble']=1430;
contractPointsTable['vulnarable']['6spades']['double']=1660;
contractPointsTable['vulnarable']['6spades']['redouble']=2070;
contractPointsTable['vulnarable']['6NT']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['6NT']['notdouble']=1440;
contractPointsTable['vulnarable']['6NT']['double']=1680;
contractPointsTable['vulnarable']['6NT']['redouble']=2110;
contractPointsTable['vulnarable']['7clubs']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['7clubs']['notdouble']=2140;
contractPointsTable['vulnarable']['7clubs']['double']=2330;
contractPointsTable['vulnarable']['7clubs']['redouble']=2660;
contractPointsTable['vulnarable']['7diams']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['7diams']['notdouble']=2140;
contractPointsTable['vulnarable']['7diams']['double']=2330;
contractPointsTable['vulnarable']['7diams']['redouble']=2660;
contractPointsTable['vulnarable']['7hearts']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['7hearts']['notdouble']=2210;
contractPointsTable['vulnarable']['7hearts']['double']=2470;
contractPointsTable['vulnarable']['7hearts']['redouble']=2790;
contractPointsTable['vulnarable']['7spades']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['7spades']['notdouble']=2210;
contractPointsTable['vulnarable']['7spades']['double']=2470;
contractPointsTable['vulnarable']['7spades']['redouble']=2790;
contractPointsTable['vulnarable']['7NT']=['notdouble','double','redouble'];
contractPointsTable['vulnarable']['7NT']['notdouble']=2200;
contractPointsTable['vulnarable']['7NT']['double']=2490;
contractPointsTable['vulnarable']['7NT']['redouble']=2980;
contractPointsTable['notVulnarable']['0pass']['notdouble']=0;
contractPointsTable['notVulnarable']['0pass']['double']=0;
contractPointsTable['notVulnarable']['0pass']['redouble']=0;
contractPointsTable['vulnarable']['0pass']['notdouble']=0;
contractPointsTable['vulnarable']['0pass']['double']=0;
contractPointsTable['vulnarable']['0pass']['redouble']=0;


var underTricksValue = [];
underTricksValue['notVulnarable']=['notdouble','double','redouble'];
underTricksValue['vulnarable']=['notdouble','double','redouble'];
underTricksValue['notVulnarable']['notdouble']=[0,1,2,3,4,5,6,7];
underTricksValue['notVulnarable']['double']=[0,1,2,3,4,5,6,7];
underTricksValue['notVulnarable']['redouble']=[0,1,2,3,4,5,6,7];
underTricksValue['vulnarable']['notdouble']=[0,1,2,3,4,5,6,7];
underTricksValue['vulnarable']['double']=[0,1,2,3,4,5,6,7];
underTricksValue['vulnarable']['redouble']=[0,1,2,3,4,5,6,7];
underTricksValue['notVulnarable']['notdouble'][0]=0;
underTricksValue['notVulnarable']['notdouble'][1]=50;
underTricksValue['notVulnarable']['notdouble'][2]=100;
underTricksValue['notVulnarable']['notdouble'][3]=150;
underTricksValue['notVulnarable']['notdouble'][4]=200;
underTricksValue['notVulnarable']['notdouble'][5]=250;
underTricksValue['notVulnarable']['notdouble'][6]=300;
underTricksValue['notVulnarable']['notdouble'][7]=350;
underTricksValue['notVulnarable']['double'][0]=0;
underTricksValue['notVulnarable']['double'][1]=100;
underTricksValue['notVulnarable']['double'][2]=300;
underTricksValue['notVulnarable']['double'][3]=500;
underTricksValue['notVulnarable']['double'][4]=800;
underTricksValue['notVulnarable']['double'][5]=1100;
underTricksValue['notVulnarable']['double'][6]=1400;
underTricksValue['notVulnarable']['double'][7]=1700;
underTricksValue['notVulnarable']['redouble'][0]=0;
underTricksValue['notVulnarable']['redouble'][1]=200;
underTricksValue['notVulnarable']['redouble'][2]=600;
underTricksValue['notVulnarable']['redouble'][3]=1000;
underTricksValue['notVulnarable']['redouble'][4]=1600;
underTricksValue['notVulnarable']['redouble'][5]=2200;
underTricksValue['notVulnarable']['redouble'][6]=2800;
underTricksValue['notVulnarable']['redouble'][7]=3400;
underTricksValue['vulnarable']['notdouble'][0]=0;
underTricksValue['vulnarable']['notdouble'][1]=100;
underTricksValue['vulnarable']['notdouble'][2]=200;
underTricksValue['vulnarable']['notdouble'][3]=300;
underTricksValue['vulnarable']['notdouble'][4]=400;
underTricksValue['vulnarable']['notdouble'][5]=500;
underTricksValue['vulnarable']['notdouble'][6]=600;
underTricksValue['vulnarable']['notdouble'][7]=700;
underTricksValue['vulnarable']['double'][0]=0;
underTricksValue['vulnarable']['double'][1]=200;
underTricksValue['vulnarable']['double'][2]=500;
underTricksValue['vulnarable']['double'][3]=800;
underTricksValue['vulnarable']['double'][4]=1100;
underTricksValue['vulnarable']['double'][5]=1400;
underTricksValue['vulnarable']['double'][6]=1700;
underTricksValue['vulnarable']['double'][7]=2000;
underTricksValue['vulnarable']['redouble'][0]=0;
underTricksValue['vulnarable']['redouble'][1]=400;
underTricksValue['vulnarable']['redouble'][2]=1000;
underTricksValue['vulnarable']['redouble'][3]=1600;
underTricksValue['vulnarable']['redouble'][4]=2200;
underTricksValue['vulnarable']['redouble'][5]=2800;
underTricksValue['vulnarable']['redouble'][6]=3400;
underTricksValue['vulnarable']['redouble'][7]=4000;


function overtricksValue(vulnarability, levelContract, colorContract, double, tricks){

  if ((tricks-6-levelContract) > 0) {
      switch(vulnarability){
        case 'notVulnarable':
        if ((colorContract=='clubs') || (colorContract=='diams')) {
          if (double == 'notdouble')  { return (tricks-6-levelContract)*20;};
          if (double == 'double')     { return (tricks-6-levelContract)*100;};
          if (double == 'redouble')   { return (tricks-6-levelContract)*200;};
        };
        if ((colorContract=='hearts') || (colorContract=='spades')) {
          if (double == 'notdouble')  { return (tricks-6-levelContract)*30;};
          if (double == 'double')     { return (tricks-6-levelContract)*100;};
          if (double == 'redouble')   { return (tricks-6-levelContract)*200;};
        };
        if (colorContract=='NT')                                  {
          if (double == 'notdouble')  { return (tricks-6-levelContract)*30;};
          if (double == 'double')     { return (tricks-6-levelContract)*100;};
          if (double == 'redouble')   { return (tricks-6-levelContract)*200;};
        };
        return 0;
        break;

        case 'vulnarable':
        if ((colorContract=='clubs') || (colorContract=='diams')) {
          if (double == 'notdouble')  { return (tricks-6-levelContract)*20;};
          if (double == 'double')     { return (tricks-6-levelContract)*100;};
          if (double == 'redouble')   { return (tricks-6-levelContract)*200;};
        };
        if ((colorContract=='hearts') || (colorContract=='spades')) {
          if (double == 'notdouble')  { return (tricks-6-levelContract)*30;};
          if (double == 'double')     { return (tricks-6-levelContract)*200;};
          if (double == 'redouble')   { return (tricks-6-levelContract)*400;};
        };
        if (colorContract=='NT')                                  {
          if (double == 'notdouble')  { return (tricks-6-levelContract)*30;};
          if (double == 'double')     { return (tricks-6-levelContract)*200;};
          if (double == 'redouble')   { return (tricks-6-levelContract)*400;};
        };
        return 0;
        break;

        default:
          return 0;
        break;
      }
    } else {
      return 0;
    };
  };

  function underTricksVal(vulnarability, double, undertricks){
    if (undertricks > 7) {
      if ((vulnarability=='notVulnarable') && (double=='notdouble'))  return (underTricksValue[vulnarability][double][7]+(undertricks-7)*50);
      if ((vulnarability=='notVulnarable') && (double=='double'))     return (underTricksValue[vulnarability][double][7]+(undertricks-7)*300);
      if ((vulnarability=='notVulnarable') && (double=='redouble'))   return (underTricksValue[vulnarability][double][7]+(undertricks-7)*600);
      if ((vulnarability=='vulnarable')   && (double=='notdouble'))  return (underTricksValue[vulnarability][double][7]+(undertricks-7)*100);
      if ((vulnarability=='vulnarable')   && (double=='double'))     return (underTricksValue[vulnarability][double][7]+(undertricks-7)*300);
      if ((vulnarability=='vulnarable')   && (double=='redouble'))   return (underTricksValue[vulnarability][double][7]+(undertricks-7)*600);
    }
    else return underTricksValue[vulnarability][double][undertricks];
  };


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


  function imp(_playerVulnarable, _oponentVulnarable, _levelContract, _colorContract, _points, _tricks, _double){

    var playerPointsToWin;
    var oponentPointsToWin;
    var wonPoints;
    var contractValue = '' + _levelContract + _colorContract;

    if (_points >= 20) {
                      playerPointsToWin = pointsToWinTable[_playerVulnarable][_points];
                      if ( _tricks >= (parseInt(_levelContract)+6) ) {
                        // wonPoints: contract + overtricks
                        wonPoints = contractPointsTable[_playerVulnarable][contractValue][_double]
                                    + overtricksValue(_playerVulnarable, _levelContract, _colorContract, _double, _tricks);
                        if ( wonPoints >= playerPointsToWin) {
                          return pointsIMP(wonPoints - playerPointsToWin);
                        } else {
                          return -pointsIMP(playerPointsToWin - wonPoints);
                        };
                      } else {
                        // undertricks
                        wonPoints = playerPointsToWin + underTricksVal(_playerVulnarable, _double, parseInt(_levelContract)+6-_tricks);
                        return -pointsIMP(wonPoints);
                      };
    } else {
                      if ( _tricks >= parseInt(_levelContract)+6 ) {
                        wonPoints = contractPointsTable[_playerVulnarable][contractValue][_double] + overtricksValue(_playerVulnarable, _levelContract, _colorContract, _double, _tricks);
                        wonPoints += pointsToWinTable[ _oponentVulnarable ][ 40-_points ];
                        return pointsIMP(wonPoints);
                      } else {
                        oponentPointsToWin = pointsToWinTable[ _oponentVulnarable ][ 40 - _points ];
                        wonPoints = oponentPointsToWin - underTricksVal(_playerVulnarable, _double, parseInt(_levelContract)+6-_tricks);
                        if (wonPoints > 0) return pointsIMP(wonPoints)
                        else return -pointsIMP(wonPoints);
                      };
    };

  };
