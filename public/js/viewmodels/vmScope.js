var scopes = ko.observableArray([]);
var scope_status = ko.observableArray([ "ACTIVE", "INACTIVE" ]);

function ScopeViewModel() {
	var self = this;
	self.scope_page_number = 1;
	self.scope_page_size = 7;

	// Pagination
	self.scopePagIndexInf = 0;
	self.scopePagIndexSup = 4;
	self.scope_total_pages_aux = new Array();
	self.scope_total_pages = ko.observableArray([]);
	var pagination_aux = true;

	self.selected_scope_status = ko.observable("ACTIVE");
	self.name_filter = ko.observable("");

	current_date = ko.observable(new Date());

	// Object Scope selected from the list
	self.selectedScope = ko.observable();

	// Dajaxice on load ejectution
	scopeFindAll = function() {
		$("#scopeViewModel").mask(loading);
		Dajaxice.scope.dajax_scope_find_all(scopeFindAllCallback, {
			'status': self.selected_scope_status(),
			'name_filter': self.name_filter(),
			'page_number' : self.scope_page_number,
			'page_size' : self.scope_page_size
		});		
	};
	scopeFindAll();

	// Dajaxice scope_find_all callback
	function scopeFindAllCallback(data) {
		scopes.removeAll();
		// pagination initial
		self.scope_total_pages_aux = [];
		for (i = 0; i < data.total_pages; i++) {
			self.scope_total_pages_aux.push(i + 1);
		}
		if (pagination_aux) {
			self.scope_total_pages(paginationGeneral(
					self.scope_total_pages_aux, self.scopePagIndexInf,
					self.scopePagIndexSup));
		}
		pagination_aux = true;
		// end pagination initial

		data.content.forEach(function(scope) {
			var img_logo = null;
			var img_scope = scope.logo;
			if (scope.logo.binary_content == null
					|| scope.logo.binary_content == "") {
				img_scope.binary_content = default_avatar_30x35;
			} else {
				img_scope.binary_content = "data:" + scope.logo.content_type
						+ ";base64," + scope.logo.binary_content;
			}
			scopes.push(new Scope(scope.id_scope, scope.name,
					scope.description, img_scope, scope.creation_date,
					scope.activation_date, scope.closing_date, scope.status,
					scope.color));
		});
		if (self.selected_scope_status() == "ACTIVE") {
			showButtonRemoveScope();
			hideButtonActiveScope();
		} else if (self.selected_scope_status() == "INACTIVE") {
			showButtonActiveScope();
			hideButtonRemoveScope();
		}
		$("#scopeViewModel").unmask();
		
	};


	// Set the current date to the input datepicker component
	setToCurrentDate = function() {
		current_date(new Date());
	};
	// Function that hold the scope selected from the list
	showScope = function(scope) {
		clearGlobalsVariables();
		self.selectedScope(scope);
	};
	// Clear the selectedScope
	clearSelectedScope = function() {
		clearGlobalsVariables();
		var logo = {
			binary_content : default_avatar_145x167
		};
		var scope = new Scope("", "", "", logo, new Date(), new Date(),
				new Date(), "");
		self.selectedScope(scope);
	};
	
	// Close the scope modal
	closeScopeModal = function() {
		$('#scopeModal').modal('hide');
		clearGlobalsVariables();
	};
	// Save a new or update Scope
	saveScope = function(scope) {
		var with_resource = "False";
		var fileContent = null;
		var fileMimeType = null;
		// Get file name:
		var fileName = getFileName();
		if (fileName != null) {
			with_resource = "True";
			// Get file content:
			fileContent = getFileContent();
			// Get file mime type:
			fileMimeType = getFileMimeType();
		}
		if (scope.name == "" || scope.description == "" || scope.color == null) {
			alertify.set({ delay: 5000 });
			alertify.error(message_incomplete);
		} else {			
			alertify.confirm(message_confirmation, function (e) {
				if (e) {
					$("#scopeViewModel").mask(loading);
					resource = {
							'name' : fileName,
							'text' : 'Upload from backend',
							'binary_content' : fileContent,
							'content_type' : fileMimeType
					};
					if (scope.id_scope == "" || scope.id_scope == null) {
						// Register new scope:
						Dajaxice.scope.dajax_scope_register(scopeRegisterCallback, {
							'scope' : scope,
							'with_resource' : with_resource,
							'resource' : resource
						});
					} else {
						// Update scope:
						Dajaxice.scope.dajax_scope_update(scopeUpdateCallback, {
							'scope' : scope,
							'with_resource' : with_resource,
							'resource' : resource
						});
					}
				}
			});			
		}
	};

	// Dajaxice scope_register callback
	function scopeRegisterCallback(data) {
		$("#scopeViewModel").unmask();
		if (data.message == "ok") {
			alertify.success(message_success);
			scopeFindAll();
			closeScopeModal();
		}else{
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
		
	};
	// Dajaxice scope_update callback
	function scopeUpdateCallback(data) {
		$("#scopeViewModel").unmask();
		if (data.message == "ok") {
			alertify.success(message_success);
			scopeFindAll();
			closeScopeModal();
		}else{
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
	};

	/**
	 * Pagination Methods
	 */

	scopeGoNextPages = function() {
		var array_scope_page = goNextPages(self.scope_total_pages_aux,
				self.scopePagIndexInf, self.scopePagIndexSup);
		self.scope_total_pages(array_scope_page[0]);
		self.scopePagIndexInf = array_scope_page[1];
		self.scopePagIndexSup = array_scope_page[2];
	};

	scopePreviewPages = function() {
		var array_scope_page = previewPages(self.scope_total_pages_aux,
				self.scopePagIndexInf, self.scopePagIndexSup);
		self.scope_total_pages(array_scope_page[0]);
		self.scopePagIndexInf = array_scope_page[1];
		self.scopePagIndexSup = array_scope_page[2];
	};

	scopeGoPage = function(number) {
		scopes.removeAll();
		self.scope_page_number = number;
		closeScopeModal();
		scopeFindAll();
		pagination_aux = false;
	};
	
	removeScope = function(scope){
		alertify.confirm(message_confirmation, function (e) {
			if (e) {
				$("#scopeViewModel").mask(loading);
				Dajaxice.scope.dajax_scope_update_status(scopeUpdateCallback, {'id_scope' : scope.id_scope, 'status': 'INACTIVE'});
			}
		});
	};
	activeScope = function(scope){
		alertify.confirm(message_confirmation, function (e) {
			if (e) {
				$("#scopeViewModel").mask(loading);
				Dajaxice.scope.dajax_scope_update_status(scopeUpdateCallback, {'id_scope' : scope.id_scope, 'status': 'ACTIVE'});
			}
		});
	};
	
	showButtonRemoveScope = function() {
		var varRemoveScope = document.getElementsByName("btnRemoveScope");
		for (var i = 0; i < varRemoveScope.length; i++) {
			varRemoveScope[i].style.display = "";
		}
	};

	hideButtonRemoveScope = function() {
		var varRemoveScope = document.getElementsByName("btnRemoveScope");
		for (var i = 0; i < varRemoveScope.length; i++) {
			varRemoveScope[i].style.display = "none";
		}
	};
	
	showButtonActiveScope = function() {
		var varActiveScope = document.getElementsByName("btnActiveScope");
		for (var i = 0; i < varActiveScope.length; i++) {
			varActiveScope[i].style.display = "";
		}
	};

	hideButtonActiveScope = function() {
		var varActiveScope = document.getElementsByName("btnActiveScope");
		for (var i = 0; i < varActiveScope.length; i++) {
			varActiveScope[i].style.display = "none";
		}
	};

}

ko.applyBindings(ScopeViewModel(), document.getElementById("scopeViewModel"));