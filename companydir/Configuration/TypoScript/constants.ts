
plugin.tx_companydir_companydir {
    view {
        # cat=plugin.tx_companydir_companydir/file; type=string; label=Path to template root (FE)
        templateRootPath = EXT:companydir/Resources/Private/Templates/
        # cat=plugin.tx_companydir_companydir/file; type=string; label=Path to template partials (FE)
        partialRootPath = EXT:companydir/Resources/Private/Partials/
        # cat=plugin.tx_companydir_companydir/file; type=string; label=Path to template layouts (FE)
        layoutRootPath = EXT:companydir/Resources/Private/Layouts/
    }
    persistence {
        # cat=plugin.tx_companydir_companydir//a; type=string; label=Default storage PID
        storagePid =
    }
}

module.tx_companydir_importexport {
    view {
        # cat=module.tx_test_import/file; type=string; label=Path to template root (BE)
        templateRootPath = EXT:companydir/Resources/Private/Backend/Templates/
        # cat=module.tx_test_import/file; type=string; label=Path to template partials (BE)
        partialRootPath = EXT:companydir/Resources/Private/Backend/Partials/
        # cat=module.tx_test_import/file; type=string; label=Path to template layouts (BE)
        layoutRootPath = EXT:companydir/Resources/Private/Backend/Layouts/
    }
    persistence {
        # cat=module.tx_test_import//a; type=string; label=Default storage PID
        storagePid =
    }
}
