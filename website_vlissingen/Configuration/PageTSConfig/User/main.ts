setup {
	default {
		condensedMode = 0
		extendedView = 1
	}
	override {
		condensedMode = 0
		extendedView = 1
	}
}

# Show only modules "Columns" & "Language", hide "Quickedit" & "Page Information"
mod.web_layout.menu.function {
	0 = 0
	1 = 1
	2 = 1
	3 = 0
}

options {
	# Allow creation of new folders in Element Browser
	createFoldersInEB = 1
	enableBookmarks = 0

	# No alert box ad type change
	alertPopups = 254

	#hideModules {
	#	tools = ExtensionmanagerExtensionmanager
	#}

	# Page tree
	pageTree {
		# Shows the user db mount path above the mount itself (useful if you work a lot with user db mounts)
		showPathAboveMounts = 1

		# Shows the navigation title instead of the title if available
		showNavTitle = 1

		# Disables the left click on an icon that opens the contextmenu
		disableIconLinkToContextmenu = 0

		# Disable the filter feature in the top panel
		hideFilter = 0

		# Shows the domain name as a suffix of the title if available
		showDomainNameWithTitle = 1
	}
}