//Variables Globales
var partners = ko.observableArray([]);


function PartnerViewModel() {
	var self = this;
	self.partner_page_number = 1;
	self.partner_page_size = 7;
	self.selected_partner_status = ko.observable("ACTIVE");
	self.partner_status = ko.observableArray([ "ACTIVE", "INACTIVE" ]);
	self.selected_partner = ko.observable();
	self.binary_content_avatar_partner = ko.observable();
	self.binary_content_promotional_partner = ko.observable();
	self.binary_content_cover_partner = ko.observable();
	self.name_filter = ko.observable("");
	
	//Pagination
	self.partnerPagIndexInf = 0;
	self.partnerPagIndexSup = 4;
	self.partner_total_pages_aux = new Array();
	self.partner_total_pages = ko.observableArray([]);
	var pagination_aux = true;
	
	self.resources_partner = {
			avatar : null,
			promotional_photo : null,
			cover: null
		};
	
	findAllPartners = function() {
		$("#partnerViewModel").mask(loading);
		Dajaxice.partner.dajax_partner_find_all(partnerFindAllCallback, {
			'status' : self.selected_partner_status(),
			'name_filter': self.name_filter(),
			'page_number' : self.partner_page_number,
			'page_size' : self.partner_page_size
		});
	};
		
	findAllPartners();

	// Dajaxice partner_find_all callback
	function partnerFindAllCallback(data) {
		partners.removeAll();
		//pagination initial
		self.partner_total_pages_aux = [];
		for (i = 0; i < data.total_pages; i++) {
			self.partner_total_pages_aux.push(i + 1);
		}
		if (pagination_aux) {
			self.partner_total_pages(paginationGeneral(self.partner_total_pages_aux, self.partnerPagIndexInf, self.partnerPagIndexSup));
		}
		pagination_aux = true;
		//end pagination initial
		data.content.forEach(function(partner) {
			// To display the partner avatar on the list:
			var avatar_src = null;
			if (partner.avatar_src == null || partner.avatar_src == "") {
				avatar_src = default_avatar_30x35;
			} else {
				avatar_src = partner.avatar_src;
			}
			partners.push(new Partner(partner.id_partner, partner.name,
					partner.description,partner.email, partner.telephone,partner.web_site,partner.address,
					partner.love_counter, partner.parameters.avatar, partner.parameters.promotional_photo,
					partner.status, partner.parameters.cover, partner.twitter,partner.facebook, partner.google_plus,avatar_src,null));
		});
		
		if (self.selected_partner_status() == "ACTIVE") {
			showButtonRemovePartner();
			hideButtonActivePartner();
		} else if (self.selected_partner_status() == "INACTIVE") {
			showButtonActivePartner();
			hideButtonRemovePartner();
		}
		$("#partnerViewModel").unmask();
	};
	
	// Close modal
	closePartnerModal = function() {
		$('#partnerModal').modal('hide');
	};
	
		
	uploadAvatar = function(input) {
		previewImage(input);
		setTimeout('avatarData()', 200);
		avatarData = function() {
			if (getFileName() != null) {
				var avatar = {'name' : getFileName(),'text' : 'upload from backend','binary_content' : getFileContent(),'content_type' : getFileMimeType()};
				self.resources_partner.avatar = avatar;
			}
		};
	};
	
	uploadCover = function(input) {
		previewImage(input);
		setTimeout('coverData()', 200);
		coverData = function() {
			if (getFileName() != null) {
				var cover = {'name' : getFileName(),'text' : 'upload from backend','binary_content' : getFileContent(),'content_type' : getFileMimeType()};
				self.resources_partner.cover = cover;
			}
		};
	};

	
	uploadPromotional = function(input) {
		previewImage(input);
		setTimeout('promotionalData()', 200);
		promotionalData = function() {
			if (getFileName() != null) {
				var promotional_photo = {'name' : getFileName(),'text' : 'upload from backend','binary_content' : getFileContent(),'content_type' : getFileMimeType()};
				self.resources_partner.promotional_photo = promotional_photo;
			}
		};
	};
		
	newPartner = function() {
		clearGlobalsVariables();
		clearVariablesImages();
		var partner = new Partner(null,null,null,null,null,"http://",null,null,null,null,null,null,null,null,null,null,null);
		self.selected_partner(partner);
		// set default photos
		self.binary_content_avatar_partner("");
		self.binary_content_promotional_partner("");
		self.binary_content_cover_partner("");
		self.binary_content_avatar_partner(default_avatar_145x167);
		self.binary_content_promotional_partner(default_promotional_photo_267x167);
		self.binary_content_cover_partner(default_cover_210x600);
		defaultTab("tabDataPartner");
	};
	
	
	clearVariablesImages = function(){
		self.binary_content_avatar_partner("");
		self.binary_content_promotional_partner("");
		self.binary_content_cover_partner("");
		self.resources_partner.avatar = null;
		self.resources_partner.promotional_photo = null;
		self.resources_partner.cover = null;
	};
	
	
	// callback resoure avatar
	function resourceAvatarCallback(data) {
		self.binary_content_avatar_partner("data:" + data.content_type + ";base64,"+ data.binary_content);
	};

	// callback resource promotional_photo
	function resourcePromotionalCallback(data) {
		self.binary_content_promotional_partner("data:" + data.content_type + ";base64," + data.binary_content);
	};
	
	function resourceCoverCallback(data) {
		self.binary_content_cover_partner("data:" + data.content_type + ";base64," + data.binary_content);
	};
	
	showPartner = function(partner){
		self.selected_partner(partner);
		clearGlobalsVariables();
		clearVariablesImages();
		// show avatar
		if (self.selected_partner().avatar.toString() != "") {
			Dajaxice.resource.dajax_resource_get_by_id(resourceAvatarCallback,
					{
						'id_resource' : self.selected_partner().avatar
					});
		} else {
			self.binary_content_avatar_partner(default_avatar_145x167);
		}
		// show promotional
		if (self.selected_partner().promotional_photo.toString() != "") {
			Dajaxice.resource.dajax_resource_get_by_id(
					resourcePromotionalCallback, {
						'id_resource' : self.selected_partner().promotional_photo
					});
		} else {
			self.binary_content_promotional_partner(default_promotional_photo_267x167);
		}
		// show cover
		if (self.selected_partner().cover.toString() != "") {
			Dajaxice.resource.dajax_resource_get_by_id(resourceCoverCallback, {
						'id_resource' : self.selected_partner().cover
					});
		} else {
			self.binary_content_cover_partner(default_cover_210x600);
		}
		defaultTab("tabDataPartner");
	};	

	function partnerSaveCallback(data) {
		$("#partnerModal").unmask();
		if (data.message == "ok") {
			alertify.success(message_success);
			clearGlobalsVariables();
			findAllPartners();
			closePartnerModal();
		} else {
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
	};
	
	savePartner = function() {
		if (self.selected_partner().name == null || self.selected_partner().description == null || self.selected_partner().email == null
		|| self.selected_partner().telephone == null || self.selected_partner().web_site == null || self.selected_partner().address == 0) {
			alert("Must provide all data of the Partner");
		} else {
			alertify.confirm(message_confirmation, function (e) {
				if (e) {			
					$("#partnerModal").mask(loading);
					self.selected_partner().avatar_src = null;
					if (self.resources_partner.avatar != null || self.resources_partner.promotional_photo != null || self.resources_partner.cover != null) {
						self.selected_partner().with_resource = "True";
						self.selected_partner().resources = self.resources_partner;
					} else {
						self.selected_partner().with_resource = "False";
						self.selected_partner().resources = null;
					}
					if (self.selected_partner().id_partner == null) {
						// save partner
						Dajaxice.partner.dajax_partner_register(partnerSaveCallback, {'partner' : self.selected_partner()});
		
					} else {
						//update partner
						Dajaxice.partner.dajax_partner_update(partnerUpdateCallback, {'partner' : self.selected_partner()});
					}
				}
			});
		}
	};
	
	 function partnerUpdateCallback(data){
		 $("#partnerModal").unmask();
		 if (data.message == "ok") {
			alertify.success(message_success);
			findAllPartners();
			closePartnerModal();
		} else {
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
	};
	
		
	removePartner = function(partner){
		alertify.confirm(message_confirmation, function (e) {
			if (e) {			
				$("#partnerModal").mask(loading);
				Dajaxice.partner.dajax_partner_update_status(partnerUpdateCallback, {'id_partner' : partner.id_partner, 'status': 'INACTIVE'});
			}
		});
	};
	activePartner = function(partner){
		alertify.confirm(message_confirmation, function (e) {
			if (e) {			
				$("#partnerModal").mask(loading);
				Dajaxice.partner.dajax_partner_update_status(partnerUpdateCallback, {'id_partner' : partner.id_partner, 'status': 'INACTIVE'});
			}
		});
	};
	
	 /**
     * Pagination Methods
     * */
    
    partnerGoNextPages = function (){
    	var array_partner_page = goNextPages(self.partner_total_pages_aux, self.partnerPagIndexInf, self.partnerPagIndexSup);
    	self.partner_total_pages(array_partner_page[0]);     	
    	self.partnerPagIndexInf = array_partner_page[1];
    	self.partnerPagIndexSup = array_partner_page[2];
    };
    
    partnerPreviewPages = function (){
    	var array_partner_page = previewPages(self.partner_total_pages_aux, self.partnerPagIndexInf, self.partnerPagIndexSup);
    	self.partner_total_pages(array_partner_page[0]);     	
    	self.partnerPagIndexInf = array_partner_page[1];
    	self.partnerPagIndexSup = array_partner_page[2];
    };
    
    partnerGoPage = function(number) {
    	partners.removeAll();
		self.partner_page_number = number;
		findAllPartners();
		closePartnerModal();		
		pagination_aux = false;		
	};
	
	showButtonRemovePartner = function() {
		var varRemovePartner = document.getElementsByName("btnRemovePartner");
		for (var i = 0; i < varRemovePartner.length; i++) {
			varRemovePartner[i].style.display = "";
		}
	};

	hideButtonRemovePartner = function() {
		var varRemovePartner = document.getElementsByName("btnRemovePartner");
		for (var i = 0; i < varRemovePartner.length; i++) {
			varRemovePartner[i].style.display = "none";
		}
	};
	
	showButtonActivePartner = function() {
		var varActivePartner = document.getElementsByName("btnActivePartner");
		for (var i = 0; i < varActivePartner.length; i++) {
			varActivePartner[i].style.display = "";
		}
	};

	hideButtonActivePartner = function() {
		var varActivePartner = document.getElementsByName("btnActivePartner");
		for (var i = 0; i < varActivePartner.length; i++) {
			varActivePartner[i].style.display = "none";
		}
	};
	
}
ko.applyBindings(PartnerViewModel(), document.getElementById("partnerViewModel"));
