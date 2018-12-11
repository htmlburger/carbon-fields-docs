# Usage

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
