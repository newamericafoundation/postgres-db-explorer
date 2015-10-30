export default {

	originTableName: 'doc_cms_tag',

	destinationTableName: 'wp_rxlk_term',

	destinationMetaTableName: 'wp_rxkl_term_taxonomy',

	originIdKey: 'slug',

	replaceId: true,

	fields: [

		{
			originKey: 'slug',
			destinationKey: 'slug'
		},

		{
			originKey: 'verbose_name',
			destinationKey: 'name'
		}

	]

};