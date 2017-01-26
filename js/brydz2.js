var sumaImpWE = 0;
var sumaImpNS = 0;
var tabelaImpWE = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var tabelaImpNS = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var nrKontraktu_ID = document.getElementById('nrKontraktu');
var wynik = document.getElementById('wynik');
var pIMP = document.getElementById('punktyIMP');
var WE_ID = document.getElementById('WE');
var NS_ID = document.getElementById('NS');
var impWE_ID = document.getElementById('impWE');
var impNS_ID = document.getElementById('impNS');
var partiaWE_ID = document.getElementById('partiaWE');
var partiaNS_ID = document.getElementById('partiaNS');
var kontrakt_ID = [];
kontrakt_ID['Pass'] = document.getElementById('Pass');

for(var i=1;i<=7;i++){
  kontrakt_ID['C'+i]  = document.getElementById('C'+i);
  kontrakt_ID['D'+i]  = document.getElementById('D'+i);
  kontrakt_ID['H'+i]  = document.getElementById('H'+i);
  kontrakt_ID['S'+i]  = document.getElementById('S'+i);
  kontrakt_ID['BA'+i] = document.getElementById('BA'+i);
};

var kontra_ID    = document.getElementById('kontra');
var rekontra_ID  = document.getElementById('rekontra');

var punkty_ID = [];
for(var i=1;i<=40;i++){
  punkty_ID['p'+i] = document.getElementById('p'+i);
};

var lewy_ID = [];
for(var i=0;i<=13;i++){
  lewy_ID['l'+i] = document.getElementById('l'+i);
};

var kto = "WE";
var partiaNSflag = false;
var partiaWEflag = false;
var kontraflag = false;
var rekontraflag = false;
var kontra = 'o';
var punktyR = 20;
var lewy = 7;
var kontraktWysokosc = 0;
var kontraktKolor = 'P';
var tekst = "";
var partiaWE = 'przed';
var partiaNS = 'przed';
var wpa = 0;
var nad = 0;
var suma = 0;
var nrKon = 0;

kontrakt_ID['Pass'].style.backgroundColor = "red";
punkty_ID['p20'].style.backgroundColor = "red";
lewy_ID['l7'].style.backgroundColor = "red";

function ustaw(uKon,uKto,uWE,uNS,uWys,uKontra,uPunkty,uLewy){
    nrKon = uKon;
    nrKontraktu_ID.innerHTML = "" + uKon;
    if (uKto == 'WE') {myClick('WE')} else {myClick('NS')};

    if (uWE == 'przed') {partiaWEflag = false; partiaWE='przed';partiaWE_ID.style.background="green";partiaWE_ID.innerHTML = "PRZED"};
    if (uWE == 'po') {partiaWEflag = true; partiaWE='po';partiaWE_ID.style.background="red";partiaWE_ID.innerHTML = "PO"};
    if (uNS == 'przed') {partiaNSflag = false; partiaNS='przed';partiaNS_ID.style.background="green";partiaNS_ID.innerHTML = "PRZED"};
    if (uNS == 'po') {partiaNSflag = true; partiaNS='po';partiaNS_ID.style.background="red";partiaNS_ID.innerHTML = "PO"};
    myClick(uWys);
    if (uKontra == 'o') {kontra_ID.style.color = "grey";rekontra_ID.style.color = "grey"; kontra = 'o';kontraflag = false;rekontraflag = false;};
    if (uKontra == 'x') {kontra_ID.style.color = "red";rekontra_ID.style.color = "grey"; kontra = 'x';kontraflag = true;rekontraflag = false;};
    if (uKontra == 'xx') {kontra_ID.style.color = "red";rekontra_ID.style.color = "red"; kontra = 'xx';kontraflag = true;rekontraflag = true;};
    myClick(uPunkty);
    myClick(uLewy);
};

function myClear(nr){
  if (nr>0){
    ustaw(nr,'WE','przed','przed','P0','o','p20','l7');
    myClick('zapisz');
  } else {
    for(var i=1;i<=24;i++){
      if (i%4 == 1) {ustaw(i,'WE','przed','przed','P0','o','p20','l7')};
      if (i%4 == 2) {ustaw(i,'WE','przed','po','P0','o','p20','l7')};
      if (i%4 == 3) {ustaw(i,'WE','po','przed','P0','o','p20','l7')};
      if (i%4 == 0) {ustaw(i,'WE','po','po','P0','o','p20','l7')};
      myClick('zapisz');
    }
    ustaw(0,'WE','przed','przed','P0','o','p20','l7');
    myClick('zapisz');
  }
  for(var i=0;i<=24;i++){
    tabelaImpWE[i] = 0;
    tabelaImpNS[i] = 0;
  }

};

// punkty do zdobycia przy zawartości ręki 20-40 pkt.
var punkty = [];
punkty['przed'] = [];
punkty['po'] = [];
punkty['przed'][20] = 0;
punkty['przed'][21] = 50;
punkty['przed'][22] = 70;
punkty['przed'][23] = 110;
punkty['przed'][24] = 200;
punkty['przed'][25] = 300;
punkty['przed'][26] = 350;
punkty['przed'][27] = 400;
punkty['przed'][28] = 430;
punkty['przed'][29] = 460;
punkty['przed'][30] = 490;
punkty['przed'][31] = 600;
punkty['przed'][32] = 700;
punkty['przed'][33] = 900;
punkty['przed'][34] = 1000;
punkty['przed'][35] = 1100;
punkty['przed'][36] = 1200
punkty['przed'][37] = 1400;
punkty['przed'][38] = 1400;
punkty['przed'][39] = 1400;
punkty['przed'][40] = 1400;

