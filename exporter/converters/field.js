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