# CONTENT: Main content
lib.content.main = COA
lib.content.main {
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.get
}
lib.content.0 < lib.content.main

# CONTENT: Sidebar
lib.content.sidebar = COA
lib.content.sidebar {
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.getRight
}
lib.content.1 < lib.content.sidebar
lib.sidebar = COA

# CONTENT: Left
lib.content.left = COA
lib.content.left {
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.getLeft
}
lib.content.4 < lib.content.left

lib.content.right = COA
lib.content.right {
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.getBorder
}
lib.content.5 < lib.content.right

# CONTENT: Empty page
lib.content.empty = COA
lib.content.empty {
	10 < styles.content.get
}
lib.content.3 < lib.content.empty

tt_content.fce_fotoblok = FLUIDTEMPLATE
tt_content.fce_fotoblok {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Fotoblok.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_sidebarwidget = FLUIDTEMPLATE
tt_content.fce_sidebarwidget {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Sidebarwidget.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_slideshow = FLUIDTEMPLATE
tt_content.fce_slideshow {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Slideshow.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_footerkolom = FLUIDTEMPLATE
tt_content.fce_footerkolom {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Footerkolom.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_newslettertextblock7030 = FLUIDTEMPLATE
tt_content.fce_newslettertextblock7030 {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Newslettertextblock7030.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_newsletterblock7030 = FLUIDTEMPLATE
tt_content.fce_newsletterblock7030 {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Newsletterblock7030.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_newsletterblocklist = FLUIDTEMPLATE
tt_content.fce_newsletterblocklist {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Newsletterblocklist.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_newslettertextblock = FLUIDTEMPLATE
tt_content.fce_newslettertextblock {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Newslettertextblock.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_newsletterblock = FLUIDTEMPLATE
tt_content.fce_newsletterblock {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Newsletterblock.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_header = FLUIDTEMPLATE
tt_content.fce_header {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Header.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_events = FLUIDTEMPLATE
tt_content.fce_events {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Events.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_twocolumnsnoline = FLUIDTEMPLATE
tt_content.fce_twocolumnsnoline {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Twocolumnsnoline.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_twocolumnssmallblock = FLUIDTEMPLATE
tt_content.fce_twocolumnssmallblock {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Twocolumnssmallblock.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_twocolumns = FLUIDTEMPLATE
tt_content.fce_twocolumns {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Twocolumns.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_tekst = FLUIDTEMPLATE
tt_content.fce_tekst {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Tekst.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_linklijst = FLUIDTEMPLATE
tt_content.fce_linklijst {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Linklist.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_homeslideshow = FLUIDTEMPLATE
tt_content.fce_homeslideshow {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Homeslideshow.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_nieuwsbriefkol = FLUIDTEMPLATE
tt_content.fce_nieuwsbriefkol {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Nieuwsbriefkol.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_videocontainer = FLUIDTEMPLATE
tt_content.fce_videocontainer {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Videocontainer.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_pdctotaaloverzicht = FLUIDTEMPLATE
tt_content.fce_pdctotaaloverzicht {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Pdctotaaloverzicht.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_nieuwsbriefkolorio = FLUIDTEMPLATE
tt_content.fce_nieuwsbriefkolorio {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Nieuwsbriefkolorio.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}

tt_content.fce_nieuwsbriefscheidingsteken = FLUIDTEMPLATE
tt_content.fce_nieuwsbriefscheidingsteken {
	template = FILE
	template.file = EXT:website_vlissingen/Resources/Private/Templates/Content/Nieuwsbriefscheidingsteken.html
	layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Content/
	partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Content/
}