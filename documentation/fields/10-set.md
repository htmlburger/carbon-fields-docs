# Set

The set field creates a list of tick-able options (checkboxes). This field enables selection of multiple options. The value is retrieved as array containing the ticked options.

### Setup methods

`add_options($options)`

Add an associative array with options or a [callback](http://php.net/manual/en/language.types.callable.php).

The method can be called multiple times, in which case the options between the calls will be appended (instead of overwritten).

`set_options($options)`

Set options as an associative array or a [callback](http://php.net/manual/en/language.types.callable.php).

The method is not indented to be called multiple times – each call will overwrite the previous options.

`limit_options($count)`

Shows only the first $count options, while the others are hidden and can be shown by clicking the *“Show All Options”* link.

This method is useful when there are many options in the Set field.

Must be greater than or equal to `0`. Default is `0` (no limit, all options are visible).

##### NB! If you provide indexed array with no key values, the default indexes (0, 1, 2 …) of the elements will be used.

```php
Field::make("set", "crb_product_features", "Features")
	->add_options(array(
		'bluetooth' => 'Bluetooth',
		'gps' => 'GPS navigation',
		'nfc' => 'Near field communication',
	))
```