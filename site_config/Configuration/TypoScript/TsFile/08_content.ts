##### CUSTOM CONTENT ############
lib.customContent = FLUIDTEMPLATE
lib.customContent.dataProcessing.10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
lib.customContent.dataProcessing.10.as = images
lib.customContent.dataProcessing.10.references.fieldName = image
lib.customContent.dataProcessing.20 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
lib.customContent.dataProcessing.20.as = files
lib.customContent.dataProcessing.20.references.fieldName = media
lib.customContent.file = EXT:site_config/Resources/Private/Templates/Plugin/FluidStyledContent/Templates/Default.html
lib.customContent.layoutRootPaths.10 = EXT:site_config/Resources/Private/Templates/Plugin/FluidStyledContent/Layouts/
lib.customContent.partialRootPaths.10 = EXT:site_config/Resources/Private/Templates/Plugin/FluidStyledContent/Partials/
lib.customContent.templateRootPaths.10 = EXT:site_config/Resources/Private/Templates/Plugin/FluidStyledContent/Templates/
lib.customContent.variables.backendLayout = TEXT
lib.customContent.variables.backendLayout.data = levelfield: -1, backend_layout_next_level, slide
lib.customContent.variables.backendLayout.override.data =  page:backend_layout
lib.customContent.variables.sys_language_uid = TEXT
lib.customContent.variables.sys_language_uid.value = {$website.sys_language_uid}
lib.customContent.variables.htmlTag_langKey = TEXT
lib.customContent.variables.htmlTag_langKey.value = {$website.htmlTag_langKey}
lib.customContent.variables.parentPid = TEXT
lib.customContent.variables.parentPid.data = page:uid

# Setup each colPos blocks.
lib.content0 < styles.content.get
lib.content0.select.where = colPos = 0
lib.content1 < styles.content.get
lib.content1.select.where = colPos = 1
lib.content2 < styles.content.get
lib.content2.select.where = colPos = 2
lib.content3 < styles.content.get
lib.content3.select.where = colPos = 3
lib.content4 < styles.content.get
lib.content4.select.where = colPos = 4
lib.content5 < styles.content.get
lib.content5.select.where = colPos = 5
lib.content6 < styles.content.get
lib.content6.select.where = colPos = 6
lib.content7 < styles.content.get
lib.content7.select.where = colPos = 7
lib.content8 < styles.content.get
lib.content8.select.where = colPos = 8

# Background Image
lib.backgroundImg = COA
lib.backgroundImg {
	10 = FILES
	10 {
		references {
			table = pages
			data = levelmedia:-1,slide
			listNum = 0
		}
		renderObj = COA
		renderObj {
			10 = IMG_RESOURCE
			10 {
				file.import.data = file:current:originalUid // file:current:uid
				altText.data = file:current:title
			}
			
		}
	}
}

