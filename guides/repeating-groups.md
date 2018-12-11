# Repeating Groups

In this guide we'll create a repeating group field (also known as a `Complex` field) which we'll use to populate a slider with.

First, let's start with our container and field definitions in your theme's `functions.php`;

```php
use Carbon_Fields\Field;
use Carbon_Fields\Container;

add_action( 'carbon_fields_register_fields', 'crb_attach_post_meta' );
function crb_attach_post_meta() {
    Container::make( 'post_meta', __( 'Page Options' ) )
        ->where( 'post_type', '=', 'page' ) // only show our new fields on pages
        ->add_fields( array(
            Field::make( 'complex', 'crb_slides', 'Slides' )
            	->set_layout( 'tabbed-horizontal' )
            	->add_fields( array(
            		Field::make( 'text', 'title', 'Title' ),
            		Field::make( 'color', 'title_color', 'Title Color' ),
            		Field::make( 'image', 'image', 'Image' ),
            	) ),
        ) );
}
```

If you edit a page you will see the newly added "Slides" field:

![Post Options meta box](https://raw.githubusercontent.com/htmlburger/carbon-fields-docs/master/assets/repeating-groups-1.png)

We now have a repeating group that allows us to create any number of slides with an image, a title and a title color. Edit your desired page and create a few entries so we have something to list in our template like so:

![Post Options meta box](https://raw.githubusercontent.com/htmlburger/carbon-fields-docs/master/assets/repeating-groups-2.png)

Once done, open up your page template (be it `front-page.php` or `page.php`) and add the following:

```php
<?php
$slides = carbon_get_the_post_meta( 'crb_slides' );
echo '<ul>';
foreach ( $slides as $slide ) {
	echo '<li>';
	echo wp_get_attachment_image( $slide['image'] );
	echo '<h2 style="color: ' . $slide['color'] . '">' . $slide['title'] . '</h2>';
	echo '</li>';
}
echo '</ul>';
?>
```

Now our template will create a `<ul>` filled with images and titles suitable for use with your favorite slider JavaScript library!