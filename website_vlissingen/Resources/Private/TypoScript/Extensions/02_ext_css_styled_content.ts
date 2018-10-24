##################################################
# Set default headers
##################################################
lib.stdheader.10.1.dataWrap = <h2{register:headerClass}>|</h2>
lib.stdheader.10.2.dataWrap = <h3{register:headerClass}>|</h3>
lib.stdheader.10.3.dataWrap = <h4{register:headerClass}>|</h4>
lib.stdheader.10.4.dataWrap = <h5{register:headerClass}>|</h5>
lib.stdheader.10.5.dataWrap = <h6{register:headerClass}>|</h6>
lib.stdheader.10.6.dataWrap = <h6{register:headerClass}>|</h6>

##################################################
# Click enlarge text with image in lightbox
##################################################
tt_content.image.20.1.imageLinkWrap {
	bodyTag = <body style="margin: 0; padding: 0;">
	wrap >
	width >
	height >
	JSwindow = 0
	JSwindow >
	typolink {
		parameter.listNum.stdWrap.if {
			value.field = image_zoom
			equals = 1
			negate = 1
		}

		parameter.ifEmpty = 1
		parameter.ifEmpty.cObject = IMG_RESOURCE
		parameter.ifEmpty.cObject.file.import.data = TSFE:lastImageInfo|origFile
		parameter.ifEmpty.cObject.file.maxW = 800
		parameter.ifEmpty.cObject.file.maxH = 600

		ATagParams = class="lightbox-inline"
		ATagParams.if {
			value.field = image_zoom
			equals = 1
		}
	}
}

tt_content.image.20.1.stdWrap.stdWrap.innerWrap = <span class="enlarge"><span class="image">|</span></span>
tt_content.image.20.1.stdWrap.stdWrap.innerWrap.if {
	value.field = image_zoom
	equals = 1
}

tt_content.mailform.20.badMess = De volgende velden moet u nog invullen!

tt_content.uploads.20 {
	stdWrap {
		dataWrap = <table class="csc-uploads"><caption>Downloads</caption><thead><tr><th class="title">Titel</th><th>Type</th><th>Grootte</th><th>Download</th></tr></thead><tbody>|</tbody></table>
	}

	renderObj {
		# description
		10 >
		10 = TEXT
		10 {
			data = file:current:description // file:current:name
			htmlSpecialChars = 1
			wrap = <td class="description">|</td>

			required = 1
		}
		15 >
		20 >
		# icon
		20 = COA
		20 {
			10 = IMAGE
			10 {
				file.import = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_filelist/Icons/
				file.import.data = file:current:extension
				file.import.case = lower
				file.import.wrap = |.png

				stdWrap.ifEmpty.cObject = IMAGE
				stdWrap.ifEmpty.cObject {
					file = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_filelist/Icons/default.png
				}
			}

			20 = CASE
			20 {
				key.data = file:current:extension
				pdf = TEXT
				pdf.value = PDF

				doc = TEXT
				doc.value = Word

				docx = TEXT
				docx.value = Word

				xls = TEXT
				xls.value = Excel

				xlsx = TEXT
				xlsx.value = Excel

				png = TEXT
				png.value = Afbeelding

				jpg = TEXT
				jpg.value = Afbeelding

				ppt = TEXT
				ppt.value = Powerpoint

				pptx = TEXT
				pptx.value = Powerpoint

				stdWrap.wrap = &nbsp;<span>|</span>
			}

			wrap = <td class="type">|</td>
		}

		# file size
		30 >
		30 = TEXT
		30 {
			data = file:current:size
			wrap = <td class="filesize">|</td>
			bytes = 1
			bytes.labels = " B| KB| MB| GB"
		}

		# filename
		40 >
		40 = TEXT
		40 {
			data = file:current:title // file:current:name
			htmlSpecialChars = 1
			required = 1

			replacement {
				# equivalent to former useSpacesInLinkText = 0; remove using > to disable it
				10 {
					search = _
					replace.char = 32
				}

				# equivalent to former stripFileExtensionFromLinkText = 0; move "_20" to "20" to enable it. Disabled by default.
				_20 {
					search = /(.*)(\..*)/
					replace = \1
					useRegExp = 1
				}
			}

			typolink {
				value = Download
				returnLast = url
				parameter.data = file:current:originalUid // file:current:uid
				parameter.wrap = file:|
				fileTarget < lib.parseTarget
				fileTarget =
				fileTarget.override = {$styles.content.uploads.target}
				fileTarget.override.override.field = target
				removePrependedNumbers = 1

				title {
					data = file:current:alternative
					htmlSpecialChars = 1
				}
			}

			wrap = <td class="download"><a href="|">Download</a></td>
		}

		wrap.cObject {
			10 = LOAD_REGISTER
			10 {
				oddEvenClass = odd li-first |*| even || odd
				elementClass = {file:current:extension}
				elementClass.insertData = 1
			}

			20 = TEXT
			20 {
				value = <tr class="{register:oddEvenClass} {register:elementClass}">|</tr>
				insertData = 1
			}
			30 = RESTORE_REGISTER
		}
	}
}