punkty['po'][20] = 0;
punkty['po'][21] = 50;
punkty['po'][22] = 70;
punkty['po'][23] = 110;
punkty['po'][24] = 290;
punkty['po'][25] = 440;
punkty['po'][26] = 520;
punkty['po'][27] = 600;
punkty['po'][28] = 630;
punkty['po'][29] = 660;
punkty['po'][30] = 690;
punkty['po'][31] = 800;
punkty['po'][32] = 1050;
punkty['po'][33] = 1350;
punkty['po'][34] = 1500;
punkty['po'][35] = 1650;
punkty['po'][36] = 1800
punkty['po'][37] = 2100;
punkty['po'][38] = 2100;
punkty['po'][39] = 2100;
punkty['po'][40] = 2100;

var wpadki = [];
wpadki['przed']=['o','x','xx'];
wpadki['po']=['o','x','xx'];
wpadki['przed']['o']=[0,1,2,3,4,5,6,7];
wpadki['przed']['x']=[0,1,2,3,4,5,6,7];
wpadki['przed']['xx']=[0,1,2,3,4,5,6,7];
wpadki['po']['o']=[0,1,2,3,4,5,6,7];
wpadki['po']['x']=[0,1,2,3,4,5,6,7];
wpadki['po']['xx']=[0,1,2,3,4,5,6,7];
wpadki['przed']['o'][0]=0;
wpadki['przed']['o'][1]=50;
wpadki['przed']['o'][2]=100;
wpadki['przed']['o'][3]=150;
wpadki['przed']['o'][4]=200;
wpadki['przed']['o'][5]=250;
wpadki['przed']['o'][6]=300;
wpadki['przed']['o'][7]=350;
wpadki['przed']['x'][0]=0;
wpadki['przed']['x'][1]=100;
wpadki['przed']['x'][2]=300;
wpadki['przed']['x'][3]=500;
wpadki['przed']['x'][4]=800;
wpadki['przed']['x'][5]=1100;
wpadki['przed']['x'][6]=1400;
wpadki['przed']['x'][7]=1700;
wpadki['przed']['xx'][0]=0;
wpadki['przed']['xx'][1]=200;
wpadki['przed']['xx'][2]=600;
wpadki['przed']['xx'][3]=1000;
wpadki['przed']['xx'][4]=1600;
wpadki['przed']['xx'][5]=2200;
wpadki['przed']['xx'][6]=2800;
wpadki['przed']['xx'][7]=3400;
wpadki['po']['o'][0]=0;
wpadki['po']['o'][1]=100;
wpadki['po']['o'][2]=200;
wpadki['po']['o'][3]=300;
wpadki['po']['o'][4]=400;
wpadki['po']['o'][5]=500;
wpadki['po']['o'][6]=600;
wpadki['po']['o'][7]=700;
wpadki['po']['x'][0]=0;
wpadki['po']['x'][1]=200;
wpadki['po']['x'][2]=500;
wpadki['po']['x'][3]=800;
wpadki['po']['x'][4]=1100;
wpadki['po']['x'][5]=1400;
wpadki['po']['x'][6]=1700;
wpadki['po']['x'][7]=2000;
wpadki['po']['xx'][0]=0;
wpadki['po']['xx'][1]=400;
wpadki['po']['xx'][2]=1000;
wpadki['po']['xx'][3]=1600;
wpadki['po']['xx'][4]=2200;
wpadki['po']['xx'][5]=2800;
wpadki['po']['xx'][6]=3400;
wpadki['po']['xx'][7]=4000;

var kontrakt = [];
kontrakt['przed'] = [
  '1C','1D','1H','1S','1BA',
    '2C','2D','2H','2S','2BA',
      '3C','3D','3H','3S','3BA',
        '4C','4D','4H','4S','4BA',
          '5C','5D','5H','5S','5BA',
            '6C','6D','6H','6S','6BA',
              '7C','7D','7H','7S','7BA'];
kontrakt['po'] = [
  '1C','1D','1H','1S','1BA',
    '2C','2D','2H','2S','2BA',
      '3C','3D','3H','3S','3BA',
        '4C','4D','4H','4S','4BA',
          '5C','5D','5H','5S','5BA',
            '6C','6D','6H','6S','6BA',
              '7C','7D','7H','7S','7BA'];

