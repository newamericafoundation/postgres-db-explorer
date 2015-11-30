/*
 * This module returns an object that contains custom converter functions that are run on different values found in the database.
 * Each converter is uniquely identified by its key. Table convert settings files, for instance, have converterKey and converterOptions fields that point to these functions.
 * Customize for messy data as needed.
 *
 *
 */

import moment from 'moment'

export default {

	/*
	 * Set time format. See moment.js docs for details.
	 * @param {string} val - Time in UTF format. Note: not sure how time zone shifts are handled.
	 * @param {string} formatString - Specifies how time should be formatted. Defaults to what Wordpress expects.
	 * @returns {string}
	 */
	time: (val, formatString = 'YYYY-MM-DD HH:mm:ss') => {
		return moment(val).format(formatString);
	},


	/*
	 * Separates login from e-mail and adds a prefix. Returns empty string if @ character is not found.
	 * @param {string} val
	 * @param {object} options - Contains prefix. Set to empty string if not specified.
	 * @returns {string}
	 */
	emailToLoginWithPrefix: (val, options) => {
		var atIndex = val.indexOf('@')
		if (atIndex < 0) { return '' }
		var prefix = options.prefix || ''
		return options.prefix + val.slice(0, atIndex);
	},


	/*
	 * Separates login from e-mail.
	 * @param {string} val
	 * @returns {string}
	 */
	emailToLogin: (val) => {
		var atIndex = val.indexOf('@');
		if (atIndex < 0) { return ''; }
		return val.slice(0, atIndex);
	},


	/*
	 * Escapes characters inside string for SQL insert.
	 * @param {string} val
	 * @returns {string}
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
	 * Separates last name from full name. 
	 * 
	 */
	fullNameToLastName: (val) => {
		if (val == null || val.split == null) { return ''; }
		return val.split(' ').slice(1).join(' ');
	},


	/*
	 * Increment by a value specified in the options.
	 * TODO: rename options key to 'difference'.
	 * @param {string} val
	 * @param {object} options
	 * @returns {string}
	 */
	add: (val, options) => {
		return (val + options.toBeAdded);
	},


	/*
	 *
	 * @param {string} val
	 * @param {object} options - Contains regex pattern under the 'pattern' key.
	 * @returns {string}
	 */
	replacePattern: (val, options) => {
		var { pattern, replacement } = options;
		// Create matcher regex with the global flag (all matches are found within the string).
		var matcher = new RegExp(pattern, 'g');
		val = val.replace(matcher, replacement);
		return val;
	}

}