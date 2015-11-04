// Convert a database table to a Wordpress-importable CSV.

import fieldConverter from './field.js';

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
	setOriginCollection(data) {
		this.originCollection = data;
	}


	/*
	 * Reset result collections.
	 *
	 */
	resetResults() {

		this.results = {
			collections: {},
			metaCollection: []
		}

		for (let tableName of this.options.tableNames) {
			this.results.collections[tableName] = [];
		}

	}


	/*
	 * Get empty item cache.
	 *
	 */
	getEmptyItemCache() {
		// Initialize items.
		var items = {};

		for (let tableName of this.options.tableNames) {
			items[tableName] = {};
		}

		return items;
	}


	/*
	 * Get converter value.
	 *
	 */
	getConvertedValue(item, field) {

		var value = item[field.originKey];

		if (value == null) { return value; }

		// If there is a converter, apply on item.
		if (field.converterKey) {
			let converter = fieldConverter[field.converterKey];
			if (converter) {
				value = converter(value, field.converterOptions);
			}
		}

		return value;

	}


	/*
	 *
	 *
	 */
	convertCollection() {

		this.resetResults();

		for (let originItem of this.originCollection) {

			// Extract id.
			let id = originItem[this.options.originIdKey];

			// Initialize items.
			var items = this.getEmptyItemCache();

			for (let field of this.options.fields) {

				let originValue = this.getConvertedValue(originItem, field);

				// If the field should go into the meta table, create and add a separate meta record.
				if (field.isMeta) {
					let obj = {};
					obj[this.options.foreignIdKey] = id;
					obj['meta_key'] = field.key;
					obj['meta_value'] = originValue;
					this.results.metaCollection.push(obj);
					continue;
				}

				// Otherwise, work with appropriate table.
				let { tableName } = field;

				let table = this.results.collections[tableName];

				let item = items[tableName];

				// If there is a field value specified in the options, set that as value. Used to bulk set values to defaults.
				item[field.key] = field.value || originValue;

				if (field.value == null) {
					item[field.key] = originValue;
				} else {
					item[field.key] = field.value;
				}

			}

			// For all tables, push item.
			for (let tableName of this.options.tableNames) {
				let table = this.results.collections[tableName];
				let item = items[tableName];
				table.push(item);
			}

		}

	}

}

export default TableConverter;