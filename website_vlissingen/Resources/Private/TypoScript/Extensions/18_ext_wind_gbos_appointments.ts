<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_gbos_appointments/Configuration/TypoScript/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_gbos_appointments/Configuration/TypoScript/constants.txt">

plugin.tx_windgbosappointments {
	persistence {
		storagePid = {$appointments.pid}
	}
	settings {
		listUid = {$pages.uid.appointments}
		cancelUid = {$pages.uid.appointments.cancel}
		cancelURL = {$pages.uid.appointments.cancelURL}
		wsdlUrl = http://193.177.166.106/GenericGuidanceSystem2.asmx?wsdl
		emails {
			sender = gemeente@vlissingen.nl
			appointment {
				templateRootPath = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_gbos_appointments/Templates/Email/Appointment/
				partialRootPath = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_gbos_appointments/Partials/Email/Appointment/
				layoutRootPath = EXT:wind_gbos_appointments/Resources/Private/Layouts/
				templateFile = Appointment.html
			}
			cancel {
				templateRootPath = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_gbos_appointments/Templates/Email/Cancel/
				partialRootPath = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_gbos_appointments/Partials/Email/Cancel/
				layoutRootPath = EXT:wind_gbos_appointments/Resources/Private/Layouts/
				templateFile = Cancel.html
			}
		}
	}
	view {
		templateRootPath = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_gbos_appointments/Templates/
		partialRootPath = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_gbos_appointments/Partials/
	}

	_LOCAL_LANG {
		nl {
			error_contact = Er is een fout opgetreden. Neemt u contact op met het KCC om de afspraak te plannen
			error_appointment = Er ging iets mis met het plannen van de afspraak. Neemt u contact op met het KCC om de afspraak te plannen
		}
	}
}