kontrakt['przed']['1C']=['o','x','xx'];
kontrakt['przed']['1C']['o']=70;
kontrakt['przed']['1C']['x']=140;
kontrakt['przed']['1C']['xx']=230;
kontrakt['przed']['1D']=['o','x','xx'];
kontrakt['przed']['1D']['o']=70;
kontrakt['przed']['1D']['x']=140;
kontrakt['przed']['1D']['xx']=230;
kontrakt['przed']['1H']=['o','x','xx'];
kontrakt['przed']['1H']['o']=80;
kontrakt['przed']['1H']['x']=160;
kontrakt['przed']['1H']['xx']=520;
kontrakt['przed']['1S']=['o','x','xx'];
kontrakt['przed']['1S']['o']=80;
kontrakt['przed']['1S']['x']=160;
kontrakt['przed']['1S']['xx']=520;
kontrakt['przed']['1BA']=['o','x','xx'];
kontrakt['przed']['1BA']['o']=90;
kontrakt['przed']['1BA']['x']=180;
kontrakt['przed']['1BA']['xx']=560;
kontrakt['przed']['2C']=['o','x','xx'];
kontrakt['przed']['2C']['o']=90;
kontrakt['przed']['2C']['x']=180;
kontrakt['przed']['2C']['xx']=560;
kontrakt['przed']['2D']=['o','x','xx'];
kontrakt['przed']['2D']['o']=90;
kontrakt['przed']['2D']['x']=180;
kontrakt['przed']['2D']['xx']=560;
kontrakt['przed']['2H']=['o','x','xx'];
kontrakt['przed']['2H']['o']=110;
kontrakt['przed']['2H']['x']=470;
kontrakt['przed']['2H']['xx']=640;
kontrakt['przed']['2S']=['o','x','xx'];
kontrakt['przed']['2S']['o']=110;
kontrakt['przed']['2S']['x']=470;
kontrakt['przed']['2S']['xx']=640;
kontrakt['przed']['2BA']=['o','x','xx'];
kontrakt['przed']['2BA']['o']=120;
kontrakt['przed']['2BA']['x']=490;
kontrakt['przed']['2BA']['xx']=680;
kontrakt['przed']['3C']=['o','x','xx'];
kontrakt['przed']['3C']['o']=110;
kontrakt['przed']['3C']['x']=470;
kontrakt['przed']['3C']['xx']=640;
kontrakt['przed']['3D']=['o','x','xx'];
kontrakt['przed']['3D']['o']=110;
kontrakt['przed']['3D']['x']=470;
kontrakt['przed']['3D']['xx']=640;
kontrakt['przed']['3H']=['o','x','xx'];
kontrakt['przed']['3H']['o']=140;
kontrakt['przed']['3H']['x']=530;
kontrakt['przed']['3H']['xx']=760;
kontrakt['przed']['3S']=['o','x','xx'];
kontrakt['przed']['3S']['o']=140;
kontrakt['przed']['3S']['x']=530;
kontrakt['przed']['3S']['xx']=760;
kontrakt['przed']['3BA']=['o','x','xx'];
kontrakt['przed']['3BA']['o']=400;
kontrakt['przed']['3BA']['x']=550;
kontrakt['przed']['3BA']['xx']=800;
kontrakt['przed']['4C']=['o','x','xx'];
kontrakt['przed']['4C']['o']=130;
kontrakt['przed']['4C']['x']=510;
kontrakt['przed']['4C']['xx']=720;
kontrakt['przed']['4D']=['o','x','xx'];
kontrakt['przed']['4D']['o']=130;
kontrakt['przed']['4D']['x']=510;
kontrakt['przed']['4D']['xx']=720;
kontrakt['przed']['4H']=['o','x','xx'];
kontrakt['przed']['4H']['o']=420;
kontrakt['przed']['4H']['x']=590;
kontrakt['przed']['4H']['xx']=880;
kontrakt['przed']['4S']=['o','x','xx'];
kontrakt['przed']['4S']['o']=420;
kontrakt['przed']['4S']['x']=590;
kontrakt['przed']['4S']['xx']=880;
kontrakt['przed']['4BA']=['o','x','xx'];
kontrakt['przed']['4BA']['o']=430;
kontrakt['przed']['4BA']['x']=610;
kontrakt['przed']['4BA']['xx']=920;
kontrakt['przed']['5C']=['o','x','xx'];
kontrakt['przed']['5C']['o']=400;
kontrakt['przed']['5C']['x']=550;
kontrakt['przed']['5C']['xx']=800;
kontrakt['przed']['5D']=['o','x','xx'];
kontrakt['przed']['5D']['o']=400;
kontrakt['przed']['5D']['x']=550;
kontrakt['przed']['5D']['xx']=800;
kontrakt['przed']['5H']=['o','x','xx'];
kontrakt['przed']['5H']['o']=450;
kontrakt['przed']['5H']['x']=650;
kontrakt['przed']['5H']['xx']=1000;
kontrakt['przed']['5S']=['o','x','xx'];
kontrakt['przed']['5S']['o']=450;
kontrakt['przed']['5S']['x']=650;
kontrakt['przed']['5S']['xx']=1000;
kontrakt['przed']['5BA']=['o','x','xx'];
kontrakt['przed']['5BA']['o']=460;
kontrakt['przed']['5BA']['x']=670;
kontrakt['przed']['5BA']['xx']=1040;
kontrakt['przed']['6C']=['o','x','xx'];
kontrakt['przed']['6C']['o']=920;
kontrakt['przed']['6C']['x']=1090;
kontrakt['przed']['6C']['xx']=1380;
kontrakt['przed']['6D']=['o','x','xx'];
kontrakt['przed']['6D']['o']=920;
kontrakt['przed']['6D']['x']=1090;
kontrakt['przed']['6D']['xx']=1380;
kontrakt['przed']['6H']=['o','x','xx'];
kontrakt['przed']['6H']['o']=980;
kontrakt['przed']['6H']['x']=1210;
kontrakt['przed']['6H']['xx']=1620;
kontrakt['przed']['6S']=['o','x','xx'];
kontrakt['przed']['6S']['o']=980;
kontrakt['przed']['6S']['x']=1210;
kontrakt['przed']['6S']['xx']=1620;
kontrakt['przed']['6BA']=['o','x','xx'];
kontrakt['przed']['6BA']['o']=990;
kontrakt['przed']['6BA']['x']=1230;
kontrakt['przed']['6BA']['xx']=1660;
kontrakt['przed']['7C']=['o','x','xx'];
kontrakt['przed']['7C']['o']=1440;
kontrakt['przed']['7C']['x']=1630;
kontrakt['przed']['7C']['xx']=1960;
kontrakt['przed']['7D']=['o','x','xx'];
kontrakt['przed']['7D']['o']=1440;
kontrakt['przed']['7D']['x']=1630;
kontrakt['przed']['7D']['xx']=1960;
kontrakt['przed']['7H']=['o','x','xx'];
kontrakt['przed']['7H']['o']=1510;
kontrakt['przed']['7H']['x']=1770;
kontrakt['przed']['7H']['xx']=2240;
kontrakt['przed']['7S']=['o','x','xx'];
kontrakt['przed']['7S']['o']=1510;
kontrakt['przed']['7S']['x']=1770;
kontrakt['przed']['7S']['xx']=2240;
kontrakt['przed']['7BA']=['o','x','xx'];
kontrakt['przed']['7BA']['o']=1520;
kontrakt['przed']['7BA']['x']=1790;
kontrakt['przed']['7BA']['xx']=2280;
kontrakt['przed']['0P']=['o','x','xx'];
kontrakt['po']['0P']=['o','x','xx'];

