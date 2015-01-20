var subscopes_byscope = ko.observableArray([]);
var subscope_status = ko.observableArray([ "ACTIVE", "INACTIVE" ]);

function SubScopeViewModel() {
	var self = this;
	self.subscope_page_number = 1;
	self.subscope_page_size = 5;
	self.scopes_combo = ko.observableArray([]);
	current_date = ko.observable(new Date());
	
	//Pagination
	self.subscopePagIndexInf = 0;
	self.scopePagIndexSup = 4;
	self.subscope_total_pages_aux = new Array();
	self.subscope_total_pages = ko.observableArray([]);
	var pagination_aux = true;
	self.selected_subscope_status = ko.observable("ACTIVE");
	self.name_filter = ko.observable("");
	

	// Object Scope selected from the list
	self.selected_subscope = ko.observable();
	self.subscope_selected_scope = ko.observable();
	self.selected_scope_combo = ko.observable();
		
	function scopeFindAllCallback(data) {
		self.scopes_combo.removeAll();
		data.content.forEach(function(scope) {
			self.scopes_combo.push(new Scope(scope.id_scope, scope.name,
					scope.description, null, scope.creation_date,
					scope.activation_date, scope.closing_date, scope.status));
		});
	};
	
	
	scopeFindAll = function() {
		Dajaxice.scope.dajax_scope_find_all(scopeFindAllCallback, {
			'status': 'ACTIVE',
			'name_filter': "",
			'page_number' : 1,
			'page_size' : 500
		});		
	};
	scopeFindAll();
	

	findSubscopesbyScope = function(scope) {
		$("#divSubscopeListModal").mask(loading);
		subscope_selected_scope(scope);
		self.selected_subscope_status("ACTIVE");
		Dajaxice.subscope.dajax_subscopes_by_scope(subscopeFindAllCallback, {
			'id_scope' : subscope_selected_scope().id_scope,
			'status': self.selected_subscope_status(),
			'name_filter':self.name_filter(),
			'page_number' : self.subscope_page_number,
			'page_size' : self.subscope_page_size
		});
		showDivListSubscopes();
		hideDivDataSubscope();
	};
	
	findSubscopesbyScopeStatus = function() {
		$("#divSubscopeListModal").mask(loading);
		Dajaxice.subscope.dajax_subscopes_by_scope(subscopeFindAllCallback, {
			'id_scope' : subscope_selected_scope().id_scope,
			'status': self.selected_subscope_status(),
			'name_filter':self.name_filter(),
			'page_number' : self.subscope_page_number,
			'page_size' : self.subscope_page_size
		});
		showDivListSubscopes();
		hideDivDataSubscope();
	};
	

	function subscopeFindAllCallback(data) {
		subscopes_byscope.removeAll();	
		//pagination initial
		self.subscope_total_pages_aux = [];
		for (i = 0; i < data.total_pages; i++) {
			self.subscope_total_pages_aux.push(i + 1);
		}		
		if (pagination_aux) {
			self.subscope_total_pages(paginationGeneral(self.subscope_total_pages_aux, self.subscopePagIndexInf, self.subscopePagIndexSup));
		}
		pagination_aux = true;
		//end pagination initial
		data.content.forEach(function(subscope) {
			var img_scope = subscope.logo;
			if(subscope.logo.binary_content == null || subscope.logo.binary_content=="") {
				img_scope.binary_content = default_avatar_30x35;
			}
			else{
				img_scope.binary_content="data:"+subscope.logo.content_type+";base64,"+subscope.logo.binary_content;
			}
			subscopes_byscope.push(new Subscope(subscope.id_subscope,
					subscope.name, subscope.description, img_scope,
					subscope.creation_date, subscope.activation_date,
					subscope.closing_date, subscope.status, subscope.parent));
		});
		
		if (self.selected_subscope_status() == "ACTIVE") {
			showButtonRemoveSubscope();
			hideButtonActiveSubscope();
		} else if (self.selected_subscope_status() == "INACTIVE") {
			showButtonActiveSubscope();
			hideButtonRemoveSubscope();
		}
		$("#divSubscopeListModal").unmask();
	};

	// show and hide data and list of subscopes
	showDivDataSubscope = function() {
		divDataSubscope = document.getElementById("subscopeRegisterData");
		divDataSubscope.style.display = "";
	};

	hideDivDataSubscope = function() {
		divDataSubscope = document.getElementById("subscopeRegisterData");
		divDataSubscope.style.display = "none";
	};

	showDivListSubscopes = function() {
		divListSubscopes = document.getElementById("divSubscopeListModal");
		divListSubscopes.style.display = "";
	};

	hideDivListSubscopes = function() {
		divListSubscopes = document.getElementById("divSubscopeListModal");
		divListSubscopes.style.display = "none";
	};

	// Function that hold the subscope selected from the list
	newSubscope = function() {
		clearGlobalsVariables();
		var logo = {binary_content:default_avatar_145x167};
    	var subscope = new Subscope("","","",logo,new Date(),new Date(),new Date(),"","");
		selected_subscope(subscope);		
		hideDivListSubscopes();
		showDivDataSubscope();
		document.getElementById("subcope_scopes_combo").style.display = "none";
	};
	
	showSubscope = function(subscope) {
		clearGlobalsVariables();
		selected_subscope(subscope);		
		document.getElementById("subcope_scopes_combo").style.display = "";
		//self.selected_scope_combo(self.subscope_selected_scope());
		// show parent for subscope in combobox
		for (var i = 0; i < self.scopes_combo().length; i++) {
			if (self.scopes_combo()[i].id_scope == subscope.parent) {
				self.selected_scope_combo(self.scopes_combo()[i]);
				i = self.scopes_combo().length;
			}
		}
		hideDivListSubscopes();
		showDivDataSubscope();		
	};
	
	cancel = function() {
		showDivListSubscopes();
		hideDivDataSubscope();
		clearGlobalsVariables();
	};
	
	// Save a new or update subScope
	saveSubscope = function(subscope) {
		var with_resource = false;
		var resource = null;
		
		if (getFileName() != null){
			with_resource = true;
			resource = {'name': getFileName(), 'text':'Upload from backend', 'binary_content':getFileContent(), 'content_type': getFileMimeType()};
		}

		if (subscope.name == null || subscope.description == null) {
			alertify.set({ delay: 5000 });
			alertify.error(message_incomplete);
		} else {
			alertify.confirm(message_confirmation, function (e) {
				if (e) {
				$("#subscopeRegisterData").mask(loading);
				if (subscope.id_subscope == null || subscope.id_subscope == "") {				
					Dajaxice.subscope.dajax_subscope_register(subscopeRegisterCallback, {
								'id_scope': subscope_selected_scope().id_scope,
								'subscope' : subscope,
								'with_resource' : with_resource,
								'resource' : resource
							});
				} else {
					Dajaxice.subscope.dajax_subscope_update(subscopeUpdateCallback, {
								'id_scope': self.selected_scope_combo().id_scope,
								'subscope' : subscope,
								'with_resource' : with_resource,
								'resource' : resource
							});					
				}
			  }
			});
		}
	};
	
	// Dajaxice subscope_register callback
	function subscopeRegisterCallback(data) {
		$("#subscopeRegisterData").unmask();
		if (data.message == "ok") {
			alertify.success(message_success);
			findSubscopesbyScope(subscope_selected_scope());
			closeSubscopeModal();
			}
		else {
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
	};
	
	// Dajaxice scope_update callback
	function subscopeUpdateCallback(data) {
		$("#subscopeRegisterData").unmask();
		if (data.message == "ok") {
			alertify.success(message_success);
			findSubscopesbyScopeStatus();
		}else{
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
	};
	
	closeSubscopeDataModal = function(){
	    	$('#subscope_register_data').modal('hide');
	    	clearGlobalsVariables();
	   };
	
	
	/**
     * Pagination Methods
     * */
    
    subscopeGoNextPages = function (){
    	var array_subscope_page = goNextPages(self.subscope_total_pages_aux, self.subscopePagIndexInf, self.subscopePagIndexSup);
    	self.subscope_total_pages(array_subscope_page[0]);     	
    	self.subscopePagIndexInf = array_subscope_page[1];
    	self.subscopePagIndexSup = array_subscope_page[2];
    };
    
    subscopePreviewPages = function (){
    	var array_subscope_page = previewPages(self.subscope_total_pages_aux, self.subscopePagIndexInf, self.subscopePagIndexSup);
    	self.subscope_total_pages(array_subscope_page[0]);     	
    	self.subscopePagIndexInf = array_subscope_page[1];
    	self.subscopePagIndexSup = array_subscope_page[2];
    };
    
    subscopeGoPage = function(number) {
    	subscopes_byscope.removeAll();
		self.subscope_page_number = number;
		closeSubscopeDataModal();
		findSubscopesbyScope(subscope_selected_scope());	
		pagination_aux = false;		
	};
		
	removeSubscope = function(subscope){
		alertify.confirm(message_confirmation, function (e) {
			if (e) {
				$("#subscopeRegisterData").mask(loading);
				Dajaxice.scope.dajax_scope_update_status(subscopeUpdateCallback, {'id_scope' : subscope.id_subscope, 'status': 'INACTIVE'});
			}
		});
	};
	activeSubscope = function(subscope){
		alertify.confirm(message_confirmation, function (e) {
			if (e) {
				Dajaxice.scope.dajax_scope_update_status(subscopeUpdateCallback, {'id_scope' : subscope.id_subscope, 'status': 'INACTIVE'});
			}
		});
	};
	
	showButtonRemoveSubscope = function() {
		var varRemoveSubscope = document.getElementsByName("btnRemoveSubscope");
		for (var i = 0; i < varRemoveSubscope.length; i++) {
			varRemoveSubscope[i].style.display = "";
		}
	};

	hideButtonRemoveSubscope = function() {
		var varRemoveSubscope = document.getElementsByName("btnRemoveSubscope");
		for (var i = 0; i < varRemoveSubscope.length; i++) {
			varRemoveSubscope[i].style.display = "none";
		}
	};
	
	showButtonActiveSubscope = function() {
		var varActiveSubscope = document.getElementsByName("btnActiveSubscope");
		for (var i = 0; i < varActiveSubscope.length; i++) {
			varActiveSubscope[i].style.display = "";
		}
	};

	hideButtonActiveSubscope = function() {
		var varActiveSubscope = document.getElementsByName("btnActiveSubscope");
		for (var i = 0; i < varActiveSubscope.length; i++) {
			varActiveSubscope[i].style.display = "none";
		}
	};
	
	
}

ko.applyBindings(SubScopeViewModel(), document.getElementById("subscopeViewModel"));