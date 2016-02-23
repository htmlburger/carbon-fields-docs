# Setup Methods

You can use the following methods to setup and customize the complex field.

`add_fields( $fields )`

This method is identical to Container add_fields method, where `$fields` is an array of fields.

`set_layout($layout = table | list)` *Deprecated*

There are two layouts available for displaying a complex field:

* `Complex_Field::LAYOUT_TABLE` *(default)* – lists groups as rows. Each field in the group is displayed in a new line with the label first and the user control after it.
* `Complex_Field::LAYOUT_LIST` – lists groups as rows and their fields as a columns.

`set_min($min)`

Minimum number of rows. Must be greater than `0`. Defaults to `-1` (no limit).

`set_max($max)`

Maximum number of rows. Must be greater than `0`. Defaults to `-1` (no limit).

`setup_labels($labels)`

Allows client code to change labels for this complex field. The following items are accepted:

* `plural_name` — the plural label. Default is `“entries”`
* singular_name — the singular label. Default is `“entry”`

Example usage:

```php
use Carbon_Fields\Field\Field;
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