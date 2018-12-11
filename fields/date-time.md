# Date Time

Renders a time and date picker field.

```php
Field::make( 'date_time', 'eta', __( 'Estimated time of arrival' ) )
```

## Config Methods

?> `set_attribute( $name, $value = '' )`

Sets a direct attribute of the resulting `<input>` field. Can only be one of the following: `'placeholder'` and `'data-*'`.

```php
Field::make( 'date_time', 'crb_event_start', 'Event Start' )
    ->set_attribute( 'placeholder', 'Date and time of event start' );
```

?> `set_storage_format( $storage_format )`

Set the format which should be used to save date values in the database with. Defaults to `Y-m-d H:i:s`.

?> `set_input_format( $php_format, $js_format )`

Set the format which should be used to enter values in the administration. Note that you should specify the format in both PHP and JS variants (i.e. they should be translations of each other). The JS format used is [Flatpickr's](https://chmln.github.io/flatpickr/formatting/).
Separating storage and input formats makes it possible for editors to use `12/31/2017 11:30 PM` dates while the database stores `2017-12-31 23:30:00` behind the scenes.

?> `set_picker_options( $options )`

Set an associative array with your preferred [options](https://chmln.github.io/flatpickr/options/).
