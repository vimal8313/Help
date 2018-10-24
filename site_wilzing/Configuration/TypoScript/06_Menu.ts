lib.Menu = COA
lib.Menu {
    10 = HMENU
    10 {
        special = directory
        special.value = 6
        1 = TMENU
        1 {
            wrap = |
            expAll = 1
            NO {
                wrapItemAndSub  = <li>|</li>
                stdWrap.htmlSpecialChars = 1
            }
            CUR < .NO
            CUR = 1
            CUR.wrapItemAndSub = <li class="active">|</li>
        }
    }
}

lib.Sidemenu = COA
lib.Sidemenu {
    10 = HMENU
    10 {
        1 = TMENU
        1 {
            wrap = |
            expAll = 1
            NO {
                wrapItemAndSub  = <li>|</li>
                stdWrap.htmlSpecialChars = 1
            }
            CUR < .NO
            CUR = 1
            CUR.wrapItemAndSub = <li class="active">|</li>
        }
    }
}