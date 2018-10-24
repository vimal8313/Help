
plugin.tx_companydir_companydir {
    view {
        templateRootPaths.0 = EXT:companydir/Resources/Private/Templates/
        templateRootPaths.1 = {$plugin.tx_companydir_companydir.view.templateRootPath}
        partialRootPaths.0 = EXT:companydir/Resources/Private/Partials/
        partialRootPaths.1 = {$plugin.tx_companydir_companydir.view.partialRootPath}
        layoutRootPaths.0 = EXT:companydir/Resources/Private/Layouts/
        layoutRootPaths.1 = {$plugin.tx_companydir_companydir.view.layoutRootPath}
    }
    persistence {
        storagePid = {$plugin.tx_companydir_companydir.persistence.storagePid}
        #recursive = 1
    }
    features {
        #skipDefaultArguments = 1
        # if set to 1, the enable fields are ignored in BE context
        ignoreAllEnableFieldsInBe = 0
        # Should be on by default, but can be disabled if all action in the plugin are uncached
        requireCHashArgumentForActionArguments = 1
    }
    mvc {
        #callDefaultActionIfActionCantBeResolved = 1
    }
}

# these classes are only used in auto-generated templates
plugin.tx_companydir._CSS_DEFAULT_STYLE (
    textarea.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    input.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    .tx-companydir table {

    }

    .tx-companydir table th {
        font-weight:bold;
    }

    .tx-companydir table td {
        vertical-align:top;
    }

    .typo3-messages .message-error {
        color:red;
    }

    .typo3-messages .message-ok {
        color:green;
    }
)

# Module configuration
module.tx_companydir_web_companydirimportexport {
    persistence {
        storagePid = {$module.tx_companydir_import_export.persistence.storagePid}
    }
    view {
        templateRootPaths.0 = EXT:companydir/Resources/Private/Backend/Templates/
        templateRootPaths.1 = {$module.tx_companydir_import_export.view.templateRootPath}
        partialRootPaths.0 = EXT:companydir/Resources/Private/Backend/Partials/
        partialRootPaths.1 = {$module.tx_companydir_import_export.view.partialRootPath}
        layoutRootPaths.0 = EXT:companydir/Resources/Private/Backend/Layouts/
        layoutRootPaths.1 = {$module.tx_companydir_import_export.view.layoutRootPath}
    }
}

##############
#### PAGE ####
##############
page = PAGE
page {

    includeCSS {
        companystyle     =   EXT:companydir/Resources/Public/css/companystyle.css
    }
}
plugin.tx_companydir_companydir.mvc.callDefaultActionIfActionCantBeResolved = 1

plugin.tx_companydir_companydir {
    view {
    widget.TYPO3\CMS\Fluid\ViewHelpers\Widget\PaginateViewHelper.templateRootPath = {$plugin.tx_companydir_companydir.view.templateRootPath}
    }
}

[globalVar = GP:tx_companydir_companydir|company > 0]
page.headerData.654.30.10.data >

lib.headline = COA_INT
lib.headline {
    50 = CONTENT
    50 {
      table = fe_users
      select {
        pidInList = 3
        where = uid= ###whatever###
        markers {
          whatever.data = GP:tx_companydir_companydir|company
        }
        languageField = sys_language_uid
      }
      renderObj = COA
      renderObj.10 = TEXT
      renderObj.10 {
        field = name
        wrap = |
      }
    }
}
page.headerData.654.30.10.value.cObject < lib.headline.50
[global]

[globalVar = GP:tx_companydir_companydir|category > 0]
page.headerData.654.30.10.data >

lib.headline = COA_INT
lib.headline {
    50 = CONTENT
    50 {
      table = tx_companydir_domain_model_category
      select {
        pidInList = 3
        where = uid= ###whatever###
        markers {
          whatever.data = GP:tx_companydir_companydir|category
        }
        languageField = sys_language_uid
      }
      renderObj = COA
      renderObj.10 = TEXT
      renderObj.10 {
        field = name
        wrap = |
      }
    }
}
page.headerData.654.30.10.value.cObject < lib.headline.50
[global]