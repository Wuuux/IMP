// points to win.
var pointsToWin= [];
pointsToWin['notVulnarable'] = [];
pointsToWin['vulnarable'] = [];
pointsToWin['notVulnarable'][20] = 0;
pointsToWin['notVulnarable'][21] = 50;
pointsToWin['notVulnarable'][22] = 70;
pointsToWin['notVulnarable'][23] = 110;
pointsToWin['notVulnarable'][24] = 200;
pointsToWin['notVulnarable'][25] = 300;
pointsToWin['notVulnarable'][26] = 350;
pointsToWin['notVulnarable'][27] = 400;
pointsToWin['notVulnarable'][28] = 430;
pointsToWin['notVulnarable'][29] = 460;
pointsToWin['notVulnarable'][30] = 490;
pointsToWin['notVulnarable'][31] = 600;
pointsToWin['notVulnarable'][32] = 700;
pointsToWin['notVulnarable'][33] = 900;
pointsToWin['notVulnarable'][34] = 1000;
pointsToWin['notVulnarable'][35] = 1100;
pointsToWin['notVulnarable'][36] = 1200
pointsToWin['notVulnarable'][37] = 1400;
pointsToWin['notVulnarable'][38] = 1400;
pointsToWin['notVulnarable'][39] = 1400;
pointsToWin['notVulnarable'][40] = 1400;

pointsToWin['vulnarable'][20] = 0;
pointsToWin['vulnarable'][21] = 50;
pointsToWin['vulnarable'][22] = 70;
pointsToWin['vulnarable'][23] = 110;
pointsToWin['vulnarable'][24] = 290;
pointsToWin['vulnarable'][25] = 440;
pointsToWin['vulnarable'][26] = 520;
pointsToWin['vulnarable'][27] = 600;
pointsToWin['vulnarable'][28] = 630;
pointsToWin['vulnarable'][29] = 660;
pointsToWin['vulnarable'][30] = 690;
pointsToWin['vulnarable'][31] = 800;
pointsToWin['vulnarable'][32] = 1050;
pointsToWin['vulnarable'][33] = 1350;
pointsToWin['vulnarable'][34] = 1500;
pointsToWin['vulnarable'][35] = 1650;
pointsToWin['vulnarable'][36] = 1800
pointsToWin['vulnarable'][37] = 2100;
pointsToWin['vulnarable'][38] = 2100;
pointsToWin['vulnarable'][39] = 2100;
pointsToWin['vulnarable'][40] = 2100;

var contractPoints = [];

contractPoints['notVulnarable'] = [
  '1clubs','1diams','1hearts','1spades','1NT',
    '2clubs','2diams','2hearts','2spades','2NT',
      '3clubs','3diams','3hearts','3spades','3NT',
        '4clubs','4diams','4hearts','4spades','4NT',
          '5clubs','5diams','5hearts','5spades','5NT',
            '6clubs','6diams','6hearts','6spades','6NT',
              '7clubs','7diams','7hearts','7spades','7NT','pass'];

contractPoints['vulnarable'] = [
  '1clubs','1diams','1hearts','1spades','1NT',
    '2clubs','2diams','2hearts','2spades','2NT',
      '3clubs','3diams','3hearts','3spades','3NT',
        '4clubs','4diams','4hearts','4spades','4NT',
          '5clubs','5diams','5hearts','5spades','5NT',
            '6clubs','6diams','6hearts','6spades','6NT',
              '7clubs','7diams','7hearts','7spades','7NT','pass'];

