/**
 * @author wouter
 */
var lastQuestionClick = 0;
var currentQuestionOpen = 0;
var catID = 0;
//for the effects and opens only the last clicked question.
function openQuestion(data){    
	$('#question' + data.uid + '_' + data.catuid).removeClass('loader');
	//close so a new one can be opened
	if (currentQuestionOpen != 0){
		if(currentCatID != data.catuid && currentQuestionOpen == data.uid){
			$('#answer' + currentQuestionOpen + '_' + currentCatID).slideToggle();
			$('#question' + currentQuestionOpen + '_' + currentCatID).removeClass('current');
		}else if(currentQuestionOpen != data.uid){	
			$('#answer' + currentQuestionOpen + '_' + currentCatID).slideToggle();
			$('#question' + currentQuestionOpen + '_' + currentCatID).removeClass('current');
		}
			

	} 
	//if the answer is open and needs to be closed and if clicked on it
	if (currentQuestionOpen == data.uid && catID == data.catuid) {
		if(currentCatID != data.catuid){
			currentQuestionOpen = data.uid;
			currentCatID = data.catuid;
			$('#question' + data.uid + '_' + data.catuid).addClass('current');
			if (data.answer){
				$('#answer' + data.uid + '_' + data.catuid).html(data.answer);
			}
			$('#answer' + data.uid + '_' + data.catuid).slideToggle();
		}
		else{
			$('#answer' + data.uid + '_' + data.catuid).slideToggle()
			$('#question' + data.uid + '_' + data.catuid).removeClass('current');
			currentQuestionOpen = 0;
		}
	}
	else if (lastQuestionClick == data.uid && catID == data.catuid){
		currentQuestionOpen = data.uid;
		currentCatID = data.catuid;
		$('#question' + data.uid + '_' + data.catuid).addClass('current');
		if (data.answer){
			$('#answer' + data.uid + '_' + data.catuid).html(data.answer);
		}
		$('#answer' + data.uid + '_' + data.catuid).slideToggle();
	}
}
//trims the answer so white space will be deleted
function trimAnswer(answer){
	return answer.replace(/^\s+|\s+$/g, '');
}
//get the answer from the given uid
function displayAnswer(pageuid, uid, catuid){
	$('#question' + uid + '_' + catuid).addClass('loader');
	lastQuestionClick = uid;
	catID = catuid
	//checks if it was already loaded
	if (trimAnswer($('#answer' + uid + '_' + catuid).html()) == '') {
		$.getJSON("index.php?id=" + pageuid + "&type=1646&tx_windfaq_pi1[getanswer]=" + uid + "&tx_windfaq_pi1[catuid]=" + catuid, openQuestion);
	}
	else {
		openQuestion({
			uid: uid,
			catuid: catuid
		})
	}
}

$(function() {
	$('.answer').hide();
});