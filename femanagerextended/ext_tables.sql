#
# Table structure for table 'fe_users'
#
CREATE TABLE fe_users (
	categories int(11) unsigned DEFAULT '0' NOT NULL,
	subtitle varchar(255) DEFAULT '' NOT NULL,
	county int(11) unsigned DEFAULT '0',
	tx_extbase_type varchar(255) DEFAULT '0' NOT NULL,
);
