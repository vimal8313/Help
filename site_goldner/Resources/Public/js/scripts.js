<!--
// JavaScript Document, scripts.js

 $(function() {

	$.datepicker.setDefaults( $.datepicker.regional["de"] );
	$('input[class*="DatePicker"]').datepicker({
		minDate: +1,
		maxDate: "+1Y +0D",
		changeMonth: true,
		changeYear: true,
		showWeek: true,
	});

 });

 $(document).ready(function(){
    /*jMenu - starten*/
	$("#jMenu").jMenu();

	/*Accordeon*/
	$('.trigger').not('.trigger_active').next('.toggle_container').hide();
	$('.trigger').click( function() {
		var trig = $(this);
		if ( trig.hasClass('trigger_active') ) {
			trig.next('.toggle_container').slideToggle('slow');
			trig.removeClass('trigger_active');
		} else {
			$('.trigger_active').next('.toggle_container').slideToggle('slow');
			$('.trigger_active').removeClass('trigger_active');
			trig.next('.toggle_container').slideToggle('slow');
			trig.addClass('trigger_active');
		};
		return false;
	});

 });

 //Newsfunktion
 function F4N_SlideNews(TextIDTag, CounterVar, Data) {
 	if (self[CounterVar] === undefined) self[CounterVar] = 0;
 	if ((self[CounterVar]+1) < Data.length) {
	 	self[CounterVar] = self[CounterVar] + 1;
	}
	else {
		self[CounterVar] = 0;
	}

	var TheText = document.getElementById(TextIDTag);
	if (TheText) {
	   TheText.innerHTML = Data[self[CounterVar]];
	}

	//Aktualisierung der News...
 	setTimeout(function(){ F4N_SlideNews(TextIDTag, CounterVar, Data); }, 5000);
 }

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

//Quickbooker-Vorbereitungen
 function F4N_PrepareQuickBookerForm() {

    var AnzahlTage = 1;
    var TheElement = document.getElementById("QuickbookerForm_Naechte");

    if (TheElement) {
     AnzahlTage = TheElement.options[TheElement.selectedIndex].value;
    }

    F4N_AddDaysToArivalDateQuickbooker("QuickbookerForm_Anreise", "QuickbookerForm_Abreise", AnzahlTage);
 	return true;
 }

 //Auswahl Datum --> automatisches Ergänzen der Abreise aus der bekannten Anzahl der Tage einer Pauschale
 function F4N_AddDaysToArivalDateQuickbooker(SelfTagID, EndTagID, AnzahlTage) {

   var startTag = document.getElementById(SelfTagID);
   var EndTag = document.getElementById(EndTagID);

   if (startTag && EndTag) {

   	//Prüfung, ob Datum syntaktisch korrekt eingegeben
   	var re = /^(\d+)\.(\d+)\.(\d+)$/i;
   	var howmuch = 0;
   	var m = re.exec(startTag.value);
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

       EndTag.value = display;
	}
	else {
		EndTag.value = '';
	}
   }
 }

//
-->