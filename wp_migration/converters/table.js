// Convert a database table to a Wordpress-importable CSV.

class TableConverter {

	/*
	 *
	 *
	 */
	constructor(options) {
		this.options = options;
	}


	/*
	 *
	 *
	 */
	setOriginCollection(json) {
		this.originCollection = json;
	}


	/*
	 *
	 *
	 */
	convertCollection() {

		this.destinationCollection = [];
		this.destinationMetaCollection = [];

		for (let originItem of this.originCollection) {

			let id = originItem[this.options.originIdKey];

			let destinationItem = {};

			for (let field of this.options.fields) {

				if (originItem[field.originKey]) {

					// If a destination key is present, copy directly to the destination object.
					if (field.destinationKey) {
						destinationItem[field.destinationKey] = originItem[field.originKey];
					}

					// If the field should go into the meta table, create and add a separate meta record.
					if (field.destinationMetaKey) {
						let obj = {};
						obj[this.options.foreignIdKey] = id;
						obj['meta_key'] = field.destinationMetaKey;
						obj['meta_value'] = originItem[field.originKey];
						this.destinationMetaCollection.push(obj);
					}
	
				}

			}

			// Push destination object to collection.
			this.destinationCollection.push(destinationItem);

		}

	}

}

export default TableConverter;