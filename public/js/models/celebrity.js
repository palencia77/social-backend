function Celebrity (id_celebrity, name, description, owner, email, telephone, web_site,
					facebook, twitter, google_plus, address, love_counter, id_avatar,
					id_promotional_photo, id_cover, status, avatar_src, association) {
						
		var self = this;
		self.id_celebrity = id_celebrity;
		self.name = name;
		self.description = description;
		self.owner = owner;
		self.email = email;
		self.telephone = telephone;
		self.web_site = web_site;
		self.facebook = facebook;
		self.twitter = twitter;
		self.google_plus = google_plus;
		self.address = address;
		self.love_counter = love_counter;
		self.avatar = id_avatar;
		self.promotional_photo = id_promotional_photo;
		self.cover = id_cover;
		self.status = status;
		// To operate on the html view:
		self.avatar_src = avatar_src;
		self.association = association; //boolean: to determinate if have association with one cause
	}