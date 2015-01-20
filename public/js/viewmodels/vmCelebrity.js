//Globals Variables
var celebrities = ko.observableArray([]);

function CelebrityViewModel() {
	var self = this;
	self.celebrity_page_number = 1;
	self.celebrity_page_size = 7;
	self.selected_celebrity_status = ko.observable("ACTIVE");
	self.celebrity_status = ko.observableArray([ "ACTIVE", "INACTIVE" ]);
	self.selected_celebrity = ko.observable();
	self.binary_content_avatar_celebrity = ko.observable();
	self.binary_content_promotional_celebrity = ko.observable();
	self.binary_content_cover_celebrity = ko.observable();
	self.name_filter = ko.observable("");
	self.resources_celebrity = {
		avatar : null,
		promotional_photo : null,
		cover: null
	};
	//Pagination
	self.celebrityPagIndexInf = 0;
	self.celebrityPagIndexSup = 4;
	self.celebrity_total_pages_aux = new Array();
	self.celebrity_total_pages = ko.observableArray([]);
	var pagination_aux = true;
	
	
	
	findAllCelebrities = function() {
		$("#celebrityViewModel").mask(loading);
		Dajaxice.celebrity.dajax_celebrity_find_all(celebrityFindAllCallback, {
			'status' : self.selected_celebrity_status(),
			'name_filter': self.name_filter(),
			'page_number' : self.celebrity_page_number,
			'page_size' : self.celebrity_page_size
		});
	};	
	findAllCelebrities();

	// Dajaxice celebrity_find_by_status callback
	function celebrityFindAllCallback(data) {
		celebrities.removeAll();
		//pagination initial
		self.celebrity_total_pages_aux = [];
		for (i = 0; i < data.total_pages; i++) {
			self.celebrity_total_pages_aux.push(i + 1);
		}		
		if (pagination_aux) {
			self.celebrity_total_pages(paginationGeneral(self.celebrity_total_pages_aux, self.celebrityPagIndexInf, self.celebrityPagIndexSup));
		}
		pagination_aux = true;
		//end pagination initial	
		
		data.content.forEach(function(celebrity) {
			// To display the celebrity avatar on the list:
			var avatar_src = null;
			if (celebrity.avatar_src == null || celebrity.avatar_src == "") {
				avatar_src = default_avatar_30x35;
			} else {
				avatar_src = celebrity.avatar_src;
			}
			celebrities.push(new Celebrity(celebrity.id_celebrity, celebrity.name,
					celebrity.description, celebrity.owner, celebrity.email, celebrity.telephone, celebrity.web_site,
					celebrity.facebook, celebrity.twitter, celebrity.google_plus, celebrity.address,
					celebrity.love_counter, celebrity.parameters.avatar, celebrity.parameters.promotional_photo,
					celebrity.parameters.cover, celebrity.status, avatar_src, null));
		});
		
		if (self.selected_celebrity_status() == "ACTIVE") {
			showButtonRemoveCelebrity();
			hideButtonActiveCelebrity();
		} else if (self.selected_celebrity_status() == "INACTIVE") {
			showButtonActiveCelebrity();
			hideButtonRemoveCelebrity();
		}	
		$("#celebrityViewModel").unmask();
		
	};
	
	// Close celebrity modal
	closeCelebrityModal = function() {
		$('#celebrityModal').modal('hide');
		clearGlobalsVariables();
	};
	// Upload the celebrity avatar picture:
	uploadAvatar = function(input) {
		previewImage(input);
		setTimeout('avatarData()', 200);
		avatarData = function() {
			if (getFileName() != null) {
				var avatar = {'name' : getFileName(),'text' : 'upload from backend','binary_content' : getFileContent(),'content_type' : getFileMimeType()};
				self.resources_celebrity.avatar = avatar;
			}
		};
	};
	// Upload the celebrity avatar picture:
	uploadCover = function(input) {
		previewImage(input);
		setTimeout('coverData()', 200);
		coverData = function() {
			if (getFileName() != null) {
				var cover = {'name' : getFileName(),'text' : 'upload from backend','binary_content' : getFileContent(),'content_type' : getFileMimeType()};
				self.resources_celebrity.cover = cover;
			}
		};
	};

	uploadPromotional = function(input) {
		previewImage(input);
		setTimeout('promotionalData()', 200);
		promotionalData = function() {
			if (getFileName() != null) {
				var promotional_photo = {'name' : getFileName(),'text' : 'upload from backend','binary_content' : getFileContent(),'content_type' : getFileMimeType()};
				self.resources_celebrity.promotional_photo = promotional_photo;
			}
		};
	};
		
	newCelebrity = function() {
		clearGlobalsVariables();
		clearVariablesImages();
		var celebrity = new Celebrity(null,null,null,null,null,null,
									  "http://",null,null,null,null,
									  null,null,null,null,null,null,null);
		self.selected_celebrity(celebrity);
		// set default photos
		
		self.binary_content_avatar_celebrity(default_avatar_145x167);
		self.binary_content_promotional_celebrity(default_promotional_photo_267x167);
		self.binary_content_cover_celebrity(default_cover_210x600);
		defaultTab("tabDataCelebrity");
	};
	
	clearVariablesImages = function(){
		self.binary_content_avatar_celebrity("");
		self.binary_content_promotional_celebrity("");
		self.binary_content_cover_celebrity("");
		self.resources_celebrity.avatar = null;
		self.resources_celebrity.promotional_photo = null;
		self.resources_celebrity.cover = null;
		
	}
	
	// callback resoure avatar
	function resourceAvatarCallback(data) {
		self.binary_content_avatar_celebrity("data:" + data.content_type + ";base64,"+ data.binary_content);
	};

	// callback resource promotional_photo
	function resourcePromotionalCallback(data) {
		self.binary_content_promotional_celebrity("data:" + data.content_type + ";base64," + data.binary_content);
	};
	
	function resourceCoverCallback(data) {
		self.binary_content_cover_celebrity("data:" + data.content_type + ";base64," + data.binary_content);
	};
	
	showCelebrity = function(celebrity){
		self.selected_celebrity(celebrity);
		clearGlobalsVariables();
		clearVariablesImages();
		// show avatar
		if (self.selected_celebrity().avatar.toString() != "") {
			Dajaxice.resource.dajax_resource_get_by_id(resourceAvatarCallback,
					{
						'id_resource' : self.selected_celebrity().avatar
					});
		} else {
			self.binary_content_avatar_celebrity(default_avatar_30x35);
		}
		// show promotional
		if (self.selected_celebrity().promotional_photo.toString() != "") {
			Dajaxice.resource.dajax_resource_get_by_id(
					resourcePromotionalCallback, {
						'id_resource' : self.selected_celebrity().promotional_photo
					});
		} else {
			self.binary_content_promotional_celebrity(default_promotional_photo_267x167);
		}
		// show cover
		if (self.selected_celebrity().cover.toString() != "") {
			Dajaxice.resource.dajax_resource_get_by_id(resourceCoverCallback, {
						'id_resource' : self.selected_celebrity().cover
					});
		} else {
			self.binary_content_cover_celebrity(default_cover_210x600);
		}
		defaultTab("tabDataCelebrity");
	};	
	
	saveCelebrity = function() {
		if (self.selected_celebrity().name == null || self.selected_celebrity().description == null || self.selected_celebrity().email == null
		|| self.selected_celebrity().telephone == null || self.selected_celebrity().web_site == null || self.selected_celebrity().address == 0) {
			alertify.set({ delay: 5000 });
			alertify.error(message_incomplete);
		} else {
			alertify.confirm(message_confirmation, function (e) {
				if (e) {
					$("#celebrityModal").mask(loading);
					self.selected_celebrity().avatar_src = null;
					if (self.resources_celebrity.avatar != null || self.resources_celebrity.promotional_photo != null || self.resources_celebrity.cover != null) {
						self.selected_celebrity().with_resource = "True";
						self.selected_celebrity().resources = self.resources_celebrity;
					} else {
						self.selected_celebrity().with_resource = "False";
						self.selected_celebrity().resources = null;
					}			
					if (self.selected_celebrity().id_celebrity == null) {
						// save celebrity
						Dajaxice.celebrity.dajax_celebrity_register(celebritySaveCallback, {'celebrity' : self.selected_celebrity()});

					} else {
						// update celebrity
						Dajaxice.celebrity.dajax_celebrity_update(celebrityUpdateCallback, {'celebrity' : self.selected_celebrity()});
					}			
				}
			});
		}
	};
	
	function celebritySaveCallback(data) {
		$("#celebrityModal").unmask();
		if (data.message == "ok") {
			alertify.success(message_success);
			findAllCelebrities();
			closeCelebrityModal();
		} else {
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
	};
	
	function celebrityUpdateCallback(data){
		$("#celebrityModal").unmask();
		 if (data.message == "ok") {
			 alertify.success(message_success);
			findAllCelebrities();
			closeCelebrityModal();
		} else {
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
	};
	
	removeCelebrity = function(celebrity){
		alertify.confirm(message_confirmation, function (e) {
			if (e) {
				$("#celebrityModal").mask(loading);
				Dajaxice.celebrity.dajax_celebrity_update_status(celebrityUpdateCallback, {'id_celebrity' : celebrity.id_celebrity, 'status': 'INACTIVE'});
			}
		});
	};
	
	activeCelebrity = function(celebrity){
		alertify.confirm(message_confirmation, function (e) {
			if (e) {
				$("#celebrityModal").mask(loading);
				Dajaxice.celebrity.dajax_celebrity_update_status(celebrityUpdateCallback, {'id_celebrity' : celebrity.id_celebrity, 'status': 'INACTIVE'});
			}
		});
	};
	
	
	 /**
     * Pagination Methods
     * */
    
    celebrityGoNextPages = function (){
    	var array_celebrity_page = goNextPages(self.celebrity_total_pages_aux, self.celebrityPagIndexInf, self.celebrityPagIndexSup);
    	self.celebrity_total_pages(array_celebrity_page[0]);     	
    	self.celebrityPagIndexInf = array_celebrity_page[1];
    	self.celebrityPagIndexSup = array_celebrity_page[2];
    };
    
    celebrityPreviewPages = function (){
    	var array_celebrity_page = previewPages(self.celebrity_total_pages_aux, self.celebrityPagIndexInf, self.celebrityPagIndexSup);
    	self.celebrity_total_pages(array_celebrity_page[0]);     	
    	self.celebrityPagIndexInf = array_celebrity_page[1];
    	self.celebrityPagIndexSup = array_celebrity_page[2];
    };
    
    celebrityGoPage = function(number) {
    	celebrities.removeAll();
		self.celebrity_page_number = number;
		closeCelebrityModal();
		findAllCelebrities();
		pagination_aux = false;		
	};
	
	showButtonRemoveCelebrity = function() {
		var varRemoveCelebrity = document.getElementsByName("btnRemoveCelebrity");
		for (var i = 0; i < varRemoveCelebrity.length; i++) {
			varRemoveCelebrity[i].style.display = "";
		}
	};

	hideButtonRemoveCelebrity = function() {
		var varRemoveCelebrity = document.getElementsByName("btnRemoveCelebrity");
		for (var i = 0; i < varRemoveCelebrity.length; i++) {
			varRemoveCelebrity[i].style.display = "none";
		}
	};
	
	showButtonActiveCelebrity = function() {
		var varActiveCelebrity = document.getElementsByName("btnActiveCelebrity");
		for (var i = 0; i < varActiveCelebrity.length; i++) {
			varActiveCelebrity[i].style.display = "";
		}
	};

	hideButtonActiveCelebrity = function() {
		var varActiveCelebrity = document.getElementsByName("btnActiveCelebrity");
		for (var i = 0; i < varActiveCelebrity.length; i++) {
			varActiveCelebrity[i].style.display = "none";
		}
	};
	
}
ko.applyBindings(CelebrityViewModel(), document.getElementById("celebrityViewModel"));
