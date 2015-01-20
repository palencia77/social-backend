/**
 * Model Subscope
 * @param {Object} id_subscope
 * @param {Object} name
 * @param {Object} description
 * @param {Object} logo
 * @param {Object} creation_date
 * @param {Object} activation_date
 * @param {Object} closing_date
 * @param {Object} status
 * @param {Object} parent
 */
function Subscope(id_subscope,name,description,logo,creation_date,activation_date,closing_date,status,parent){
		this.id_subscope = id_subscope;
		this.name = name;
		this.description = description;
		this.logo = logo;
		this.creation_date = creation_date;
		this.activation_date = activation_date;
		this.closing_date = closing_date;
		this.status = status;
		this.parent = parent;
}