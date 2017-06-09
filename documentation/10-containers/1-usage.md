# Usage

A Container is a group of custom fields and display options. Containers are displayed on different parts of the backend, according to their type and display options.  
By default, all containers are visible on all entities based on their type (posts for `post_meta`, terms for `term_meta` etc.) and are editable by all users who can access the related edit screen.

To create a new container you must specify a type and a title:

```php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make( 'post_meta', 'Custom Data' )
    ->where( 'post_type', '=', 'page' )
    ->add_fields( array(
        Field::make( 'map', 'crb_location' )
            ->set_position( 37.423156, -122.084917, 14 ),
        Field::make( 'sidebar', 'crb_custom_sidebar' ),
        Field::make( 'image', 'crb_photo' ),
    ));
```

To create a new Container, you just use the `Container::make( $type, $title )` method, where:

| Parameter | Description                                                                                                                                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `$type`   | Identifier of the container type (accepted values are `post_meta`, `term_meta`, `user_meta`, `comment_meta`, `nav_menu` and `theme_options`). |
| `$title`  | Unique title of the container.                                                                                                                |
