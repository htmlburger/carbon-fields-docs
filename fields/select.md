# Select

Creates a select box with pre-defined options.

```php
Field::make( 'select', 'crb_select', __( 'Choose Options' ) )
	->set_options( array(
		'1' => 1,
		'2' => 2,
		'3' => 3,
		'4' => 4,
		'5' => 5,
	) )
```

## Config methods

?> `add_options( $options )`

Add an associative array with options or a [callable](http://php.net/manual/en/language.types.callable.php). 

The method can be called multiple times, in which case the options between the calls will be appended (instead of overwritten).

?> `set_options( $options )`

Set options as an associative array or a [callable](http://php.net/manual/en/language.types.callable.php). 

The method is not intended to be called multiple times – each call will overwrite the previous options.

```php
Field::make( 'select', 'crb_content_align', __( 'Text alignment' ) )
    ->add_options( array(
        'left' => __( 'Left' ),
        'center' => __( 'Center' ),
        'right' => __( 'Right' ),
    ) )
```

## Performance implications!

If fetching your options has performance implications we strongly suggest you define a function to retrieve them and pass that function's name (or any valid callable) as the argument to add_options()/set_options() - this way your options will only be fetched when needed rather than on every pageload:

```php
function my_computation_heavy_getter_function() {
	$results = $wpdb->get_results(); // fetching from the database, for example
	$results_dictionary = results_to_dictionary( $results ); // pseudocode for transforming database results to key=>value dictionary

	return $results_dictionary;
}

// ...

Field::make( 'select', 'crb_select_field' )
    ->add_options( 'my_computation_heavy_getter_function' )
```

!> If you provide an indexed array with no key values, the default indexes **(0, 1, 2 …)** of the elements will be used.
