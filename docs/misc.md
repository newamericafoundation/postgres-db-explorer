Here are some scripts that proved useful to connect to, set up, back up and restore postgres databases. Please excuse the lack of cleanliness.

	import rdsConnect from './secrets.json';

	var { RDS_HOSTNAME, RDS_PORT, RDS_USERNAME, RDS_DB_NAME } = rdsConnect;

	import tables from './tables.json';

	var tableSwitchCommands = tables.map((table) => { return `--table=${table}`; }).join(' ');

	var scripts = {
		connect: `psql --host=${RDS_HOSTNAME} --port=${RDS_PORT} --username=${RDS_USERNAME} --password --dbname=${RDS_DB_NAME}`,
		dump: `sudo pg_dump --host=${RDS_HOSTNAME} --port=${RDS_PORT} --username=${RDS_USERNAME} --password --dbname=${RDS_DB_NAME} ${tableSwitchCommands} > /bp/dump.sql`,
		createLocal: `createdb ${RDS_DB_NAME}`,
		restoreLocal: `psql ${RDS_DB_NAME} < dump.sql`,
		deleteLocal: `dropdb ${RDS_DB_NAME}`
	}

	export default scripts;