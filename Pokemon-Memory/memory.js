

/* pokazywanie diva określonego argumentem a ukrywanie pozostałych */
function pokazDiv(coPokazac){
  $(coPokazac).show();
  if(coPokazac==="#game"){
    $("#mainMenu").hide();
    $("#highScores").hide();
                        }
  else if(coPokazac==="#mainMenu"){
    $("#game").hide();
    $("#highScores").hide();
                                  }
  else if(coPokazac==="#highScores"){
    $("#game").hide();
    $("#mainMenu").hide();
                                    }
                            }


/* losowanie */

/*
function losowanie()
{

for(var i=0 ; i<all.length ; i++)
{
  wylosowana = Math.floor(Math.random() * 20);
  if(all[i]==wylosowana) continue;
}

  all[liczbaLosowan] = wylosowana;
  liczbaLosowan++;

  return wylosowana;
}
*/

/*
var all= [];
var liczbaLosowan=0;


function losowanie(){
  var wylosowana = Math.floor(Math.random() * 20);

for(var i=0 ; i<all.length ; i++){
  wylosowana = Math.floor(Math.random() * 20);
  if(all[i] == wylosowana) continue;
}


all[liczbaLosowan] = wylosowana;
return wylosowana;
}*/

/*
function losowanie(){
var init = 20;
var arr = [];

for(var i = 0; i<init ; i++)
  {
    arr[i]=i;
  }

  for(var i = init ; i>0 ; i--)
  {
    var wylosowana= Math.floor(Math.random() * i);
    arr[wylosowana]=arr[i-1];
    return wylosowana;
  }
}
*/

function nawroc()
{
  $('#pokeball'+indeks[1]).css('background', 'url(pokeball.png) center center no-repeat, -moz-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.52) 97%, rgba(0,0,0,0.5) 100%)');
$('#pokeball'+indeks[1]).css('background', 'url(pokeball.png) center center no-repeat, -webkit-linear-gradient(top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 70%,rgba(0,0,0,0.52) 97%,rgba(0,0,0,0.5) 100%)');
$('#pokeball'+indeks[1]).css('background', 'url(pokeball.png) center center no-repeat, -linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 70%,rgba(0,0,0,0.52) 97%,rgba(0,0,0,0.5) 100%)');
$('#pokeball'+indeks[1]).css('background-size', '90px 90px, contain');

$('#pokeball'+indeks[2]).css('background', 'url(pokeball.png) center center no-repeat, -moz-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.52) 97%, rgba(0,0,0,0.5) 100%)');
$('#pokeball'+indeks[2]).css('background', 'url(pokeball.png) center center no-repeat, -webkit-linear-gradient(top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 70%,rgba(0,0,0,0.52) 97%,rgba(0,0,0,0.5) 100%)');
$('#pokeball'+indeks[2]).css('background', 'url(pokeball.png) center center no-repeat, -linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 70%,rgba(0,0,0,0.52) 97%,rgba(0,0,0,0.5) 100%)');
$('#pokeball'+indeks[2]).css('background-size', '90px 90px, contain');
moznaKliknac=true;
}

var ileTrafionych=0;
function zgadlem()
{
  $('#pokeball'+indeks[1]).css('visibility','hidden');
  $('#pokeball'+indeks[2]).css('visibility','hidden');
  ileTrafionych++;

  if(ileTrafionych>=9)
  {
    alert("You win in: "+ iloscProb + " attempts!");
    moznaKliknac=false;
  }
  else moznaKliknac=true;
}

var all=[];
var ileLosowan = 0;

function losowanie(){
  var ile_liczb_wylosowac= 8;
  var z_jakiego_przedzialu=20;
  for (var i = 0; i <= ile_liczb_wylosowac; i++) {

  do
  {
    var wylosowana= Math.floor(Math.random() * z_jakiego_przedzialu);
    var losowanieOk=true;
    for(var i=0;i<all.length;i++){
    if(wylosowana==all[i])losowanieOk=false;
                                }
    if(losowanieOk==true){
      all[ileLosowan]=wylosowana;
      ileLosowan++;
    }

  }while(losowanieOk!=true);
}
return all;
}

/* mieszanie tablicy */
function mixArray(arr) {
    for (var i=0; i<arr.length; i++) { //wykonujemy pętlę po całej tablicy
        var j = Math.floor(Math.random() * arr.length); //losujemy wartość z przedziału 0 - tablica.length-1
        var temp = arr[i]; //pod zmienną temp podstawiamy wartość bieżącego indexu
        arr[i] = arr[j]; //pod bieżący index podstawiamy wartość z indexu wylosowanego
        arr[j] = temp; //pod wylosowany podstawiamy wartość z bieżącego indexu
    }
    return arr;
}


