jQuery.fn.formpages = function(passedArgsObj) {
	// Default arguments
	var args = {
		pageClass: 'formpage',
		head: 'h2:first',
		hideHead: true,
		conditions: true
	}

	// Overwrite defaults
	for (var i in passedArgsObj) {
		args[i] = passedArgsObj[i];
	}

	return this.each(function() {
		var container = jQuery(this);
		var pages = container.find('.' + args.pageClass + ':not(.nobutton)');
		var pagesmenu = null;
		var form = container.closest('form');
		var direction = 'next';
		var pageIdToTitle = new Object();
		var pageTitleToId = new Object();
		var submit = form.find('input[type=submit]');

		// Set class
		container.addClass('formpages_processed');

		// Hide all pages
		pages.hide();

		// Display first page
		container.find('.' + args.pageClass + ':first').show();

		// Add pages menu
		container.prepend('<ul class="pagesmenu"></ul>');
		pagesmenu = container.children('ul.pagesmenu');

		var idNum = 0;
		// Process pages
		pages.each(function() {
			var page = $(this);

			// Page title
			var head = page.children(args.head);
			var id = $.getUniqueId('fcepage');
			pageIdToTitle[id] = head.text();
			pageTitleToId[pageIdToTitle[id]] = id;
			this.id = id;

			if (args.hideHead) {
				head.hide();
			}

			var liClass = '';
			if ($(this).hasClass('subpage')) {
				liClass = ' class="subpage"';
			}

			// Add to pages menu
			pagesmenu.append('<li title="' + pageIdToTitle[id] + '"' + liClass + '>' + pageIdToTitle[id] + '</li>');

			// Add previous/next buttons
			page.append('<div class="pagesbuttons"></div>');

			var buttons = page.find('div.pagesbuttons');
			buttons.append('<input type="button" value="Vorige" class="previous" />');
			buttons.append('<input type="button" value="Volgende" class="next" />');
		});

		// Set onclick for the pages
		pagesmenu.children('li').click(function() {
			var el = $(this);
			if (el.hasClass('active') || el.hasClass('done') || el.hasClass('skipped')) {
				var page = container.find('#' + pageTitleToId[this.title] + '.' + args.pageClass);

				if (checkConditions(page)) {
					// Hide all pages
					pages.hide();

					// Display clicked page
					page.show();

					// Remove active class
					var active = pagesmenu.find('li.active');
					active.addClass('done');
					active.removeClass('active');

					// Add active class
					el.addClass('active');
					el.removeClass('skipped');

					// Remove done class from next pages
					el.nextAll().removeClass('done');

					// Remove skipped class from next pages
					el.nextAll().removeClass('skipped');

					direction = 'next';
				}
				else {
					el.removeClass('active');
					el.addClass('skipped');
					if (direction == 'previous') {
						// Skip page and go to previous page
						var previousEl = el.prev();
						previousEl.addClass('active');
						previousEl.click();
					}
					else if (this.title == el.parent().children('li:not(.ignore):last').attr('title')) {
						// Submit form
						form.unbind('submit');
						form[0].submit();
					}
					else {
						// Skip page and go to next page
						var nextEl = el.next();
						nextEl.addClass('active');
						nextEl.click();
					}
				}

				$(window).scrollTop(0);
			}
		});

		var checkConditions = function(page) {
			if (page.find('input.conditions').length > 0) {
				var conditions = page.find('input.conditions')[0].value;
				var conditionsAnd = conditions.split('|');
				var conditionsOr;
				var condition;
				var operator;
				var field;
				var met = false;
				var metAnd;
				for (i = 0; i < conditionsAnd.length; i++) {
					conditionsOr = conditionsAnd[i].split('&');
					metAnd = true;
					for (j = 0; j < conditionsOr.length; j++) {
						if (conditionsOr[j].indexOf('>') > -1) {
							operator = '>';
						}
						else if (conditionsOr[j].indexOf('<') > -1) {
							operator = '<';
						}
						else if (conditionsOr[j].indexOf('!=') > -1) {
							operator = '!=';
						}
						else {
							operator = '=';
						}
						condition = conditionsOr[j].split(operator);
						field = $('#tx_fceforms_pi1_' + $.trim(condition[0]));
						metAnd = metAnd && checkFieldCondition(field, condition[1], operator);
					}
					if (metAnd) {
						met = true;
						break;
					}
				}

				if (!met) {
					resetPageFields(page);
				}

				return met;
			}
			else {
				return true;
			}
		}

		var resetPageFields = function(page) {
			var fields = $(':input', page);
			fields.each(function() {
				if (this.type == 'select') {
					var options = $('option', this);
					options.each(function() {
						this.selected = this.defaultSelected;
					});
				}
				else if (this.type == 'radio' || this.type == 'checkbox') {
					this.checked = this.defaultChecked;
				}
				else if (this.type != 'button' && this.type != 'submit' && this.type != 'reset') {
					this.value = this.defaultValue;
					var field = $(this);
					if (field.hasClass('hadPreview')) {
						field.removeClass('hadPreview');
						field.addClass('preview');
					}
				}
			});
		}

		var checkFieldCondition = function(field, condition, operator) {
			if ($(field).hasClass('fields')) {
				var subFields = field.find('input');
				if (subFields.length > 0) {
					for (var i = 0; i < subFields.length; i++) {
						if (subFields[i].checked) {
							if (
								operator == '>' && $.trim(subFields[i].value) > $.trim(condition)
								|| operator == '<' && $.trim(subFields[i].value) < $.trim(condition)
								|| operator == '!=' && $.trim(subField[i].value) != $.trim(condition)
								|| $.trim(subFields[i].value) == $.trim(condition)
							) {
								return true;
							}
						}
					}
				}
			}
			else {
				if (operator == '>') {
					return ($.trim(field.val()) > $.trim(condition));
				}
				else if (operator == '<') {
					return ($.trim(field.val()) < $.trim(condition));
				}
				else if (operator == '!=') {
					return ($.trim(field.val()) != $.trim(condition));
				}
				else {
					return ($.trim(field.val()) == $.trim(condition));
				}
			}

			return false;
		}

		// Set onclick for the previous buttons
		pages.find('div.pagesbuttons input.previous').click(function() {
			direction = 'previous';
			var id = $(this).parent().parent().attr('id');
			var pagesmenuitem = $(this).parents('div.formpages').children('ul.pagesmenu').children('li[title="' + pageIdToTitle[id] + '"]').prev();
			pagesmenuitem.click();
		});

		// Set onclick for the next buttons
		pages.find('div.pagesbuttons input.next').click(function() {
			var button = $(this);
			button.checkValidation = $.fceformSubmit;
			if (button.checkValidation()) {
				direction = 'next';
				var id = button.parent().parent().attr('id');
				var pagesmenuitem = button.parents('div.formpages').children('ul.pagesmenu').children('li[title="' + pageIdToTitle[id] + '"]').next();
				pagesmenuitem.addClass('active');
				pagesmenuitem.click();
			}
		});

		// Set first pagesmenu item to active
		pagesmenu.find('li:first').addClass('active');

		// Remove "previous" button from first page
		container.find('.' + args.pageClass + ':first div.pagesbuttons input.previous').remove();

		// Remove "next" button from last page
		container.find('.' + args.pageClass + ':last div.pagesbuttons input.next').remove();

		// Add submit button to last page
		container.find('.' + args.pageClass + ':last div.pagesbuttons').append(submit);

		submit.bind('click', function(){
			var button = $(this);
			button.checkValidation = $.fceformSubmit;

			return button.checkValidation();
		});

		form.unbind('submit', $.fceformSubmit);
		form.bind('submit', function() {
			var form = $(this);
			var currentPage = pagesmenu.children('li.active');

			// Check if current page is last page
			if (currentPage.attr('title') != pagesmenu.children('li:not(.ignore):last').attr('title')) {
				// Current page not last page. Onsubmit check page and go to next page
				var page = container.find('#' + pageTitleToId[currentPage.attr('title')] + '.' + args.pageClass);
				var button = page.find('div.pagesbuttons input.next');
				button.click();

				return false;
			}
			else {
				// Current page is last page. Onsubmit check page and submit form
				return submit.click();
			}
		});
	});
}
