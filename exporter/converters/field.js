import moment from 'moment';

export default {

	/*
	 *
	 *
	 */
	time: (val) => {
		return moment(val).format('YYYY-MM-DD HH:mm:ss');
	},


	/*
	 * Separates login from e-mail.
	 *
	 */
	emailToLogin: (val) => {
		var atIndex = val.indexOf('@');
		if (atIndex < 0) { return ''; }
		return val.slice(0, atIndex);
	},


	/*
	 *
	 *
	 */
	emailToLoginWithPrefix: (val, options) => {
		var atIndex = val.indexOf('@');
		if (atIndex < 0) { return ''; }
		return options.prefix + val.slice(0, atIndex);
	},


	/*
	 *
	 *
	 */
	escapeForMySqlInsert: (val) => {

		if (typeof val != 'string')
        return val;

	    return val.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
	        switch (char) {
	            case "\0":
	                return "\\0";
	            case "\x08":
	                return "\\b";
	            case "\x09":
	                return "\\t";
	            case "\x1a":
	                return "\\z";
	            case "\n":
	                return "\\n";
	            case "\r":
	                return "\\r";
	            case "\"":
	            case "'":
	            case "\\":
	            case "%":
	                return "\\"+char; // prepends a backslash to backslash, percent,
	                                  // and double/single quotes
	        }
	    });
	},


	/*
	 *
	 *
	 */
	twitterHandleToLink: (val) => {
		return `www.twitter.com/${val}`;
	},


	/*
	 *
	 *
	 */
	fullNameToFirstName: (val) => {
		if (val == null || val.split == null) { return ''; }
		return val.split(' ')[0];
	},


	/*
	 *
	 *
	 */
	fullNameToLastName: (val) => {
		if (val == null || val.split == null) { return ''; }
		return val.split(' ').slice(1).join(' ');
	},


	/*
	 *
	 *
	 */
	add: (val, options) => {
		return (val + options.toBeAdded);
	},


	/*
	 *
	 *
	 */
	replacePattern: (val, options) => {
		var { pattern, replacement } = options;
		var matcher = new RegExp(pattern, 'g');
		val = val.replace(matcher, replacement);
		return val;
	}

}