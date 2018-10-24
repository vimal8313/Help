config {
    baseURL = {$baseURL}
    contentObjectExceptionHandler = 0
    simulateStaticDocuments = 0
    uniqueLinkVars = 1
    renderCharset = utf-8
    metaCharset = utf-8
    doctype = html5
    linkVars = L
    tx_realurl_enable = 1

    sys_language_mode = content_fallback
    sys_language_overlay = hideNonTranslated
    sys_language_uid = 0
    language = de
    locale_all = de_DE

    index_enable = 1
    index_externals = 1
    #disablePrefixComment = 1
    additionalHeaders = Content-Type:text/html;charset=utf-8
    no_cache = 0
}

[browser = msie]
	config.doctypeSwitch = 1
[global]

page = PAGE
page.meta.description = {page:description}
page.meta.description.insertData = 1

page.meta.keywords = {page:keywords}
page.meta.keywords.insertData = 1

page.meta.author = {page:author}
page.meta.author.insertData = 1

page.meta.viewport = width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;
page.meta.format-detection=telephone=no
page.meta.charset = utf-8
page.meta.X-UA-Compatible = IE=edge
page.shortcutIcon = EXT:site_wilzing/Resources/Public/images/favicon.ico