# Overview

Carbon fields is a library for easy creation of custom(meta) fields in WordPress administration panel. It allows theme developer to associate meta-information with various entities in a WordPress site(such as posts, taxonomy terms, widgets and so on).

The library supports PHP 5.3+ and uses PHP namespaces.

The main components of the library are:

* **Container** – represents group of fields and controls disposition of the fields in the WordPress administration panel.
* **Field** – represents single field.
* **Data Storage** – controls the underlying data storage for field values.