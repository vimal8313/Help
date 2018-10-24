
########################################
####           main menu
########################################
lib.menu = HMENU
lib.menu {
    special = directory
    special.value = {$GoldnerAnkerIDs.HauptNavStartID}

    ### Erste Ebene ###
    1 = TMENU
    1 {
     noBlur = 1
     expAll = 1
     wrap = <ul id="jMenu">|</ul>
     NO = 1
     NO {
      wrapItemAndSub = <li class="first">|</li><li class="trenner"></li> |*| <li>|</li><li class="trenner"></li> |*| <li class="last">|</li>
      ATagTitle.field = abstract // description // title
      ATagParams = class="fNiv"
     }

     #Aktuelles Element
     CUR < .NO
     CUR = 1
     CUR.ATagParams = class="fNiv active"
     #Aktuelle Seite und falls Submenüs...
     CURIFSUB = 1
     CURIFSUB < .NO
     CURIFSUB.ATagParams = class="fNiv SubMenu active"
     #Rootline (Markiert die Root-Elemente, falls Unternav aktiv!)
     ACTIFSUB = 1
     ACTIFSUB < .CURIFSUB
     #Markiert Unterseiten, die nicht aktiv sind
     IFSUB = 1
     IFSUB < .CUR
     IFSUB.ATagParams = class="fNiv SubMenu"


    }
    ### reguläre zweite ebene ###
    2 = TMENU
    2 {
     noBlur = 1
     wrap = <ul>|</ul>
     NO = 1
     NO {
      doNotLinkIt = 1
      wrapItemAndSub = <li class="arrow"></li><li>|</li> |*| <li>|</li> |*| <li class="last">|</li>
      stdWrap.cObject = CASE
      stdWrap.cObject {
       key.field = doktype
       #Seitentyp Standart
       default = TEXT
       default {
        typolink.parameter.field = uid
        field = title
        typolink.ATagTitle.field = abstract // description // title
        stdWrap.htmlSpecialChars = 1
        stdWrap.wrap = <span>|</span>
       }
       # Seitentyp interne Weiterleitung
       4 = TEXT
       4 {
        field = title
        typolink.parameter.field = shortcut
        typolink.ATagTitle.field = abstract // description // title
        stdWrap.wrap = <span>|</span>
       }
       # 3 = Seitentyp externe URL
       3 = TEXT
       3 {
        field = title
        typolink.parameter.field = url
        typolink.extTarget.field = target
        typolink.ATagTitle.field = abstract // description // title
        stdWrap.wrap = <span>|</span>
       }
      }
     }

     CUR < .NO
     CUR = 1
     #CUR.wrapItemAndSub = <li class="active">|</li>
     CUR.stdWrap.wrap = <span class="active">|</span>
     #ATagParams

     IFSUB = 1
     IFSUB < .NO

     CURIFSUB < .NO
     CURIFSUB = 1
     #CURIFSUB.wrapItemAndSub = <li class="active">|</li>
     CUR.stdWrap.wrap = <span class="active">|</span>

     ACTIFSUB = 1
     ACTIFSUB < .CURIFSUB


    }

}

########################################
####          breadcrumb menu + TEXT
########################################
lib.breadcrumb = HMENU
lib.breadcrumb {
    special = rootline
    special.range = 0|3
    entryLevel = 0
    wrap =
    1 = TMENU
    1 {
     noBlur = 1
      NO {
          doNotLinkIt = 1
          wrapItemAndSub = | &nbsp; > &nbsp; |*| | &nbsp; > &nbsp; |*| |
          stdWrap.cObject = CASE
          stdWrap.cObject {
            key.field = nav_hide

           default = TEXT
           default {
             typolink.parameter.field = uid
             field = title
             typolink.ATagTitle.field = abstract // description // title
             stdWrap.htmlSpecialChars = 1
            }

            isFalse = TEXT
            isFalse {
             typolink.parameter.field = uid
             field = title
             typolink.ATagTitle.field = abstract // description // title
             stdWrap.htmlSpecialChars = 1
            }

           }
         }
      }
}

lib.breadcrumbText = TEXT
lib.breadcrumbText {
    value = {$GoldnerAnkerText.Breadcrumb.de}
}
[globalVar = GP:L = 1]
 lib.breadcrumbText.value = {$GoldnerAnkerText.Breadcrumb.en}
[global]
[globalVar = GP:L = 2]
 lib.breadcrumbText.value = {$GoldnerAnkerText.Breadcrumb.cz}
[global]

########################################
####    Bottom Navigation / Impressum
########################################
lib.bottom_menu = HMENU
lib.bottom_menu {
    special = directory
    special.value = {$GoldnerAnkerIDs.BottomNavStartID}
    1 = TMENU
    1 {
     noBlur = 1
     wrap = <ul>|</ul>
     NO = 1
     NO {
      wrapItemAndSub = <li>|</li> |*| <li>|</li> |*| <li class="last">|</li>
      ATagTitle.field = abstract // description // title
      #ATagParams =  |*| |*| class="impressum"
     }
     CUR = 1
     CUR < .NO
    }
}