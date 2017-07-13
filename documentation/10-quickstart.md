# Quickstart

As of version 2, Carbon Fields is distributed via [Composer](http://getcomposer.org/).  It's easy to include it in your theme as a bundled plugin, or to call its hooks from your own plugins.

## From Your Theme

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

## From Your Plugin

These instructions assume you're writing a custom plugin, and want Carbon Fields installed along with your other plugins.

1.  Browse to your WordPress root
1.  Execute the following in your terminal of choice:
    ```cli
    composer require htmlburger/carbon-fields
    ```
    Carbon Fields will be installed in wp-content/plugins.  If your [plugins are installed elsewhere](https://codex.wordpress.org/Editing_wp-config.php#Moving_plugin_folder), see [Custom Installation Location](https://github.com/htmlburger/carbon-fields-docs/blob/master/documentation/40-advanced-topics/5-custom-installation-location.md) in [Advanced Topics](https://github.com/htmlburger/carbon-fields-docs/blob/master/documentation/40-advanced-topics).
1.  Activate the Carbon Fields plugin.
1.  Add the following to the top of your plugin:
    ```php
	use Carbon_Fields\Container;
	use Carbon_Fields\Field;
    ```
1.  Initialize Carbon Fields. If your plugin is object-oriented, something like this:
    ```php
    function __construct() {
        require_once(ABSPATH . '/vendor/autoload.php');
      
        add_action( 'carbon_fields_register_fields', array( $this, 'carbon_fields_register_fields' ) );
      
        // the rest of your constructor
    }
  
    public function carbon_fields_register_fields() {
        // Add custom fields to Pages
        Container::make('post_meta', 'Custom Fields')
            ->where( 'post_type', '=', 'page' )
            ->set_context( 'side' )
            ->set_priority( 'core' )
            ->add_fields( array(
                Field::make('text', 'crb_subtitle', 'Subtitle'),
            ) );
    }
    ```
    
    If your plugin is procedural, something like this: 
    
    ```php
    add_action( 'init', 'crb_load' );
    function crb_load() {
        require_once( ABSPATH . '/vendor/autoload.php' );
    }
  
    add_action( 'carbon_fields_register_fields', 'crb_add_custom_fields' );
    function crb_add_custom_fields() {
        // Add custom fields to Pages
        Container::make('post_meta', 'Custom Fields')
            ->where( 'post_type', '=', 'page' )
            ->set_context( 'side' )
            ->set_priority( 'core' )
            ->add_fields( array(
                Field::make('text', 'crb_subtitle', 'Subtitle'),
            ) );
    }
    ```
1. Open up `/wp-admin/` - you now have a "Custom Fields" metabox on your Pages with a text field.