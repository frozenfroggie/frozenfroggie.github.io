function odliczanie() 
    {
		var dzisiaj = new Date();
		
		var dzien = dzisiaj.getDate();
        		if (dzien<10) dzien = "0"+dzien;

		var miesiac = dzisiaj.getMonth() + 1;
        
        var txt="dzien miesiąca";

        
        switch(miesiac)
                {
        case 1: txt="Stycznia";
                        break;
        case 2: txt="Lutego";
                        break;
        case 3: txt="Marca";
                        break;
        case 4: txt="Kwietnia";
                        break;
        case 5: txt="Maja";
                        break;
        case 6: txt="Czerwca";
                        break;
        case 7: txt="Lipca";
                        break;
        case 8: txt="Sierpnia";
                        break;
        case 9: txt="Września";
                        break;
        case 10: txt="Października";
                        break;
        case 11: txt="Listopada";
                        break;
        case 12: txt="Grudnia";
                        break;
                }
        
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
            dzien + " " + txt + " " + rok;
        
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

function out(czas)
    {
        var x= czas;
    var timer=0;
    timer=setTimeout("poczekaj()",x);
    }

function zatrzymaj()
    {
     stop = 1;
    }   

function pusc()
{
    stop = 0;
    out(1000);
}