kontrakt['po']['1C']=['o','x','xx'];
kontrakt['po']['1C']['o']=70;
kontrakt['po']['1C']['x']=140;
kontrakt['po']['1C']['xx']=230;
kontrakt['po']['1D']=['o','x','xx'];
kontrakt['po']['1D']['o']=70;
kontrakt['po']['1D']['x']=140;
kontrakt['po']['1D']['xx']=230;
kontrakt['po']['1H']=['o','x','xx'];
kontrakt['po']['1H']['o']=80;
kontrakt['po']['1H']['x']=160;
kontrakt['po']['1H']['xx']=720;
kontrakt['po']['1S']=['o','x','xx'];
kontrakt['po']['1S']['o']=80;
kontrakt['po']['1S']['x']=160;
kontrakt['po']['1S']['xx']=720;
kontrakt['po']['1BA']=['o','x','xx'];
kontrakt['po']['1BA']['o']=90;
kontrakt['po']['1BA']['x']=180;
kontrakt['po']['1BA']['xx']=760;
kontrakt['po']['2C']=['o','x','xx'];
kontrakt['po']['2C']['o']=90;
kontrakt['po']['2C']['x']=180;
kontrakt['po']['2C']['xx']=760;
kontrakt['po']['2D']=['o','x','xx'];
kontrakt['po']['2D']['o']=90;
kontrakt['po']['2D']['x']=180;
kontrakt['po']['2D']['xx']=760;
kontrakt['po']['2H']=['o','x','xx'];
kontrakt['po']['2H']['o']=110;
kontrakt['po']['2H']['x']=670;
kontrakt['po']['2H']['xx']=840;
kontrakt['po']['2S']=['o','x','xx'];
kontrakt['po']['2S']['o']=110;
kontrakt['po']['2S']['x']=670;
kontrakt['po']['2S']['xx']=840;
kontrakt['po']['2BA']=['o','x','xx'];
kontrakt['po']['2BA']['o']=120;
kontrakt['po']['2BA']['x']=690;
kontrakt['po']['2BA']['xx']=880;
kontrakt['po']['3C']=['o','x','xx'];
kontrakt['po']['3C']['o']=110;
kontrakt['po']['3C']['x']=670;
kontrakt['po']['3C']['xx']=840;
kontrakt['po']['3D']=['o','x','xx'];
kontrakt['po']['3D']['o']=110;
kontrakt['po']['3D']['x']=670;
kontrakt['po']['3D']['xx']=840;
kontrakt['po']['3H']=['o','x','xx'];
kontrakt['po']['3H']['o']=140;
kontrakt['po']['3H']['x']=730;
kontrakt['po']['3H']['xx']=960;
kontrakt['po']['3S']=['o','x','xx'];
kontrakt['po']['3S']['o']=140;
kontrakt['po']['3S']['x']=730;
kontrakt['po']['3S']['xx']=960;
kontrakt['po']['3BA']=['o','x','xx'];
kontrakt['po']['3BA']['o']=600;
kontrakt['po']['3BA']['x']=750;
kontrakt['po']['3BA']['xx']=1000;
kontrakt['po']['4C']=['o','x','xx'];
kontrakt['po']['4C']['o']=130;
kontrakt['po']['4C']['x']=710;
kontrakt['po']['4C']['xx']=920;
kontrakt['po']['4D']=['o','x','xx'];
kontrakt['po']['4D']['o']=130;
kontrakt['po']['4D']['x']=710;
kontrakt['po']['4D']['xx']=920;
kontrakt['po']['4H']=['o','x','xx'];
kontrakt['po']['4H']['o']=620;
kontrakt['po']['4H']['x']=790;
kontrakt['po']['4H']['xx']=1080;
kontrakt['po']['4S']=['o','x','xx'];
kontrakt['po']['4S']['o']=620;
kontrakt['po']['4S']['x']=790;
kontrakt['po']['4S']['xx']=1080;
kontrakt['po']['4BA']=['o','x','xx'];
kontrakt['po']['4BA']['o']=630;
kontrakt['po']['4BA']['x']=810;
kontrakt['po']['4BA']['xx']=1120;
kontrakt['po']['5C']=['o','x','xx'];
kontrakt['po']['5C']['o']=600;
kontrakt['po']['5C']['x']=750;
kontrakt['po']['5C']['xx']=1000;
kontrakt['po']['5D']=['o','x','xx'];
kontrakt['po']['5D']['o']=600;
kontrakt['po']['5D']['x']=750;
kontrakt['po']['5D']['xx']=1000;
kontrakt['po']['5H']=['o','x','xx'];
kontrakt['po']['5H']['o']=650;
kontrakt['po']['5H']['x']=850;
kontrakt['po']['5H']['xx']=1200;
kontrakt['po']['5S']=['o','x','xx'];
kontrakt['po']['5S']['o']=650;
kontrakt['po']['5S']['x']=850;
kontrakt['po']['5S']['xx']=1200;
kontrakt['po']['5BA']=['o','x','xx'];
kontrakt['po']['5BA']['o']=660;
kontrakt['po']['5BA']['x']=870;
kontrakt['po']['5BA']['xx']=1240;
kontrakt['po']['6C']=['o','x','xx'];
kontrakt['po']['6C']['o']=1370;
kontrakt['po']['6C']['x']=1510;
kontrakt['po']['6C']['xx']=1830;
kontrakt['po']['6D']=['o','x','xx'];
kontrakt['po']['6D']['o']=1370;
kontrakt['po']['6D']['x']=1510;
kontrakt['po']['6D']['xx']=1830;
kontrakt['po']['6H']=['o','x','xx'];
kontrakt['po']['6H']['o']=1430;
kontrakt['po']['6H']['x']=1660;
kontrakt['po']['6H']['xx']=2070;
kontrakt['po']['6S']=['o','x','xx'];
kontrakt['po']['6S']['o']=1430;
kontrakt['po']['6S']['x']=1660;
kontrakt['po']['6S']['xx']=2070;
kontrakt['po']['6BA']=['o','x','xx'];
kontrakt['po']['6BA']['o']=1440;
kontrakt['po']['6BA']['x']=1680;
kontrakt['po']['6BA']['xx']=2110;
kontrakt['po']['7C']=['o','x','xx'];
kontrakt['po']['7C']['o']=2140;
kontrakt['po']['7C']['x']=2330;
kontrakt['po']['7C']['xx']=2660;
kontrakt['po']['7D']=['o','x','xx'];
kontrakt['po']['7D']['o']=2140;
kontrakt['po']['7D']['x']=2330;
kontrakt['po']['7D']['xx']=2660;
kontrakt['po']['7H']=['o','x','xx'];
kontrakt['po']['7H']['o']=2210;
kontrakt['po']['7H']['x']=2470;
kontrakt['po']['7H']['xx']=2790;
kontrakt['po']['7S']=['o','x','xx'];
kontrakt['po']['7S']['o']=2210;
kontrakt['po']['7S']['x']=2470;
kontrakt['po']['7S']['xx']=2790;
kontrakt['po']['7BA']=['o','x','xx'];
kontrakt['po']['7BA']['o']=2200;
kontrakt['po']['7BA']['x']=2490;
kontrakt['po']['7BA']['xx']=2980;
kontrakt['przed']['0P']['o']=0;
kontrakt['przed']['0P']['x']=0;
kontrakt['przed']['0P']['xx']=0;
kontrakt['po']['0P']['o']=0;
kontrakt['po']['0P']['x']=0;
kontrakt['po']['0P']['xx']=0;

