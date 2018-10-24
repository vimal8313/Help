lib.logo = TEXT
lib.logo.value (
	<a class="logo" href="{$baseURL}"><img src="typo3conf/ext/site_goldner/Resources/Public/images/logo.png" alt=""></a>
    <a class="logo-sticky" href="{$baseURL}"><img src="typo3conf/ext/site_goldner/Resources/Public/images/logo-small.png" alt=""></a>
)



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

############################################################
####     News anzeigen innerhalb eines FCE
############################################################
lib.F4N_NewsText < plugin.tx_f4ngoldneranker_pi1
lib.F4N_NewsText {
	plugintype = ShortNews
	TextZeichenfuerKuerzen = 75
}
########################################
# Newsbox
########################################
lib.news_title = TEXT
lib.news_title {
	value = {$GoldnerAnkerText.News.de}
}

########################################################
### MY TYPOSCRIPT
########################################################


#######################################################################
## 	this is a generic typoscript setup for all languages and servers
#######################################################################

# important: do not put host/server/language specific configuration here!
# please use [production|staging|local]_setup.typoscript for configuring URL or server specific settings


config {
	# default: enable cache
	no_cache = 0

	removeDefaultJS = 1
	noBlur = 0

	headerComment (
	 Made by Fit4Net - Dr. Dölling & Geske GbR - www.fit-4.net
	)

	#Doc-Type
    doctype = xhtml_trans
    doctypeSwitch = 1
    xmlprologue = none
    xhtml_cleaning = all
    #<title>-Tag entfernen
    noPageTitle = 2
}

########################################
####           RealURL
########################################
config {
  simulateStaticDocuments = 0
  tx_realurl_enable = 1
}

########################################
####           eMail Protection
########################################
#javascript
#config.spamProtectEmailAddresses = 2
#config.spamProtectEmailAddresses_atSubst = &nbsp;(at)&nbsp;
#config.spamProtectEmailAddresses_lastDotSubst = &nbsp;(punkt)&nbsp;

#ascii
 config.spamProtectEmailAddresses = ascii
 config.spamProtectEmailAddresses_atSubst = &nbsp;(at)&nbsp;
# config.spamProtectEmailAddresses_lastDotSubst = &nbsp;(punkt)&nbsp;

########################################
####   generic language settings
########################################

#german (default)
config {
	sys_language_uid = 0
  	sys_language_mode = content_fallback
	sys_language_overlay = hideNonTranslated
	linkVars = L
	language = de
	locale_all = de_DE
	htmlTag_langKey = de
}
[globalVar = GP:L=1]
config {
   sys_language_uid = 1
   language = en
   config.locale_all = english
   htmlTag_langKey = en
}
[global]
[globalVar = GP:L=2]
config {
   sys_language_uid = 2
   language = cz
   config.locale_all = cz_CZ
   htmlTag_langKey = cz
}
[global]

########################################
####           language links
########################################
lib.link_lang_de = TEXT
lib.link_lang_de {
	typolink.returnLast = url
	typolink.parameter.data = page:uid
    typolink.additionalParams = &L=0
}
lib.link_lang_en = TEXT
lib.link_lang_en {
	typolink.returnLast = url
	typolink.parameter.data = page:uid
    typolink.additionalParams = &L=1
}
lib.link_lang_cz = TEXT
lib.link_lang_cz {
	typolink.returnLast = url
	typolink.parameter.data = page:uid
    typolink.additionalParams = &L=2
}


########################################
# Suchbox
########################################
lib.searchbox.link = TEXT
lib.searchbox.link {
	typolink.parameter = {$GoldnerAnkerIDs.SuchePID}
    typolink.returnLast = url
}

#prefill searchbox with descriptive word (or the last search word)
lib.searchbox.prefill = COA_INT
lib.searchbox.prefill {
   10 = TEXT
   10.data = GPvar:tx_indexedsearch|sword
   10.htmlSpecialChars = 1
   10.if.isTrue.data = GPvar:tx_indexedsearch|sword

   20 = TEXT
   20.value = {$GoldnerAnkerText.search_prefill.de}
   20.if.isFalse.data = GPvar:tx_indexedsearch|sword
}

