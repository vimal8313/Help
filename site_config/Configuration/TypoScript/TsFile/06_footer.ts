lib.footer_logo = TEXT
lib.footer_logo {
    value = <img src="{$website.footerLogo}" alt="müller-bbm">
    typolink.parameter = {$website.rootPid}
}



lib.footerEventMenu = COA
lib.footerEventMenu.wrap = <ul class="list-marked text-extra-small p text-left">|</ul>
lib.footerEventMenu.10  = HMENU
lib.footerEventMenu.10.includeNotInMenu = 1
lib.footerEventMenu.10.special = directory
lib.footerEventMenu.10.special.value = 3
lib.footerEventMenu.10 {
    1 = TMENU
    1{
        expAll = 1
        NO {
            wrapItemAndSub = <li class="offset-top-10">|</li>
            ATagTitle.field = 1
            ATagParams = class="nav-link"

        }
    }
}

lib.footerVitalquelleMenu = COA
lib.footerVitalquelleMenu.wrap = <ul class="list-marked text-extra-small p text-left">|</ul>
lib.footerVitalquelleMenu.10  = HMENU
lib.footerVitalquelleMenu.10.includeNotInMenu = 1
lib.footerVitalquelleMenu.10.special = directory
lib.footerVitalquelleMenu.10.special.value = 4
lib.footerVitalquelleMenu.10 {
    1 = TMENU
    1{
        expAll = 1
        NO {
            wrapItemAndSub = <li class="offset-top-10">|</li>
            ATagTitle.field = 1
            ATagParams = class="nav-link"

        }
    }
}

lib.footerInfoMenu = COA
lib.footerInfoMenu.wrap = <ul class="list-marked text-extra-small p text-left">|</ul>
lib.footerInfoMenu.10  = HMENU
lib.footerInfoMenu.10.includeNotInMenu = 1
lib.footerInfoMenu.10.special = directory
lib.footerInfoMenu.10.special.value = 6
lib.footerInfoMenu.10 {
    1 = TMENU
    1{
        expAll = 1
        NO {
            wrapItemAndSub = <li class="offset-top-10">|</li>
            ATagTitle.field = 1
            ATagParams = class="nav-link"

        }
    }
}

lib.copyrightText = TEXT
lib.copyrightText.data = date:U
lib.copyrightText.strftime = %Y
lib.copyrightText.noTrimWrap = |{$website.companyName} &copy; <span id="copyright-year">|</span>   |


