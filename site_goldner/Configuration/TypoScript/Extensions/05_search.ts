
lib.searchBox = COA
lib.searchBox.wrap = <div class="header-search d-lg-flex">|</div>
lib.searchBox{
    20 = TEXT
    20.typolink.parameter = 40
    20.typolink.additionalParams = &tx_indexedsearch_pi2[action]=search&tx_indexedsearch_pi2[controller]=Search
    20.typolink.returnLast = url
    20.wrap = <form method="post" id="searchform" action="|">

    30 = COA
    30 {
        10 = TEXT
        10.wrap = <div class="form-group"><label class="sr-only" for="header-search"></label><input type="text" class="text" name="tx_indexedsearch_pi2[search][sword]" class="form-control" id="header-search" value="Suchbegriff" onfocus="if(this.value=='Suchbegriff') this.value='';"><input type="submit" class="search-button SuchBtn" value="Suche starten"><em class="icon icon-search"></em></input><span class="search-button search-button-click"><em class="icon icon-search"></em></span></div></form>
   }
}


plugin.tx_indexedsearch {
  view {
    templateRootPaths {
        101 = typo3conf/ext/site_goldner/Resources/Private/Templates/Extensions/indexed_search/Templates/
      }
      partialRootPaths {
        101 = typo3conf/ext/site_goldner/Resources/Private/Templates/Extensions/indexed_search/Partials/
      }
      layoutRootPaths {
        101 = typo3conf/ext/site_goldner/Resources/Private/Templates/Extensions/indexed_search/Layouts/
      }
  }
}