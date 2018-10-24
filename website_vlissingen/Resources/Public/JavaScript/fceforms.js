$(function() {
	$('div.hidden').hide();
	$('a.lightbox-close').click(function() {
		if (parent && parent != window && parent.$) {
			parent.$.fn.fancybox.close();
			return false;
		}
		else {
			return true;
		}
	});
	$.datepicker.setDefaults($.extend({showMonthAfterYear: false}, $.datepicker.regional['nl']));
	$("div.date input:not(.validate_dateFuture,.validate_datePast)").datepicker({
		showOn: 'both',
		buttonImage: 'typo3conf/ext/fceforms/templates/forms/calendar.png',
		buttonImageOnly: true,
		buttonText : 'Kies een datum',
		dateFormat: 'dd-mm-yy',
		constrainInput: true,
		changeMonth: true,
		changeYear: true,
		yearRange: "-100:+10"
	});
	$("div.date input.validate_dateFuture").datepicker({
		showOn: 'both',
		buttonImage: 'typo3conf/ext/fceforms/templates/forms/calendar.png',
		buttonImageOnly: true,
		buttonText : 'Kies een datum',
		dateFormat: 'dd-mm-yy',
		constrainInput: true,
		changeMonth: true,
		changeYear: true,
		yearRange: "-100:+10",
		minDate: 1
	});
	$("div.date input.validate_datePast").datepicker({
		showOn: 'both',
		buttonImage: 'typo3conf/ext/fceforms/templates/forms/calendar.png',
		buttonImageOnly: true,
		buttonText : 'Kies een datum',
		dateFormat: 'dd-mm-yy',
		constrainInput: true,
		changeMonth: true,
		changeYear: true,
		yearRange: "-100:+10",
		maxDate: -1
	});

	$.getUniqueId = function(text) {
		var uniqueId = text + $.uniqueId;
		$.uniqueId++;
		return uniqueId;
	}
	$.uniqueId = 0;

	var addError = function(el, className, message) {
		if (!el.hasClass(className)) {
			el.addClass(className);
			el.append('<div class="errorMessage ' + className + '">' + message + '</div>')
		}
	}

	var removeError = function(el, className) {
		if (el.hasClass(className)) {
			el.removeClass(className);
			el.children('div.' + className).remove();
		}
	}

	var checkRequired = function(el) {
		var error = false;

		var value = $.trim(el.value);
		if (value == '') {
			error = true;
			addError($(el).parent().parent(), 'requiredError', $('label[for=' + el.id + ']').text() + ' is niet correct ingevuld.');
		}
		else {
			removeError($(el).parent().parent(), 'requiredError');
		}

		return !error;
	}

	var checkValidateRegexp = function(el, pattern, className, message) {
		var error = false;

		var value = $.trim(el.value);
		if (value != '' && !pattern.test(value)) {
			error = true;
			addError($(el).parent().parent(), className, message);
		}
		else {
			removeError($(el).parent().parent(), className);
		}

		return !error;
	}

	var checkValidateDate = function(el, inFuture, className, message) {
		var error = false;

		var value = $.trim(el.value);
		var pattern = /^[0-9][0-9]?\-[0-9][0-9]?\-[0-9]{4}$/i;
		if (value != '' && !pattern.test(value)) {
			error = true;
			addError($(el).parent().parent(), className, message);
		} else if (value != '') {
			var currentDate = new Date();
			currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0, 0);

			var dateParts = value.split('-');
			console.log(dateParts);
			var valueDate = new Date(dateParts[2], dateParts[1]-1, dateParts[0], 0, 0, 0, 0);

			if ((inFuture && valueDate <= currentDate) || (!inFuture && valueDate >= currentDate)) {
				error = true;
				addError($(el).parent().parent(), className, message);
			}
		}

		if (!error) {
			removeError($(el).parent().parent(), className);
		}

		return !error;
	}

	var checkValidate = function(el) {
		var validated = true;

		if ($(el).hasClass('validate_int')) {
			validated = checkValidateRegexp(el, /^[0-9]*$/, 'validateIntError', $('label[for=' + el.id + ']').text() + ' mag alleen getallen bevatten') && validated;
		}
		if ($(el).hasClass('validate_letter')) {
			validated = checkValidateRegexp(el, /^[a-z]*$/i, 'validateIntError', $('label[for=' + el.id + ']').text() + ' mag alleen letters bevatten') && validated;
		}
		if ($(el).hasClass('validate_email')) {
			validated = checkValidateRegexp(el, /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'validateEmailError', $('label[for=' + el.id + ']').text() + ' moet een e-mailadres zijn') && validated;
		}
		if ($(el).hasClass('validate_zipcode')) {
			validated = checkValidateRegexp(el, /^[1-9][0-9]{3} ?[a-z]{2}$/i, 'validateZipcodeError', $('label[for=' + el.id + ']').text() + ' moet een postcode zijn') && validated;
		}
		if ($(el).hasClass('validate_date')) {
			validated = checkValidateRegexp(el, /^[0-9][0-9]?\-[0-9][0-9]?\-[0-9]{4}$/i, 'validateDateError', $('label[for=' + el.id + ']').text() + ' moet een datum (dd-mm-jjjj) zijn') && validated;
		}
		if ($(el).hasClass('validate_dateFuture') || $(el).hasClass('validate_datePast')) {
			validated = checkValidateDate(el, $(el).hasClass('validate_dateFuture'), 'validateDateError', $('label[for=' + el.id + ']').text() + ' moet een datum (dd-mm-jjjj) in ' + ($(el).hasClass('validate_dateFuture') ? 'de toekomst' : 'het verleden') + ' zijn') && validated;
		}

		return validated;
	}

	var checkCheckbox = function(el) {
		var validated = true;

		if ($(el).children('span.fields').hasClass('required')) {
			validated = false;
			var checkboxes = $.makeArray($(el).find('input[type=checkbox]'));
			if (checkboxes.length == 0) {
				checkboxes = $.makeArray($(el).find('input[type=radio]'));
			}
			for (i in checkboxes) {
				if (checkboxes[i].checked) {
					validated = true;
					break;
				}
			}
		}

		if (!validated) {
			addError($(el), 'requiredError', $(el).children('label').text() + ' is niet correct ingevuld.');
		}
		else {
			removeError($(el), 'requiredError');
		}

		return validated;
	}

	var checkMaxLength = function(el) {
		var validated = true;

		var pattern = /^.*?maxlength_([0-9]+).*?$/i;
		var classes = el.className;
		var maxLength;

		if (classes.match(pattern)) {
			maxLength = classes.replace(pattern, "$1");
			if (maxLength > 0 && el.value.length > maxLength) {
				validated = false;
			}
		}

		if (!validated) {
			addError($(el).parent().parent(), 'maxLengthError', $('label[for=' + el.id + ']').text() + ' mag niet meer dan ' + maxLength + ' tekens lang zijn');
		}
		else {
			removeError($(el).parent().parent(), 'maxLengthError');
		}

		return validated;
	}

	var checkMinLength = function(el) {
		var validated = true;

		if (el.value.length == 0) {
			return true;
		}

		var pattern = /^.*?minlength_([0-9]+).*?$/i;
		var classes = el.className;
		var minLength;

		if (classes.match(pattern)) {
			minLength = classes.replace(pattern, "$1");
			if (minLength > 0 && el.value.length < minLength) {
				validated = false;
			}
		}

		if (!validated) {
			addError($(el).parent().parent(), 'minLengthError', $('label[for=' + el.id + ']').text() + ' mag niet minder dan ' + minLength + ' tekens lang zijn');
		}
		else {
			removeError($(el).parent().parent(), 'minLengthError');
		}

		return validated;
	}

	$.fceformSubmit = function() {
		var validated = true, fieldValidated, inPage = false;

		if (this.parent) {
			el = this.parent().parent();
			inPage = true;
		}
		else {
			el = $(this);
		}

		var fields = $.merge($.makeArray(el.find('input[type=text]')), $.makeArray(el.find('input[type=password]')));
		fields = $.merge(fields, $.makeArray(el.find('input[type=file]')));
		fields = $.merge(fields, $.makeArray(el.find('select')));
		fields = $.merge(fields, $.makeArray(el.find('textarea')));
		fields = $.merge(fields, $.makeArray(el.find('div.checkbox')));
		fields = $.merge(fields, $.makeArray(el.find('div.radio')));

		$.each(fields, function() {
			fieldValidated = true;

			var field = $(this);

			var previewReset = false;
			if (field.hasClass('preview') && this.value == this.defaultValue) {
				this.value = '';
				previewReset = true;
			}

			if (field.hasClass('checkbox') || field.hasClass('radio')) {
				fieldValidated = checkCheckbox(this) && fieldValidated;

				if (!fieldValidated) {
					field.addClass('error');
				}
				else {
					field.removeClass('error');
				}
			}
			else {
				// Check required
				if (field.hasClass('required')) {
					fieldValidated = checkRequired(this) && fieldValidated;
				}
				// Check min length
				fieldValidated = checkMinLength(this) && fieldValidated;
				// Check max length
				fieldValidated = checkMaxLength(this) && fieldValidated;
				// Check validation
				fieldValidated = checkValidate(this) && fieldValidated;

				if (!fieldValidated) {
					field.parent().parent().addClass('error');
				}
				else {
					field.parent().parent().removeClass('error');
				}
			}

			validated = validated && fieldValidated;

			if (previewReset) {
				this.value = this.defaultValue;
			}
		});

		if (!inPage) {
			if (el.find('div.formpages').length > 0) {
				el = el.find('div.formpages').find('div.page:last');
			}
		}

		if (!validated) {
			var errorBlock = el.find('div.formError');
			if (errorBlock.length == 0) {
				el.prepend('<div class="formError">Wilt u de paars aangegeven vragen correct invullen aub?</div>');
			}
			else {
				errorBlock.text('Wilt u de paars aangegeven vragen correct invullen aub?');
			}

			// Scroll to top of form
			var formTop = el.offset().top - 10;
			if (formTop < 0) {
				formTop = 0;
			}
			$('html, body').scrollTop(formTop);
		}
		else {
			if (el.find('div.formError').length > 0) {
				el.children('div.formError').remove();
			}
		}

		return validated;
	}

	var addMaxLength = function() {
		var fields = $('input[class*=maxlength_]');

		$.each(fields, function() {
			var pattern = /^.*?maxlength_([0-9]+).*?$/i;
			var classes = this.className;
			var maxLength = classes.replace(pattern, "$1");
			if (maxLength > 0) {
				$(this).attr('maxlength', maxLength);
			}
		});
	}

	var addPreview = function() {
		var fields = $('input[class*=preview]');
		fields = $.merge(fields, $.makeArray($('textarea[class*=preview]')));
		$.each(fields, function() {
			if (this.value == this.defaultValue) {
				$(this).focus(function(){
					if ($(this).hasClass('preview') && this.value == this.defaultValue) {
						this.value = '';
						$(this).removeClass('preview');
						$(this).addClass('hadPreview');
					}
					else if ($(this).hasClass('preview')) {
						$(this).removeClass('preview');
						$(this).addClass('hadPreview');
					}
				});
			}
			else {
				$(this).removeClass('preview');
				$(this).addClass('hadPreview');
			}
		});
	}

	$('form.fce_form').bind('submit', $.fceformSubmit);
	addMaxLength();
	addPreview();

});
