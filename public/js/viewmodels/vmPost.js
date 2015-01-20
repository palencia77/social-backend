$('#postWysiTextEditor').wysihtml5();
var posts = ko.observableArray([]);
var postResources = ko.observableArray([]);
function PostViewModel(){
	var self = this;
	self.post_page_number = 1;
	self.post_page_size = 15;
	self.post_resource_page_number = 1;
	self.post_resource_page_size = 15;
	self.selectedPost = ko.observable();
	self.selectedBee = ko.observable();
	self.resourceList = ko.observable();
	self.selectedResource = ko.observable();
	self.resourceIndexList = 0;
	self.resourcePreview = ko.observable();
	self.resourcesToRemove = new Array(); // For update post operation
	self.resourcesToAdd = new Array(); // For update post operation
	var postTextEditor = $('#postWysiTextEditor').data("wysihtml5").editor;
   	//postTextEditor.clear();
   	//postTextEditor.composer.commands.exec("insertHTML", post.text);
	//function onLoad() { alert("Go!"); };
	//postTextEditor.on("load", onLoad);
	
	
    // Function that hold the post selected from the list:
    showPost = function(post) {
    	showModalPostRegister();
		clearGlobalsVariables();
    	self.selectedPost(post);
    	postTextEditor.setValue(post.text);
		findPostResources();
		defaultTab("tabDataPost");
    };
    // Clear the selectedPost:
    clearSelectedPost = function(){
    	var owner = {name: self.selectedBee().name};
    	var post = new Post(null,"New post","",owner);
    	self.selectedPost(post);
    };
    // Show clean modal to register new scope:
    newPost = function(){
    	var owner = {name: self.selectedBee().name};
    	var post = new Post(null,"New post","",owner);
    	self.selectedPost(post);
    	postTextEditor.setValue(post.text);
    	clearResourcePost();
    	showModalPostRegister();
    	defaultTab("tabDataPost");
    };
    // Remove one post:
   	removePost = function(post){
   		alertify.confirm(message_confirmation, function (e) {
			if (e) {
		   		$("#postListModal").mask(loading);
		   		if (self.selectedBee().id_cause != null){
		   		Dajaxice.post.dajax_post_remove(postRemoveCallback,{'id_post' : post.id_post,
																		 'id_bee' : self.selectedBee().id_cause});
		   		}else if (self.selectedBee().id_celebrity != null){
		   			Dajaxice.post.dajax_post_remove(postRemoveCallback,{'id_post' : post.id_post,
						 'id_bee' : self.selectedBee().id_celebrity});
		   		}
		   		else{
		   		Dajaxice.post.dajax_post_remove(postRemoveCallback,{'id_post' : post.id_post,
						 'id_bee' : self.selectedBee().id_partner});
		   		}
			}
   		});
   	};
   	//post remove callback:
   	function postRemoveCallback(data){
   		$("#postListModal").unmask();
   		if (data.message == "ok"){
   			alertify.success(message_success);
			reloadPostList();
			showModalPostList();
			clearResourcePost();
		}else{
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
   	};
    // Find posts by bee:
    findPostsByBee = function(bee){
    	$("#postListModal").mask(loading);
    	showModalPostList();
    	self.selectedBee(bee);
    	if (bee.id_cause != null){
    	Dajaxice.post.dajax_post_find_by_bee(postFindByBeeCallback, {'page_number': self.post_page_number,
    																	 'page_size' : self.post_page_size,
    																	 'id_bee' : bee.id_cause });
    	}else if (bee.id_celebrity != null){
    		Dajaxice.post.dajax_post_find_by_bee(postFindByBeeCallback, {'page_number': self.post_page_number,
				 'page_size' : self.post_page_size,
				 'id_bee' : bee.id_celebrity });
   			
   		}else{
    		Dajaxice.post.dajax_post_find_by_bee(postFindByBeeCallback, {'page_number': self.post_page_number,
				 'page_size' : self.post_page_size,
				 'id_bee' : bee.id_partner });    		
    	}
    	defaultTab("tabDataPost");
    	
    };
    // Reload the post list:
    reloadPostList = function(){
    	$("#postListModal").mask(loading);
    	if (self.selectedBee().id_cause != null){
    	Dajaxice.post.dajax_post_find_by_bee(postFindByBeeCallback, {'page_number': self.post_page_number,
    																	 'page_size' : self.post_page_size,
    																	 'id_bee' : self.selectedBee().id_cause });
    	}else if (self.selectedBee().id_celebrity != null){
        	Dajaxice.post.dajax_post_find_by_bee(postFindByBeeCallback, {'page_number': self.post_page_number,
				 'page_size' : self.post_page_size,
				 'id_bee' : self.selectedBee().id_celebrity });
    	}else{
    	Dajaxice.post.dajax_post_find_by_bee(postFindByBeeCallback, {'page_number': self.post_page_number,
				 'page_size' : self.post_page_size,
				 'id_bee' : self.selectedBee().id_partner });
    	}
    };
    // Dajaxice post_find_by_bee callback:
	function postFindByBeeCallback(data){
		posts.removeAll();
		data.content.forEach(function(post) {
			posts.push(new Post(post.id_post, post.title, post.text, post.owner, post.love_counter, post.love_refs,
								post.fly_refs, post.postcomment_refs, post.resource_refs, post.fly_counter,
								post.created_date, post.status));
		});
		$("#postListModal").unmask();
	};
	// Save the post selected:
    savePost = function(){
    	if (self.selectedPost().title=="" || self.selectedPost().text==""){
    		alertify.set({ delay: 5000 });
			alertify.error(message_incomplete);
    	}else{
    		alertify.confirm(message_confirmation, function (e) {
				if (e) {
		    		$("#postListModal").mask(loading);
		    		// Set the default values:
		    		var with_resource = "False";
		    		// Replace the (") characters with (') character:
		    		var regex = new RegExp('"', 'g');
		    		self.selectedPost().text = self.selectedPost().text.replace(regex, '\'');
					// Validating create or update post:
		    		if (self.selectedPost().id_post=="" || self.selectedPost().id_post==null){
		    			//Register new post:
		    			if (postResources().length > 0){
		        			with_resource = "True";
		        		}
		    			if (self.selectedBee().id_cause != null){
		    				Dajaxice.post.dajax_post_save(postSaveCallback, 
		    				{'data':self.selectedPost(), 'id_bee': self.selectedBee().id_cause,
		    				'with_resource':with_resource, 'resources':postResources()});
		    			}else if (self.selectedBee().id_celebrity != null){
		    				Dajaxice.post.dajax_post_save(postSaveCallback, 
				    				{'data':self.selectedPost(), 'id_bee': self.selectedBee().id_celebrity,
				    				'with_resource':with_resource, 'resources':postResources()});
				    	}else{
		    				Dajaxice.post.dajax_post_save(postSaveCallback, 
							{'data':self.selectedPost(), 'id_bee': self.selectedBee().id_partner,
							'with_resource':with_resource, 'resources':postResources()});    				
		    			}
		    	}else{
		    		//Update post:
		    		if (self.resourcesToRemove.length > 0 || self.resourcesToAdd.length > 0){
		        		with_resource = "True";
		        	}
		    		if (self.selectedBee().id_cause != null){
		    			Dajaxice.post.dajax_post_update(postUpdateCallback, 
		    			{'data':self.selectedPost(), 'id_bee': self.selectedBee().id_cause,
		    			'resources_to_remove':self.resourcesToRemove,
		    			'resources_to_add':self.resourcesToAdd,
		    			'with_resource':with_resource});
		    			Dajaxice.post.dajax_post_find_by_id(postFindByIdCallback, {'id_post': data.id_post});
		    		}else if (self.selectedBee().id_celebrity != null){
		    			Dajaxice.post.dajax_post_update(postUpdateCallback, 
				    			{'data':self.selectedPost(), 'id_bee': self.selectedBee().id_celebrity,
				    			'resources_to_remove':self.resourcesToRemove,
				    			'resources_to_add':self.resourcesToAdd,
				    			'with_resource':with_resource});
				    }else{
		    			Dajaxice.post.dajax_post_update(postUpdateCallback, 
						{'data':self.selectedPost(), 'id_bee': self.selectedBee().id_partner,
						'resources_to_remove':self.resourcesToRemove,
						'resources_to_add':self.resourcesToAdd,
						'with_resource':with_resource});    				
		    			}
		    		}
				}
    		});
		}
    };
    
    function postFindByIdCallback(data){
 	   showStream(data.title, data.text, data.resource_refs[0], self.selectedBee().short_url);
    };
    
    // Dajaxice post_save callback:
    function postSaveCallback(data){
    	$("#postListModal").unmask();
    	if (data.message == "ok"){
    		alertify.success(message_success);
			reloadPostList();
			showModalPostList();
			clearResourcePost();
			clearUpdateArrays();
		}else{
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
    };
       
    
    // Dajaxice post_update callback:
    function postUpdateCallback(data){ 
    	$("#postListModal").unmask();
    	if (data.message == "ok"){
    		alertify.success(message_success);
			reloadPostList();
			showModalPostList();
			clearResourcePost();
			clearUpdateArrays();
		}else{
			alertify.set({ delay: 5000 });
			alertify.error(data.error);
		}
    };
   	// Function to get the resources of a post:
   	findPostResources = function(){
   		$("#postListModal").mask(loading);
   		clearResourcePost();
   		self.resourceIndexList = 0;
   		Dajaxice.resource.dajax_resource_get_by_post(resourceGetByPostCallback,{'id_post' : self.selectedPost().id_post,
   																			  'page_number': self.post_resource_page_number,
   																			  'page_size' : self.post_resource_page_size});
   	};
   	// Dajaxice get resources by post callback:
   	function resourceGetByPostCallback(data){
   		postResources.removeAll();
   		data.content.forEach(function(resource) {
   			self.resourceIndexList += 1;
   			var resourceSrc = "data:"+resource.content_type+";base64,"+resource.binary_content;
			postResources.push(new Resource(resource.id_resource, resource.name, resource.text, resource.content_type, 
											resource.binary_content, resource.created_date, resource.owner, 
											resource.love_counter, resource.status, resourceSrc, self.resourceIndexList));
		});
   		$("#postListModal").unmask();
   	}
   	// Function to add a resource on the post resource list:
   	addPostResource = function(){
   		if (getFileName() != null){
   			self.resourceIndexList += 1;
   			var resourceSrc = "data:"+getFileMimeType()+";base64,"+getFileContent();
   			self.selectedResource().name = getFileName();
			self.selectedResource().content_type = getFileMimeType();
			self.selectedResource().binary_content = getFileContent();
			self.selectedResource().src = resourceSrc;
			self.selectedResource().index_list = self.resourceIndexList;
			// Add the new resource to the list:
			postResources.push(self.selectedResource());
			// We add the new post resource to resourcesToAdd List
			self.resourcesToAdd.push(self.selectedResource());
			// Clear control variables:
			clearResourcePost();
		}
   	};
   	// Remove a post resource from the list:
   	removeResource = function(resource){
   		for (var i=0; i<postResources().length; i++){
   			if (resource.index_list == postResources()[i].index_list){
   				if (resource.id_resource != null){
   					// We add to the resourcesToRemove list only the resources that exists on DB:
   					self.resourcesToRemove.push(resource.id_resource);
   				}
   				else{
   					//We need to remove the resource from resourceToAddList:
   					resourcesToAddListRemoveElementByIndex(resource.index_list);
   				}
   				// We remove the postResource from the list that is visible on the view
   				postResources.splice(i,1);
   				i = postResources().length;
   			}
   		}
   	};
   	// Clear the selected resource:
   	clearResourcePost = function(){
   		clearGlobalsVariables();
   		resource = new Resource(null,"","",null,null,null,null,null,null,default_add_resource_image);
   		self.selectedResource(resource);
   	};
   	// Preview a post resource:
   	previewPostResource = function(resource){
   		self.resourcePreview(resource);
   	};
   	// Remove one resource from the resourcesToAdd List by index:
   	resourcesToAddListRemoveElementByIndex = function(index_list){
   		for (var j=0; j<self.resourcesToAdd.length; j++){
   			if (index_list == self.resourcesToAdd[i].index_list){
   				self.resourcesToAdd.splice(j,1);
   				j = self.resourcesToAdd.length;
   			}
	   	}
   	};
   	// Clear the arrays tha are used for update a Post
   	clearUpdateArrays = function(){
   		postResources.removeAll();
   		self.resourcesToRemove = [];
		self.resourcesToAdd = [];
   	};
   	/**
   	 * UI control:
   	 */
	// Show post tabs component:
	showPostTabs = function(e){
		e.preventDefault();
		document.getElementById("postRegisterTab").tab('show');
	};
	// Show modal post register and hide the modal post list
	showModalPostRegister = function() {
		document.getElementById("divModalPostList").style.display = "none";
    	document.getElementById("divModalPostRegister").style.display = "";
	};
	// Show modal post list and hide the modal post register
	showModalPostList = function() {
		postResources.removeAll();
		clearUpdateArrays();
		document.getElementById("divModalPostList").style.display = "";
    	document.getElementById("divModalPostRegister").style.display = "none";
	};
	
	/**
   	 * Observers:
   	 */
   	// Post Text Editor Observer:
	postTextEditor.on("change", onChange);
	function onChange() { self.selectedPost().text = postTextEditor.getValue(); };
}
ko.applyBindings(new PostViewModel(), document.getElementById("postViewModel"));