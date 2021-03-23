# Set

The set field creates a list of tick-able options (checkboxes). This field enables selection of multiple options. The value is retrieved as array containing the ticked options.

```php
Field::make( 'set', 'crb_set', __( 'Choose Options' ) )
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

### `limit_options( $count )`

Shows only the first $count options, while the others are hidden and can be shown by clicking the *“Show All Options”* link.

This method is useful when there are many options in the Set field.

Must be greater than or equal to `0`. Default is `0` (no limit, all options are visible).

!> If you provide indexed array with no key values, the default indexes (0, 1, 2 …) of the elements will be used.

```php
Field::make( 'set', 'crb_product_features', __( 'Features' ) )
    ->add_options( array(
        'bluetooth' => __( 'Bluetooth' ),
        'gps' => __( 'GPS navigation' ),
        'nfc' => __( 'Near field communication' ),
    ) )
```

## Value Format

```php
array(
    'value1',
    'value2',
    ...
)
```
