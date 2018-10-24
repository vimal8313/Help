# Setup each colPos blocks.
lib.content0 < styles.content.get
lib.content0.select.where = colPos = 0

lib.content1 < styles.content.get
lib.content1.slide = -1
lib.content1.select.where = colPos = 1

lib.content2 < styles.content.get
lib.content2.select.where = colPos = 2

lib.content3 < styles.content.get
lib.content3.slide = -1
lib.content3.select.where = colPos = 3

lib.content4 < styles.content.get
lib.content4.slide = -1
lib.content4.select.where = colPos = 4

lib.content5 < styles.content.get
lib.content5.select.where = colPos = 5

lib.content6 < styles.content.get
lib.content6.select.where = colPos = 6

lib.content7 < styles.content.get
lib.content7.select.where = colPos = 7

lib.content8 < styles.content.get
lib.content8.select.where = colPos = 8

#############################
### Get Registration Form ###
#############################
lib.anmeldeformular = RECORDS
lib.anmeldeformular {
  source = 13
  dontCheckPid = 1
  tables = tt_content
}

tt_content.fce_accordion = FLUIDTEMPLATE
tt_content.fce_accordion {
	template = FILE
	template.file = EXT:site_goldner/Resources/Private/Templates/Content/Accordion.html
	layoutRootPath = EXT:site_goldner/Resources/Private/Layouts/Content/
	partialRootPath = EXT:site_goldner/Resources/Private/Partials/Content/
	settings{
		OfferPID = {$OfferPID}
  		Offer2PID = {$Offer2PID}
	}
}
