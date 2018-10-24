page.includeJSLibs{
  jQuery = EXT:site_goldner/Resources/Public/scripts/jMenu/jquery/jquery.js
   jQueryUI = EXT:site_goldner/Resources/Public/scripts/jMenu/jquery/jquery-ui.js
   jMenu = EXT:site_goldner/Resources/Public/scripts/jMenu/jquery/jMenu.jquery.js
}
page.includeJS {

   jQueryDatePickerUI = EXT:site_goldner/Resources/Public/js/UI/jquery-ui-1.8.20.custom.min.js
   jQueryDatePickerUIDe = EXT:site_goldner/Resources/Public/js/UI/jquery.ui.datepicker-de.js
   StandardJS = EXT:site_goldner/Resources/Public/js/scripts.js
   lightbox = EXT:site_goldner/Resources/Public/js/lightbox/jquery.lightbox-0.5.js
   goldnerankerJS = EXT:site_goldner/Resources/Public/js/f4n_goldneranker.js
   validationEngine-de = EXT:site_goldner/Resources/Public/js/jQueryValPack/jquery.validationEngine-de.js
   validationEngine = EXT:site_goldner/Resources/Public/js/jQueryValPack/jquery.validationEngine.js
   validatepack = EXT:site_goldner/Resources/Public/js/jquery.validate.pack.js
   jqueryconfig = EXT:site_goldner/Resources/Public/js/jquery.config.frontend.js
   jQueryMin = http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js
   JQueryAccordeon = EXT:site_goldner/Resources/Public/js/F4NJQueryAccordeon.js
   #custom = EXT:site_goldner/Resources/Public/js/custom.js

   #mailformValidate = EXT:site_goldner/Resources/Public/js/parsley.min.js


}
[userFunc = user_powermailOnCurrentPage]
#Einstellugnen sind global bereits eingebettet...keine Dopplungen!
page.includeJS {
    powermail_jQuery >
    powermail_jQueryTools >
    powermail_frontend >
    powermail_jQueryToolsTabs >
    #powermail_frontend = EXT:powermail/res/js/powermail_frontend.js
}

page.jsFooterInline.10 >

[end]

page.includeJSFooter {

   jQueryForm = http://cdn.jquerytools.org/1.2.5/form/jquery.tools.min.js
   jQueryForm.external = 1
   jQueryTiny = http://cdn.jquerytools.org/1.2.5/tiny/jquery.tools.min.js
   jQueryTiny.external = 1
   F4NPowermail = EXT:site_goldner/Resources/Public/js/powermail.js
   #jQueryMin = http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
}


