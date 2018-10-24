<?php
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'] = array(
	'encodeSpURL_postProc' => array('user_encodeSpURL_postProc'),
    'decodeSpURL_preProc' => array('user_decodeSpURL_preProc'),

	'_DEFAULT' => array(

		'init' => array(
			'enableCHashCache' => 1,
			'appendMissingSlash' => 'ifNotFile',
			'enableUrlDecodeCache' => 0,
			'enableUrlEncodeCache' => 0,
			'respectSimulateStaticURLs' => 0,
			'postVarSet_failureMode'=>'',
		),
		'fileName' => array(
				'defaultToHTMLsuffixOnPrev' => 1,
				'acceptHTMLsuffix' => 1
		),
		'preVars' => array(
			array(
				'GETvar' => 'L',
				'valueMap' => array(
					'' => '0'
				),
				'noMatch' => 'bypass'
			)
		),
		'pagePath' => array(
			'type' => 'user',
			'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
			'spaceCharacter' => '-',
			'languageGetVar' => 'L',
			'expireDays' => 7,
			'rootpage_id' => 1,
			'disablePathCache' => 1
		),
		'postVarSets' => array(
			'_DEFAULT' => array(
				'companydir' => array(
						array(
								'GETvar' => 'tx_companydir_companydir[action]',
								'noMatch' => 'bypass',
						),
						array(
								'GETvar' => 'tx_companydir_companydir[controller]',
								'noMatch' => 'bypass',
						),
						array(
								'GETvar' => 'tx_companydir_companydir[category]',
								'lookUpTable' => array(
										'table' => 'tx_companydir_domain_model_category',
										'id_field' => 'uid',
										'alias_field' => 'name',
										'addWhereClause' => ' AND NOT deleted',
										'useUniqueCache' => 1,
										'useUniqueCache_conf' => array(
												'strtolower' => 1,
												'spaceCharacter' => '-',
										),
										'languageGetVar' => 'L',
										'languageExceptionUids' => '',
										'languageField' => 'sys_language_uid',
										'transOrigPointerField' => 'l10n_parent',
										'expireDays' => 180,
								),
						),
						array(
								'GETvar' => 'tx_companydir_companydir[company]',
								'lookUpTable' => array(
										'table' => 'fe_users',
										'id_field' => 'uid',
										'alias_field' => 'name',
										'addWhereClause' => ' AND NOT deleted',
										'useUniqueCache' => 1,
										'useUniqueCache_conf' => array(
												'strtolower' => 1,
												'spaceCharacter' => '-',
										),
										'languageGetVar' => 'L',
										'languageExceptionUids' => '',

										'expireDays' => 180,

								),
						),
				),
			),
		),
	),
);
function user_encodeSpURL_postProc(&$params) {
	$params['URL'] = str_replace('companys-list/companydir/', 'companys-list', $params['URL']);
	$params['URL'] = str_replace('company-detail/companydir/', 'company-detail', $params['URL']);
	$params['URL'] = str_replace('search-list/companydir/', 'search-list/', $params['URL']);
}
function user_decodeSpURL_preProc(&$params) {
    $params['URL'] = str_replace('companys-list', 'companys-list/companydir/', $params['URL']);
    $params['URL'] = str_replace('company-detail', 'company-detail/companydir/', $params['URL']);
    $params['URL'] = str_replace('search-list/', 'search-list/companydir/', $params['URL']);
}