#clear generic searchword description onfocus
lib.searchbox.onfocus = COA
lib.searchbox.onfocus {
   10 = TEXT
   10.value = {$GoldnerAnkerText.search_prefill.de}
   10.wrap = if(this.value=='|') this.value='';
}

#put the language code into the self-built searchform
lib.searchbox.lang = TEXT
lib.searchbox.lang.value < config.sys_language_uid

lib.searchbox.btnText = TEXT
lib.searchbox.btnText {
	value = {$GoldnerAnkerText.search_btn.de}
}

########################################
####   Prepare Page
########################################
#Abstände zw. den einzelnen Headerparts
lib.linebreak = TEXT
lib.linebreak.value (
)

page = PAGE
page.typeNum = 0


#Seitetitel (modifiziert)
page.headerData.30 = COA
page.headerData.30 {
   10 = TEXT
   10.field = title
   20 = TEXT
   20.field = subtitle
   20.wrap =  - |
   20.required = 1
   wrap = <title>Hotel Goldner Anker Bad Elster: |</title>
}

#telling IE8 to actually use the IE8 rendering engine
[browser = msie]
page.headerData.40 = TEXT
page.headerData.40.value = 	<meta http-equiv="X-UA-Compatible" content="IE=8" />
page.headerData.41 < lib.linebreak
[GLOBAL]

page.headerData.43 < lib.linebreak

page.headerData.55 < lib.linebreak

############################################################
####         Page Meta information (Title and Description)
############################################################

  page.meta{
    abstract = {$GoldnerAnkerText.meta.de.abstract}
    author = {$GoldnerAnkerText.meta.author}
    revisit-after = 14 days
    publisher = {$GoldnerAnkerText.meta.author} & Fit4Net
    copyright = {$GoldnerAnkerText.meta.author} & Fit4Net
	language < config.htmlTag_langKey
    robots = INDEX,FOLLOW
  }
  [globalVar = GP:L = 1]
  page.meta.abstract = {$GoldnerAnkerText.meta.en.abstract}
  [end]
  [globalVar = GP:L = 2]
  page.meta.abstract = {$GoldnerAnkerText.meta.cz.abstract}
  [end]
  page.headerData.31 < lib.linebreak

  #Description COA füllen
  page.headerData.32 = COA
  page.headerData.32 {
   1 = TEXT
   1 {
    field = title
    wrap = |
   }
   5 = TEXT
   5 {
    value =
    noTrimWrap = | |
   }
   10 = TEXT
   10 {
    field = description
    wrap = |
   }
   15 = TEXT
   15 {
    value = :
    noTrimWrap = | |
   }
   20 = TEXT
   20 {
   	value = {$GoldnerAnkerText.meta.de.description}
   }
  }
  [globalVar = GP:L = 1]
  page.headerData.32.20.value = {$GoldnerAnkerText.meta.en.description}
  [end]
  [globalVar = GP:L = 2]
  page.headerData.32.20.value = {$GoldnerAnkerText.meta.cz.description}
  [end]
  page.headerData.32 {
   stdWrap.noTrimWrap (

|
<meta name="DESCRIPTION" content="|">
|
)
   # Entfernt Zeilenumbrüche und Leerzeichen
   #wrap = <meta name="DESCRIPTION" content="|">
  }

  #Keywords COA füllen
  page.headerData.33 = COA
  page.headerData.33 {
   1 = TEXT
   1 {
    field = title
    wrap = |
   }
   5 = TEXT
   5 {
    value = ,
   }
   10 = TEXT
   10 {
    field = keywords
    wrap = |
   }
   15 = TEXT
   15 {
    value = ,
   }
   20 = TEXT
   20 {
   	value = {$GoldnerAnkerText.meta.de.keywords}
   }
  }
  [globalVar = GP:L = 1]
  page.headerData.33.20.value = {$GoldnerAnkerText.meta.en.keywords}
  [end]
  [globalVar = GP:L = 2]
  page.headerData.33.20.value = {$GoldnerAnkerText.meta.cz.keywords}
  [end]
  page.headerData.33 {
stdWrap.noTrimWrap (
|<meta name="KEYWORDS" content="|">
|
)
  }

