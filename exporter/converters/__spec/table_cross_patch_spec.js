import assert from 'assert'
import TableCrossPatcher from './../table_cross_patcher.js'

describe('table cross patch', () => {

	describe('patch', () => {

		it('patches', () => {

			var originTable = [
				{
					name: 'Peter',
					age: 28
				},
				{
					name: 'Alfred',
					age: 54
				},
				{
					name: 'Lonely Paul',
					age: 100
				}
			]

			var sourceTable = [
				{
					id: 123,
					name: 'Peter'
				},
				{
					id: 225,
					name: 'Alfred'
				}
			]

			var tcp = new TableCrossPatcher({ 
				originCollection: originTable, 
				sourceCollection: sourceTable,
				originKey: 'name',
				originNewKey: 'person_id',
				sourceKey: 'id',
				sourceMatcherKey: 'name',
				deleteOriginalKey: true
			})

			tcp.patch()

			assert.deepEqual(tcp.destinationCollection, [
				{
					person_id: 123,
					age: 28
				},
				{
					person_id: 225,
					age: 54
				},
				{
					age: 100
				}
			])

		})

	})

})