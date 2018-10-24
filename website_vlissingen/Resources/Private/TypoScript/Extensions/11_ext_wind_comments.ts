<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_comments/static/Comments/setup.txt">

plugin.tx_windcomments_pi1 {
	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_comments/wind_comments.html
	pid = {$uids.pages.commentsFolder}
	alwaysAllowComments = 0
	inverseAllowComments = 1

	dontRequirePassword = 1
	dontRequireFEUser = 1
	dontUseFEUsername = 1
	requireEmptyField = 0
	captcha = fw_captcha
	hidden = 1
	emailTo = communicatie@vlissingen.nl
	displayLatest {
		sortOrder = desc
		limit = 3
	}
	fields {
		date.list_stdWrap {
			htmlSpecialChars = 1
			strftime = %d %B %Y
		}
		time.list_stdWrap {
			htmlSpecialChars = 1
			strftime = %H:%M:%S
		}
		name {
			required = 1
			max = 255
			list_stdWrap {
				htmlSpecialChars = 1
			}
			form_stdWrap < plugin.tx_windcomments_pi1.name.list_stdWrap
			link = website
		}
		rating {
			#validate = ^([0-9]|10)$
			list_stdWrap {
				htmlSpecialChars = 1
			}
			form_stdWrap < plugin.tx_windcomments_pi1.rating.list_stdWrap
		}
		email {
			max = 255
			validate = email
			list_stdWrap {
				htmlSpecialChars = 1
			}
			form_stdWrap < plugin.tx_windcomments_pi1.email.list_stdWrap
		}
		website {
			max = 255
			list_stdWrap {
				htmlSpecialChars = 1
			}
			form_stdWrap < plugin.tx_windcomments_pi1.website.list_stdWrap
		}
		comment {
			max = 2000
			list_stdWrap {
				htmlSpecialChars = 1
				br = 1
			}
			form_stdWrap < plugin.tx_windcomments_pi1.comment.list_stdWrap
			form_stdWrap {
				br = 0
			}
		}
		url {
			list_stdWrap {
				htmlSpecialChars = 1
			}
			form_stdWrap < plugin.tx_windcomments_pi1.url.list_stdWrap
		}
	}
}