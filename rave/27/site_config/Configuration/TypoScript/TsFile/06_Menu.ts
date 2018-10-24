lib.Menu = COA
lib.Menu {
    10 = HMENU
    10 {

        1 = TMENU
        1 {
            wrap = <ul>|</ul>
            expAll = 1
            NO {
                wrapItemAndSub  = <li>|</li>
                stdWrap.wrap  =  |*| | |*| <i class="fa fa-home" aria-hidden="true"></i>&nbsp;|
                stdWrap.htmlSpecialChars = 1
            }
            IFSUB = 1
            IFSUB {
                wrapItemAndSub  = <li class="drop_down">|</li>
                stdWrap.wrap = | &nbsp;<i class="fa fa-caret-down"></i>
                stdWrap.htmlSpecialChars = 1
            }
            ACTIFSUB = 1
            ACTIFSUB {
                wrapItemAndSub  = <li class="drop_down">|</li>
                stdWrap.wrap = | &nbsp;<i class="fa fa-caret-down"></i>
                stdWrap.htmlSpecialChars = 1
            }
            ACT < .NO
            ACT = 1
            ACT.wrapItemAndSub = <li class="active">|</li>
        }
        2 = TMENU
        2 {
            wrap = <ul class="dropdown-content">|</ul>
            expAll = 1
            NO {
                wrapItemAndSub  = <li>|</li>
                stdWrap.htmlSpecialChars = 1
            }
            ACT < .NO
            ACT = 1
            ACT.wrapItemAndSub = <li>|</li>
        }
    }
}

lib.footer_menu = COA
lib.footer_menu {
    10 = HMENU
    10 {
        special = directory
        special.value = 9
        1 = TMENU
        1 {
            expAll = 1
            NO {
                wrapItemAndSub  = <li>|</li>
                stdWrap.htmlSpecialChars = 1
            }
            CUR < .NO
            CUR = 1
            CUR.wrapItemAndSub = <li>|</li>
        }
    }
}

lib.footerend_menu = COA
lib.footerend_menu {
    10 = HMENU
    10 {
        special = directory
        special.value = 22
        1 = TMENU
        1 {
            expAll = 1
            NO {
                wrapItemAndSub  = <li>|</li>
                stdWrap.htmlSpecialChars = 1
            }
            CUR < .NO
            CUR = 1
            CUR.wrapItemAndSub = <li>|</li>
        }
    }
}

lib.social_menu = CONTENT
lib.social_menu{
    table = tt_content
    select.pidInList = 8
    select.orderBy = sorting
    select.where = colPos = 0
}