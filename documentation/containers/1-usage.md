# Usage

Container is a group of custom fields and display options. Containers are displayed on different parts of the backend, according to their type and display options.

Containers have a title, which must be **unique** across the whole WordPress instance.

```php
use Carbon_Fields\Container\Container;
use Carbon_Fields\Field\Field;

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