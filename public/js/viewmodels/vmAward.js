$('#awardWysiTextEditor').wysihtml5();
var awards = ko.observableArray([]);
var awardResources = ko.observableArray([]);
var award_status = ko.observableArray(["ACTIVE", "INACTIVE" ]);
function AwardViewModel(){
	var self = this;
	self.award_page_number = 1;
	self.award_page_size = 15;
	self.award_resource_page_number = 1;
	self.award_resource_page_size = 15;
	self.selectedAward = ko.observable();
	self.selectedBee = ko.observable();
	self.resourceList = ko.observable();
	self.selectedResource = ko.observable();
	self.resourceIndexList = 0;
	self.resourcePreview = ko.observable();
	self.resourcesToRemove = new Array(); // For update award operation
	self.resourcesToAdd = new Array(); // For update award operation
	var awardTextEditor = $('#awardWysiTextEditor').data("wysihtml5").editor;
	self.selected_award_status = ko.observable("ACTIVE");
   	//awardTextEditor.clear();
   	//awardTextEditor.composer.commands.exec("insertHTML", award.text);
	//function onLoad() { alert("Go!"); };
	//awardTextEditor.on("load", onLoad);
	
	
    // Function that hold the award selected from the list:
    showAward = function(award) {
    	showModalAwardRegister();
		clearGlobalsVariables();
    	self.selectedAward(award);
    	awardTextEditor.setValue(award.text);
		findAwardResources();
		defaultTab("tabDataAward");
    };
    // Clear the selectedAward:
    clearSelectedAward = function(){
    	var owner = {name: self.selectedBee().name};
    	var award = new Award(null,"New award","",owner);
    	self.selectedAward(award);
    };
    // Show clean modal to register new scope:
    newAward = function(){
    	var owner = {name: self.selectedBee().name};
    	var award = new Award(null, null, null, owner, null,null, null,null,null,null)
    	self.selectedAward(award);
    	awardTextEditor.setValue(award.text);
    	clearResourceAward();
    	showModalAwardRegister();
    	defaultTab("tabDataAward");
    };
    
    // Remove one award:
   	removeAward = function(award){
   		alertify.confirm(message_confirmation, function (e) {
			if (e) {
		   		$("#awardListModal").mask(loading);
		   		if (self.selectedBee().id_cause != null){
		   		Dajaxice.award.dajax_award_update_status(awardRemoveCallback,{'id_award' : award.id_award,
																		 'id_bee' : self.selectedBee().id_cause,'status': "INACTIVE"});
		   		}else if (self.selectedBee().id_celebrity != null){
		   			Dajaxice.award.dajax_award_update_status(awardRemoveCallback,{'id_award' : award.id_award,
						 'id_bee' : self.selectedBee().id_celebrity,'status': "INACTIVE"});
		   		}
		   		else{
		   		Dajaxice.award.dajax_award_update_status(awardRemoveCallback,{'id_award' : award.id_award,
						 'id_bee' : self.selectedBee().id_partner,'status': "INACTIVE"});
		   		}
			}
   		});
   	};
   	
   	//Active one award:
   	activeAward = function(award){
   		alertify.confirm(message_confirmation, function (e) {
			if (e) {
		   		$("#awardListModal").mask(loading);
		   		if (self.selectedBee().id_cause != null){
		   		Dajaxice.award.dajax_award_update_status(awardRemoveCallback,{'id_award' : award.id_award,
																		 'id_bee' : self.selectedBee().id_cause,'status': "ACTIVE"});
		   		}else if (self.selectedBee().id_celebrity != null){
		   			Dajaxice.award.dajax_award_update_status(awardRemoveCallback,{'id_award' : award.id_award,
						 'id_bee' : self.selectedBee().id_celebrity,'status': "ACTIVE"});
		   		}
		   		else{
		   		Dajaxice.award.dajax_award_update_status(awardRemoveCallback,{'id_award' : award.id_award,
						 'id_bee' : self.selectedBee().id_partner,'status': "ACTIVE"});
		   		}
			}
   		});
   	};
   	
   	//award remove callback:
   	function awardRemoveCallback(data){
   		$("#awardListModal").unmask();
   		if (data.message == "ok"){
   			alertify.success(message_success);
			findAwardsByBee();
			showModalAwardList();
			clearResourceAward();
		}else{
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
   	};
   	
   	findSelectedBee = function(bee){
   		self.selectedBee(bee);
   		findAwardsByBee();   		
   	}
   	
    // Find awards by bee:
    findAwardsByBee = function(){
    	$("#awardListModal").mask(loading);
    	showModalAwardList();
    	if (self.selectedBee().id_cause != null){
    	Dajaxice.award.dajax_award_find_by_bee(awardFindByBeeCallback, {'page_number': self.award_page_number,
    																	 'page_size' : self.award_page_size,
    																	 'id_bee' : self.selectedBee().id_cause,
    																	 'status': self.selected_award_status()});
    	}else if (self.selectedBee().id_celebrity != null){
    		Dajaxice.award.dajax_award_find_by_bee(awardFindByBeeCallback, {'page_number': self.award_page_number,
				 'page_size' : self.award_page_size,
				 'id_bee' : self.selectedBee().id_celebrity, 'status': self.selected_award_status() });
   			
   		}else{
    		Dajaxice.award.dajax_award_find_by_bee(awardFindByBeeCallback, {'page_number': self.award_page_number,
				 'page_size' : self.award_page_size,
				 'id_bee' : self.selectedBee().id_partner, 'status': self.selected_award_status() });    		
    	}
    	defaultTab("tabDataAward");
    	
    };
       
    // Dajaxice award_find_by_bee callback:
	function awardFindByBeeCallback(data){
		awards.removeAll();
		data.content.forEach(function(award) {
			awards.push(new Award(award.id_award, award.title, award.text, award.owner, award.resource_refs, award.quantity, award.status,award.amount_love,null,null));
		});
		if (self.selected_award_status() == "ACTIVE") {
			showButtonRemoveAward();
			hideButtonActiveAward();
		} else if (self.selected_award_status() == "INACTIVE") {
			showButtonActiveAward();
			hideButtonRemoveAward();
		}	
		
		
		$("#awardListModal").unmask();
	};
	
	// Save the award selected:
    saveAward = function(){
    	if (self.selectedAward().title==null || self.selectedAward().text==null || self.selectedAward().quantity==null || self.selectedAward().amount_love ==null){
    		alertify.set({ delay: 5000 });
			alertify.error(message_incomplete);
    	}else{
    		alertify.confirm(message_confirmation, function (e) {
				if (e) {
		    		$("#awardListModal").mask(loading);
		    		// Set the default values:
		    		var with_resource = "False";
		    		// Replace the (") characters with (') character:
		    		var regex = new RegExp('"', 'g');
		    		self.selectedAward().text = self.selectedAward().text.replace(regex, '\'');
					// Validating create or update award:
		    		if (self.selectedAward().id_award=="" || self.selectedAward().id_award==null){
		    			//Register new award:
		    			if (awardResources().length > 0){
		        			with_resource = "True";
		        		}
		    			if (self.selectedBee().id_cause != null){
		    				Dajaxice.award.dajax_award_save(awardSaveCallback, 
		    				{'data':self.selectedAward(), 'id_bee': self.selectedBee().id_cause,
		    				'with_resource':with_resource, 'resources':awardResources()});
		    			}else if (self.selectedBee().id_celebrity != null){
		    				Dajaxice.award.dajax_award_save(awardSaveCallback, 
				    				{'data':self.selectedAward(), 'id_bee': self.selectedBee().id_celebrity,
				    				'with_resource':with_resource, 'resources':awardResources()});
				    	}else{
		    				Dajaxice.award.dajax_award_save(awardSaveCallback, 
							{'data':self.selectedAward(), 'id_bee': self.selectedBee().id_partner,
							'with_resource':with_resource, 'resources':awardResources()});    				
		    			}
		    	}else{
		    		//Update award:
		    		if (self.resourcesToRemove.length > 0 || self.resourcesToAdd.length > 0){
		        		with_resource = "True";
		        	}
		    		if (self.selectedBee().id_cause != null){
		    			Dajaxice.award.dajax_award_update(awardUpdateCallback, 
		    			{'data':self.selectedAward(), 'id_bee': self.selectedBee().id_cause,
		    			'resources_to_remove':self.resourcesToRemove,
		    			'resources_to_add':self.resourcesToAdd,
		    			'with_resource':with_resource});
		    		}else if (self.selectedBee().id_celebrity != null){
		    			Dajaxice.award.dajax_award_update(awardUpdateCallback, 
				    			{'data':self.selectedAward(), 'id_bee': self.selectedBee().id_celebrity,
				    			'resources_to_remove':self.resourcesToRemove,
				    			'resources_to_add':self.resourcesToAdd,
				    			'with_resource':with_resource});
				    }else{
		    			Dajaxice.award.dajax_award_update(awardUpdateCallback, 
						{'data':self.selectedAward(), 'id_bee': self.selectedBee().id_partner,
						'resources_to_remove':self.resourcesToRemove,
						'resources_to_add':self.resourcesToAdd,
						'with_resource':with_resource});    				
		    			}
		    		}
				}
    		});
		}
    };
    
    
    // Dajaxice award_save callback:
    function awardSaveCallback(data){
    	$("#awardListModal").unmask();
    	if (data.message == "ok"){
    		alertify.success(message_success);
			findAwardsByBee();
			showModalAwardList();
			clearResourceAward();
			clearUpdateArrays();
		}else{
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
    };
       
    
    // Dajaxice award_update callback:
    function awardUpdateCallback(data){ 
    	$("#awardListModal").unmask();
    	if (data.message == "ok"){
    		alertify.success(message_success);
			findAwardsByBee();
			showModalAwardList();
			clearResourceAward();
			clearUpdateArrays();
		}else{
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
    };
   	// Function to get the resources of a award:
   	findAwardResources = function(){
   		$("#awardListModal").mask(loading);
   		clearResourceAward();
   		self.resourceIndexList = 0;
   		Dajaxice.resource.dajax_resource_get_by_award(resourceGetByAwardCallback,{'id_award' : self.selectedAward().id_award,
   																			  'page_number': self.award_resource_page_number,
   																			  'page_size' : self.award_resource_page_size});
   	};
   	// Dajaxice get resources by award callback:
   	function resourceGetByAwardCallback(data){
   		awardResources.removeAll();
   		data.content.forEach(function(resource) {
   			self.resourceIndexList += 1;
   			var resourceSrc = "data:"+resource.content_type+";base64,"+resource.binary_content;
			awardResources.push(new Resource(resource.id_resource, resource.name, resource.text, resource.content_type, 
											resource.binary_content, resource.created_date, resource.owner, 
											resource.love_counter, resource.status, resourceSrc, self.resourceIndexList));
		});
   		$("#awardListModal").unmask();
   	}
   	// Function to add a resource on the award resource list:
   	addAwardResource = function(){
   		if (getFileName() != null){
   			self.resourceIndexList += 1;
   			var resourceSrc = "data:"+getFileMimeType()+";base64,"+getFileContent();
   			self.selectedResource().name = getFileName();
			self.selectedResource().content_type = getFileMimeType();
			self.selectedResource().binary_content = getFileContent();
			self.selectedResource().src = resourceSrc;
			self.selectedResource().index_list = self.resourceIndexList;
			// Add the new resource to the list:
			awardResources.push(self.selectedResource());
			// We add the new award resource to resourcesToAdd List
			self.resourcesToAdd.push(self.selectedResource());
			// Clear control variables:
			clearResourceAward();
		}
   	};
   	// Remove a award resource from the list:
   	removeResource = function(resource){
   		for (var i=0; i<awardResources().length; i++){
   			if (resource.index_list == awardResources()[i].index_list){
   				if (resource.id_resource != null){
   					// We add to the resourcesToRemove list only the resources that exists on DB:
   					self.resourcesToRemove.push(resource.id_resource);
   				}
   				else{
   					//We need to remove the resource from resourceToAddList:
   					resourcesToAddListRemoveElementByIndex(resource.index_list);
   				}
   				// We remove the awardResource from the list that is visible on the view
   				awardResources.splice(i,1);
   				i = awardResources().length;
   			}
   		}
   	};
   	// Clear the selected resource:
   	clearResourceAward = function(){
   		clearGlobalsVariables();
   		resource = new Resource(null,"","",null,null,null,null,null,null,default_add_resource_image);
   		self.selectedResource(resource);
   	};
   	// Preview a award resource:
   	previewAwardResource = function(resource){
   		self.resourcePreview(resource);
   	};
   	// Remove one resource from the resourcesToAdd List by index:
   	resourcesToAddListRemoveElementByIndex = function(index_list){
   		for (var j=0; j<self.resourcesToAdd.length; j++){
   			if (index_list == self.resourcesToAdd[j].index_list){
   				self.resourcesToAdd.splice(j,1);
   				j = self.resourcesToAdd.length;
   			}
	   	}
   	};
   	// Clear the arrays tha are used for update a Award
   	clearUpdateArrays = function(){
   		awardResources.removeAll();
   		self.resourcesToRemove = [];
		self.resourcesToAdd = [];
   	};
   	/**
   	 * UI control:
   	 */
	// Show award tabs component:
	showAwardTabs = function(e){
		e.preventDefault();
		document.getElementById("awardRegisterTab").tab('show');
	};
	// Show modal award register and hide the modal award list
	showModalAwardRegister = function() {
		document.getElementById("divModalAwardList").style.display = "none";
    	document.getElementById("divModalAwardRegister").style.display = "";
	};
	// Show modal award list and hide the modal award register
	showModalAwardList = function() {
		awardResources.removeAll();
		clearUpdateArrays();
		document.getElementById("divModalAwardList").style.display = "";
    	document.getElementById("divModalAwardRegister").style.display = "none";
	};
	
	
	showButtonRemoveAward = function() {
		var varRemoveAward = document.getElementsByName("btnRemoveAward");
		for (var i = 0; i < varRemoveAward.length; i++) {
			varRemoveAward[i].style.display = "";
		}
	};

	hideButtonRemoveAward = function() {
		var varRemoveAward = document.getElementsByName("btnRemoveAward");
		for (var i = 0; i < varRemoveAward.length; i++) {
			varRemoveAward[i].style.display = "none";
		}
	};
	
	showButtonActiveAward = function() {
		var varActiveAward = document.getElementsByName("btnActiveAward");
		for (var i = 0; i < varActiveAward.length; i++) {
			varActiveAward[i].style.display = "";
		}
	};

	hideButtonActiveAward = function() {
		var varActiveAward = document.getElementsByName("btnActiveAward");
		for (var i = 0; i < varActiveAward.length; i++) {
			varActiveAward[i].style.display = "none";
		}
	};
	/**
   	 * Observers:
   	 */
   	// Award Text Editor Observer:
	awardTextEditor.on("change", onChange);
	function onChange() { self.selectedAward().text = awardTextEditor.getValue(); };
}
ko.applyBindings(new AwardViewModel(), document.getElementById("awardViewModel"));