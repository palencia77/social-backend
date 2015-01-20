function Cause (id_cause, name, description, beneficiary, risk_classification, love_goal, goal,
		love_counter, fly_counter, closing_date, contacts,id_subscope,id_scope,id_avatar,promotional_photo, 
		status, cover, url_promotional_video, love_goal_percentage,short_url,geographic_location,avatar_src) {

		var self = this;
		self.id_cause = id_cause;
		self.name = name;
		self.description = description;
		self.beneficiary = beneficiary;
		self.risk_classification = risk_classification;
		self.love_goal = love_goal;
		self.goal = goal;
		self.love_counter = love_counter;
		self.fly_counter = fly_counter;
		self.closing_date = closing_date;
		self.contacts = contacts;
		self.id_subscope = id_subscope;
		self.id_scope = id_scope;
		self.avatar = id_avatar;
		self.promotional_photo = promotional_photo;
		self.status = status;
		self.cover = cover;
		self.url_promotional_video = url_promotional_video;
		self.love_goal_percentage = love_goal_percentage;
		self.short_url = short_url;
		self.geographic_location = geographic_location;
		// To operate on the html view:
		self.avatar_src = avatar_src;
	}