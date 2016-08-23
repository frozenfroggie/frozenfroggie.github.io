function odliczanie() 
    {
		var dzisiaj = new Date();
		
		var dzien = dzisiaj.getDate();
        		if (dzien<10) dzien = "0"+dzien;

		var miesiac = dzisiaj.getMonth()+1;
        		if (miesiac<10) miesiac = "0"+miesiac;

		var rok = dzisiaj.getFullYear();
		
		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		
		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
		
		var sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;
		
		document.getElementById("zegar").innerHTML = 
		 godzina+":"+minuta+":"+sekunda;
		 
		 setTimeout("odliczanie()",1000);
        
        		
        document.getElementById("data").innerHTML =
            dzien + "." + miesiac + "." + rok;
        
    }

function over()
    {
        document.getElementById("rozwijanemenu").style.display = 'block';   

    }

var stop = 0;
 function poczekaj()
    {
    if(stop==1)document.getElementById("rozwijanemenu").style.display = 'block';
        else if(stop==0)document.getElementById("rozwijanemenu").style.display = 'none';   
    }

function out()
    {
    var timer=0;
    timer=setTimeout("poczekaj()",3000);
    }

function zatrzymaj()
    {
     stop = 1;
    }   

function pusc()
{
    stop = 0;
    out();
}