function myClick(id) {
var x = id;
wpa = 0;
nad = 0;
  switch(true){
    case (x == 'WE'):
      WE_ID.style.color = "white";
      WE_ID.style.borderColor = "white";
      NS_ID.style.color = "grey";
      NS_ID.style.borderColor = "black";
      kto = id;
    break;

    case (x == 'NS'):
      NS_ID.style.color = "white";
      NS_ID.style.borderColor = "white";
      WE_ID.style.color = "grey";
      WE_ID.style.borderColor = "black";
      kto = id;
    break;

    case (x == 'partiaNS'):
      if (partiaNSflag == true)  {partiaNS_ID.style.backgroundColor = "green"; partiaNSflag = false; partiaNS="przed"; partiaNS_ID.innerHTML = "PRZED"}
      else if (partiaNSflag == false) {partiaNS_ID.style.backgroundColor = "red"; partiaNSflag = true; partiaNS="po"; partiaNS_ID.innerHTML = "PO"};
    break;

    case (x == 'partiaWE'):
      if (partiaWEflag == true)  {partiaWE_ID.style.backgroundColor = "green"; partiaWEflag = false; partiaWE="przed"; partiaWE_ID.innerHTML = "PRZED"}
      else if (partiaWEflag == false) {partiaWE_ID.style.backgroundColor = "red"; partiaWEflag = true; partiaWE="po"; partiaWE_ID.innerHTML = "PO"};
    break;

    case ((x == 'Pass')||(x.indexOf('P')==0)): //pass
      for(var i=1;i<=7;i++){
        kontrakt_ID['C'+i].style.backgroundColor = "black";
        kontrakt_ID['D'+i].style.backgroundColor = "black";
        kontrakt_ID['H'+i].style.backgroundColor = "black";
        kontrakt_ID['S'+i].style.backgroundColor = "black";
        kontrakt_ID['BA'+i].style.backgroundColor = "black";
      };
      kontrakt_ID['Pass'].style.backgroundColor = "red";
      kontraktWysokosc = '0';
      kontraktKolor = 'P';
    break;

    case ((x.indexOf('C')==0)||(x.indexOf('D')==0)||(x.indexOf('H')==0)||(x.indexOf('S')==0)||(x.indexOf('B')==0)):
      for(var i=1;i<=7;i++){
        kontrakt_ID['C'+i].style.backgroundColor = "black";
        kontrakt_ID['D'+i].style.backgroundColor = "black";
        kontrakt_ID['H'+i].style.backgroundColor = "black";
        kontrakt_ID['S'+i].style.backgroundColor = "black";
        kontrakt_ID['BA'+i].style.backgroundColor = "black";
      };
      kontrakt_ID['Pass'].style.backgroundColor = "black";
      kontrakt_ID[x].style.backgroundColor = "red";
      if (x.length < 3) {
        kontraktWysokosc = parseInt(x[1]);
        kontraktKolor = x[0];
        }
        else {
          kontraktWysokosc = parseInt(x[2]);
          kontraktKolor = x[0]+x[1];
          }
    break;

    case (x == 'kontra'):
      if (kontraflag == true)  {kontra_ID.style.color = "grey"; kontraflag = false; rekontraflag = false; rekontra_ID.style.color = "grey"; kontra = 'o'}
      else {kontra_ID.style.color = "red"; kontraflag = true; kontra = 'x'};
    break;

    case (x == 'rekontra'):
      if (rekontraflag == true)  {rekontra_ID.style.color = "grey"; rekontraflag = false; rekontra_ID.style.color = "grey"; kontra = 'x'}
      else if (kontraflag == true)  { rekontra_ID.style.color = "red"; rekontraflag = true; kontra = 'xx'}
    break;

    case ((x.indexOf('p')==0)):
      for(var i=1;i<=40;i++){
        punkty_ID['p'+i].style.backgroundColor = "black";
      }
      punkty_ID[x].style.backgroundColor = "red";
      if (x.length > 2) punktyR = parseInt("" + x[1] + x[2])
      else punktyR = parseInt(x[1]);
    break;

    case ((x.indexOf('l')==0)):
      for(var i=0;i<=13;i++){
        lewy_ID['l'+i].style.backgroundColor = "black";
      }
      lewy_ID[x].style.backgroundColor = "red";
      if (x.length > 2) lewy = parseInt("" + x[1] + x[2])
      else lewy = parseInt(x[1]);
    break;

    case (x == 'zapisz'):
      var z0,z1,z2,z3,z4,z5,z6,z7;
      if (nrKon < 10) {z0="0"+nrKon} else {z0="" + nrKon};
      if (kto == 'WE') {z1="1"} else {z1="2"};
      if (partiaWE == 'przed') {z2="0"} else {z2="1"};
      if (partiaNS == 'przed') {z3="0"} else {z3="1"};
      if ( kontra == 'o') {z4="0"} else if (kontra == 'x') {z4="1"} else { z4="2"};
      if (punktyR < 10) {z5="0"+punktyR} else {z5="" + punktyR};
      if (lewy < 10) {z6="0"+lewy} else {z6="" + lewy};

      if (nrKon==0) localStorage.k0 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==1) localStorage.k1 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==2) localStorage.k2 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==3) localStorage.k3 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==4) localStorage.k4 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==5) localStorage.k5 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==6) localStorage.k6 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==7) localStorage.k7 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==8) localStorage.k8 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==9) localStorage.k9 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==10) localStorage.k10 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==11) localStorage.k11 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==12) localStorage.k12 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==13) localStorage.k13 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==14) localStorage.k14 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==15) localStorage.k15 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==16) localStorage.k16 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==17) localStorage.k17 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==18) localStorage.k18 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==19) localStorage.k19 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==20) localStorage.k20 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==21) localStorage.k21 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==22) localStorage.k22 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==23) localStorage.k23 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];
      if (nrKon==24) localStorage.k24 = [z0,z1,z2,z3,kontraktWysokosc,kontraktKolor[0],z4,z5,z6];


    break;

    case (x == '_prev'):
      if (nrKon > 0) nrKon--;
      nrKontraktu_ID.innerHTML = "" + nrKon;
      wczytaj(nrKon);
    break;

    case (x == '_next'):
      if (nrKon < 24) nrKon++;
      nrKontraktu_ID.innerHTML = "" + nrKon;
      wczytaj(nrKon);
    break;
  }

  if (lewy < (kontraktWysokosc+6)) {wpa = kontraktWysokosc+6 - lewy; nad = 0}
  else {nad = lewy - kontraktWysokosc-6; wpa = 0};




  wynik.innerHTML = tabela(kto,partiaWEflag,partiaNSflag,kontraktWysokosc,kontraktKolor,kontra,punktyR,lewy,nad,wpa);

  if (suma < 0) {pIMP.innerHTML = ""+kto+": -" + punktyIMP(suma);}
  else {pIMP.innerHTML = ""+kto+": "+ punktyIMP(suma)};

}

