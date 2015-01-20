/**
 * Model Scope
 * @param {Object} id
 * @param {Object} name
 * @param {Object} description
 * @param {Object} logo
 * @param {Object} creation_date
 * @param {Object} activation_date
 * @param {Object} closing_date
 * @param {Object} status
 */
function Scope(id_scope,name,description,logo,creation_date,activation_date,closing_date,status,color){
		this.id_scope = id_scope;
		this.name = name;
		this.description = description;
		this.logo = logo;
		this.creation_date = creation_date;
		this.activation_date = activation_date;
		this.closing_date = closing_date;
		this.status = status;
		this.color = color;
}