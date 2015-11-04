import assert from 'assert';

import fieldConverters from './../field.js';

describe('field converters', () => {


	describe('time', () => {

		var { time } = fieldConverters;

		it('formats iso date', () => {
			assert.equal(time('2015-02-17T14:31:22.496Z'), '2015-02-17 09:31:22');
		});

	});


	describe('emailToLogin', () => {

		var { emailToLogin } = fieldConverters;

		it('returns empty string if @ character is not present', () => {
			assert.equal(emailToLogin('peterpeter.com'), '');
		});

		it('returns domain from e-mail', () => {
			assert.equal(emailToLogin('peter@123peter.com'), 'peter');
		});

	});


	describe('fullNameToLastName', () => {

		var { fullNameToLastName } = fieldConverters;

		it('returns last name', () => {
			assert.equal(fullNameToLastName('Ross van der Linde'), 'van der Linde');
		});

	});

});