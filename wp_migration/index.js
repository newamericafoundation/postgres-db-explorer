// var destinationDatabaseName = "wordpress_2hl6ldh2n6";

import TableConverter from './converters/table.js';

import * as postConvertOptions from './tables/post.js';

var posts = [

	{
		id: 4846,
		created: "2015-08-18T04:15:41.451Z",
		modified: "2009-02-17T00:00:00.000Z",
		generated_at: "2015-08-18T07:26:11.580Z",
		slug: "all-eyes-on-illinois",
		title: "All Eyes on Illinois ...",
		sub_headline: "Some sub headline",
		summary: null,
		cover_image: "",
		cover_image_height: null,
		cover_image_width: null,
		cover_image_caption: null,
		cover_image_credit: null,
		deck: null,
		content: "ducklings",
		archived: false,
		deleted: false,
		draft: false,
		published: true,
		publish_at: "2009-02-17T00:00:00.000Z",
		locked_by_id: null,
		modified_by_id: null,
		polymorphic_ctype_id: 7
	}

];

var tc = new TableConverter(postConvertOptions);

tc.setOriginCollection(posts);

tc.convertCollection();

console.log(tc.destinationCollection);
console.log(tc.destinationMetaCollection);