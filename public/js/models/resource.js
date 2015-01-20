function Resource(id_resource, name, text, content_type, binary_content,
				  created_date, owner, love_counter, status, src, index_list){
	var self = this;
	self.id_resource = id_resource;
	self.name = name;
	self.text = text;
	self.content_type = content_type;
	self.binary_content = binary_content;
	self.created_date = created_date;
	self.owner = owner;
	self.love_counter = love_counter;
	self.status = status;
	// To operate on the html view:
	self.src = src;
	self.index_list = index_list;
}
