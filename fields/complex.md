# Complex

Complex fields act as containers to which you can add multiple groups of fields. It is represented as a table, where each row is a field group. The user is able to add infinite rows of each group. This allows to repeat a set of fields multiple times creating customizable and sortable lists. This is useful when creating image galleries, lists of data or advanced content and layout elements.

```php
Field::make( 'complex', 'crb_slider', __( 'Slider' ) )
    ->add_fields( array(
        Field::make( 'text', 'title', __( 'Slide Title' ) ),
        Field::make( 'image', 'photo', __( 'Slide Photo' ) ),
    ) )
```

The example above shows how to make a slider. We've created a single complex field named `slide`, to which we attached one group of fields that represents a single slide – `title` and `photo`. The user will be able to add multiple rows of title and photo, thus creating a list of slides for the slide show.

A more advanced usage of the complex field is shown below:

```php
Field::make( 'complex', 'crb_media_item' )
    ->add_fields( 'photograph', array(
        Field::make( 'image', 'image' ),
        Field::make( 'text', 'caption' ),
    ) )
    ->add_fields( 'movie', array(
        Field::make( 'file', 'video' ),
        Field::make( 'text', 'title' ),
        Field::make( 'text', 'length' ),
    ) )
```

Here we have to create a list of media items, lets say for an art exhibition. There are two types of items – photos (defined by an `image` and a `caption`) and movies (having a `title`, `length` and the `video` file itself). Since items have different properties, we need to define separate group for each one. Groups also must have a name, by which they will be recognized later – `photograph` and `movie`.

As you can see, depending on their usage, complex fields can either contain a single unnamed group or multiple named groups.

## Multiple groups

To add multiple groups of fields you use `add_fields( $name, $fields )`, where:

`$name`

Unique name of the group.

`$fields`

Numeric array of fields.

```php
Field::make( 'complex', 'crb_media' )
    ->add_fields( 'photograph', array(
        Field::make( 'text', 'caption', __( 'Caption' ) ),
        Field::make( 'image', 'image', __( 'Image' ) )
            ->set_value_type( 'url' ),
    ) )
    ->add_fields( 'movie', array(
        Field::make( 'text', 'length', __( 'Length' ) ),
        Field::make( 'text', 'title', __( 'Title' ) ),
        Field::make( 'file', 'video', __( 'Video' ) )
            ->set_value_type( 'url' ),
    ) )
```

Each call to `add_fields( $name, $fields )` creates a new group and adds it to the complex field.

You can also give each group a label different from their name using `add_fields( $name, $label, $fields )`.

All data stored in a complex field is returned as a two-dimensional array with the following format:

```php
array (
    0 => array (
        '_type' => 'photograph',
        'caption' => 'Lorem Ipsum',
        'image' => 'http://example.com/wp-content/uploads/2012/12/Jellyfish.jpg',
    ),
    1 => array (
        '_type' => 'movie',
        'length' => '1:56',
        'title' => 'Dolor sit amet',
        'video' => 'http://example.com/wp-content/uploads/2012/12/video_new.mp4',
    ),
    2 => array (
        '_type' => 'photograph',
        'caption' => 'Consectetur adipiscing elit',
        'image' => 'http://example.com/wp-content/uploads/2012/12/Koala.jpg',
    ),
)
```

Each item represents the values stored by a single group. The name of the group is stored in element with key `_type`. When the complex field contains one group only, it’s type will be an empty string – `""`.

Complex field values are retrieved using either `carbon_get_post_meta()` or `carbon_get_theme_option()` (or a different retrieval function, depending on the container it is added to) and passing the string `"complex"` as `$type` argument.

### Config Methods

?> `set_duplicate_groups_allowed( $allowed = true )`

Set whether duplicate groups are allowed.

!> This method is only applicable to multiple groups complex field definition. Using it with a single group won't have any effect.

```php
Field::make( 'complex', 'crb_media' )
    ->set_duplicate_groups_allowed( false )
    ->add_fields( 'photograph', array(
        Field::make( 'text', 'caption', __( 'Caption' ) ),
        Field::make( 'image', 'image', __( 'Image' ) )
            ->set_value_type( 'url' ),
    ) )
    ->add_fields( 'movie', array(
        Field::make( 'text', 'length', __( 'Length' ) ),
        Field::make( 'text', 'title', __( 'Title' ) ),
        Field::make( 'file', 'video', __( 'Video' ) )
            ->set_value_type( 'url' ),
    ) )
```

## Nested Complex Fields

Complex fields can be nested. 

The following will define a container that creates multiple slides and allows positioning of multiple text fragments on each slide:

```php
Container::make( 'post_meta', 'Slider Data' )
    ->where( 'post_type', '=', 'post' )
    ->add_fields( array(
        Field::make( 'complex', 'crb_slides' )
            ->add_fields( array(
                Field::make( 'image', 'image' ),
                Field::make( 'complex', 'slide_fragments' )
                    ->add_fields( array(
                        Field::make( 'text', 'fragment_text' ),
                        Field::make( 'select', 'fragment_position' )
                            ->add_options( array( 'Top Left', 'Top Right', 'Bottom Left', 'Bottom Right' ) ),
                    ))
            )),
    ));
```

Complex field values are retrieved using either `carbon_get_post_meta()` or `carbon_get_theme_option()` (or a different retrieval function, depending on the container it is added to).

The format of the returned data is a multi-dimensional array, as follows:

```php
array (
    0 => array (
        'photo' => 'http://example.com/lorem.jpg',
        'people_on_photo' => array (
            0 => array (
                'name' => 'John',
            ),
            1 => array (
                'name' => 'Karen',
            ),
        )
    ),
    1 => array (
        'photo' => 'http://example.com/ipsum.jpg',
        'people_on_photo' => array (
            0 => array (
                'name' => 'Paul',
            ),
            1 => array (
                'name' => 'Kasper',
            ),
            2 => array (
                'name' => 'Julie',
            ),
        )
    ),
)
```

## Adding predefined complex groups

```php
Container::make( 'theme_options', __( 'Theme Options' ) )
    ->add_fields( array(
        Field::make( 'complex', 'crb_complex', 'My Complex Field' )
            ->add_fields( array(
                Field::make( 'text', 'my_text_field', 'My Text Field' )
            ) )
            ->set_default_value( array(
                array(
                    'my_text_field' => 'Hello',
                ),
                array(
                    'my_text_field' => 'World!',
                ),
            ) ),
    ) );
```

## Config methods

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