//To set iframe at place of link
window.onload = function(){
	if (document.getElementById('mapDiv')) {
		var mapLinkHTML = document.getElementById('mapDiv').innerHTML;
		var mapLink = document.getElementById('mapLink');
		ifrm = document.createElement("iframe");
		ifrm.setAttribute("src", mapLink.href);
		ifrm.style.width = mapLink.style.width;
		ifrm.style.height = mapLink.style.height;
		ifrm.scrolling = 'no';
		ifrm.innerHTML = mapLinkHTML;
		document.getElementById('mapDiv').appendChild(ifrm);
		mapLink.parentNode.removeChild(mapLink);
	}
}