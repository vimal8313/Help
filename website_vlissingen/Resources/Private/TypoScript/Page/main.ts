page = PAGE
page {
	# Page template
	10 = FLUIDTEMPLATE
	10 {
		file.stdWrap.cObject = TEXT
		file.stdWrap.cObject {
			data = levelfield:-2,backend_layout_next_level,slide
			override.field = backend_layout
			split {
				token = file_website_vlissingen__
				1.current = 1
				1.wrap = |
			}
			ifEmpty = 1col
			wrap = EXT:website_vlissingen/Resources/Private/Templates/Pages/|.html
		}
		layoutRootPath = EXT:website_vlissingen/Resources/Private/Layouts/Pages/
		partialRootPath = EXT:website_vlissingen/Resources/Private/Partials/Pages/
		variables {

		}
	}

	bodyTagCObject = COA
	bodyTagCObject   {
		stdWrap.wrap = <body class="|">

		# Add page UID
		10 = TEXT
		10 {
			value = page-{field:uid}
			insertData = 1
			noTrimWrap = || |
		}
		# Add level
		20 = TEXT
		20 {
			value = level-{level:0}
			insertData = 1
			noTrimWrap = || |
		}

		# Add uid of optional FE-layout
		30 = TEXT
		30 {
			data = levelfield:-1, layout, slide
			wrap = layout-|
			required = 1
		}
	}
}