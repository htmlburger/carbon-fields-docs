# Install without Composer

In case you do not wish to use composer to install Carbon Fields, you can also use one of our prebuilt zip packages:

1. Download [https://carbonfields.net/zip/latest/](https://carbonfields.net/zip/latest/) or visit [https://carbonfields.net/release-archive/](https://carbonfields.net/release-archive/) and choose a download manually
1. Upload the .zip by using the "Upload Plugin" button on the `Plugins -> Add New` page or unzip and upload it to your `plugins/` directory
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

_Note: The zip packages use Composer's autoloader PHP classes, but __do not__ require that you have composer installed._