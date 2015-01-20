function UserProfileViewModel() {
	var self = this;

	// Pagination
	self.user_gender = ko.observableArray(["female", "male"]);
	self.user_birthday = ko.observable(new Date());
	self.selected_user = ko.observable("");
	self.user_birthday = ko.observable(new Date());
	
	// For change Password
	self.old_password = ko.observable();
	self.new_password = ko.observable();
	self.confirm_new_password = ko.observable();
	
	clearVariablesPassword = function(){
		self.old_password("");
		self.new_password("");
		self.confirm_new_password("");
	};
	

	userFindById = function() {
		$("#userProfileModal").mask(loading);
		clearGlobalsVariables();
		clearVariablesPassword();
		Dajaxice.security.dajax_user_find_by_id(userFindByIdCallback);
	};

	function userFindByIdCallback(data) {
		avatar_src = null;
		if (data.avatar_src == null
				|| data.avatar_src == "") {
			avatar_src = default_avatar_145x167;
		} else {
			avatar_src = data.avatar_src;
		}
		self.selected_user(new User(data.id_user, data.full_name, data.gender,
				data.birthday, data.email, data.phone, null, null, null,data.id_avatar,avatar_src));
		$("#userProfileModal").unmask();
	};
	
	setUserBirthday = function() {
		self.user_birthday(new Date());
	};

	// Dajaxice user_update callback
	function userUpdateCallback(data) {
		$("#userProfileModal").unmask();
		if (data.message == "ok") {
			alertify.success(message_success);
			closeUserProfileModal();
		}else{
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
	};

	updateUser = function(user) {
		var avatar = null;
		if (getFileName() != null) {
			var avatar = {
					'name' : getFileName(),
					'text' : 'Upload from backend',
					'binary_content' : getFileContent(),
					'content_type' : getFileMimeType()
				};
		}		
		if (self.selected_user().full_name == null || self.selected_user().gender == null
				|| self.selected_user().birthday == null || self.selected_user().email == null
				|| self.selected_user().phone == null) {
			alertify.set({ delay: 5000 });
			alertify.error(message_incomplete);
		} else if (self.selected_user().id_user != null) {
			alertify.confirm(message_confirmation, function (e) {
				if (e) {					
					$("#userProfileModal").mask(loading);
					self.selected_user().birthday = self.user_birthday();
					self.selected_user().avatar = avatar;
					self.selected_user().avatar_src = null;
					// update user:
					Dajaxice.security.dajax_user_update(userUpdateCallback, {
						'data' : self.selected_user()
					});
				}
			});
		}
	};
	
	// change password
	changePasswordUser = function(user) {
		if(self.new_password() != self.confirm_new_password()){
				alertify.set({ delay: 5000 });
				alertify.log("Passwords do not match");	
			}
		else if(self.new_password() != null || self.old_password() != null) {
			alertify.confirm(message_confirmation, function (e) {
				if (e) {
					$("#changePasswordModal").mask(loading);
					Dajaxice.security.dajax_user_update_password(userChangePasswordCallback, {
						'old_password':	self.old_password(),
						'new_password' : self.new_password()				
					});
				}
			});
			}
		};
	
	function userChangePasswordCallback(data) {
		$("#changePasswordModal").unmask();
		if (data.message == "ok") {
			alertify.success(message_success);
			closeChangePasswordModalModal();
		}else{
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
	};
	// Close the user profile modal
	closeUserProfileModal = function() {
		$('#userProfileModal').modal('hide');
	};
	
	// Close the user profile modal
	closeChangePasswordModalModal = function() {
		$('#changePasswordModal').modal('hide');
		clearVariablesPassword();
	};

}
ko.applyBindings(UserProfileViewModel(), document.getElementById("userProfileViewModel"));