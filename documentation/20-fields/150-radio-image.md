# Radio Image

Behaves exactly like a Radio field, but the passed option values should be fully qualified urls to image thumbnails which will be displayed instead of traditional labels.

### Config methods

`add_options( $options )`

Add an associative array with options. For more information, see the Select field documentation for this method.

`set_options( $options )`

Set an associative array with options. For more information, see the Select field documentation for this method.

##### NB! If you provide indexed array with no key values, the default indexes **(0, 1, 2 …)** of the elements will be used.

```php
Field::make( 'radio_image', 'crb_background', 'Background' )
    ->add_options( array(
        'sky' => 'https://example.com/sky.jpg',
        'ground' => 'https://example.com/ground.jpg',
    ) )
```