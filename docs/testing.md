## Testing

This project is tested using ``mocha`` and the assertion library ``assert``. In each tested directory, there is a ``__spec`` folder containing specs for JavaScript modules within the directory (specs are together with the files they test, there is no separate ``spec`` directory). Tests are run by installing the test client ``mocha`` globally:

	``npm install mocha -g``

Then running all specs in the project:

	``npm run spec``

(see ``package.json`` for the definition of the testing script)

Spec files can be run individually. See [mocha docs](https://mochajs.org/) for details.