#page.headerData.600 = TEXT
#page.headerData.600.value (
#
#<link rel="shortcut icon" href="{$config.baseURL}fileadmin/favicon.ico" type="image/x-icon" />
#)

########################################
####           Output Page
########################################

page.10 = USER
page.10.userFunc = tx_templavoila_pi1->main_page




############################################################
####        RTE configuration
############################################################

#image dimensions for RTE
RTE.default.buttons.image.options.plain.maxWidth = 465
RTE.default.buttons.image.options.plain.maxHeight = 1000
RTE.default.buttons.image.options.magic.maxWidth = 465
RTE.default.buttons.image.options.magic.maxHeight = 1000

#max dimensions for RTE within news/blog context
RTE.config.tt_news.bodytext.image.options.plain.maxWidth = 465
RTE.config.tt_news.bodytext.image.options.plain.maxHeight = 1000
RTE.config.tt_news.bodytext.image.options.magic.maxWidth = 465
RTE.config.tt_news.bodytext.image.options.magic.maxHeight = 1000

RTE.default {
    proc {
      dontConvBRtoParagraph = 1
      preserveTables = 1
      #typolist = 1
	  overruleMode = ts_css,txdam_media
	  allowTags = table, tbody, tr, th, td, h1, h2, h3, h4, h5, h6, div, p, br, ul, ol, li, re, blockquote, strong, em, b, i, u, sub, sup, strike, a, img, nobr, hr, tt, q, cite, abbr, acronym, center
      denyTags = font
	  allowTagsOutside = img,hr
	  allowedClasses >
	  allowedClasses = thickbox

      HTMLparser_rte {
              allowTags < RTE.default.proc.allowTags
              denyTags < RTE.default.proc.denyTags

			  # kill these tags (we don't want any type of span tag within RTE - e.g. <span class="MsoNormal"> or <span lang="XX")
              removeTags = font, span
              # remove html comments
              removeComments = 1
              # tags die nicht übereinstimmen werden nicht entfernt (protect / 1 / 0)
              keepNonMatchedTags = 0

			  tags.media.protect = 1
			  tags.media.allowedAttribs = 1
      }

      entryHTMLparser_db = 1
      entryHTMLparser_db {
              allowTags < RTE.default.proc.allowTags
              denyTags < RTE.default.proc.denyTags
			  removeTags < RTE.default.proc.HTMLparser_rte.removeTags
			  #clean tags
              noAttrib = b, i, u, strike, sub, sup, strong, em, quote, blockquote, cite, tt, br, center
              rmTagIfNoAttrib = span,div,font
   	  }

   }
  classesLinks = thickbox
  classesAnchor = thickbox
}

# <media>-Tag verarbeiten
plugin.tx_dam_tsfemediatag {
	procFields {
		file_size = 1
	}
	format = filesize
	tag {
		current = 1
		typolink.parameter.data = parameters : allParams
		typolink.extTarget = {$styles.content.links.extTarget}
		typolink.target = {$styles.content.links.target}
		typolink.title {
			dataWrap = { field : txdam_file_name } ({ field : txdam_file_size })
			htmlspecialchars = 1
		}
	parseFunc.constants = 1
	}
}
lib.parseFunc.tags.media = < plugin.tx_dam_tsfemediatag
lib.parseFunc_RTE.tags.media = < plugin.tx_dam_tsfemediatag

# Use same processing as on entry to database to clean content pasted into the editor
RTE.default.enableWordClean.HTMLparser < RTE.default.proc.entryHTMLparser_db
# FE RTE configuration (htmlArea RTE only)
RTE.default.FE < RTE.default
RTE.default.FE.userElements >
RTE.default.FE.userLinks >

