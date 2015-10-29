import Sequelize from 'sequelize';

var sequelize = new Sequelize();

var Post = sequelize.define('post', {

	title: {
		type: Sequelize.STRING,
		field: 'cms_title',
		newField: 'wp_title'
	},

	content: {
		type: Sequelize.STRING,
		field: 'cms_content'
	}

});