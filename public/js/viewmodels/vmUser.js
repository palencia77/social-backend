var users = ko.observableArray([]);

function UserViewModel() {
	var self = this;
	self.user_page_number = 1;
	self.user_page_size = 7;

	// Pagination
	self.userPagIndexInf = 0;
	self.userPagIndexSup = 4;
	self.user_total_pages_aux = new Array();
	self.user_total_pages = ko.observableArray([]);
	var pagination_aux = true;
	self.user_status = ko.observableArray([ "ACTIVE", "INACTIVE" ]);
	var user_gender = ko.observableArray(["FEMALE", "MALE"]);
	self.selected_status_user = ko.observable("ACTIVE");
	self.name_filter = ko.observable("");
	self.user_birthday = ko.observable(new Date());

	// Object user selected from the list
	self.selectedUser = ko.observable();
	
	// Dajaxice on load ejectution
	userFindAll = function(){
	$("#userViewModel").mask(loading);
	Dajaxice.security.dajax_user_find_all(userFindAllCallback, {
		'status': self.selected_status_user(),
		'name_filter':self.name_filter(),
		'page_number' : self.user_page_number,
		'page_size' : self.user_page_size
	});
	};
	
	userFindAll();
	
	setUserBirthday = function() {
		self.user_birthday(new Date());
	};
	
	// Dajaxice user_find_all callback
	function userFindAllCallback(data) {

		// pagination initial
		self.user_total_pages_aux = [];
		for (i = 0; i < data.total_pages; i++) {
			self.user_total_pages_aux.push(i + 1);
		}
		if (pagination_aux) {
			self.user_total_pages(paginationGeneral(
					self.user_total_pages_aux, self.userPagIndexInf,
					self.userPagIndexSup));
		}
		pagination_aux = true;
		// end pagination initial
		users.removeAll();
		data.content.forEach(function(user) {
			avatar_src = null;
			if (user.avatar_src == null
					|| user.avatar_src == "") {
				avatar_src = default_avatar_30x35;
			} else {
				avatar_src = user.avatar_src;
			}					
			users.push(new User(user.id_user, user.full_name, user.gender, user.birthday, 
					user.email, user.phone, null, null,null,user.id_avatar,avatar_src));
		});
		
		if (self.selected_status_user() == "ACTIVE") {
			showButtonRemoveUser();
			hideButtonActiveUser();
		} else if (self.selected_status_user() == "INACTIVE") {
			showButtonActiveUser();
			hideButtonRemoveUser();
		}
		$("#userViewModel").unmask();
	};

	// Function that hold the user selected from the list
	showUser = function(user) {
		self.selectedUser(user);
	};
	// Clear the selecteduser
	clearSelectedUser = function() {
		var user = new User(null,null,null,null,null,null,null,null,null,null,default_avatar_145x167);
		self.selectedUser(user);
		clearGlobalsVariables();
	};
	
	// Close the user modal
	closeUserModal = function() {
		$('#userModal').modal('hide');
	};
	
	// Save a new user
	saveUser = function() {
		var avatar = null;
		if (getFileName() != null) {
			var avatar = {
					'name' : getFileName(),
					'text' : 'Upload from backend',
					'binary_content' : getFileContent(),
					'content_type' : getFileMimeType()
				};
		}
		if (self.selectedUser().full_name == null || self.selectedUser().password == null || self.selectedUser().login == null || self.selectedUser().gender == null || self.selectedUser().birthday == null || self.selectedUser().email == null || self.selectedUser().phone == null ) {
			alertify.set({ delay: 5000 });
			alertify.error(message_incomplete);
		} else {
			if(self.selectedUser().password != self.selectedUser().confirm_password){
				alertify.set({ delay: 5000 });
				alertify.log("Passwords do not match");	
			}
			else if(self.selectedUser().id_user == "" || self.selectedUser().id_user == null) {
				alertify.confirm(message_confirmation, function (e) {
					if (e) {				
						$("#userModal").mask(loading);
						// Register new user:
						self.selectedUser().birthday = self.user_birthday();
						self.selectedUser().avatar = avatar;
						self.selectedUser().avatar_src = null;
						Dajaxice.security.dajax_user_register(userRegisterCallback, {
							'data' : self.selectedUser()
						});
					}
				});
			}
		}
	};

	// Dajaxice user_register callback
	function userRegisterCallback(data) {
		$("#userModal").unmask();
		if (data.message == "ok") {
			alertify.success(message_success);
			userFindAll();
			closeUserModal();			
		}else{
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}		
	};
	
	// Dajaxice user_register callback
	function userUpdateCallback(data) {
		$("#userModal").unmask();
		if (data.message == "ok") {
			alertify.success(message_success);
			userFindAll();			
		}else{
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}		
	};
	
	removeUser = function(user){
		alertify.confirm(message_confirmation, function (e) {
			if (e) {
				$("#userModal").mask(loading);
				Dajaxice.security.dajax_user_update_status(userUpdateCallback, {'id_user' : user.id_user, 'status': 'INACTIVE'});
			}
		});
	};
	
	activeUser = function(user){
		alertify.confirm(message_confirmation, function (e) {
			if (e) {
				$("#userModal").mask(loading);
				Dajaxice.security.dajax_user_update_status(userUpdateCallback, {'id_user' : user.id_user, 'status': 'INACTIVE'});
			}
		});
	};
	

	/**
	 * Pagination Methods
	 */

	userGoNextPages = function() {
		var array_user_page = goNextPages(self.user_total_pages_aux,
				self.userPagIndexInf, self.userPagIndexSup);
		self.user_total_pages(array_user_page[0]);
		self.userPagIndexInf = array_user_page[1];
		self.userPagIndexSup = array_user_page[2];
	};

	userPreviewPages = function() {
		var array_user_page = previewPages(self.user_total_pages_aux,
				self.userPagIndexInf, self.userPagIndexSup);
		self.user_total_pages(array_user_page[0]);
		self.userPagIndexInf = array_user_page[1];
		self.userPagIndexSup = array_user_page[2];
	};

	userGoPage = function(number) {
		users.removeAll();
		self.user_page_number = number;
		userFindAll();
		pagination_aux = false;
		closeUserModal();
	};
	
	//for view
	showButtonRemoveUser = function() {
		var varRemoveUser = document.getElementsByName("btnRemoveUser");
		for (var i = 0; i < varRemoveUser.length; i++) {
			varRemoveUser[i].style.display = "";
		}
	};

	hideButtonRemoveUser = function() {
		var varRemoveUser = document.getElementsByName("btnRemoveUser");
		for (var i = 0; i < varRemoveUser.length; i++) {
			varRemoveUser[i].style.display = "none";
		}
	};
	
	showButtonActiveUser = function() {
		var varActiveUser = document.getElementsByName("btnActiveUser");
		for (var i = 0; i < varActiveUser.length; i++) {
			varActiveUser[i].style.display = "";
		}
	};

	hideButtonActiveUser = function() {
		var varActiveUser = document.getElementsByName("btnActiveUser");
		for (var i = 0; i < varActiveUser.length; i++) {
			varActiveUser[i].style.display = "none";
		}
	};
	
}
ko.applyBindings(UserViewModel(), document.getElementById("userViewModel"));