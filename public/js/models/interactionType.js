function InteractionType(id_interaction_type, name, interactions){
	this.id_interaction_type = id_interaction_type;
	this.name = ko.observable(name);
	this.interactions = ko.observableArray(interactions);
 }