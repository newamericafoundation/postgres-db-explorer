export default {

	originTableName: 'doc_cms_post_tags',

	destinationTableName: 'wp_rxlk_term_relationships',



	fields: [

		{
			originKey: 'id',
			destinationKey: 'term_id'
		},

		{
			originKey: 'post_id',
			destinationKey: 'object_id'
		},

		{
			originKey: 'tag_id',
			destinationKey: 'term_taxonomy_id'
		}

	]

};