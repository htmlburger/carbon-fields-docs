# Queries

Carbon Fields allow you to make Post, Term and User queries based on fields even inside complex fields.

##### Example 1

Getting all posts which have a `crb_text` field with a value of `'hello world'`:

```php
// field definition
Container::make( 'post_meta', __( 'Post Options', 'crb' ) )
    ->where( 'post_type', '=', 'post' )
    ->add_fields( array(
        Field::make( 'text', 'crb_text', 'Text' ),
    ) );

// query
$query = new WP_Query( array(
    'post_type'=>'post',
    'meta_query'=>array(
        array(
            'key' => 'crb_text',
            'value' => 'hello_world',
        ),
    ),
) );
```

##### Example 2

Getting all posts which have a `crb_map` field with a longitude property larger than -2 (rather than combined `lat,lng` value):

```php
// field definition
Container::make( 'post_meta', __( 'Post Options', 'crb' ) )
    ->where( 'post_type', '=', 'post' )
    ->add_fields( array(
        Field::make( 'map', 'crb_map', 'Map' ),
    ) );

// query
$query = new WP_Query( array(
    'post_type'=>'post',
    'meta_query'=>array(
        array(
            'key' => 'crb_map',
            'carbon_field_property' => 'lng',
            'compare' => '>',
            'value' => -2,
        ),
    ),
) );
```

##### Example 3

Getting all posts which have `'red'` selected in the `crb_colors` Set field:

```php
// field definition
Container::make( 'post_meta', __( 'Post Options', 'crb' ) )
    ->where( 'post_type', '=', 'post' )
    ->add_fields( array(
        Field::make( 'set', 'crb_colors', 'Colors' )
            ->add_options( array( 'red' => 'Red', 'green' => 'Green', 'blue' => 'Blue' ) ),
    ) );

// query
$query = new WP_Query( array(
    'post_type'=>'post',
    'meta_query'=>array(
        array(
            'key' => 'crb_colors',
            'value' => 'red',
        ),
    ),
) );
```

##### Example 4

Getting all posts which have `'New York'` entered in the `city` Text_Field inside a `crb_cities` complex field:

```php
// field definition
Container::make( 'post_meta', __( 'Post Options', 'crb' ) )
    ->where( 'post_type', '=', 'post' )
    ->add_fields( array(
        Field::make( 'complex', 'crb_cities', 'Cities' )
            ->add_fields( array(
                Field::make( 'text', 'city', 'City' ),
            ) )
    ) );

// query
$query = new WP_Query( array(
    'post_type'=>'post',
    'meta_query'=>array(
        array(
            'key' => 'crb_cities/city',
            'value' => 'New York',
        ),
    ),
) );
```

##### Example 5

Getting all posts which have `'New York'` entered in the `city` Text_Field inside a `crb_cities` complex field when the complex has multiple groups:

```php
// field definition
Container::make( 'post_meta', __( 'Post Options', 'crb' ) )
    ->where( 'post_type', '=', 'post' )
    ->add_fields( 'group1', array(
        Field::make( 'complex', 'crb_cities', 'Cities' )
            ->add_fields( array(
                Field::make( 'text', 'city', 'City' ),
            ) )
    ) )
    ->add_fields( 'group2', array(
        Field::make( 'complex', 'crb_cities', 'Cities' )
            ->add_fields( array(
                // ...
            ) )
    ) );

// query
$query = new WP_Query( array(
    'post_type'=>'post',
    'meta_query'=>array(
        array(
            'key' => 'crb_cities:group1/city',
            'value' => 'New York',
        ),
    ),
) );
```

##### Example 6

Ordering posts based on a Carbon Field value:

```php
// field definition
Container::make( 'post_meta', __( 'Post Options', 'crb' ) )
    ->where( 'post_type', '=', 'post' )
    ->add_fields( array(
        Field::make( 'text', 'crb_text', 'Text' ),
    ) );

// query
$query = new WP_Query( array(
    'post_type'=>'post',
    'orderby' => 'text_field',
    'order' => 'asc',
    'meta_query'=>array(
        'text_field' => array(
            'key' => 'crb_text',
            'compare' => 'EXISTS',
        ),
    ),
) );
```