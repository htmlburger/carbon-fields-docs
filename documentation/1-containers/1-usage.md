# Usage

Container is a group of custom fields and display options. Containers are displayed on different parts of the backend, according to their type and display options.

Containers have a title, which must be **unique** across the whole WordPress instance.

```php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('post_meta', 'Custom Data')
	->show_on_post_type('page')
	->add_fields(array(
		Field::make('map', 'crb_location')->set_position(37.423156, -122.084917, 14),
		Field::make('choose_sidebar', 'crb_custom_sidebar'),
		Field::make('image', 'crb_photo'),
	));
```

To create a new Container, you just use the container `make` method `Container::make($type, $title)`, where:

| Parameter | Description                                                                                                                                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `$type`   | Identifier of the container type (accepted values are `post_meta`, `term_meta`, `user_meta`, `comment_meta`, `nav_menu` and `theme_options`). |
| `$title`  | Unique title of the container.                                                                                                                |


## Verify the plugin has been installed

When Carbon-Fields is used as a plugin, and can be deactivated by the user, it is recommended to protect your theme/plugin code, by having a fallback functions, in case someone has deactivated the Carbon-Fields plugin, and you have code that depends on the `carbon_get_` functions. Here is a snippet, that needs to be loaded after the plugin:

```php
if ( ! function_exists( 'carbon_get_post_meta' ) ) {
	function carbon_get_post_meta( $id, $name, $type = null ) {
		return false;
	}	
}

if ( ! function_exists( 'carbon_get_the_post_meta' ) ) {
	function carbon_get_the_post_meta( $name, $type = null ) {
		return false;
	}	
}

if ( ! function_exists( 'carbon_get_theme_option' ) ) {
	function carbon_get_theme_option( $name, $type = null ) {
		return false;
	}	
}

if ( ! function_exists( 'carbon_get_term_meta' ) ) {
	function carbon_get_term_meta( $id, $name, $type = null ) {
		return false;
	}	
}

if ( ! function_exists( 'carbon_get_user_meta' ) ) {
	function carbon_get_user_meta( $id, $name, $type = null ) {
		return false;
	}	
}

if ( ! function_exists( 'carbon_get_comment_meta' ) ) {
	function carbon_get_comment_meta( $id, $name, $type = null ) {
		return false;
	}	
}
```
