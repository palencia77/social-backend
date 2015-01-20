/*
* GLOBALS VARIABLES
* ################################################################
*/
//----------------------------------------------------------------
//PATH TO DEFAULT IMAGES:
var default_avatar_18x20 = '/public/images/defaults/avatar_18x20.png';
var default_avatar_30x35 = '/public/images/defaults/avatar_30x35.png';
var default_avatar_48x55 = '/public/images/defaults/avatar_48x55.png';
var default_avatar_145x167 = '/public/images/defaults/avatar_145x167.png';
var default_avatar_212x242 = '/public/images/defaults/avatar_212x242.png';
var default_cover_210x600 = '/public/images/defaults/cover_210x600.png';
var default_promotional_photo_267x167 = '/public/images/defaults/promotional_photo_267x167.png';
var default_profile_video = '';
var default_add_resource_image = '/public/images/add-pic-x48.png';
var loading = "Loading...";
// ---------------------------------------------------------------

//UPLOADED FILES:
//----------------------------------------------------------------
var globalFilePath = null;
var globalFileExtension = null;
var globalFileName = null;
var globalFileContent = null;
var globalFileMimeType = null;
//----------------------------------------------------------------

/**
 * Get the name of the uploaded file
 * @return {String} globalFileName
 */
function getFileName(){
	return globalFileName;
}

/**
 * Get the content of the uploaded file
 * @return {String} globalFileContent
 */
function getFileContent(){
	return globalFileContent;
}

/**
 * Get the mime type of the uploaded file
 * @return {String} globalFileMimeType
 */
function getFileMimeType(){
	return globalFileMimeType;
}

/**
 * Get the path of the uploaded file
 * @return {String} globalFilePath
 */
function getFilePath(){
	return globalFilePath;
}

/**
 * Get the extension of the uploaded file
 * @return {String} globalFileExtension
 */
function getFileExtension(){
	return globalFileExtension;
}

/**
 * Function to preview the image on html component
 * @param {Object} input
 * @warning: all html <input type="file"> components must have an attribute called "data-img" with value=id of <img> component
 * @return false if the file extension is not valid
 */
function previewImage(input) {
	//Initialization:
	typeExtension = "image";
	inputName = input.name;
	imgId = input.getAttribute("related-img");
	element = encodeURIComponent(document.getElementsByName(inputName)[0].value);
	
	if (!checkFileExtension(element, typeExtension, inputName, imgId)) {
		return false;
	}
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
			document.getElementById(imgId).src = e.target.result;
			updateGlobalsVariables(inputName, imgId);
		};
		reader.readAsDataURL(input.files[0]);
	}
}

/**
 * Function to validate the file extension
 * @param {Object} element: Element file path to be validate
 * @param {String} typeExtension: could be "image", "documment" or "video"
 * @param {String} inputName: Name of html file upload component
 * @param {String} imgId: Id of html img component
 * @return true or error message
 */
function checkFileExtension(element, typeExtension, inputName, imgId) {
	var filePath = element;
	if (filePath.indexOf('.') == -1)
		return false;

	var validExtensions = new Array();
	var ext = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase();

	if (typeExtension == "image") {
		validExtensions[0] = 'jpg';
		validExtensions[1] = 'jpeg';
		validExtensions[2] = 'png';
		validExtensions[3] = 'gif';
	} else {
		validExtensions[0] = 'pdf';
	}

	for (var i = 0; i < validExtensions.length; i++) {
		if (ext == validExtensions[i]) {
			return true;
		}
	}
	alert("The file ." + ext + " selected is not a valid image!");
	if (typeExtension == "image") {
		document.getElementsByName(inputName)[0].value = '';
		document.getElementById(imgId).src = default_avatar_145x167;
	}
	return false;
}

/**
 * Function to update the globals variables
 * @param {Object} element
 * @param {String} inputName
 * @param {String} imgId
 */
function updateGlobalsVariables(inputName, imgId) {
	//file name:
	var auxFileName = (document.getElementsByName(inputName)[0].value).split('\\');
	globalFileName = auxFileName[auxFileName.length - 1];
	//file content:
	var auxFileContent = document.getElementById(imgId).src;
	globalFileContent = auxFileContent.substr(auxFileContent.indexOf(',') + 1);
	//file mime type:
	var auxFileMimeType = auxFileContent.substr(0, auxFileContent.indexOf(';'));
	globalFileMimeType = auxFileMimeType.substr(auxFileMimeType.indexOf(':') + 1);
	//file path:
	globalFilePath = encodeURIComponent(document.getElementsByName(inputName)[0].value);
	//file extension:
	globalFileExtension = globalFilePath.substring(globalFilePath.lastIndexOf('.') + 1).toLowerCase();
}

/**
 * Function to clear the globals variables
 */
function clearGlobalsVariables(){
	globalFileName = null;
	globalFileContent = null;
	globalFileMimeType = null;
	globalFilePath = null;
	globalFileExtension = null;
}
