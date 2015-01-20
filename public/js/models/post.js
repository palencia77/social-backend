function Post(id_post, title, text, owner, love_counter, love_refs, fly_refs, postcomment_refs,
				resource_refs, fly_counter, created_date, status){
	this.id_post = id_post;
	this.title = title;
	this.text = text;
    this.owner = owner;
    this.love_counter = love_counter;
    this.love_refs = love_refs;
    this.fly_refs = fly_refs;
    this.postcomment_refs = postcomment_refs;
    this.resource_refs = resource_refs;
    this.fly_counter = fly_counter;
    this.created_date = created_date;
    this.status = status;
}
