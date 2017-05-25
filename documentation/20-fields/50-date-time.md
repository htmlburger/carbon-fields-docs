# Date Time

Renders a time and date picker field.

`Field::make( 'date_time', 'eta', 'Estimated time of arrival' )`

### Setup Methods

`set_picker_options( $options )`

Set an associative array with your preferred [options](https://chmln.github.io/flatpickr/options/). Note that values stored in the database will always be in the `Y-m-d H:i:s` format regardless of what format is used as the display format (this makes it possible for users to use `12/31/2017 11:00 PM` dates while the database stores `2017-12-31 23:00:00` behind the scenes).