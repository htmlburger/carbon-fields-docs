# Time

Renders a time picker field.

`Field::make( 'time', 'opens_at', 'Opening time' )`

### Config methods

`set_storage_format( $storage_format )`

Set the format which should be used to save date values in the database with. Defaults to `Y-m-d`.

`set_input_format( $php_format, $js_format )`

Set the format which should be used to enter values in the administration. Note that you should specify the format in both PHP and JS variants (i.e. they should be translations of each other). The JS format used is [Flatpickr's](https://chmln.github.io/flatpickr/formatting/).
Separating storage and input formats makes it possible for editors to use `12/31/2017` dates while the database stores `2017-12-31` behind the scenes.

`set_picker_options( $options )`

Set an associative array with your preferred [options](https://chmln.github.io/flatpickr/options/).