# Breite des RTE in Fullscreen-Ansicht
TCEFORM.tt_content.bodytext.RTEfullScreenWidth= 100%

RTE.config.tt_content.bodytext.proc.overruleMode = ts_css,txdam_media
RTE.config.tt_content.bodytext.types.text.proc.overruleMode = ts_css,txdam_media
RTE.config.tt_content.bodytext.types.textpic.proc.overruleMode = ts_css,txdam_media

# remove default link titles in RTE
RTE {
   classesAnchor {
     externalLink {
       altText =
       titleText =
     }
     externalLinkInNewWindow {
       altText =
       titleText =
     }
     internalLink {
       altText =
       titleText =
     }
     internalLinkInNewWindow {
       altText =
       titleText =
     }
     download {
       altText =
       titleText =
     }
     mail {
       altText =
       titleText =
     }
   }
}



############################################################
####       customizing backend for better usability
####	   (include the setup files into TS-Config of the root-page!!!
############################################################

#removing unused content elements
TCEFORM.tt_content.CType {
	removeItems = textpic
}

#removing unused header layout styles
TCEFORM.tt_content.header_layout.removeItems = 2,3,4,5
TCEFORM.tt_content.header_layout.altLabels.1 = Preview Überschrift

#removing unused tt_content options
TCEFORM.tt_content.colPos.disabled = 1
TCEFORM.tt_content.section_frame.disabled = 1

#removing unused pages options
TCEFORM.pages.media.disabled = 1

#renaming page layout modes
TCEFORM.pages.layout.altLabels.0 = Normale Unterseite

#provide page layout selector (make the pages.layout accessible by css)
lib.sitetype = TEXT
lib.sitetype.data = TSFE:page|layout
lib.sitetype.wrap = color|


############################################################
####        search / indexer (indexed_search)
############################################################

page.config.index_enable = 1
config.index_enable = 1
page.config.index_externals = 1
config.index_externals = 1

plugin.tx_indexedsearch {
	#show only search results of the current language
	_DEFAULT_PI_VARS {
		lang < config.sys_language_uid
		#anderen Einstellungen bereits in den Hidden Tags abgelegt
	}

	_LOCAL_LANG.de.pi_list_browseresults_next = vor >
	_LOCAL_LANG.de.pi_list_browseresults_prev = < zurück
	_LOCAL_LANG.en.pi_list_browseresults_next = next >
	_LOCAL_LANG.en.pi_list_browseresults_prev = < previous

	#CSS (Default-Formate löschen)
	_CSS_DEFAULT_STYLE >

	templateFile = fileadmin/templates/MainSearch.html
	#Nur Root-Seite durchsuchen
	search.rootPidList = {$GoldnerAnkerIDs.homePID}

	show {
		# Suchregeln
		rules = 0
		# erweiterte Suche abschalten
		advancedSearchLink = 0
	}
}

############################################################
####         some html configuration / optimization
############################################################

#no xml declaration in IE
[browser = msie]
config.xmlprologue = none
[global]

#remove all typo3 internal html comments by default
page.config.disablePrefixComment = 1

#remove all unwanted default css
plugin.tx_cssstyledcontent._CSS_DEFAULT_STYLE >
plugin.tx_indexedsearch._CSS_DEFAULT_STYLE >
plugin.tx_srfreecap_pi2._CSS_DEFAULT_STYLE >

#place a clear div at the end of a standalone bullet list
tt_content.bullets.20.wrap = | <div class="clear">&nbsp;</div>

#removing tt_content wrappings and other Wrap Settings
#Erstsettings gehören zur Ext css_styled_content; typo3/sysext/css_styled_content/static/setup.exe
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines {
	addAttributes.P.class >
	encapsTagList := addToList(table,tbody,tr,td,th)
	#verhindert jedoch nicht, dass innerhalb von td, etc. ein Inhalt gewrappt wird
}