wynik.innerHTML = tabela(kto,partiaWEflag,partiaNSflag,kontraktWysokosc,kontraktKolor,kontra,punktyR,lewy,nad,wpa);

function wczytaj(nr){
  var x1,x2,x3,x4,x5,x6,x7;
  var memory = "";

  if (nr == 0) memory = localStorage.k0;
  if (nr == 1) memory = localStorage.k1;
  if (nr == 2) memory = localStorage.k2;
  if (nr == 3) memory = localStorage.k3;
  if (nr == 4) memory = localStorage.k4;
  if (nr == 5) memory = localStorage.k5;
  if (nr == 6) memory = localStorage.k6;
  if (nr == 7) memory = localStorage.k7;
  if (nr == 8) memory = localStorage.k8;
  if (nr == 9) memory = localStorage.k9;
  if (nr == 10) memory = localStorage.k10;
  if (nr == 11) memory = localStorage.k11;
  if (nr == 12) memory = localStorage.k12;
  if (nr == 13) memory = localStorage.k13;
  if (nr == 14) memory = localStorage.k14;
  if (nr == 15) memory = localStorage.k15;
  if (nr == 16) memory = localStorage.k16;
  if (nr == 17) memory = localStorage.k17;
  if (nr == 18) memory = localStorage.k18;
  if (nr == 19) memory = localStorage.k19;
  if (nr == 20) memory = localStorage.k20;
  if (nr == 21) memory = localStorage.k21;
  if (nr == 22) memory = localStorage.k22;
  if (nr == 23) memory = localStorage.k23;
  if (nr == 24) memory = localStorage.k24;

  x0 = parseInt(memory[0]+memory[1]);
  if (memory[3] == '1') {x1 = 'WE'} else {x1='NS'};
  if (memory[5] == '0') {x2 = 'przed'} else {x2='po'};
  if (memory[7] == '0') {x3 = 'przed'} else {x3='po'};
  x4 = "" + memory[11];
  if (x4 == 'B') x4 += 'A';
  x4 += memory[9];
  if (memory[13] == '0') {x5 = 'o'} else if (memory[13] == '1') {x5='x'} else {x5='xx'};
  x6 = "p"+parseInt(memory[15]+memory[16]);
  x7 = "l"+parseInt(memory[18]+memory[19]);
  ustaw(x0,x1,x2,x3,x4,x5,x6,x7);
};


