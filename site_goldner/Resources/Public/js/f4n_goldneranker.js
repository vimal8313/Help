<!--
// JavaScript Document, f4n_goldneranker.js

 //Auswahl Datum --> automatisches Ergänzen der Abreise aus der bekannten Anzahl der Tage einer Pauschale
 function F4N_AddDaysToArivalDate(startTag, AnzahlTage) {
   
   if (startTag) {   	
	
	//Prüfung, ob Datum syntaktisch korrekt eingegeben
   	var re = /^(\d+)\.(\d+)\.(\d+)$/i;
   	var howmuch = 0;
   	var m = re.exec(startTag);
	if (m) {
	 
 
	 //Datum scheint ok; dann jetzt das Abreisedatum setzen
 	 var	startDatum = new Date(m[3],(m[2]-1),m[1]), //Zählung der Monate beginnt bei 0=Januar
     EndDatum = new Date(startDatum.getTime() + AnzahlTage * 24 * 60 * 60 * 1000),

        //Formatierung des Datums
       	d = EndDatum.getDate(),
       	m = EndDatum.getMonth() + 1,
       	y = EndDatum.getFullYear();

       display =	((d<10) ? "0" : "") + d + "." +
       				((m<10) ? "0" : "") + m + "." +
       				((y<10) ? "0" : "") + y;
   
	   return display;
	}
	else {
		return '';
	}
   }
   else {
		return '';
   }
   
 }

//
-->