/************************************************************************
*************************************************************************
@Name :       	jMenu - jQuery Plugin
@Revison :    	1.8
@Date : 		01/2012
@Author:     	ALPIXEL - (www.myjqueryplugins.com - www.alpixel.fr)
@Support:    	FF, IE7, IE8, MAC Firefox, MAC Safari
@License :		Open Source - MIT License : http://www.opensource.org/licenses/mit-license.php

**************************************************************************
*************************************************************************/

/**
@ IsHovered Plugin
@ Thanks to Chad Smith fr his isHovered Plugin
@ source : http://mktgdept.com/jquery-ishovered
**/
;(function(b,c){b('*').hover(function(){b(this).data(c,1)},function(){b(this).data(c,0)}).data(c,0);b[c]=function(a){return b(a)[c]()};b.fn[c]=function(a){a=0;b(this).each(function(){a+=b(this).data(c)});return a>0}})(jQuery,'isHovered');

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

/** jMenu Plugin **/
(function($){

	var F4NOpenClick;
	if (jQuery.browser.mobile) {
		F4NOpenClick = false; //sonst erzwingt er ein Öffnen nach unten und bei Mobile-Devices ist der Link dann deaktiviert
		$('ul#jMenu li a.SubMenu').attr("onclick","return true");
	}
	else {
		F4NOpenClick = false;
	}

	$.jMenu = {
		/**************/
		/** OPTIONS **/
		/**************/
		defaults: {
			ulWidth : 200, //'auto' fix the ul-width --> manuell auskommentiert!
			absoluteTop : 30,
			absoluteLeft : 0,
			effects : {
				effectSpeedOpen : 700,
				effectSpeedClose : 700, //350
				effectTypeOpen : 'slide',
				effectTypeClose : 'slide',
				effectOpen : 'linear',
				effectClose : 'linear'
			},
			TimeBeforeOpening : 200,
			TimeBeforeClosing : 200, //200
			animatedText : false,
			paddingLeft: 7,
			openClick : F4NOpenClick
		},

		/*****************/
		/** Init Method **/
		/*****************/
		init:function(options){
			/* vars **/
			opts = $.extend({}, $.jMenu.defaults, options);

			$("#jMenu a:not(.fNiv)").each(function(){
				var $thisChild = $(this);

				/* Add css - arrow right */
				if($.jMenu._IsParent($thisChild))
					$thisChild.addClass('isParent');

				/* Add the animation on hover **/
				if(opts.animatedText)
					$.jMenu._animateText($thisChild);

				/* Actions on hover */
				if(!opts.openClick)
				$thisChild.bind({
					mouseover:function(){
						$.jMenu._hide($thisChild);
						$.jMenu._showNextChild($thisChild);
					}
				});
				else
				$thisChild.bind({
					click:function(){
						$.jMenu._hide($thisChild);
						$.jMenu._showNextChild($thisChild);
					}
				});
			});

			/* Actions on parents links */
			if(!opts.openClick)
			$('#jMenu li a.fNiv').bind({
				mouseover:function(){
					var $this = $(this);
					var $child = $this.next();
					ULWidth = $.jMenu._returnUlWidth($this);
					$.jMenu._closeList($("#jMenu ul"));
					if($child.is(':hidden'))
						$.jMenu._showFirstChild($this);
				}
			});
			else
			$('#jMenu li a.fNiv').bind({
				click:function(e){
					e.preventDefault();
					var $this = $(this);
					var $child = $this.next();
					ULWidth = $.jMenu._returnUlWidth($this);
					$.jMenu._closeList($("#jMenu ul"));
					if($child.is(':hidden'))
						$.jMenu._showFirstChild($this);
				}
			});
			/* Close all when mouse  leaves */
			$('#jMenu').bind({
				mouseleave : function(){

					var F4NTimeout = setTimeout(function(){$.jMenu._closeAll();},opts.TimeBeforeClosing);

					//geändert - by Fit4net GbR
					$('body').click(function(){

						/*window.clearTimeout(F4NTimeout);
						$.jMenu._closeAll();*/

					});

				}
			});
		},


		/****************************
		*****************************
			jMenu Methods Below
		*****************************
		****************************/

		/** Show the First Child Lists **/
		_showFirstChild:function(el){

			if($.jMenu._IsParent(el))
			{
				var SecondList = el.next();

				if(SecondList.is(":hidden"))
				{
					var position = el.position();

					SecondList
					.css({
						top : position.top + opts.absoluteTop,
						left : position.left + opts.absoluteLeft,
						//width : ULWidth
					})
					.children().css({
						//width: ULWidth
					});

					$.jMenu._show(SecondList);
				}
			}
			else
				return false;
		},

		/** Show all others Child lists except the first list **/
		_showNextChild:function(el){
			if($.jMenu._IsParent(el))
			{
				var ChildList = el.next();
				if(ChildList.is(":hidden"))
				{
					var position = el.position();

					ChildList
					.css({
						top : position.top,
						left : position.left + ULWidth,
						width : ULWidth
					})
					.children().css({
						width:ULWidth
					});
					$.jMenu._show(ChildList);

				}
			}
			else
				return false;
		},


		/**************************************/
		/** Short Methods - Generals actions **/
		/**************************************/
		_hide:function(el){
			if($.jMenu._IsParent(el) && !el.next().is(':hidden'))
				$.jMenu._closeList(el.next());
			else if(($.jMenu._IsParent(el) && el.next().is(':hidden')) || !$.jMenu._IsParent(el))
				$.jMenu._closeList(el.parent().parent().find('ul'));
			else
				return false;
		},

		_show:function(el) {
			switch(opts.effects.effectTypeOpen)
			{
				case 'slide':
					el.stop(true, true).delay(opts.TimeBeforeOpening).slideDown(opts.effects.effectSpeedOpen, opts.effects.effectOpen);
					break;
				case 'fade':
					el.stop(true, true).delay(opts.TimeBeforeOpening).fadeIn(opts.effects.effectSpeedOpen, opts.effects.effectOpen);
					break;
				default :
					el.stop(true, true).delay(opts.TimeBeforeOpening).show();
			}
		},

		_closeList:function(el) {
			switch(opts.effects.effectTypeClose)
			{
				case 'slide':
					el.stop(true,true).slideUp(opts.effects.effectSpeedClose, opts.effects.effectClose);
					break;
				case 'fade':
					el.stop(true,true).fadeOut(opts.effects.effectSpeedClose, opts.effects.effectClose);
					break;
				default :
					el.hide();
			}

		},

		_closeAll:function(){
			if(!$('#jMenu').isHovered()) {
				$('#jMenu ul').each(function(){
					$.jMenu._closeList($(this));
					//Added by Fit4Net

					//IE 8 -> Fehler -> this.previousElementSibling... -> prüfen, falls nicht gesetzt...
					/*if (this.previousElementSibling.classList[1] == "F4NTest") {
						//alert(this.previousElementSibling.classList[1]);
						$('#Test').removeClass('overlay2');
					}*/
					//alert(this.id);
				});
			}
		},

		_IsParent:function(el) {
			if(el.next().is('ul')) return true;
			else return false;
		},

		_returnUlWidth:function(el) {
			switch(opts.ulWidth) {
				case "auto" :
					ULWidth = parseInt(el.parent().outerWidth());
					break;
				default :
					ULWidth = parseInt(opts.ulWidth);
			}
			return ULWidth;
		},

		_animateText:function(el) {
			var paddingInit = parseInt(el.css('padding-left'));

			el.hover(function(){
				$(this)
				.stop(true,true)
				.animate({
					paddingLeft: paddingInit + opts.paddingLeft
				}, 100);
			}, function(){
				$(this)
				.stop(true,true)
				.animate({
					paddingLeft:paddingInit
				}, 100);
			});
		},

		_isReadable:function(){
			if($("a.fNiv").length > 0)	return true;
			else return false;
		},

		_error:function(){
			alert('Please, check you have the \'.fNiv\' class on your first level links.');
		}
	};

	jQuery.fn.jMenu = function(options){
		if($.jMenu._isReadable())
			$.jMenu.init(options);
		else
			$.jMenu._error();
	};
})(jQuery);