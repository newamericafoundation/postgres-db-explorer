Postgres database explorer tool, with tools to browse, clean up and export the contents of a database. Built on ``React``, ``Express`` and modest code from scratch.

# Getting started

* Clone repository.
* Install dependencies by running ``npm install``.
* Create an ``.env`` file in root (ignored by git) with the database connection string (see ``.env-example`` for pattern).
* Run ``node server.js`` to run the explorer. This will take a minute because it also sets up fast module bundling if the client-side JavaScript is changed (webpack dev middleware).

# Docs

* [explorer](/docs/explorer.md)
* [exporter](/docs/exporter.md)
* [testing](/docs/testing.md)