contractPoints['notVulnarable']['1clubs']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['1clubs']['notdouble']=70;
contractPoints['notVulnarable']['1clubs']['double']=140;
contractPoints['notVulnarable']['1clubs']['redouble']=230;
contractPoints['notVulnarable']['1diams']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['1diams']['notdouble']=70;
contractPoints['notVulnarable']['1diams']['double']=140;
contractPoints['notVulnarable']['1diams']['redouble']=230;
contractPoints['notVulnarable']['1hearts']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['1hearts']['notdouble']=80;
contractPoints['notVulnarable']['1hearts']['double']=160;
contractPoints['notVulnarable']['1hearts']['redouble']=520;
contractPoints['notVulnarable']['1spades']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['1spades']['notdouble']=80;
contractPoints['notVulnarable']['1spades']['double']=160;
contractPoints['notVulnarable']['1spades']['redouble']=520;
contractPoints['notVulnarable']['1NT']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['1NT']['notdouble']=90;
contractPoints['notVulnarable']['1NT']['double']=180;
contractPoints['notVulnarable']['1NT']['redouble']=560;
contractPoints['notVulnarable']['2clubs']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['2clubs']['notdouble']=90;
contractPoints['notVulnarable']['2clubs']['double']=180;
contractPoints['notVulnarable']['2clubs']['redouble']=560;
contractPoints['notVulnarable']['2diams']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['2diams']['notdouble']=90;
contractPoints['notVulnarable']['2diams']['double']=180;
contractPoints['notVulnarable']['2diams']['redouble']=560;
contractPoints['notVulnarable']['2hearts']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['2hearts']['notdouble']=110;
contractPoints['notVulnarable']['2hearts']['double']=470;
contractPoints['notVulnarable']['2hearts']['redouble']=640;
contractPoints['notVulnarable']['2spades']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['2spades']['notdouble']=110;
contractPoints['notVulnarable']['2spades']['double']=470;
contractPoints['notVulnarable']['2spades']['redouble']=640;
contractPoints['notVulnarable']['2NT']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['2NT']['notdouble']=120;
contractPoints['notVulnarable']['2NT']['double']=490;
contractPoints['notVulnarable']['2NT']['redouble']=680;
contractPoints['notVulnarable']['3clubs']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['3clubs']['notdouble']=110;
contractPoints['notVulnarable']['3clubs']['double']=470;
contractPoints['notVulnarable']['3clubs']['redouble']=640;
contractPoints['notVulnarable']['3diams']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['3diams']['notdouble']=110;
contractPoints['notVulnarable']['3diams']['double']=470;
contractPoints['notVulnarable']['3diams']['redouble']=640;
contractPoints['notVulnarable']['3hearts']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['3hearts']['notdouble']=140;
contractPoints['notVulnarable']['3hearts']['double']=530;
contractPoints['notVulnarable']['3hearts']['redouble']=760;
contractPoints['notVulnarable']['3spades']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['3spades']['notdouble']=140;
contractPoints['notVulnarable']['3spades']['double']=530;
contractPoints['notVulnarable']['3spades']['redouble']=760;
contractPoints['notVulnarable']['3NT']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['3NT']['notdouble']=400;
contractPoints['notVulnarable']['3NT']['double']=550;
contractPoints['notVulnarable']['3NT']['redouble']=800;
contractPoints['notVulnarable']['4clubs']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['4clubs']['notdouble']=130;
contractPoints['notVulnarable']['4clubs']['double']=510;
contractPoints['notVulnarable']['4clubs']['redouble']=720;
contractPoints['notVulnarable']['4diams']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['4diams']['notdouble']=130;
contractPoints['notVulnarable']['4diams']['double']=510;
contractPoints['notVulnarable']['4diams']['redouble']=720;
contractPoints['notVulnarable']['4hearts']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['4hearts']['notdouble']=420;
contractPoints['notVulnarable']['4hearts']['double']=590;
contractPoints['notVulnarable']['4hearts']['redouble']=880;
contractPoints['notVulnarable']['4spades']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['4spades']['notdouble']=420;
contractPoints['notVulnarable']['4spades']['double']=590;
contractPoints['notVulnarable']['4spades']['redouble']=880;
contractPoints['notVulnarable']['4NT']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['4NT']['notdouble']=430;
contractPoints['notVulnarable']['4NT']['double']=610;
contractPoints['notVulnarable']['4NT']['redouble']=920;
contractPoints['notVulnarable']['5clubs']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['5clubs']['notdouble']=400;
contractPoints['notVulnarable']['5clubs']['double']=550;
contractPoints['notVulnarable']['5clubs']['redouble']=800;
contractPoints['notVulnarable']['5diams']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['5diams']['notdouble']=400;
contractPoints['notVulnarable']['5diams']['double']=550;
contractPoints['notVulnarable']['5diams']['redouble']=800;
contractPoints['notVulnarable']['5hearts']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['5hearts']['notdouble']=450;
contractPoints['notVulnarable']['5hearts']['double']=650;
contractPoints['notVulnarable']['5hearts']['redouble']=1000;
contractPoints['notVulnarable']['5spades']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['5spades']['notdouble']=450;
contractPoints['notVulnarable']['5spades']['double']=650;
contractPoints['notVulnarable']['5spades']['redouble']=1000;
contractPoints['notVulnarable']['5NT']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['5NT']['notdouble']=460;
contractPoints['notVulnarable']['5NT']['double']=670;
contractPoints['notVulnarable']['5NT']['redouble']=1040;
contractPoints['notVulnarable']['6clubs']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['6clubs']['notdouble']=920;
contractPoints['notVulnarable']['6clubs']['double']=1090;
contractPoints['notVulnarable']['6clubs']['redouble']=1380;
contractPoints['notVulnarable']['6diams']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['6diams']['notdouble']=920;
contractPoints['notVulnarable']['6diams']['double']=1090;
contractPoints['notVulnarable']['6diams']['redouble']=1380;
contractPoints['notVulnarable']['6hearts']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['6hearts']['notdouble']=980;
contractPoints['notVulnarable']['6hearts']['double']=1210;
contractPoints['notVulnarable']['6hearts']['redouble']=1620;
contractPoints['notVulnarable']['6spades']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['6spades']['notdouble']=980;
contractPoints['notVulnarable']['6spades']['double']=1210;
contractPoints['notVulnarable']['6spades']['redouble']=1620;
contractPoints['notVulnarable']['6NT']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['6NT']['notdouble']=990;
contractPoints['notVulnarable']['6NT']['double']=1230;
contractPoints['notVulnarable']['6NT']['redouble']=1660;
contractPoints['notVulnarable']['7clubs']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['7clubs']['notdouble']=1440;
contractPoints['notVulnarable']['7clubs']['double']=1630;
contractPoints['notVulnarable']['7clubs']['redouble']=1960;
contractPoints['notVulnarable']['7diams']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['7diams']['notdouble']=1440;
contractPoints['notVulnarable']['7diams']['double']=1630;
contractPoints['notVulnarable']['7diams']['redouble']=1960;
contractPoints['notVulnarable']['7hearts']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['7hearts']['notdouble']=1510;
contractPoints['notVulnarable']['7hearts']['double']=1770;
contractPoints['notVulnarable']['7hearts']['redouble']=2240;
contractPoints['notVulnarable']['7spades']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['7spades']['notdouble']=1510;
contractPoints['notVulnarable']['7spades']['double']=1770;
contractPoints['notVulnarable']['7spades']['redouble']=2240;
contractPoints['notVulnarable']['7NT']=['notdouble','double','redouble'];
contractPoints['notVulnarable']['7NT']['notdouble']=1520;
contractPoints['notVulnarable']['7NT']['double']=1790;
contractPoints['notVulnarable']['7NT']['redouble']=2280;
contractPoints['notVulnarable']['pass']=['notdouble','double','redouble'];
contractPoints['vulnarable']['pass']=['notdouble','double','redouble'];