function tabela(gracz,pWE,pNS,kWy,kKo,ko,pR,l,n,w){

  var tekst = "<center><table><tr><td>Gracz</td><td>WE</td><td>NS</td></tr><tr><td>Partia</td><td>";
  if (pWE) {tekst += "PO";} else {tekst += "PRZED";};
  tekst += "</td><td>";
  if (pNS) {tekst += "PO";} else {tekst += "PRZED";};
  tekst += "</td></tr>";
  if (gracz=='WE') {tekst += "<tr><td>Kontrakt</td><td>" + kWy + kKo + ko + " ("+kontrakt[partiaWE][""+kWy+kKo][ko]+")</td><td></td></tr>";}
  if (gracz=='NS') {tekst+= "<tr><td>Kontrakt</td><td></td><td>" + kWy + kKo + ko +" ("+kontrakt[partiaNS][""+kWy+kKo][ko]+")</td></tr>"};
  if (gracz=='WE') {tekst += "<tr><td>Punkty</td><td> " + pR + "</td><td>"+ (40-pR) +"</td></tr>"};
  if (gracz=='NS') {tekst += "<tr><td>Punkty</td><td> " + (40-pR) + "</td><td>"+ pR +"</td></tr>"};
  if (gracz=='WE') {tekst += "<tr><td>Lewy</td><td> " + l + "</td><td></td></tr>";}
  if (gracz=='NS') {tekst += "<tr><td>Lewy</td><td></td><td>"+ l +"</td></tr>";}
  if (pR<20){
    if (gracz=='WE') {tekst += "<tr><td>Do ugrania</td><td> -" + punkty[partiaNS][40-pR] + "</td><td></td></tr>";}
    if (gracz=='NS') {tekst += "<tr><td>Do ugrania</td><td></td><td> -" + punkty[partiaWE][40-pR] + "</td></tr>";}
    }
  else {
    if (gracz=='WE') {tekst += "<tr><td>Do ugrania</td><td>" + punkty[partiaWE][pR] + "</td><td></td></tr>"};
    if (gracz=='NS') {tekst += "<tr><td>Do ugrania</td><td></td><td>" + punkty[partiaNS][pR] + "</td></tr>"};
  };
  if (gracz=='WE') {tekst += "<tr><td>Wpadki</td><td> " + w + " (" +wpadka(partiaWE, ko, w)+ ")</td><td></td></tr>";}
  if (gracz=='NS') {tekst += "<tr><td>Wpadki</td><td></td><td>"+ w + " (" +wpadka(partiaNS, ko, w)+")</td></tr>";}
  if (gracz=='WE') {tekst += "<tr><td>Nadróbki</td><td> " + n + " ("+nadrobki(partiaWE, kWy+kKo, ko, l)+ ")</td><td></td></tr>";}
  if (gracz=='NS') {tekst += "<tr><td>Nadróbki</td><td></td><td>"+ n + " ("+nadrobki(partiaNS, kWy+kKo, ko, l)+")</td></tr>";}
  if (pR<20){
    if (gracz=='WE') {
      if (w > 0) {suma = -wpadka(partiaWE, ko, w)+punkty[partiaNS][40-pR]}
      else {suma = kontrakt[partiaWE][""+kWy+kKo][ko]+nadrobki(partiaWE, kWy+kKo, ko, l)+punkty[partiaNS][40-pR]};
    };
    if (gracz=='NS') {
      if (w > 0) {suma = -wpadka(partiaNS, ko, w)+punkty[partiaWE][40-pR]}
      else {suma = kontrakt[partiaNS][""+kWy+kKo][ko]+nadrobki(partiaNS, kWy+kKo, ko, l)+punkty[partiaWE][40-pR]};
    }
  }
  else {
    if (gracz=='WE') {
      if (w > 0) {suma =  - wpadka(partiaWE, ko, w)-punkty[partiaWE][pR] }
      else {suma = kontrakt[partiaWE][""+kWy+kKo][ko]+nadrobki(partiaWE, kWy+kKo, ko, l)-punkty[partiaWE][pR]};
    };
    if (gracz=='NS') {
      if (w > 0) {suma = - wpadka(partiaNS, ko, w)-punkty[partiaNS][pR]}
      else {suma = kontrakt[partiaNS][""+kWy+kKo][ko]+nadrobki(partiaNS, kWy+kKo, ko, l)-punkty[partiaNS][pR]};
    }
  };
  if (gracz=='WE') {tekst += "<tr><td>Suma</td><td> " + (suma)+ "</td><td></td></tr>";}
  if (gracz=='NS') {tekst += "<tr><td>Suma</td><td></td><td>"+ (suma)+"</td></tr>";}
  tekst += "</table>";

  if ((gracz == 'WE') && (suma >= 0)) {tabelaImpWE[nrKon] = punktyIMP(suma); tabelaImpNS[nrKon] = 0;}
  if ((gracz == 'WE') && (suma < 0)) {tabelaImpNS[nrKon] = punktyIMP(suma); tabelaImpWE[nrKon] = 0;}
  if ((gracz == 'NS') && (suma >= 0)) {tabelaImpNS[nrKon] = punktyIMP(suma); tabelaImpWE[nrKon] = 0;}
  if ((gracz == 'NS') && (suma < 0)) {tabelaImpWE[nrKon] = punktyIMP(suma); tabelaImpNS[nrKon] = 0;}


  sumaImpWE = 0;
  sumaImpNS = 0;
  if (nrKon > 0)
    for(var i=1;i<=nrKon;i++){
      sumaImpWE += tabelaImpWE[i];
      sumaImpNS += tabelaImpNS[i];
  }
  impWE_ID.innerHTML = "suma: " + (sumaImpWE);
  impNS_ID.innerHTML = "suma: " + (sumaImpNS);
  return tekst;
};

