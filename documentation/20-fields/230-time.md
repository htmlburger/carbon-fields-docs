# Time

Renders a time picker field.

`Field::make( 'time', 'opens_at', 'Opening time' )`

### Config methods

`set_picker_options( $options )`

Set an associative array with your preferred [options](https://chmln.github.io/flatpickr/options/). Note that values stored in the database will always be in the `H:i:s` format regardless of what format is used as the display format (this makes it possible for users to use `11:00 PM` times while the database stores `23:00:00` behind the scenes).