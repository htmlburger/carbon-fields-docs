# Setup Methods

You can use the following methods to setup and customize the complex field.

`add_fields($fields)`

This method is identical to Container add_fields method, where `$fields` is an array of fields.

`set_layout($layout)`

There are two layouts available for displaying a complex field:

* `grid` *(default)* – lists the complex groups as a grid. Each field in the group is displayed in a new line with the label first and the user control after it.
* `tabbed` – groups are displayed as tabs. If the group has a label, it will be displayed in the tabs navigation. The fields style is similar to the grid layout.

`set_min($min)`

Minimum number of rows. Must be greater than `0`. Defaults to `-1` (no limit).

`set_max($max)`

Maximum number of rows. Must be greater than `0`. Defaults to `-1` (no limit).

`setup_labels($labels)`

Allows client code to change labels for this complex field. The following items are accepted:

* `plural_name` — the plural label. Default is `“entries”`
* `singular_name` — the singular label. Default is `“entry”`

Example usage:

```php
use Carbon_Fields\Field;
use Carbon_Fields\Field\Complex_Field;

$employees_labels = array(
	'plural_name' => 'Employees',
	'singular_name' => 'Employee',
);

Field::make('complex', 'crb_employee_data')
	->setup_labels($employees_labels)
	->add_fields(array(
		Field::make('text', 'name')->help_text('Name of employee'),
		Field::make('text', 'position')->help_text('Position title'),
		Field::make('image', 'image'),
		Field::make('rich_text', 'description'),
	))
```

`set_header_template($template)`

Allows for an Underscore template to be used in the fields group header.

The passed `$template` can also be a [callback](http://php.net/manual/en/language.types.callable.php).

Example usage:

```php
->add_fields('passenger', array(
    Field::make('text', 'name'),
    Field::make('text', 'years'),
))
->set_header_template('
    <# if (name) { #>
        Passenger: {{ name }} {{ years ? "(" + years + ")" : "" }}
    <# } #>
')
->add_fields('driver', array(
    Field::make('text', 'name'),
    Field::make('text', 'drivers_license_id'),
    Field::make('image', 'picture'),
))
->set_header_template('
    <# if (name && drivers_license_id) { #>
        Driver: {{ name }}, {{ drivers_license_id }}
    <# } #>
')
```
