The explorer is an interface to explore the contents of a postgres database. Uses Google's Material UI... poorly. Please use it along with browser devtools to get proper info out of it.

# Routes

## Index

## Data API

By navigating to:

	/api/v1/:table_name?limit=10&offset=10

You can view the contents of any table in JSON. Not specifying limit or offset will display all items available, potentially crashing the browser.

To save this JSON as a file, simply make sure the ``__exports/json`` folder exists in root, then navigate to:

	/api/v1/:table_name/save_json