contractPoints['vulnarable']['1clubs']=['notdouble','double','redouble'];
contractPoints['vulnarable']['1clubs']['notdouble']=70;
contractPoints['vulnarable']['1clubs']['double']=140;
contractPoints['vulnarable']['1clubs']['redouble']=230;
contractPoints['vulnarable']['1diams']=['notdouble','double','redouble'];
contractPoints['vulnarable']['1diams']['notdouble']=70;
contractPoints['vulnarable']['1diams']['double']=140;
contractPoints['vulnarable']['1diams']['redouble']=230;
contractPoints['vulnarable']['1hearts']=['notdouble','double','redouble'];
contractPoints['vulnarable']['1hearts']['notdouble']=80;
contractPoints['vulnarable']['1hearts']['double']=160;
contractPoints['vulnarable']['1hearts']['redouble']=720;
contractPoints['vulnarable']['1spades']=['notdouble','double','redouble'];
contractPoints['vulnarable']['1spades']['notdouble']=80;
contractPoints['vulnarable']['1spades']['double']=160;
contractPoints['vulnarable']['1spades']['redouble']=720;
contractPoints['vulnarable']['1NT']=['notdouble','double','redouble'];
contractPoints['vulnarable']['1NT']['notdouble']=90;
contractPoints['vulnarable']['1NT']['double']=180;
contractPoints['vulnarable']['1NT']['redouble']=760;
contractPoints['vulnarable']['2clubs']=['notdouble','double','redouble'];
contractPoints['vulnarable']['2clubs']['notdouble']=90;
contractPoints['vulnarable']['2clubs']['double']=180;
contractPoints['vulnarable']['2clubs']['redouble']=760;
contractPoints['vulnarable']['2diams']=['notdouble','double','redouble'];
contractPoints['vulnarable']['2diams']['notdouble']=90;
contractPoints['vulnarable']['2diams']['double']=180;
contractPoints['vulnarable']['2diams']['redouble']=760;
contractPoints['vulnarable']['2hearts']=['notdouble','double','redouble'];
contractPoints['vulnarable']['2hearts']['notdouble']=110;
contractPoints['vulnarable']['2hearts']['double']=670;
contractPoints['vulnarable']['2hearts']['redouble']=840;
contractPoints['vulnarable']['2spades']=['notdouble','double','redouble'];
contractPoints['vulnarable']['2spades']['notdouble']=110;
contractPoints['vulnarable']['2spades']['double']=670;
contractPoints['vulnarable']['2spades']['redouble']=840;
contractPoints['vulnarable']['2NT']=['notdouble','double','redouble'];
contractPoints['vulnarable']['2NT']['notdouble']=120;
contractPoints['vulnarable']['2NT']['double']=690;
contractPoints['vulnarable']['2NT']['redouble']=880;
contractPoints['vulnarable']['3clubs']=['notdouble','double','redouble'];
contractPoints['vulnarable']['3clubs']['notdouble']=110;
contractPoints['vulnarable']['3clubs']['double']=670;
contractPoints['vulnarable']['3clubs']['redouble']=840;
contractPoints['vulnarable']['3diams']=['notdouble','double','redouble'];
contractPoints['vulnarable']['3diams']['notdouble']=110;
contractPoints['vulnarable']['3diams']['double']=670;
contractPoints['vulnarable']['3diams']['redouble']=840;
contractPoints['vulnarable']['3hearts']=['notdouble','double','redouble'];
contractPoints['vulnarable']['3hearts']['notdouble']=140;
contractPoints['vulnarable']['3hearts']['double']=730;
contractPoints['vulnarable']['3hearts']['redouble']=960;
contractPoints['vulnarable']['3spades']=['notdouble','double','redouble'];
contractPoints['vulnarable']['3spades']['notdouble']=140;
contractPoints['vulnarable']['3spades']['double']=730;
contractPoints['vulnarable']['3spades']['redouble']=960;
contractPoints['vulnarable']['3NT']=['notdouble','double','redouble'];
contractPoints['vulnarable']['3NT']['notdouble']=600;
contractPoints['vulnarable']['3NT']['double']=750;
contractPoints['vulnarable']['3NT']['redouble']=1000;
contractPoints['vulnarable']['4clubs']=['notdouble','double','redouble'];
contractPoints['vulnarable']['4clubs']['notdouble']=130;
contractPoints['vulnarable']['4clubs']['double']=710;
contractPoints['vulnarable']['4clubs']['redouble']=920;
contractPoints['vulnarable']['4diams']=['notdouble','double','redouble'];
contractPoints['vulnarable']['4diams']['notdouble']=130;
contractPoints['vulnarable']['4diams']['double']=710;
contractPoints['vulnarable']['4diams']['redouble']=920;
contractPoints['vulnarable']['4hearts']=['notdouble','double','redouble'];
contractPoints['vulnarable']['4hearts']['notdouble']=620;
contractPoints['vulnarable']['4hearts']['double']=790;
contractPoints['vulnarable']['4hearts']['redouble']=1080;
contractPoints['vulnarable']['4spades']=['notdouble','double','redouble'];
contractPoints['vulnarable']['4spades']['notdouble']=620;
contractPoints['vulnarable']['4spades']['double']=790;
contractPoints['vulnarable']['4spades']['redouble']=1080;
contractPoints['vulnarable']['4NT']=['notdouble','double','redouble'];
contractPoints['vulnarable']['4NT']['notdouble']=630;
contractPoints['vulnarable']['4NT']['double']=810;
contractPoints['vulnarable']['4NT']['redouble']=1120;
contractPoints['vulnarable']['5clubs']=['notdouble','double','redouble'];
contractPoints['vulnarable']['5clubs']['notdouble']=600;
contractPoints['vulnarable']['5clubs']['double']=750;
contractPoints['vulnarable']['5clubs']['redouble']=1000;
contractPoints['vulnarable']['5diams']=['notdouble','double','redouble'];
contractPoints['vulnarable']['5diams']['notdouble']=600;
contractPoints['vulnarable']['5diams']['double']=750;
contractPoints['vulnarable']['5diams']['redouble']=1000;
contractPoints['vulnarable']['5hearts']=['notdouble','double','redouble'];
contractPoints['vulnarable']['5hearts']['notdouble']=650;
contractPoints['vulnarable']['5hearts']['double']=850;
contractPoints['vulnarable']['5hearts']['redouble']=1200;
contractPoints['vulnarable']['5spades']=['notdouble','double','redouble'];
contractPoints['vulnarable']['5spades']['notdouble']=650;
contractPoints['vulnarable']['5spades']['double']=850;
contractPoints['vulnarable']['5spades']['redouble']=1200;
contractPoints['vulnarable']['5NT']=['notdouble','double','redouble'];
contractPoints['vulnarable']['5NT']['notdouble']=660;
contractPoints['vulnarable']['5NT']['double']=870;
contractPoints['vulnarable']['5NT']['redouble']=1240;
contractPoints['vulnarable']['6clubs']=['notdouble','double','redouble'];
contractPoints['vulnarable']['6clubs']['notdouble']=1370;
contractPoints['vulnarable']['6clubs']['double']=1510;
contractPoints['vulnarable']['6clubs']['redouble']=1830;
contractPoints['vulnarable']['6diams']=['notdouble','double','redouble'];
contractPoints['vulnarable']['6diams']['notdouble']=1370;
contractPoints['vulnarable']['6diams']['double']=1510;
contractPoints['vulnarable']['6diams']['redouble']=1830;
contractPoints['vulnarable']['6hearts']=['notdouble','double','redouble'];
contractPoints['vulnarable']['6hearts']['notdouble']=1430;
contractPoints['vulnarable']['6hearts']['double']=1660;
contractPoints['vulnarable']['6hearts']['redouble']=2070;
contractPoints['vulnarable']['6spades']=['notdouble','double','redouble'];
contractPoints['vulnarable']['6spades']['notdouble']=1430;
contractPoints['vulnarable']['6spades']['double']=1660;
contractPoints['vulnarable']['6spades']['redouble']=2070;
contractPoints['vulnarable']['6NT']=['notdouble','double','redouble'];
contractPoints['vulnarable']['6NT']['notdouble']=1440;
contractPoints['vulnarable']['6NT']['double']=1680;
contractPoints['vulnarable']['6NT']['redouble']=2110;
contractPoints['vulnarable']['7clubs']=['notdouble','double','redouble'];
contractPoints['vulnarable']['7clubs']['notdouble']=2140;
contractPoints['vulnarable']['7clubs']['double']=2330;
contractPoints['vulnarable']['7clubs']['redouble']=2660;
contractPoints['vulnarable']['7diams']=['notdouble','double','redouble'];
contractPoints['vulnarable']['7diams']['notdouble']=2140;
contractPoints['vulnarable']['7diams']['double']=2330;
contractPoints['vulnarable']['7diams']['redouble']=2660;
contractPoints['vulnarable']['7hearts']=['notdouble','double','redouble'];
contractPoints['vulnarable']['7hearts']['notdouble']=2210;
contractPoints['vulnarable']['7hearts']['double']=2470;
contractPoints['vulnarable']['7hearts']['redouble']=2790;
contractPoints['vulnarable']['7spades']=['notdouble','double','redouble'];
contractPoints['vulnarable']['7spades']['notdouble']=2210;
contractPoints['vulnarable']['7spades']['double']=2470;
contractPoints['vulnarable']['7spades']['redouble']=2790;
contractPoints['vulnarable']['7NT']=['notdouble','double','redouble'];
contractPoints['vulnarable']['7NT']['notdouble']=2200;
contractPoints['vulnarable']['7NT']['double']=2490;
contractPoints['vulnarable']['7NT']['redouble']=2980;
contractPoints['notVulnarable']['pass']['notdouble']=0;
contractPoints['notVulnarable']['pass']['double']=0;
contractPoints['notVulnarable']['pass']['redouble']=0;
contractPoints['vulnarable']['pass']['notdouble']=0;
contractPoints['vulnarable']['pass']['double']=0;
contractPoints['vulnarable']['pass']['redouble']=0;


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