#Table-Settings (1. keine Default-Klasse)
lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.class >

tt_content.text.20.parseFunc {
  externalBlocks = ul, ol, blockquote, table, div

  #verhinderte sonst die Verlinkung innerhalb von <ul> Listen und Attributen in <ul>-Listen
  externalBlocks.ul >
  externalBlocks.ol >

  #Table-Settings
  externalBlocks.table.stdWrap.HTMLparser {
   tags.table.fixAttrib.class >
  }

  #DIV analog Setup.txt
  div.stripNL = 1
  div.callRecursive = 1
}

#use click-enlarge field to mark thickbox links
tt_content.image.20.1.imageLinkWrap.typolink {
	ATagParams = class="thickbox"
	ATagParams.if {
        value.field = image_zoom
        equals = 1
	}
}
tt_content.textpic.20.1.imageLinkWrap.typolink < tt_content.image.20.1.imageLinkWrap.typolink

#remove wrapping div for headers
lib.stdheader.stdWrap.dataWrap >

#remove <a id="c{field:_LOCALIZED_UID}"></a>| in english/czech translations
tt_content.stdWrap.prepend.dataWrap >

#remove wrapping div for Content-Elements
tt_content.stdWrap.innerWrap.cObject.default >
tt_content.stdWrap.innerWrap.cObject.default = COA
tt_content.stdWrap.innerWrap.cObject.default {
  1 = TEXT
  1.value = |
}


#header for FCE (aktiviert Header bei allen FCE)
tt_content.templavoila_pi1.10 =< lib.stdheader


#numbering all other header tags according to position on page
lib.stdheader.10.1.dataWrap = <h1>|</h1>
lib.stdheader.10.1.fontTag = |
lib.stdheader.10.2.dataWrap = <h2>|</h2>
lib.stdheader.10.2.fontTag = |
lib.stdheader.10.3.dataWrap = <h3>|</h3>
lib.stdheader.10.3.fontTag = |
lib.stdheader.10.4.dataWrap = <h4>|</h4>
lib.stdheader.10.4.fontTag = |
lib.stdheader.10.5.dataWrap = <h5>|</h5>
lib.stdheader.10.5.fontTag = |

lib.stdheader.10.setCurrent.htmlSpecialChars = 0
lib.stdheader.10 {
    1.htmlSpecialChars = 0
    2.htmlSpecialChars = 1
    3.htmlSpecialChars = 1
    4.htmlSpecialChars = 1
}

TCEFORM.tt_content.layout.altLabels.0 = Normal / Automatische Breite für alle Spalten

#provide different table layouts for lists
tt_content.table.20.tableParams_0 {
}

############################################################
####       better markup for media uploads element
############################################################

