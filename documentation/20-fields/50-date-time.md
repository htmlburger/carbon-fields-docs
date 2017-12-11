# Date Time

Renders a time and date picker field.

`Field::make( 'date_time', 'eta', 'Estimated time of arrival' )`

### Setup Methods

`set_storage_format( $storage_format )`

Set the format which should be used to save date values in the database with. Defaults to `Y-m-d H:i:s`.

Important note: Even though the database default format is `Y-m-d H:i:s`, the default input format is `Y-m-d H:i`. So in cases where the date_time field contains a date_time in `Y-m-d H:i:s` format, the field should be set `->set_input_format( 'Y-m-d H:i:s', 'Y-m-d H:i:S' )` to avoid the seconds being reset to :00 when the fields are updated.

`set_input_format( $php_format, $js_format )`

Set the format which should be used to enter values in the administration. Note that you should specify the format in both PHP and JS variants (i.e. they should be translations of each other). The JS format used is [Flatpickr's](https://chmln.github.io/flatpickr/formatting/).
Separating storage and input formats makes it possible for editors to use `12/31/2017 11:30 PM` dates while the database stores `2017-12-31 23:30:00` behind the scenes.

`set_picker_options( $options )`

Set an associative array with your preferred [options](https://chmln.github.io/flatpickr/options/).