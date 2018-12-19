# Radio Image

Behaves exactly like a Radio field, but the passed option values should be fully qualified urls to image thumbnails which will be displayed instead of traditional labels.

```php
Field::make( 'radio_image', 'crb_background_image', __( 'Choose Background Image' ) )
	->set_options( array(
		'mountain' => 'https://source.unsplash.com/X1UTzW8e7Q4/800x600',
		'temple' => 'https://source.unsplash.com/ioJVccFmWxE/800x600',
		'road' => 'https://source.unsplash.com/5c8fczgvar0/800x600',
	) )
```

## Config methods

?> `add_options( $options )`

Add an associative array with options. For more information, see the Select field documentation for this method.

?> `set_options( $options )`

Set an associative array with options. For more information, see the Select field documentation for this method.

!> If you provide indexed array with no key values, the default indexes **(0, 1, 2 …)** of the elements will be used.