# Multiple groups

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

## Config Methods

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