function punktyIMP(roznica){
  var x = roznica;
  if (roznica < 0) x = -roznica;
  switch(true){
    case (x<20):
    return 0;
    break;

    case (x<50):
    return 1;
    break;

    case (x<90):
    return 2;
    break;

    case (x<130):
    return 3;
    break;

    case (x<170):
    return 4;
    break;

    case (x<220):
    return 5;
    break;

    case (x<260):
    return 6;
    break;

    case (x<320):
    return 7;
    break;

    case (x<370):
    return 8;
    break;

    case (x<430):
    return 9;
    break;

    case (x<500):
    return 10;
    break;

    case (x<600):
    return 11;
    break;

    case (x<750):
    return 12;
    break;

    case (x<900):
    return 13;
    break;

    case (x<1100):
    return 14;
    break;

    case (x<1300):
    return 15;
    break;

    case (x<1500):
    return 16;
    break;

    case (x<1750):
    return 17;
    break;

    case (x<2000):
    return 18;
    break;

    case (x<2250):
    return 19;
    break;

    case (x<2500):
    return 20;
    break;

    case (x<3000):
    return 21;
    break;

    case (x<3500):
    return 22;
    break;

    case (x<4000):
    return 23;
    break;

    default:
    return 24;
    break;
  }
}

function wpadka(partia, kontra, bez){
  if (bez > 7) {
    if ((partia=='przed') && (kontra=='o')) return (wpadki[partia][kontra][7]+(bez-7)*50);
    if ((partia=='przed') && (kontra=='x')) return (wpadki[partia][kontra][7]+(bez-7)*300);
    if ((partia=='przed') && (kontra=='xx')) return (wpadki[partia][kontra][7]+(bez-7)*600);
    if ((partia=='po') && (kontra=='o')) return (wpadki[partia][kontra][7]+(bez-7)*100);
    if ((partia=='po') && (kontra=='x')) return (wpadki[partia][kontra][7]+(bez-7)*300);
    if ((partia=='po') && (kontra=='xx')) return (wpadki[partia][kontra][7]+(bez-7)*600);

  }
  else return wpadki[partia][kontra][bez];

}



function nadrobki(partia, kontrakt, kontra, lewy){
  var kolory = "C";
  if ((lewy-6-kontrakt[0]) > 0) {
      switch(partia){
        case 'przed':
        if ((kontrakt.indexOf('C') > 0) || (kontrakt.indexOf('D') > 0)) {
          if (kontra == 'o')  { return (lewy-6-kontrakt[0])*20;};
          if (kontra == 'x')  { return (lewy-6-kontrakt[0])*100;};
          if (kontra == 'xx') { return (lewy-6-kontrakt[0])*200;};
        };
        if ((kontrakt.indexOf('H') > 0) || (kontrakt.indexOf('S') > 0)) {
          if (kontra == 'o')  { return (lewy-6-kontrakt[0])*30;};
          if (kontra == 'x')  { return (lewy-6-kontrakt[0])*100;};
          if (kontra == 'xx') { return (lewy-6-kontrakt[0])*200;};
        };
        if (kontrakt.indexOf('B') > 0)                                  {
          if (kontra == 'o')  { return (lewy-6-kontrakt[0])*30;};
          if (kontra == 'x')  { return (lewy-6-kontrakt[0])*100;};
          if (kontra == 'xx') { return (lewy-6-kontrakt[0])*200;};
        };
        return 0;
        break;

        case 'po':
        if ((kontrakt.indexOf('C') > 0) || (kontrakt.indexOf('D') > 0)) {
          if (kontra == 'o')  { return (lewy-6-kontrakt[0])*20;};
          if (kontra == 'x')  { return (lewy-6-kontrakt[0])*100;};
          if (kontra == 'xx') { return (lewy-6-kontrakt[0])*200;};
        };
        if ((kontrakt.indexOf('H') > 0) || (kontrakt.indexOf('S') > 0)) {
          if (kontra == 'o')  { return (lewy-6-kontrakt[0])*30;};
          if (kontra == 'x')  { return (lewy-6-kontrakt[0])*400;};
          if (kontra == 'xx') { return (lewy-6-kontrakt[0])*400;};
        };
        if (kontrakt.indexOf('B') > 0)                                  {
          if (kontra == 'o')  { return (lewy-6-kontrakt[0])*30;};
          if (kontra == 'x')  { return (lewy-6-kontrakt[0])*200;};
          if (kontra == 'xx') { return (lewy-6-kontrakt[0])*400;};
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

function zapisz(nrKontraktu){
  sessionStorage.kontrakt0 = tabela();
}

myClear(0);

//http://naliczanieimp.wikidot.com/
