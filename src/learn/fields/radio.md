# Radio

Similar to the Select field, but instead of in a select box, options are rendered as a set of radio buttons.

```php
Field::make( 'radio', 'crb_radio', __( 'Choose Option' ) )
	->set_options( array(
		'1' => 1,
		'2' => 2,
		'3' => 3,
		'4' => 4,
		'5' => 5,
	) )
```

## Config methods

### `add_options( $options )`

Add an associative array with options. For more information, see the Select field documentation for this method.

### `set_options( $options )`

Set an associative array with options. For more information, see the Select field documentation for this method.

!> If you provide indexed array with no key values, the default indexes **(0, 1, 2 …)** of the elements will be used.

```php
Field::make( 'radio', 'crb_subtitle_styling', __( 'Subtitle text style' ) )
    ->add_options( array(
        'em' => __( 'Italic' ),
        'strong' => __( 'Bold' ),
        'del' => __( 'Strike' ),
    ) )
```
