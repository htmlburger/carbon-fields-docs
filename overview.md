# Overview

Carbon fields is a library which enables easy creation of custom (meta) fields in the WordPress administration panel. It allows theme developers to associate meta-information with various entities in a WordPress site (such as posts, taxonomy terms, widgets and so on).

Carbon Fields can be installed through composer (`composer require htmlburger/carbon-fields`).

The library supports PHP 5.3+ and uses PHP namespaces.

The main components of the library are:

* **Container** – represents and controls a group of fields.
* **Field** – represents a single field.
* **Data Storage** – controls the underlying data storage for field values.