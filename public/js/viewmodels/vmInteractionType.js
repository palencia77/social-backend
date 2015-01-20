var interactionsTypes = ko.observableArray([])
var loading = "loading...";

function InteractionTypeViewModel(){
	self = this;
	self.interacion_type = ko.observable();
	
	findAllInteractionsTypes = function (){
		$("#interactionForm").mask(loading);
		interactionsTypes.removeAll();
		Dajaxice.interactionType.dajax_interaction_type_find_all(interactionTypeFindAllCallback);		
	}
	findAllInteractionsTypes();
	
	function interactionTypeFindAllCallback(data){
		data.forEach(function(interactionType) {
			interactionsTypes.push(new InteractionType(interactionType.id, interactionType.name, interactionType.interactions));
		});
		$("#interactionForm").unmask();
	};
	
	updateInteraction = function(interaction) {
		self.interacion_type(interaction);				
		alertify.confirm(message_confirmation, function (e) {
			if (e) {
				$("#interactionForm").mask(loading);
				Dajaxice.interactionType.dajax_interaction_update(interactionUpdateCallback, {'interactions' : self.interacion_type().interactions()});
			}	
			});			
	};
	
	function interactionUpdateCallback(data) {
		$("#interactionForm").unmask();
		if (data.message == "ok") {
			alertify.success(message_success);
		} else {
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
	};
	

}
ko.applyBindings(new InteractionTypeViewModel(), document.getElementById("interactionTypeViewModel"));