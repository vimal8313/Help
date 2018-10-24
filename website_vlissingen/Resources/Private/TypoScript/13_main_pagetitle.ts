lib.pagetitle = TEXT
lib.pagetitle.wrap = <h1 class="pagetitle">|</h1>
lib.pagetitle.data = page : title

[globalVar = GP:tx_windproductcatalog_pi1|product > 0]
lib.pagetitle >
[global]

[globalVar = GP:tx_ttnews|tt_news > 0]
lib.pagetitle >
[global]

[PIDinRootline = {$pages.uid.appointments}]
lib.pagetitle >
[global]

[globalVar = TSFE:id == {$pages.uid.detailGVOP}]
lib.pagetitle >
[global]

[PIDinRootline = {$pages.uid.deutsch}]
lib.pagetitle = TEXT
lib.pagetitle.wrap = <h1 class="pagetitle" lang="de">|</h1>
lib.pagetitle.data = page : title
[global]

[PIDinRootline = {$pages.uid.english}]
lib.pagetitle = TEXT
lib.pagetitle.wrap = <h1 class="pagetitle" lang="en">|</h1>
lib.pagetitle.data = page : title
[global]

[PIDinRootline = {$pages.uid.francais}]
lib.pagetitle = TEXT
lib.pagetitle.wrap = <h1 class="pagetitle" lang="fr">|</h1>
lib.pagetitle.data = page : title
[global]