# Date

Renders a date picker. The value is always stored in YYYY-MM-DD format regardless of how it is displayed to the user.

`Field::make( 'date', 'crb_event_start_date', 'Start' )`

### Config methods

`set_picker_options( $options )`

Set an associative array with your preferred [options](https://chmln.github.io/flatpickr/options/). Note that values stored in the database will always be in the `Y-m-d` format regardless of what format is used as the display format (this makes it possible for users to use `12/31/2017` dates while the database stores `2017-12-31` behind the scenes).