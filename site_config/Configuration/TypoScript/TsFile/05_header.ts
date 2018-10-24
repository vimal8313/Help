lib.logo = TEXT
lib.logo {
    value = <img src="{$website.logoPath}" alt="">
    typolink.ATagParams = class="brand-name"
    typolink.parameter = {$website.rootPid}
}
lib.logo_small = TEXT
lib.logo_small {
    value = <img src="{$website.logoSmallPath}" alt="">
    typolink.ATagParams = class="brand-name"
    typolink.parameter = {$website.rootPid}
}


lib.mainMenu = COA
lib.mainMenu.wrap = <ul class="rd-navbar-nav">|</ul>
lib.mainMenu.10  = HMENU
lib.mainMenu.10.special = directory
lib.mainMenu.10.special.value = {$website.rootPid}
lib.mainMenu.10 {
    1 = TMENU
    1{
        expAll = 1
        NO {
            wrapItemAndSub = <li>|</li>
            ATagTitle.field = 1

        }

        ACT = 1
        ACT{
            wrapItemAndSub = <li class="active">|</li>
            ATagTitle.field = 1

        }

    }
    2 < .1
    2{
        expAll = 1
        wrap = <ul class="rd-navbar-dropdown">|</ul>
        NO {
            wrapItemAndSub = <li>|</li>
            ATagTitle.field = 1

        }

        ACT = 1
        ACT{
            wrapItemAndSub = <li class="active">|</li>
            ATagTitle.field = 1
        }
    }
}

lib.social_menu = CONTENT
lib.social_menu{
 	table = tt_content
  	select.pidInList = 22
  	select.orderBy = sorting
  	select.where = colPos = 0
}

