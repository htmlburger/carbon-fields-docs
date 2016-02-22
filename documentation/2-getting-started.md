# Getting Started

In order to register your fields properly, you need to use the `carbon_register_fields` action hook.

The recommended way to do this is to include your files with custom fields in a function, hooked to that action.

So for example, the following code would go in your theme functions.php (if building a theme), or in the main plugin file (if building a plugin):

```php
<?php
add_action('carbon_register_fields', 'crb_register_custom_fields');
function crb_register_custom_fields() {
	include_once(dirname(__FILE__) . 'includes/post-meta.php');
}
```

This example assumes that you have created a file `post-meta.php` in the `/includes` subdirectory of your theme/plugin.

Within this file, you can create your custom containers with preferred fields.

##### NB! Don’t forget the `use` statements in the beginning of the custom fields files. Each file should begin with:

```php
<?php
use Carbon_Fields\Container\Container;
use Carbon_Fields\Field\Field;
```

and after that you can define your containers and fields, as shown in the [Containers -> Usage](http://carbonfields.net/docs/containers-usage/) examples.
