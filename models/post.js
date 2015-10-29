import Sequelize from 'sequelize';

var sequelize = new Sequelize();

var newTableName = 'wp_rxlk_posts';

var Post = sequelize.define('post', {

	title: {
		field: 'title',
		newField: 'post_title'
	},

	subheading: {
		field: 'sub_headline',
		newField: null,
		metaFieldName: '_subheading'
	},

	authorId: {
		newField: 'post_author',
		origin: 'doc_cms_post_authors'
	},

	date: {
		field: 'created',
		newField: 'post_date'
	},

	dateGmt: {
		field: 'created'
		newField: 'post_data_gmt'
	},

	modified: {
		field: 'modified',
		newField: 'post_modified'
	},

	modifiedGmt: {
		field: 'modified',
		newField: 'post_modified_gmt'
	},

	summary: {
		field: 'summary',
		newField: 'post_exerpt'
	},

	content: {
		field: 'content',
		newField: 'post_content'
	}

});

Post.hasMany(Author, { as: 'post_author' });
