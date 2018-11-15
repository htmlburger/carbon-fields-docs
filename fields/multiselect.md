# Multiselect

Creates a multiselect (tag-style) box with pre-defined options.

`Field::make( "multiselect", "crb_available_colors", "Available Colors" )`

### Setup methods

`add_options( $options )`

Add an associative array with options or a [callable](http://php.net/manual/en/language.types.callable.php).

The method can be called multiple times, in which case the options between the calls will be appended (instead of overwritten).

`set_options( $options )`

Set options as an associative array or a [callable](http://php.net/manual/en/language.types.callable.php).

The method is not intended to be called multiple times – each call will overwrite the previous options.

##### NB! If you provide an indexed array with no key values, the default indexes **(0, 1, 2 …)** of the elements will be used.

```php
Field::make( "multiselect", "crb_available_colors", "Available Colors" )
	->add_options( array(
		'red' => 'Red',
		'green' => 'Green',
		'blue' => 'Blue',
	) )
```
