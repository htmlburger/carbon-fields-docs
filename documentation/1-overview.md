# Overview

Carbon fields is a plugin which enables easy creation of custom (meta) fields in the WordPress administration panel. It allows theme developers to associate meta-information with various entities in a WordPress site (such as posts, taxonomy terms, widgets and so on).

Carbon Fields can be installed as a [WordPress Plugin](https://wordpress.org/plugins/carbon-fields/) or through composer (`composer require htmlburger/carbon-fields`).

__Note that Carbon Fields follow SemVer and may include breaking changes in major releases.__
__If you wish to prevent users from updating the Carbon Fields WordPress Plugin, we suggest you add it as a [mu-plugin](https://codex.wordpress.org/Must_Use_Plugins).__

The library supports PHP 5.3+ and uses PHP namespaces.

The main components of the library are:

* **Container** – represents and controls a group of fields.
* **Field** – represents a single field.
* **Data Storage** – controls the underlying data storage for field values.