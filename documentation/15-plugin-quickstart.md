# Plugin Quickstart

There is a seprate Composer package which loads Carbon Fields as a WordPress plugin. Here's how to set it up:

1. Browse to your root WordPress directory
1. Execute the following in your terminal of choice:
    ```cli
    composer require htmlburger/carbon-fields-plugin
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
        require_once( ABSPATH . '/vendor/autoload.php' );
        \Carbon_Fields\Carbon_Fields::boot();
    }
    ```
1. Open up `/wp-admin/` - you now have a brand new "Theme Options" admin section with a text field

If your composer.json is somewhere other than your WordPress root directory, you will have to add the following to it (replacing `YOUR_DESIRED_LOCATION`):
    ```json
    "extra": {
        "installer-paths": {
            "YOUR_DESIRED_LOCATION/vendor/{$vendor}/{$name}/": ["type:wordpress-plugin"]
        }
    }
    ```