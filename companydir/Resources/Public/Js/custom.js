
$(document).ready(function() {

    $('.show-modal').on('click', function (e) {
    e.preventDefault();
        $.fancybox({
            type: 'iframe',
            autoSize : true,
            width: 350,
            height: 350,
            href: loginlink,
            afterLoad:function(){
                $('body',$('.fancybox-iframe').contents().find('html').css({'overflow-y':'hidden', 'height':'auto'}));
            }
        });
    });
});

// $('.fancybox-iframe').ready(function(){
// 	if($.trim($(".tx-felogin-pi1").html())==''){
//    	  $('.fancybox-overlay.fancybox-overlay-fixed', window.parent.document).remove();
//     }
// });