tt_content.uploads.20 {
	additionalClass{
		image = bmp,gif,ico,jpg,jpeg,png,tif,tiff,psd,eps,pdf,doc,xls
		video = wmv,avi,asf,mpg,mov,mpeg
		audio = mp3,wav
	}
	layout{
		global=<div class="filelinks filelinks_layout_###LAYOUT###">###FILE###</div>
		#file=<div class="###CLASS###"><span class="fileextension">###FILEEXT###</span><span><a href="###URL###">###TITLE###</a> ###FILESIZE### ###CRID### ###MYMARK###</span><span>###DESCRIPTION###</span></div>
		file (
			<div class="fileitem ###CLASS###">
				<span class="thumb">###ICON###</span>
				<span class="filedescription">###DESCRIPTION###</span>
				<a class="download" href="###URL###" target="_blank"><img src="fileadmin/templates/img/base/press_img_dl_new.gif"></a>
				<div class="clear">&nbsp;</div>
			</div>
		)
		fileSize{
			layout = (###SIZE### ###SIZEFORMAT###)
			char = upper
			format = auto
			desc = b|kb|mb
			round = 2
			decimalPoint = .
		}
		hideNotProcessedMarkers=1
	}
	linkProc {
		iconCObject {
			stdWrap.typolink.parameter.data = register : ICON_REL_PATH
			stdWrap.typolink.target = _blank
			makeThumbs = 1
			file.width = 180
		}
	}
}

############################################################
####        felogin - Anpassungen
############################################################
plugin.tx_felogin_pi1 {
   # So kann man den Willkommens Header komplett löschen (auch ohne Template)
   welcomeHeader_stdWrap.cObject = TEXT
   welcomeHeader_stdWrap.cObject.value =
   welcomeHeader_stdWrap.wrap = |
   #kein Hinweis-Text auf Login etc.
   welcomeMessage_stdWrap.cObject = TEXT
   welcomeMessage_stdWrap.cObject.value =
   welcomeMessage_stdWrap.wrap = |
   #Pfad zum Login-Box Template angeben
   templateFile = fileadmin/templates/fe-login-template.html

   #CSS (Default-Formate löschen)
	_CSS_DEFAULT_STYLE >
}

############################################################
####      f4n_goldneranker
############################################################

plugin.tx_f4ngoldneranker_pi1 {
    smarty {
        // The location of your Smarty templates for this extension
        template_dir = fileadmin/templates

        // Enable debugging console for all templates
        debugging = {$config.smarty_debug}

        // Report all PHP errors
        error_reporting = E_ALL
    }

    GeoMaps {
    	mapLng < plugin.tx_rggooglemap_pi1.mapLng
    	mapLat < plugin.tx_rggooglemap_pi1.mapLat
    }

	general_stdWrap.parseFunc < tt_content.text.20.parseFunc

	personcount_max = 8
	naechtecount_max = 28
	ssb_type < lib.badtype.value
	EZZZuschlag = 10

	offers.preview {
	    Default = main_offers_preview.html
	    ImgWidth = 308c
	    ImgHeight = 172c
	    MaxItems = 50
	}

	TextZeichenfuerKuerzenSpryText = 80
	TextZeichenfuerKuerzenRoomText = 180

	baseURL = {$config.baseURL}

	WinterSeasonDiscount {
		#RabattpC = 10
		RabattpC = 0
		Zeitraeume = 2.1.-31.3.;1.11.-23.12.
	}

	ImgGallery {
		SlideShowBig {
			ImgWidth = 407c
			ImgHeight = 355c
		}
		SlideShowSmall {
			ImgWidth = 272
			ImgHeight = 238c
		}
		SlideShowWithText {
			ImgWidth =308
			ImgHeight = 172c
		}
	}

	SpryImg {
		ImgWidth = 272
		ImgHeight = 152c
	}

	Rooms {
		pidList = {$GoldnerAnkerIDs.UnterkuenfteDataStoragePIDList}
		Zimmertypen {
  			0 {
  				#Definitionen aus TCA
  				1 = Einzelzimmer
  				2 = Doppelzimmer
  				3 = Mehrbett-Zimmer
  				8 = Ferienwohnung
  			}
  		}
	}

}

#Globale PID-Einstellungen (früher getrennt, wegen unterschiedlicher Seitenbereiche BE/BB)
#plugin.tx_f4ngoldneranker_pi1.ssb_homePID = {$baederIDs.bbhomePID}
plugin.tx_f4ngoldneranker_pi1.f4n_orderstoragePID = {$GoldnerAnkerIDs.orderstoragePID}
plugin.tx_f4ngoldneranker_pi1.f4n_basketPID = {$GoldnerAnkerIDs.WarenkorbPID}
plugin.tx_f4ngoldneranker_pi1.f4n_RoomsAvailabilityCheckPID = {$GoldnerAnkerIDs.RoomsAvailabilityCheckPID}
plugin.tx_f4ngoldneranker_pi1.f4n_BuchungsAnfragePauschalenPID = {$GoldnerAnkerIDs.BuchungsAnfragePauschalenPID}
plugin.tx_f4ngoldneranker_pi1.f4n_orderthankyouPID = {$GoldnerAnkerIDs.orderThankYouPID}
plugin.tx_f4ngoldneranker_pi1.f4n_ordererrorPID = {$GoldnerAnkerIDs.orderErrorPID}
plugin.tx_f4ngoldneranker_pi1.f4n_BuchungZimmerPID = {$GoldnerAnkerIDs.BuchungZimmerPID}
plugin.tx_f4ngoldneranker_pi1.f4n_AnfrageZimmerPID = {$GoldnerAnkerIDs.BuchungAnfrageZimmerPID}
plugin.tx_f4ngoldneranker_pi1.f4n_AnfrageZimmerThankYouPID = {$GoldnerAnkerIDs.BuchungAnfrageZimmerThankYouPID}
plugin.tx_f4ngoldneranker_pi1.f4n_BuchungZimmerThankYouPID = {$GoldnerAnkerIDs.BuchungZimmerThankYouPID}
plugin.tx_f4ngoldneranker_pi1.f4n_BuchungZimmerErrorPID = {$GoldnerAnkerIDs.BuchungZimmerErrorPID}
plugin.tx_f4ngoldneranker_pi1.f4n_RoomorderstoragePID = {$GoldnerAnkerIDs.RoomorderstoragePID}
plugin.tx_f4ngoldneranker_pi1.f4n_AdressDataPID = {$GoldnerAnkerIDs.AdressDataPID}
plugin.tx_f4ngoldneranker_pi1.f4n_AGBPagePID = {$GoldnerAnkerIDs.AGBPID}
plugin.tx_f4ngoldneranker_pi1.f4n_FERoomAdmin = {$GoldnerAnkerIDs.FERoomAdmin}

#use f4ngoldneranker offer title as the page title on detail pages
[globalVar = GPVar:tx_f4ngoldneranker_pi1 | offer_id]
	config.noPageTitle = 0
	plugin.tx_f4ngoldneranker_pi1.substitutePagetitle = 1
	page.headerData.10 >
[global]

############################################################
####        tx_F4NGalYooTheme_pi1 - Templates
############################################################
plugin.tx_F4NGalYooTheme_pi1 {

	smarty {
        // The location of your Smarty templates for this extension
        template_dir = fileadmin/templates

        // Enable debugging console for all templates
        debugging = 0
		#{$config.smarty_debug}

        // Report all PHP errors
        error_reporting = E_ALL
    }

	general_stdWrap.parseFunc < tt_content.text.20.parseFunc

	Images {
		Small {
			#ImgWidth = 158c
			ImgHeight = 180
			ImgWidth2 = 270
		}
		Big {
			ImgWidth = 640
			ImgHeight = 640
		}
	}

}


############################################################
####     Anreisetag für Quick-Booker-Auswahl und Action-Form-Value
############################################################
lib.field_date_anreise = COA_INT
lib.field_date_anreise {

	10 = TEXT
   	10.data = GPvar:tx_flatmgr_pi1|start
   	10.htmlSpecialChars = 1
   	10.if.isTrue.data = GPvar:tx_flatmgr_pi1|start

   	20 = TEXT
   	20 {
   		data = date : U + (1*86400)
		prioriCalc = 1
    	strftime = %d.%m.%G
    	if.isFalse.data = GPvar:tx_flatmgr_pi1|start
   	}
}

lib.roomsavailabilitycheck_url = TEXT
lib.roomsavailabilitycheck_url {
	typolink.parameter = {$GoldnerAnkerIDs.RoomsAvailabilityCheckPID}
    typolink.returnLast = url
}


#includeLibs.F4NFunc = typo3conf/ext/site_goldner/Resources/Private/func/f4n_defFunc.php
lib.F4N_MaxNaechteCount = USER
lib.F4N_MaxNaechteCount {
  userFunc = TYPO3\SiteGoldner\UserFunc\user_F4NDefault->GetOptionTags
	maxValue < plugin.tx_f4ngoldneranker_pi1.naechtecount_max
}
lib.F4N_MaxPersCount = USER
lib.F4N_MaxPersCount {
	userFunc = TYPO3\SiteGoldner\UserFunc\user_F4NDefault->GetOptionTags
	maxValue < plugin.tx_f4ngoldneranker_pi1.personcount_max
}

lib.QuickbookerNaechteLabel = TEXT
lib.QuickbookerNaechteLabel{
	value = {$GoldnerAnkerText.QuickBookingForm.Naechte.de}
}

lib.QuickbookerPersLabel = TEXT
lib.QuickbookerPersLabel {
	value = {$GoldnerAnkerText.QuickBookingForm.Personen.de}
}

lib.QuickbookerBtnLabel = TEXT
lib.QuickbookerBtnLabel {
	value = {$GoldnerAnkerText.QuickBookingForm.AnfrageBtn.de}
}


############################################################
####     Pauschale im Spry Akkordion anzeigen
############################################################
lib.SpryAccordPauschale < plugin.tx_f4ngoldneranker_pi1
lib.SpryAccordPauschale {
	plugintype = SpryOffer
	OfferUID = COA
	OfferUID {
	   10 = TEXT
	   10 {
	    field = field_pauschale_auswahl
	   }
	}
	LinkTextMehrInfos = {$GoldnerAnkerText.MehrInfos.de}
	#< lib.field_tab1_a_output.value
	pidList = {$GoldnerAnkerIDs.OfferPID}
}
############################################################
####     Pauschale2 im Spry Akkordion anzeigen
############################################################
lib.SpryAccordPauschale2 < plugin.tx_f4ngoldneranker_pi1
lib.SpryAccordPauschale2 {
	plugintype = SpryOffer
	OfferUID = COA
	OfferUID {
	   10 = TEXT
	   10 {
	    field = field_pauschale2_auswahl
	   }
	}
	LinkTextMehrInfos = {$GoldnerAnkerText.MehrInfos.de}
	#< lib.field_tab1_a_output.value
	pidList = {$GoldnerAnkerIDs.Offer2PID}
}

############################################################
####     Link zu Quick-Formular im Spry Akkordion
############################################################
lib.Spry_quickkontakt_url = TEXT
lib.Spry_quickkontakt_url {
	typolink.parameter = {$GoldnerAnkerIDs.QuickKontaktPID}
	typolink.useCacheHash = 1
	typolink.additionalParams = &tx_powermail_pi1[mailID]=48
    typolink.returnLast = url
}

############################################################
####      f4n_bildergalerie
############################################################

plugin.tx_f4nbildergalerie_pi1 {
    smarty {
        // The location of your Smarty templates for this extension
        template_dir = fileadmin/templates

        // Enable debugging console for all templates
        debugging = {$config.smarty_debug}

        // Report all PHP errors
        error_reporting = E_ALL
    }

	general_stdWrap.parseFunc < tt_content.text.20.parseFunc

	ImgGallery {
		SlideShowBig {
			ImgWidth = 0c
			ImgHeight = 0c
		}
		SlideShowSmall {
			ImgWidth = 0
			ImgHeight = 0c
		}
		SlideShowSmall2 {
			small {
				ImgWidth = 271
				ImgHeight = 131c
			}
			big {
				ImgWidth = 800c
				ImgHeight = 600c
			}
		}
		SlideShowWithText {
			ImgWidth =0
			ImgHeight = 0c
		}
	}

}



#enabling cache
config.no_cache = 0
config.debug = 0
config.smarty_debug = 0

plugin.tx_f4ngoldneranker_pi1 {
	mail_send_usermail = 1
	mail_send_adminmail = 1
	#mail_recipient = info@anker-badelster.de
	mail_recipient = info@anker-badelster.de
	mail_replyto_email = info@anker-badelster.de
	mail_replyto_name = Hotel Restaurant Goldner Anker
	mail_subject = Hotel Restaurant Goldner Anker - Buchungsbestätigung
	mail_from_email = info@anker-badelster.de
	mail_from_name = Hotel Restaurant Goldner Anker
}
