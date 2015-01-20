function Award(id_award, title, text, owner,resource_refs, quantity, status,amount_love, avatar_src,association){
	this.id_award = id_award;
	this.title = title;
	this.text = text;
    this.owner = owner;
    this.quantity = quantity;
    this.resource_refs = resource_refs;
    this.status = status
    this.amount_love = amount_love;
    // To operate on the html view:
    this.avatar_src = avatar_src;
    this.association = association;//boolean: to determinate if have association with one cause
}