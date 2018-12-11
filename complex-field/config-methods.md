# Config methods

You can use the following methods to setup and customize the complex field.

?> `add_fields( $fields )`

This method is identical to Container add_fields method, where `$fields` is an array of fields.

?> `set_layout( $layout )`

There are 3 layouts available for displaying a complex field:

* `grid` *(default)* – lists the complex groups as a grid. Each field in the group is displayed in a new line with the label first and the form controls after it
* `tabbed-horizontal` – groups are displayed as horizontal tabs
* `tabbed-vertical` - groups are displayed as vertical tabs

For tabbed layouts the group label will be displayed in the tabs navigation.

Tabbed layouts are intended to clean up the user interface of field-heavy pages.

?> `set_collapsed( $collapsed )`

Change the groups' initial visual collapse state. Must be `boolean`. Defaults to `false`.

?> `set_min( $min )`

Minimum number of rows. Must be greater than `0`. Defaults to `-1` (no limit).

?> `set_max( $max )`

Maximum number of rows. Must be greater than `0`. Defaults to `-1` (no limit).

?> `set_duplicate_groups_allowed( $allowed )`

Set whether the user should be allowed to create duplicate groups. Defaults to `true`.

?> `setup_labels( $labels )`

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

Field::make( 'complex', 'crb_employee_data' )
    ->setup_labels( $employees_labels )
    ->add_fields( array(
        Field::make( 'text', 'name')->set_help_text('Name of employee' ),
        Field::make( 'text', 'position')->set_help_text('Position title' ),
        Field::make( 'image', 'image' ),
        Field::make( 'rich_text', 'description' ),
    ) )
```

?> `set_header_template( $template )`

Allows for a [Lodash template](https://lodash.com/docs/4.17.4#template) to be used in the fields group header.

___Note:___ Dashes in field names must be replaced with underscores.
Example: `field-name-with-dashes` must be referred to as `<%- field_name_with_dashes %>` in `set_header_template()`

___Note:___ The group index is available as `$_index` (0-based).
Example: `->set_header_template('This is group <%- $_index %>')`

Example usage:

```php
->add_fields( 'passenger', array(
    Field::make( 'text', 'name' ),
    Field::make( 'text', 'years' ),
) )
->set_header_template( '
    <% if (name) { %>
        Passenger: <%- name %> <%- years ? "(" + years + ")" : "" %>
    <% } %>
' )
->add_fields( 'driver', array(
    Field::make( 'text', 'name' ),
    Field::make( 'text', 'drivers_license_id' ),
    Field::make( 'image', 'picture' ),
) )
->set_header_template( '
    <% if (name && drivers_license_id) { %>
        Driver: <%- name %>, <%- drivers_license_id %>
    <% } %>
' )
```

The passed `$template` can also be a [callback](http://php.net/manual/en/language.types.callable.php).

```php
function crb_complex_field_header_template() {
    ob_start();
    ?>

    <% if (name) { %>
        Passenger: <%- name %> <%- years ? "(" + years + ")" : "" %>
    <% } %>

    <?php
    return ob_get_clean();
}

->add_fields( 'passenger', array(
    Field::make( 'text', 'name' ),
    Field::make( 'text', 'years' ),
) )
->set_header_template( 'crb_complex_field_header_template' )
```