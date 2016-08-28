
/* TABLICE Z HASLAMI I ALFABETEM */
var hasla = new Array(20);
hasla[0] = "Apetyt rośnie w miarę jedzenia";
hasla[1] = "Co ma piernik do wiatraka";
hasla[2] = "Idzie luty podkuj buty";
hasla[3] = "Jak kamień w wodę";
hasla[4] = "Jak Kuba Bogu tak Bóg Kubie";
hasla[5] = "Janusz Korwin Mikke";
hasla[6] = "Kim Kardashian";
hasla[7] = "Dan Bilzerian";
hasla[8] = "Joanne Kathleen Rowling";
hasla[9] = "Kurt Cobain";
hasla[10] = "Skazani na Shawshank";
hasla[11] = "Labirynt Fauna";
hasla[12] = "Rozumiemy się bez słów";
hasla[13] = "Adwokat diabła";
hasla[14] = "Requiem dla snu";
hasla[15] = "Harry Potter i Kamień Filozoficzny";
hasla[16] = "Władcy Pierścieni Dwie Wieże";
hasla[17] = "Kod Leonarda da Vinci";
hasla[18] = "Alicja w Krainie Czarów";
hasla[19] = "Felix Net i Nika oraz Teoretycznie Możliwa Katastrofa";


var litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";
/* ----------------------------- */


/* DEKLARACJA ZMIENNYCH */
var haslo = "";
var haslo1 = "";
var dlugosc = 0;
var ile_skuch = 0;
/*----------------------*/


/* DZWIĘKI */
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var win = new Audio("win.wav");
var lose = new Audio("lose.wav");
/* --------- */

/* -------------------------------------------KONIEC DEKLARACJI ZMIENNYCH---------------------------------------------------------------- */



/* WYPISZ KATEGORIE */
function prestart() {
    "use strict";
    
    document.getElementById("alfabet").innerHTML =
        'Wybierz kategorię z której będzie losowane hasło: <br/>' + '<ul>' + '<li class="kategorie" onclick= "losowanie(1)">Przysłowia</li>' +  '<li class="kategorie" onclick= "losowanie(2)">Znane osoby</li>' + '<li class="kategorie" onclick= "losowanie(3)">Film</li>' + '<li class="kategorie" onclick= "losowanie(4)">Książka</li>' + '</ul>' + "<br/><br/>" + '<span class="kategorie" onclick="showPasswordField(true)">Sam wpiszę hasło! (opcja dla 2 graczy)</span>';
}
window.onload = prestart;
/* --------------- */


/* POKAZ WYKRESKOWANE HASLO */
function wypisz_haslo() {
    "use strict";
	document.getElementById("plansza").innerHTML = haslo1;
}

function start() {
    "use strict";
	var tresc_diva = "", i = 0, element = "lit";

    $('#div_haslo').hide();
  
	for (i = 0; i <= 34; i += 1) {
		element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz( ' + i + ' )" id = "' + element + '">' + litery[i] + '</div>';
		if ((i + 1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}

	document.getElementById("alfabet").innerHTML = tresc_diva;
            $('#alfabet').show();
    

	wypisz_haslo();
}
/* LOSOWANIE HASŁA Z DANEJ KATEGORII, WYKRESKOWANIE HASŁA A NASTĘPNIE WSTAWIANIE DIV'ÓW Z ALFABETEM I PRZEKIEROWANIE DO FUNKCJI WYPISUJĄCEJ WYKRESKOWANE HASŁO */

function losowanie(kategoria) {
    "use strict";
    var zwroc = 0, i = 0, numer = Math.floor(Math.random() * 5);
    switch (kategoria) { case 1: zwroc = numer; break;
                        case 2: zwroc = 5 + numer; break;
                        case 3: zwroc = 10 + numer; break;
                        case 4: zwroc = 15 + numer; break;
                        }
    haslo = hasla[zwroc];
    haslo = haslo.toUpperCase();
    dlugosc = haslo.length;



    for (i = 0; i < dlugosc; i += 1) {
        if (haslo.charAt(i) == " ") {
            haslo1 = haslo1 + " ";
        } else {
            haslo1 = haslo1 + "-";
        }
    }


    start();
}







/* -------------------------------------------------------------------------------------------------------------------------------------- */



function showPasswordField(shouldShow){
    if (shouldShow) {
        $('#div_haslo').show();
        $('#alfabet').hide();
    }
    else {
        $('#div_haslo').hide();
        $('#alfabet').show();
    }
    
$('input[type="password"]').keypress(function(e)
                                        {
                                            var ENTER_KEY = 13;
                                            if (e.which === ENTER_KEY) e.preventDefault();
                                        }
                                         )
}

/* WIĘKSZA ILOŚĆ GRACZY */
function wezhaslo(documentId)
{
    var _haslo = document.getElementById(documentId).value;

    ustawhaslo(_haslo);

}
                                         

function ustawhaslo(twojehaslo)
{
    haslo = twojehaslo;
    haslo = haslo.toUpperCase();
    dlugosc = haslo.length;

    for (i=0; i<dlugosc; i++)
    {
	   if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	   else haslo1 = haslo1 + "-";
    }

    start();
}
/* -------------------- */



/* ----------------- */


/* DODANIE METODY DO KLASY STRING */
String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}
/* ------------------------------ */


/* SPRAWDZANIE CZY LITERA WYSTĘPUJE W HAŚLE */
function sprawdz(nr)
{

	var trafiona = false;

	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr])
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}

	if(trafiona == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";

		wypisz_haslo();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");

		//skucha
		ile_skuch++;
		var obraz = "img/s"+ ile_skuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}

	//wygrana
	if (haslo == haslo1)
        {
        win.play();
	document.getElementById("alfabet").innerHTML  = "Tak jest! Podano prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
        }

	//przegrana
	if (ile_skuch>=9)
        {
            lose.play();
	document.getElementById("alfabet").innerHTML  = "Przegrana! Prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
        }
}
/* ---------------------------------------------------------------------- */