function imp(_playerVulnarable, _oponentVulnarable, _levelContract, _colorContract, _points, _tricks, _double){
  var playerPointsToWin;
  var oponentPointsToWin;
  var wonPoints;
  var contractValue = '' + _levelContract + _colorContract;
  console.log(_playerVulnarable, _oponentVulnarable, _levelContract, _colorContract, _points, _tricks, _double);


  if (_points >= 20) {
                    playerPointsToWin = pointsToWin[ _playerVulnarable ][ _points ];

                    if ( _tricks >= _levelContract+6 ) {
                      // wonPoints: contract + overtricks

                      wonPoints = contractPoints[_playerVulnarable][contractValue][_double] + overtricksValue(_playerVulnarable, _levelContract, _colorContract, _double, _tricks);
                      if ( wonPoints >= pointsToWin) {
                        return pointsIMP(wonPoints - pointsToWin);
                      } else {
                        return -pointsIMP(pointsToWin - wonPoints);
                      };
                    } else {
                      // undertricks
                      wonPoints = pointsToWin + underTricksVal(_playerVulnarable, _double, _levelContract+6-_tricks);
                      return -pointsIMP(wonPoints);
                    };
  } else {
                    if ( _tricks >= _levelContract+6 ) {
                      wonPoints = contractPoints[_playerVulnarable][contractValue][_double] + overtricksValue(_playerVulnarable, _levelContract, _colorContract, _double, _tricks);
                      wonPoints += pointsToWin[ _oponentVulnarable ][ 40-_points ];
                      return pointsIMP(wonPoints);
                    } else {
                      oponentPointsToWin = pointsToWin[ _oponentVulnarable ][ 40 - _points ];
                      wonPoints = oponentPointsToWin - underTricksVal(_playerVulnarable, _double, _levelContract+6-_tricks);
                      if (wonPoints > 0) return pointsIMP(wonPoints)
                      else return -pointsIMP(wonPoints);
                    };
  }

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
}



function overtricksValue(vulnarability, levelContract, colorContract, double, tricks){

  if ((tricks-6-contractValue[0]) > 0) {
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
