# Nested Complex Fields

Complex fields can be nested. 

The following will define a container that creates multiple slides and allows positioning of multiple text fragments on each slide:

```php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('post_meta', 'Slider Data')
	->when('post_type', '=', 'post')
	->add_fields(array(
		Field::make('complex', 'crb_slides')->add_fields(array(
			Field::make('image', 'image'),
			Field::make('complex', 'slide_fragments')->add_fields(array(
				Field::make('text', 'fragment_text'),
				Field::make('select', 'fragment_position')
					->add_options(array('Top Left', 'Top Right', "Bottom Left", "Bottom Right")),
			))
		)),
	));
```

Complex field values are retrieved using either `carbon_get_post_meta()` or `carbon_get_theme_option()` (or a different retrieval function, depending on the container it is added to).

The format of the returned data is a multi-dimensional array, as follows:

```php
array (
	0 => array (
		'photo' => 'http://example.com/lorem.jpg',
		'people_on_photo' => array (
			0 => array (
				'name' => 'John',
			),
			1 => array (
				'name' => 'Karen',
			),
		)
	),
	1 => array (
		'photo' => 'http://example.com/ipsum.jpg',
		'people_on_photo' => array (
			0 => array (
				'name' => 'Paul',
			),
			1 => array (
				'name' => 'Kasper',
			),
			2 => array (
				'name' => 'Julie',
			),
		)
	),
)
```