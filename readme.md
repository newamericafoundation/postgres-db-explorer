Postgres database explorer tool, with tools to browse, clean up and export the contents of a database. Built on ``React``, ``Express`` and modest code from scratch.

# The Explorer

* Clone repository.
* Run ``npm install`` and ``bower install``.
* Provide database info under ``./db_info``.
* Run ``node server.js``.

# Exporer

Currently, the repository provides not-so-fantastically documented resources on how to streamline the transformation of a Postgres database into other database formats. A Django-normalized Postgres to WordPress MySQL conversion+cleanup task is what warranted this piece of software in the first place.

To get started:

* create the ``__exports`` table, and within it the subfolders for different exports, such as ``json`` or ``sql``. These are ignored in Git to prevent database contents to go public.