var liczbaKlikniec=0;
var klikniecia=[];
var indeks=[];
var czyTrafilem;
var moznaKliknac=true;
var iloscProb=0;
var ostatniNumerek;
var nieTenSamKafelek=true;

      function klikniecie(numerek)
      {

        if(numerek==ostatniNumerek)
        {
          nieTenSamKafelek=false;
        } else {
          nieTenSamKafelek=true;
        }

        if(moznaKliknac==true&&nieTenSamKafelek==true)
        {
liczbaKlikniec++;
iloscProb++;
klikniecia[liczbaKlikniec] = wylosowanaLiczba[numerek];
indeks[liczbaKlikniec] = numerek;
/*document.getElementById("pokeball"+numerek).style.backgroundImage = "url('pokemony/" + numerek + ".png')";*/
/*$('#pokeball'+numerek).css('background-image', 'url(pokemony/' + numerek + '.png)');*/

/*$('#pokeball'+numerek).css('background', 'url(pokemony/' + numerek + '.png) center center no-repeat', '-webkit-linear-gradient(top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 70%,rgba(0,0,0,0.52) 97%,rgba(0,0,0,0.5) 100%);');
$('#pokeball'+numerek).css('background', 'url(pokemony/' + numerek + '.png) center center no-repeat', '-linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 70%,rgba(0,0,0,0.52) 97%,rgba(0,0,0,0.5) 100%);');*/
$('#pokeball'+numerek).css('background', 'url(pokemony/' + wylosowanaLiczba[numerek] + '.png) center center no-repeat, -webkit-linear-gradient(top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 70%,rgba(0,0,0,0.52) 97%,rgba(0,0,0,0.5) 100%)');
$('#pokeball'+numerek).css('background', 'url(pokemony/' + wylosowanaLiczba[numerek] + '.png) center center no-repeat, -moz-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.52) 97%, rgba(0,0,0,0.5) 100%)');
$('#pokeball'+numerek).css('background', 'url(pokemony/' + wylosowanaLiczba[numerek] + '.png) center center no-repeat, -linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 70%,rgba(0,0,0,0.52) 97%,rgba(0,0,0,0.5) 100%)');
$('#pokeball'+numerek).css('background-size', '100px 100px, contain');


if(liczbaKlikniec==2)
{
  moznaKliknac=false;
if(klikniecia[1]==klikniecia[2])
{
  setTimeout("zgadlem()",1000);
} else if(klikniecia[1]!=klikniecia[2]){
  setTimeout("nawroc()",1000);
                                        }
}

if(liczbaKlikniec==2)
{
  liczbaKlikniec=0;
}

/*
$('#pokeball'+numerek).css({
"background": 'url(pokemony/' + numerek + '.png) center center no-repeat, -moz-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.52) 97%, rgba(0,0,0,0.5) 100%)',
"background": 'url(pokemony/' + numerek + '.png) center center no-repeat, -webkit-linear-gradient(top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 70%,rgba(0,0,0,0.52) 97%,rgba(0,0,0,0.5) 100%)',
"background": 'url(pokemony/' + numerek + '.png) center center no-repeat, -linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 70%,rgba(0,0,0,0.52) 97%,rgba(0,0,0,0.5) 100%)',
"background-size":  '100px 100px, cover'
});*/
}
ostatniNumerek=numerek;
};


var wylosowanaLiczba = [];
/* start gry */
function start(){
var tresc_diva= "";

   wylosowanaLiczba = losowanie();
   wylosowanaLiczba = wylosowanaLiczba.concat(wylosowanaLiczba);
   mixArray(wylosowanaLiczba);

   var pokeball= "";
  for (var i = 0; i <= 17; i++) {
      pokeball= pokeball + '<div class="pokeball" id="pokeball'+i+'"/></div>';
      if ((i + 1) % 6 == 0) pokeball = pokeball + '<div style="clear:both;"></div>';
                                }

  document.getElementById("game").innerHTML = pokeball;

  pokazDiv("#game");


    var imgs = document.getElementsByClassName("pokeball");
    for (var i = 0, len = imgs.length; i < len; i++){
      (function( lockedInIndex ){
      imgs[i].addEventListener("click", function(e) {
        e.preventDefault();
        klikniecie(lockedInIndex);
      }, 'false' );
    })( i );
}



}





/*
        var imgs = document.getElementsByClassName("pokeball");
        for (var i = 0, len = imgs.length; i < len; i++) {
            imgs[i].addEventListener("click", revers(i))};
        }

    tresc_diva = tresc_diva + '<img src="pokemony/'+ wylosowanaLiczba[i] + '.png"'+' class="tile" id = "tile' + i + '"/>';

*/
