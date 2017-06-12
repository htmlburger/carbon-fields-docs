# Quickstart

### Installing Carbon Fields as a plugin:

1. Install and activate the [Carbon Fields WordPress Plugin](https://wordpress.org/plugins/carbon-fields/)
1. Add the following to the top of your functions.php file:
    ```php
    use Carbon_Fields\Container;
    use Carbon_Fields\Field;

    add_action( 'carbon_fields_register_fields', 'crb_attach_theme_options' );
    function crb_attach_theme_options() {
        Container::make( 'theme_options', __( 'Theme Options', 'crb' ) )
            ->add_fields( array(
                Field::make( 'text', 'crb_text', 'Text Field' ),
            ) );
    }
    ```
1. Open up `/wp-admin/` - you now have a brand new "Theme Options" admin section with a text field

### Installing Carbon Fields as a Composer library:

1. Browse to your theme directory
1. Execute the following in your terminal of choice:
    ```cli
    composer require htmlburger/carbon-fields
    ```
1. Add the following to the top of your functions.php file:
    ```php
    use Carbon_Fields\Container;
    use Carbon_Fields\Field;

    add_action( 'carbon_fields_register_fields', 'crb_attach_theme_options' );
    function crb_attach_theme_options() {
        Container::make( 'theme_options', __( 'Theme Options', 'crb' ) )
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
1. Open up `/wp-admin/` - you now have a brand new "Theme Options" admin section with a text field