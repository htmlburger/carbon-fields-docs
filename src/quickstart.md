# Quickstart

This guide will show you how to install the Carbon Fields library using composer. To install Carbon Fields as a WordPress plugin, please follow the [Plugin Quickstart](plugin-quickstart.md) guide instead.

1. Browse to your theme directory.
2. Execute the following in your terminal of choice:

```cli
composer require htmlburger/carbon-fields
```

3. Add the following to the top of your functions.php file:

```php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

add_action( 'carbon_fields_register_fields', 'crb_attach_theme_options' );
function crb_attach_theme_options() {
    Container::make( 'theme_options', __( 'Theme Options' ) )
        ->add_fields( array(
            Field::make( 'text', 'crb_text', 'Text Field' ),
        ) );
}

add_action( 'after_setup_theme', 'crb_load' );
function crb_load() {
    require_once( 'vendor/autoload.php' );
    \Carbon_Fields\Carbon_Fields::boot();
}
```

4. Open up `/wp-admin/` - you now have a brand new "Theme Options" admin section with a text field
