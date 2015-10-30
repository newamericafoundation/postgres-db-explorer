export default {

	originTableName: 'doc_cms_post',

	destinationTableName: 'wp_rxlk_posts',

	destinationMetaTableName: 'wp_rxlk_postmeta',

	originIdKey: 'id',

	foreignIdKey: 'post_id',

	fields: [

		{
			originKey: 'id',
			destinationKey: 'ID'
		},

		{
			originKey: 'title',
			destinationKey: 'post_title'
		},

		{
			originKey: 'sub_headline',
			destinationKey: null,
			destinationMetaKey: '_subheading'
		},

		{
			originTable: 'doc_cms_post_authors',
			destinationKey: 'post_author'
		},

		{
			originKey: 'created',
			destinationKey: 'post_date',
			converter: 'time'
		},

		{
			originKey: 'created',
			destinationKey: 'post_data_gmt',
			converter: 'time'
		},

		{
			originKey: 'modified',
			destinationKey: 'post_modified',
			converter: 'time'
		},

		{
			originKey: 'modified',
			destinationKey: 'post_modified_gmt',
			converter: 'time'
		},

		{
			originKey: 'summary',
			destinationKey: 'post_exerpt'
		},

		{
			originKey: 'content',
			destinationKey: 'post_content'
		}

	]

};