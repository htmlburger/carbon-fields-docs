# Radio Image

Behaves exactly like a Radio field, but the passed option values should be fully qualified urls to image thumbnails which will be displayed instead of traditional labels.

### Setup methods

`add_options( $options )`

Add an associative array with options.

The method can be called multiple times, in which case the options between the calls will be appended (instead of overwritten).

If the old options are a [callback](http://php.net/manual/en/language.types.callable.php) (and not an array), the callback will be removed in favor of the new options.

If the new options are a [callback](http://php.net/manual/en/language.types.callable.php) (and not an array), the callback will replace the old options.

`set_options( $options )`

Set options as an associative array or a [callback](http://php.net/manual/en/language.types.callable.php). 

The method is not intended to be called multiple times – each call will overwrite the previous options.

##### NB! If you provide indexed array with no key values, the default indexes **(0, 1, 2 …)** of the elements will be used.

```php
Field::make("radio_image", "crb_background", "Background")
	->add_options(array(
		'sky' => 'https://example.com/sky.jpg',
		'ground' => 'https://example.com/ground.jpg',
	))
```