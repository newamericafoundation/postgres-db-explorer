# The Exporter

Currently, the repository provides not-so-fantastically documented resources on how to streamline the transformation of a Postgres database into other database formats. A Django-normalized Postgres to WordPress MySQL conversion+cleanup task is what warranted this piece of software in the first place.

To get started:

* create the ``__exports`` table, and within it the subfolders for different exports, such as ``json`` or ``sql``. These are ignored in Git to prevent database contents to go public.
* define an export task in ``./index.js``.

## How it works

### ./converters

This folder contains utility methods and modules that work with fields and tables to get them in the right format.