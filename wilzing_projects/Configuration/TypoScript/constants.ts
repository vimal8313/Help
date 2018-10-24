
plugin.tx_wilzingprojects_projectlist {
    view {
        # cat=plugin.tx_wilzingprojects_projectlist/file; type=string; label=Path to template root (FE)
        templateRootPath = EXT:wilzing_projects/Resources/Private/Templates/
        # cat=plugin.tx_wilzingprojects_projectlist/file; type=string; label=Path to template partials (FE)
        partialRootPath = EXT:wilzing_projects/Resources/Private/Partials/
        # cat=plugin.tx_wilzingprojects_projectlist/file; type=string; label=Path to template layouts (FE)
        layoutRootPath = EXT:wilzing_projects/Resources/Private/Layouts/
    }
    persistence {
        # cat=plugin.tx_wilzingprojects_projectlist//a; type=string; label=Default storage PID
        storagePid =
    }
}
