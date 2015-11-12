import _ from 'underscore'

/*
 * Replaces a field from a json array by matching it with entries from another table based on the value of the field and picking a different field from the other table.
 *
 */
class TableCrossPatcher {

	/*
	 *
	 *
	 */
	constructor(options) {
		this.originCollection = options.originCollection
		this.sourceCollection = options.sourceCollection
		this.originKey = options.originKey
		this.originNewKey = options.originNewKey
		this.sourceKey = options.sourceKey
		this.sourceMatcherKey = options.sourceMatcherKey
		this.deleteOriginalKey = options.deleteOriginalKey

		this.destinationCollection = []
	}


	/*
	 *
	 *
	 */
	patch() {
		var { deleteOriginalKey, originCollection, sourceCollection, destinationCollection, sourceMatcherKey, originKey, sourceKey, originNewKey } = this

		originCollection.forEach(item => {
			var newItem = _.clone(item)
			var query = {}
			query[sourceMatcherKey] = item[originKey]

			var sourceItem = _.findWhere(sourceCollection, query)
			
			if (sourceItem) { newItem[originNewKey] = sourceItem[sourceKey] }

			if (deleteOriginalKey && originKey !== originNewKey) {
				delete newItem[originKey]
			} 

			this.destinationCollection.push(newItem)
		})
	}

}

export default TableCrossPatcher