//Variables Globales
$('#causeWysiTextEditor').wysihtml5();
var causes = ko.observableArray([]);
var cause_scopes = ko.observableArray([]);
var cause_subscopes = ko.observableArray([]);
var cause_status = ko.observableArray([ "STANDBY", "ACTIVE", "SOLVED" ]);

function CauseViewModel() {
	var self = this;
	self.cause_page_number = 1;
	self.cause_page_size = 7;	
	self.cause_closing_date = ko.observable(new Date());
	
	self.causeContacts = ko.observableArray([]);
	self.causeContactsRemoved = new Array();

	/* objects selected of view */
	self.selected_contact = ko.observable();
	self.selected_contact_remove = ko.observable();
	self.selected_scope = ko.observable();
	self.selected_subscope = ko.observable();
	self.selected_cause = ko.observable();
	self.selected_cause_status = ko.observable("ACTIVE");

	/* resources cause */
	self.binary_content_default = ko.observable('/public/images/youtube.jpg');
	self.binary_content_avatar = ko.observable();
	self.binary_content_promotional = ko.observable();
	self.binary_content_cover = ko.observable();
	self.resources_cause = {
		avatar : null,
		promotional_photo : null,
		cover : null
	};
	
	// pagination
	self.causePagIndexInf = 0;
	self.causePagIndexSup = 4;
	self.cause_total_pages_aux = new Array();
	self.cause_total_pages = ko.observableArray([]);
	var pagination_aux = true;
	
	// Partners of cause
	self.cause_avaliable_partners = ko.observableArray([]);
	self.cause_selected_partners = ko.observableArray([]);
	self.cause_removed_partners = ko.observableArray([]);
	
	// Celebrities of cause
	self.cause_avaliable_celebrities = ko.observableArray([]);
	self.cause_selected_celebrities = ko.observableArray([]);
	self.cause_removed_celebrities = ko.observableArray([]);
	
	// Partners of cause
	self.cause_avaliable_awards = ko.observableArray([]);
	self.cause_selected_awards = ko.observableArray([]);
	self.cause_removed_awards = ko.observableArray([]);
	
	// Variables for the filter name
	self.name_filter = ko.observable("");
	//Cause description
	var causeTextEditor = $('#causeWysiTextEditor').data("wysihtml5").editor;

	// show button closing and start
	showButtonFinishCause = function() {
		varCloseCause = document.getElementsByName("btnFinishCause");
		for (var i = 0; i < varCloseCause.length; i++) {
			varCloseCause[i].style.display = "";
		}

	};

	hideButtonFinishCause = function() {
		varCloseCause = document.getElementsByName("btnFinishCause");
		for (var i = 0; i < varCloseCause.length; i++) {
			varCloseCause[i].style.display = "none";
		}
	};
	showButtonActiveCause = function() {
		varActiveCause = document.getElementsByName("btnActiveCause");
		for (var i = 0; i < varActiveCause.length; i++) {
			varActiveCause[i].style.display = "";
		}
	};

	hideButtonActiveCause = function() {
		varActiveCause = document.getElementsByName("btnActiveCause");
		for (var i = 0; i < varActiveCause.length; i++) {
			varActiveCause[i].style.display = "none";
		}
	};
	
	function scopeFindAllCallback(data) {
		cause_scopes.removeAll();
		data.content.forEach(function(scope) {
			cause_scopes.push(new Scope(scope.id_scope, scope.name,
					scope.description, null, scope.creation_date,
					scope.activation_date, scope.closing_date, scope.status));
		});
	};


	// find cause_scopes for combox
	scopeFindAll = function  (){
	Dajaxice.scope.dajax_scope_find_all(scopeFindAllCallback, {
		'status':'ACTIVE',
		'name_filter':'',
		'page_number' : 1,
		'page_size' : 50
	});
	};
	
	// Dajaxice cause_find_all callback
	function causeFindAllCallback(data) {	
		self.cause_total_pages_aux = [];
		causes.removeAll();
		for (i = 0; i < data.total_pages; i++) {
			self.cause_total_pages_aux.push(i + 1);
		}
		if (pagination_aux) {
			self.cause_total_pages(paginationGeneral(self.cause_total_pages_aux, self.causePagIndexInf, self.causePagIndexSup));
		}
		pagination_aux = true;
		data.content.forEach(function(cause) {
					// To display the cause avatar on the list:
					var avatar_src = null;
					if (cause.avatar_src == null || cause.avatar_src == "") {
						avatar_src = default_avatar_30x35;
					} else {
						avatar_src = cause.avatar_src;
					}					
					love_goal_percentage = (cause.love_counter * 100)/ cause.love_goal;
					love_goal_percentage = (love_goal_percentage.toFixed(2));
					causes.push(new Cause(cause.id_cause, cause.name,
							cause.description, cause.beneficiary,
							cause.risk_classification, cause.love_goal,
							cause.goal, cause.love_counter, cause.fly_counter,
							cause.closing_date.slice(0,10), cause.contacts,
							cause.id_subscope, cause.id_scope,
							cause.parameters.avatar,
							cause.parameters.promotional_photo, cause.status,
							cause.parameters.cover,
							cause.url_promotional_video, love_goal_percentage,cause.short_url,cause.geographic_location,
							avatar_src));
				});

		if (self.selected_cause_status() == "STANDBY") {
			showButtonActiveCause();
			hideButtonFinishCause();
		} else if (self.selected_cause_status() == "ACTIVE") {
			showButtonFinishCause();
			hideButtonActiveCause();
		} else {
			hideButtonFinishCause();
			hideButtonActiveCause();
		}
		scopeFindAll();
		$("#causeViewModel").unmask();

	};

	findAllCause = function() {
		$("#causeViewModel").mask(loading);
		Dajaxice.cause.dajax_cause_find_all(causeFindAllCallback, {
			'status' : self.selected_cause_status(),
			'name_filter' : self.name_filter(),
			'page_number' : self.cause_page_number,
			'page_size' : self.cause_page_size
		});
	};

	findAllCause();

	// Close modal
	closeCauseModal = function() {
		clearGlobalsVariables();
		$('#causeModal').modal('hide');
	};
	
	// Open post modal
	showCausePostListModal = function() {
		$('#causePostListModal').modal('show');
	};

	function causeSaveCallback(data) {
		$("#causeModal").unmask();
		if (data.message == "ok") {			
			alertify.success(message_success);
			causeGoPage(self.cause_page_number);
			closeCauseModal();
			deleteMarkers();
			clearGeographiLocation();
		} else {
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
	};
	
	
	/*
	 * Pagination Methods
	 */

	causeGoPage = function(number) {
		causes.removeAll();
		self.cause_page_number = number;
		closeCauseModal();
		findAllCause();		
		pagination_aux = false;
	};

	causeGoNextPages = function() {
		var array_cause_page = goNextPages(self.cause_total_pages_aux, self.causePagIndexInf, self.causePagIndexSup);
    	self.cause_total_pages(array_cause_page[0]);     	
    	self.causePagIndexInf = array_cause_page[1];
    	self.causePagIndexSup = array_cause_page[2];
		
	};

	causePreviewPages = function() {
		var array_cause_page = previewPages(self.cause_total_pages_aux, self.causePagIndexInf, self.causePagIndexSup);
    	self.cause_total_pages(array_cause_page[0]);     	
    	self.causePagIndexInf = array_cause_page[1];
    	self.causePagIndexSup = array_cause_page[2];
	};

	/*
	 * End Pagination Methods
	 */
	
	newCause = function() {
		var cause = new Cause();
		var contact = new Contact();
		causeTextEditor.setValue(cause.description);
		clearGlobalsVariables();
		fieldsetDisable();
		self.causeContacts.removeAll();
		self.selected_cause(cause);
		self.selected_contact(contact);
		// set default photos
		clearImagesCause();
		self.binary_content_avatar(default_avatar_145x167);
		self.binary_content_promotional(default_promotional_photo_267x167);
		self.binary_content_cover(default_cover_210x600);
		clearGeographiLocation();
		defaultTab("tabDataCause");
	};
	
	clearImagesCause = function(){
		self.binary_content_avatar("");
		self.binary_content_promotional("");
		self.binary_content_cover("");
	}

	// show cause
	showCause = function(cause) {
		self.selected_cause(cause);
		clearGlobalsVariables();
		clearImagesCause();
		fieldsetDisable();
		clearGeographiLocation();
		defaultTab("tabDataCause");
		causeTextEditor.setValue(self.selected_cause().description);

		// show avatar
		if (self.selected_cause().avatar.toString() != "") {
			Dajaxice.resource.dajax_resource_get_by_id(resourceAvatarCallback,
					{
						'id_resource' : self.selected_cause().avatar
					});
		} else {
			self.binary_content_avatar(default_avatar_145x167);
		}
		// show promotional
		if (self.selected_cause().promotional_photo.toString() != "") {
			Dajaxice.resource.dajax_resource_get_by_id(
					resourcePromotionalCallback, {
						'id_resource' : self.selected_cause().promotional_photo
					});
		} else {
			self.binary_content_promotional(default_promotional_photo_267x167);
		}
		// show cover
		if (self.selected_cause().cover.toString() != "") {
			Dajaxice.resource.dajax_resource_get_by_id(resourceCoverCallback, {
				'id_resource' : self.selected_cause().cover
			});
		} else {
			self.binary_content_cover(default_cover_210x600);
		}

		// set contacts for cause
		self.causeContacts.removeAll();
		contact = new Contact();
		self.selected_contact(contact);
		self.causeContactsRemoved = [];
		self.selected_cause().contacts.forEach(function(contact) {
			self.causeContacts.push(new Contact(contact.id_contact,
					contact.name, contact.mobile_phone, contact.telephone,
					contact.address, contact.email, contact.organization));
		});
		// show scope for cause in combobox
		for (var i = 0; i < cause_scopes().length; i++) {
			if (cause_scopes()[i].id_scope == cause.id_scope) {
				self.selected_scope(cause_scopes()[i]);
				i = cause_scopes().length;
			}
		}
		// show cause_subscopes by scope for cause in combobox
		cause_subscopes.removeAll();
		Dajaxice.subscope.dajax_subscopes_by_scope(subscopeFindAllCallback, {
			'id_scope' : self.selected_scope().id_scope,
			'status':"ACTIVE",
			'name_filter':"",
			'page_number' : 1,
			'page_size' : 50
		});
		for (var j = 0; j < cause_subscopes().length; j++) {
			if (cause_subscopes()[j].id_subscope == cause.id_subscope) {
				self.selected_subscope(cause_subscopes()[j]);
				j = cause_subscopes().length;
			}
		}		

	};
	
	// callback resoure avatar
	function resourceAvatarCallback(data) {
		self.binary_content_avatar("data:" + data.content_type + ";base64,"
				+ data.binary_content);
	};

	// callback resource promotional_photo
	function resourcePromotionalCallback(data) {
		self.binary_content_promotional("data:" + data.content_type
				+ ";base64," + data.binary_content);
	};
	// callback resource cover
	function resourceCoverCallback(data) {
		self.binary_content_cover("data:" + data.content_type + ";base64,"
				+ data.binary_content);
	};
	
	
	/*
	 * Methods of Contacts of Cause
	 */
	
	// add contact to your list
	addContact = function() {
		if (self.selected_contact().name != null
				&& self.selected_contact().mobile_phone != null
				&& self.selected_contact().telephone != null
				&& self.selected_contact().address != null
				&& self.selected_contact().email != null
				&& self.selected_contact().organization != null) {
			if (self.selected_contact().id_contact != null) {
				self.causeContacts.push(new Contact(
						self.selected_contact().id_contact, self
								.selected_contact().name, self
								.selected_contact().mobile_phone, self
								.selected_contact().telephone, self
								.selected_contact().address, self
								.selected_contact().email, self
								.selected_contact().organization));
			} else {
				self.causeContacts.push(new Contact(null, self
						.selected_contact().name,
						self.selected_contact().mobile_phone, self
								.selected_contact().telephone, self
								.selected_contact().address, self
								.selected_contact().email, self
								.selected_contact().organization));
			}
			contact = new Contact;
			self.selected_contact(contact);
		} else {
			alertify.set({ delay: 5000 });
			alertify.error(message_incomplete);
		}
	};

	// remove contact to your list
	removeSelectedContact = function(contact) {
		self.selected_contact_remove(contact);
		if (self.selected_contact_remove().id_contact != null) {
			self.causeContactsRemoved.push(self.selected_contact_remove());
		}
		var i = 0;
		for (i = 0; i < self.causeContacts().length; i++) {
			if ((self.causeContacts()[i]) == self.selected_contact_remove()) {
				self.causeContacts.splice(i, 1);
				contact = new Contact();
				self.selected_contact_remove(contact);
				i = self.causeContacts().length;
			}
		}
	};

	// update contact
	updateSelectedContact = function(contact) {
		if (self.selected_contact().name != null
				|| self.selected_contact().address != null
				|| self.selected_contact().mobile_phone != null
				|| self.selected_contact().telephone != null
				|| self.selected_contact().email != null
				|| self.selected_contact().organization != null) {
			alertify.set({ delay: 5000 });
			alertify.log("There is a contact in edition");
		} else {
			self.selected_contact(contact);
			var i = 0;
			for (i = 0; i < self.causeContacts().length; i++) {
				if ((self.causeContacts()[i]) == self.selected_contact()) {
					self.causeContacts.splice(i, 1);
					i = self.causeContacts().length;
				}
			}
		}
	};
	/*
	 * End methods of Contacts of Cause
	 */

	uploadAvatar = function(input) {
		previewImage(input);
		setTimeout('avatarData()', 200);
		avatarData = function() {
			if (getFileName() != null) {
				var avatar = {
					'name' : getFileName(),
					'text' : 'upload from backend',
					'binary_content' : getFileContent(),
					'content_type' : getFileMimeType()
				};
				self.resources_cause.avatar = avatar;
			}
		};
	};

	uploadCover = function(input) {
		previewImage(input);
		setTimeout('coverData()', 200);
		coverData = function() {
			if (getFileName() != null) {
				var cover = {
					'name' : getFileName(),
					'text' : 'upload from backend',
					'binary_content' : getFileContent(),
					'content_type' : getFileMimeType()
				};
				self.resources_cause.cover = cover;
			}
		};
	};

	uploadPromotional = function(input) {
		previewImage(input);
		setTimeout('promotionalData()', 200);
		promotionalData = function() {
			if (getFileName() != null) {
				var promotional_photo = {
					'name' : getFileName(),
					'text' : 'upload from backend',
					'binary_content' : getFileContent(),
					'content_type' : getFileMimeType()
				};
				self.resources_cause.promotional_photo = promotional_photo;
			}
		};
	};

	/**
   	 * Observers:
   	 */
   	// Post Text Editor Observer:
	causeTextEditor.on("change", onChange);
	function onChange() { self.selected_cause().description = causeTextEditor.getValue(); };
	
	
	saveCause = function() {
		self.selected_cause().contacts = self.causeContacts();
		if (self.selected_cause().name == null
				|| self.selected_cause().description == null
				|| self.selected_cause().beneficiary == null
				|| self.selected_cause().risk_classification == null
				|| self.selected_cause().goal == null
				|| self.cause_closing_date() == null
				|| self.selected_cause().contacts.length == 0
				|| self.selected_subscope() == null
				|| self.selected_cause().love_goal == null) {
			alertify.set({ delay: 5000 });
			alertify.error(message_incomplete);
		} else {
			var regex = new RegExp('"', 'g');
			self.selected_cause().description  = self.selected_cause().description .replace(regex, '\'');
			
			alertify.confirm(message_confirmation, function (e) {
			if (e) {
				$("#causeModal").mask(loading);
				//geographic_location
				if (getGeographicLocation() != null){
					self.selected_cause().geographic_location = getGeographicLocation();
				}				
				self.selected_cause().id_subscope = self.selected_subscope().id_subscope;
				self.selected_cause().avatar_binary_content = null;
				self.selected_cause().closing_date = self.cause_closing_date();
				if (self.selected_cause().url_promotional_video == null) {
					self.selected_cause().url_promotional_video = null;
				}
				if (self.resources_cause.avatar != null
					|| self.resources_cause.promotional_photo != null
					|| self.resources_cause.cover != null) {
					self.selected_cause().with_resource = "True";
					self.selected_cause().resources = self.resources_cause;
				} else {
					self.selected_cause().with_resource = "False";
					self.selected_cause().resources = null;
				}			
			if (self.selected_cause().id_cause == null) {
				// save cause					
				Dajaxice.cause.dajax_cause_register(causeSaveCallback, {
					'data' : self.selected_cause()
				});	

			} else {
				// update cause
				self.selected_cause().remove_contacts = self.causeContactsRemoved;
				Dajaxice.cause.dajax_cause_update(causeSaveCallback, {
					'data' : self.selected_cause()
				});
			}
				}
			});
		}
	};

	// object scope selected
	self.findSubscopes = function() {
		fieldsetEnable();
		Dajaxice.subscope.dajax_subscopes_by_scope(subscopeFindAllCallback, {
			'id_scope' : self.selected_scope().id_scope,
			'status':"ACTIVE",
			'name_filter':"",
			'page_number' : 1,
			'page_size' : 50
		});
	};

	function subscopeFindAllCallback(data) {
		cause_subscopes.removeAll();
		data.content.forEach(function(subscope) {
			cause_subscopes.push(new Subscope(subscope.id_subscope,
					subscope.name, subscope.description, null,
					subscope.creation_date, subscope.activation_date,
					subscope.closing_date, subscope.status, subscope.parent));
		});
	};

	finishCause = function(cause) {
		alertify.confirm(message_confirmation, function (e) {
			if (e) {
			$("#causeModal").mask(loading);
			Dajaxice.cause.dajax_cause_update_status(causeSaveCallback, {
				'id_cause' : cause.id_cause,
				'status' : "Solved"
			});
			}
		});
	};
	
	function causeActiveCallback(data) {
		$("#causeModal").unmask();
		if (data.message == "ok") {
			alertify.success(message_success);
			//post on facebook cause
			showStream(self.selected_cause().name,self.selected_cause().description,self.selected_cause().avatar,self.selected_cause().short_url);
			causeGoPage(self.cause_page_number);
		} else {
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
	};

	activeCause = function(cause) {
		alertify.confirm(message_confirmation, function (e) {
			if (e) {
			$("#causeModal").mask(loading);
			self.selected_cause(cause);
			Dajaxice.cause.dajax_cause_update_status(causeActiveCallback, {
				'id_cause' : cause.id_cause,
				'status' : "ACTIVE"
			});
			}
		});
	};

	
	fieldsetEnable = function() {
		varFieldset = document.getElementById("fieldsetSubscopes");
		varFieldset.disabled = "";
	};

	fieldsetDisable = function() {
		varFieldset = document.getElementById("fieldsetSubscopes");
		varFieldset.disabled = "disabled";
	};

	setCauseClosingDate = function() {
		self.cause_closing_date(new Date());
	};
	
	/*
	 * Methods of partners of Cause
	 * 
	 */
	
	var partner_not_associated_page_number = 1;
	var partner_not_associated_page_size = 500;
	var partner_associated_page_number = 1;
	var partner_associated_page_size = 500;
	var total_pages_partners_associated;
	var total_pages_partners_not_associated;
	self.name_filter_partner_associated = ko.observable("");
	self.name_filter_partner_not_associated = ko.observable("");

	function findPartnersAssociatedCallback(data) {
		$("#partnersSelected").unmask();
		self.cause_selected_partners.removeAll();
		total_pages_partners_associated = data.total_pages;
		data.content.forEach(function(partner) {			
			if (partner.avatar_src == null || partner.avatar_src == "") {
				avatar_src = default_avatar_30x35;
			} else {
				avatar_src = partner.avatar_src;
			}				
			self.cause_selected_partners.push(new Partner(partner.id_partner,
					partner.name, null, null, partner.telephone, null, null, null,
					null, null, null, null, null, null, null, avatar_src,true));
		});
	};

	function findPartnersNotAssociatedCallback(data) {
		$("#partnersAvaliable").unmask();
		self.cause_avaliable_partners.removeAll();
		total_pages_partners_not_associated = data.total_pages;
		data.content.forEach(function(partner) {
			if (partner.avatar_src == null || partner.avatar_src == "") {
				avatar_src = default_avatar_30x35;
			} else {
				avatar_src = partner.avatar_src;
			}
			self.cause_avaliable_partners.push(new Partner(partner.id_partner,
					partner.name, null, null, partner.telephone, null, null, null,
					null, null, null, null, null, null, null, avatar_src,false));
		});
	};

	findPartners = function(cause) {		
		self.selected_cause(cause);	
		findPartnersAssociated();
		findPartnersNotAssociated();		
		
	};
	
	findPartnersAssociated = function (){
		$("#partnersSelected").mask(loading);
		Dajaxice.partner.dajax_partner_cause_association_find(
				findPartnersAssociatedCallback, {
					'id_cause' : self.selected_cause().id_cause,
					'associated': "True",
					'name_filter': self.name_filter_partner_associated(),
					'page_number': partner_associated_page_number,
					'page_size': partner_associated_page_size											
				});		
	};
	findPartnersNotAssociated = function (){
		$("#partnersAvaliable").mask(loading);
		Dajaxice.partner.dajax_partner_cause_association_find(
				findPartnersNotAssociatedCallback, {
					'id_cause' : self.selected_cause().id_cause,
					'associated': "False",
					'name_filter': self.name_filter_partner_not_associated(),
					'page_number': partner_not_associated_page_number,
					'page_size': partner_not_associated_page_size
				});		
	};
	
	

	addPartner = function(partner) {
		// Partners of cause
		if (partner.association == true) {
			for (var i = 0; i < self.cause_removed_partners().length; i++) {
				if ((self.cause_removed_partners()[i]) == partner) {
					self.cause_removed_partners.splice(i, 1);
					i = self.cause_removed_partners().length;
				}
			}
		}
		self.cause_selected_partners.push(partner);
		for (var i = 0; i < self.cause_avaliable_partners().length; i++) {
			if ((self.cause_avaliable_partners()[i]) == partner) {
				self.cause_avaliable_partners.splice(i, 1);
				i = self.cause_avaliable_partners().length;
			}
		}
	};

	removePartner = function(partner) {
		// Partners of cause
		if (partner.association == true) {
			self.cause_removed_partners.push(partner);
		}
		self.cause_avaliable_partners.push(partner);
		for (var i = 0; i < self.cause_selected_partners().length; i++) {
			if ((self.cause_selected_partners()[i]) == partner) {
				self.cause_selected_partners.splice(i, 1);
				i = self.cause_selected_partners().length;

			}
		}
	};

	clearArraysPartner = function() {
		self.cause_avaliable_partners.removeAll();
		self.cause_selected_partners.removeAll();
		self.cause_removed_partners.removeAll();
	};
	
	savePartnersCause = function() {
		alertify.confirm(message_confirmation, function (e) {
			if (e) {		
		$("#causePartnersModal").mask(loading);
		var partners_to_remove = new Array();
		var partners_to_add = new Array();
		for (var i = 0; i < self.cause_selected_partners().length; i++) {
			id = self.cause_selected_partners()[i].id_partner;
			partners_to_add.push(id);
		}
		for (var i = 0; i < self.cause_removed_partners().length; i++) {
			id = self.cause_removed_partners()[i].id_partner;
			partners_to_remove.push(id);
		}
		Dajaxice.cause.dajax_cause_update_partners_association(
				updatePartnersAssociationCallback, {
					'id_cause' : self.selected_cause().id_cause,
					'partners_to_remove': partners_to_remove,
					'partners_to_add':partners_to_add
				});
			}
		});
	};
	
	// Find partners associated to one cause callback:
	function updatePartnersAssociationCallback(data) {
		$("#causePartnersModal").unmask();
		if (data.message == "ok"){
			alertify.success(message_success);
			closeCausePartnersModal();
		}else{
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
	};
	// Close cause celebrities modal:
	closeCausePartnersModal = function() {
		clearArraysPartner();
		$('#causePartnersModal').modal('hide');
	};
		
	/*
	 * End methods of partners of Cause
	 */
		

	/*
	 * Cause Celebrities Methods
	 */
	
	var celebrity_not_associated_page_number = 1;
	var celebrity_not_associated_page_size = 500;
	var celebrity_associated_page_number = 1;
	var celebrity_associated_page_size = 500;
	var total_pages_celebrities_associated;
	var total_pages_celebrities_not_associated;
	self.name_filter_celebrity_associated = ko.observable("");
	self.name_filter_celebrity_not_associated = ko.observable("");
	
	// Find all celebrities associated to one cause:
	findCelebrities = function(cause) {
		self.selected_cause(cause);
		findCelebritiesAssociated();
		findCelebritiesNotAssociated();
		
	};
	
	findCelebritiesAssociated = function(){
		$("#selectedCelebrities").mask(loading);
		Dajaxice.celebrity.dajax_celebrity_find_cause_association(
				findCelebritiesAssociatedCallback, {
					'id_cause' : self.selected_cause().id_cause,
					'associated': "True",
					'name_filter': self.name_filter_celebrity_associated(),
					'page_number': celebrity_associated_page_number,
					'page_size': celebrity_associated_page_size
				});		
	};
	
	findCelebritiesNotAssociated = function(){
		$("#avaliableCelebrities").mask(loading);
		Dajaxice.celebrity.dajax_celebrity_find_cause_association(
				findCelebritiesNotAssociatedCallback, {
					'id_cause' : self.selected_cause().id_cause,
					'associated': "False",
					'name_filter': self.name_filter_celebrity_not_associated(),
					'page_number': celebrity_not_associated_page_number,
					'page_size': celebrity_associated_page_size
				});
	};
	
	
	
	// Find celebrities associated to one cause callback:
	function findCelebritiesAssociatedCallback(data) {
		$("#selectedCelebrities").unmask();
		self.cause_selected_celebrities.removeAll();
		total_pages_celebrities_associated = data.total_pages;
		data.content.forEach(function(celebrity) {
			if (celebrity.avatar_src == null || celebrity.avatar_src == "") {
				avatar_src = default_avatar_30x35;
			} else {
				avatar_src = celebrity.avatar_src;
			}	
			self.cause_selected_celebrities.push(new Celebrity(celebrity.id_celebrity,
					celebrity.name, null, null, null, celebrity.telephone, null, null, null,
					null, null, null, null, null, null, null, avatar_src,true));
		});
	};
	// Find celebrities not associated to one cause callback:
	function findCelebritiesNotAssociatedCallback(data) {
		$("#avaliableCelebrities").unmask();
		self.cause_avaliable_celebrities.removeAll();
		total_pages_celebrities_not_associated = data.total_pages;
		data.content.forEach(function(celebrity) {
			if (celebrity.avatar_src == null || celebrity.avatar_src == "") {
				avatar_src = default_avatar_30x35;
			} else {
				avatar_src = celebrity.avatar_src;
			}
			self.cause_avaliable_celebrities.push(new Celebrity(celebrity.id_celebrity,
					celebrity.name, null, null, null, celebrity.telephone, null, null, null,
					null, null, null, null, null, null, null, avatar_src,false));
		});
	};
	// Add one celebrity to be associated with the selected cause:
	addCelebrity = function(celebrity) {
		if (celebrity.association == true) {
			for (var i = 0; i < self.cause_removed_celebrities().length; i++) {
				if ((self.cause_removed_celebrities()[i]) == celebrity) {
					self.cause_removed_celebrities.splice(i, 1);
					i = self.cause_removed_celebrities().length;
				}
			}
		}
		self.cause_selected_celebrities.push(celebrity);
		for (var i = 0; i < self.cause_avaliable_celebrities().length; i++) {
			if ((self.cause_avaliable_celebrities()[i]) == celebrity) {
				self.cause_avaliable_celebrities.splice(i, 1);
				i = self.cause_avaliable_celebrities().length;
			}
		}
	};
	// Remove one celebrity to delete the association with the selected cause:
	removeCelebrity = function(celebrity) {
		if (celebrity.association == true) {
			self.cause_removed_celebrities.push(celebrity);
		}
		self.cause_avaliable_celebrities.push(celebrity);
		for (var i = 0; i < self.cause_selected_celebrities().length; i++) {
			if ((self.cause_selected_celebrities()[i]) == celebrity) {
				self.cause_selected_celebrities.splice(i, 1);
				i = self.cause_selected_celebrities().length;
			}
		}
	};
	// Clear the arrays of Cause Celebrity association:
	clearCelebrityArrays = function() {
		self.cause_avaliable_celebrities.removeAll();
		self.cause_selected_celebrities.removeAll();
		self.cause_removed_celebrities.removeAll();
	};
	// Save the Celebrity association with the selected cause:
	saveCauseCelebrities = function() {
		alertify.confirm(message_confirmation, function (e) {
			if (e) {
		$("#causeCelebritiesModal").mask(loading);
		var celebrities_to_remove = new Array();
		var celebrities_to_add = new Array();
		for (var i = 0; i < self.cause_selected_celebrities().length; i++) {
			id = self.cause_selected_celebrities()[i].id_celebrity;
			celebrities_to_add.push(id);
		}
		for (var i = 0; i < self.cause_removed_celebrities().length; i++) {
			id = self.cause_removed_celebrities()[i].id_celebrity;
			celebrities_to_remove.push(id);
		}
		Dajaxice.cause.dajax_cause_update_celebrities_association(
				updateCelebritiesAssociationCallback, {
					'id_cause' : self.selected_cause().id_cause,
					'celebrities_to_remove': celebrities_to_remove,
					'celebrities_to_add': celebrities_to_add
				});
			}
		});
	};
	// Find celebrities associated to one cause callback:
	function updateCelebritiesAssociationCallback(data) {
		$("#causeCelebritiesModal").unmask();
		if (data.message == "ok"){
			alertify.success(message_success);
			closeCauseCelebritiesModal();
		}else{
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
	};
	// Close cause celebrities modal:
	closeCauseCelebritiesModal = function() {
		clearCelebrityArrays();
		$('#causeCelebritiesModal').modal('hide');
	};
	
	/*
	 * End methods of celebrities of Cause
	 */
	
	//Show Location Cause
	showCauseMapLocation = function (){
		drawMap(document.getElementById("googleMapCause"));
		if (self.selected_cause().geographic_location != null){
			locationReceived(self.selected_cause().geographic_location[0],self.selected_cause().geographic_location[1],self.selected_cause().name)
		}
	}
	
	/*
	 * Methods of awards of Cause
	 * 
	 */
	
	var award_not_associated_page_number = 1;
	var award_not_associated_page_size = 500;
	var award_associated_page_number = 1;
	var award_associated_page_size = 500;
	var total_pages_awards_associated;
	var total_pages_awards_not_associated;
	self.name_filter_award_associated = ko.observable("");
	self.name_filter_award_not_associated = ko.observable("");

	function findAwardsAssociatedCallback(data) {
		$("#awardsSelected").unmask();
		self.cause_selected_awards.removeAll();
		total_pages_awards_associated = data.total_pages;
		data.content.forEach(function(award) {			
			if (award.avatar_src == null || award.avatar_src == "") {
				avatar_src = default_avatar_30x35;
			} else {
				avatar_src = award.avatar_src;
			}				
			self.cause_selected_awards.push(new Award(award.id_award,
					award.title,null,null,null,null,null,null,avatar_src,true));
		});
	};

	function findAwardsNotAssociatedCallback(data) {
		$("#awardsAvaliable").unmask();
		self.cause_avaliable_awards.removeAll();
		total_pages_awards_not_associated = data.total_pages;
		data.content.forEach(function(award) {
			if (award.avatar_src == null || award.avatar_src == "") {
				avatar_src = default_avatar_30x35;
			} else {
				avatar_src = award.avatar_src;
			}
			self.cause_avaliable_awards.push(new Award(award.id_award,
					award.title,null,null,null,null,null,null,avatar_src,false));
		});
	};

	findAwards = function(cause) {		
		self.selected_cause(cause);	
		findAwardsAssociated();
		findAwardsNotAssociated();			
	};
	
	findAwardsAssociated = function (){
		$("#awardsSelected").mask(loading);
		Dajaxice.award.dajax_award_bee_association_find(
				findAwardsAssociatedCallback, {
					'id_bee' : self.selected_cause().id_cause,
					'associated': "True",
					'name_filter': self.name_filter_award_associated(),
					'page_number': award_associated_page_number,
					'page_size': award_associated_page_size											
				});		
	};
	findAwardsNotAssociated = function (){
		$("#awardsAvaliable").mask(loading);
		Dajaxice.award.dajax_award_bee_association_find(
				findAwardsNotAssociatedCallback, {
					'id_bee' : self.selected_cause().id_cause,
					'associated': "False",
					'name_filter': self.name_filter_award_not_associated(),
					'page_number': award_not_associated_page_number,
					'page_size': award_not_associated_page_size
				});		
	};
	
	addAward = function(award) {
		// Awards of cause
		if (award.association == true) {
			for (var i = 0; i < self.cause_removed_awards().length; i++) {
				if ((self.cause_removed_awards()[i]) == award) {
					self.cause_removed_awards.splice(i, 1);
					i = self.cause_removed_awards().length;
				}
			}
		}
		self.cause_selected_awards.push(award);
		for (var i = 0; i < self.cause_avaliable_awards().length; i++) {
			if ((self.cause_avaliable_awards()[i]) == award) {
				self.cause_avaliable_awards.splice(i, 1);
				i = self.cause_avaliable_awards().length;
			}
		}
	};

	removeAward = function(award) {
		// Awards of cause
		if (award.association == true) {
			self.cause_removed_awards.push(award);
		}
		self.cause_avaliable_awards.push(award);
		for (var i = 0; i < self.cause_selected_awards().length; i++) {
			if ((self.cause_selected_awards()[i]) == award) {
				self.cause_selected_awards.splice(i, 1);
				i = self.cause_selected_awards().length;

			}
		}
	};

	clearArraysAward = function() {
		self.cause_avaliable_awards.removeAll();
		self.cause_selected_awards.removeAll();
		self.cause_removed_awards.removeAll();
	};
	
	saveAwardsCause = function() {
		alertify.confirm(message_confirmation, function (e) {
			if (e) {		
		$("#causeAwardsModal").mask(loading);
		var awards_to_remove = new Array();
		var awards_to_add = new Array();
		for (var i = 0; i < self.cause_selected_awards().length; i++) {
			id = self.cause_selected_awards()[i].id_award;
			awards_to_add.push(id);
		}
		for (var i = 0; i < self.cause_removed_awards().length; i++) {
			id = self.cause_removed_awards()[i].id_award;
			awards_to_remove.push(id);
		}
		Dajaxice.cause.dajax_cause_update_awards_association(
				updateAwardsAssociationCallback, {
					'id_cause' : self.selected_cause().id_cause,
					'awards_to_remove': awards_to_remove,
					'awards_to_add':awards_to_add
				});
			}
		});
	};
	
	// Find awards associated to one cause callback:
	function updateAwardsAssociationCallback(data) {
		$("#causeAwardsModal").unmask();
		if (data.message == "ok"){
			alertify.success(message_success);
			closeCauseAwardsModal();
		}else if (data.error != null){
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}else {
			alertify.set({ delay: 10000 });
			alertify.error(data.message);
			clearArraysAward();
			findAwardsAssociated();
			findAwardsNotAssociated();
		}
	};
	// Close cause celebrities modal:
	closeCauseAwardsModal = function() {
		clearArraysAward();
		$('#causeAwardsModal').modal('hide');
	};
		
	/*
	 * End methods of awards of Cause
	 */
	
	
	

}
// ko.applyBindings(new CauseViewModel());
ko.applyBindings(CauseViewModel(), document.getElementById("causeViewModel"));