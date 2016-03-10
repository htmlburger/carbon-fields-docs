# Date

Renders a date picker using jQuery UI. The value is stored in YYYY-MM-DD format.

`Field::make("date", "crb_event_start_date", "Start")`

### Setup methods

`set_datepicker_options($options)`

Set an associative array with your preferred [Datepicker options](http://api.jqueryui.com/datepicker/).

`set_options($options)`

**Deprecated**: Use `set_datepicker_options()` instead.