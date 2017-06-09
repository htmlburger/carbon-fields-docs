# Term meta

In this guide we'll add a "Color" field to categories and then display them in a color-coded list.

First, let's start with our container and field definitions in your theme's `functions.php`;

```php
use Carbon_Fields\Field;
use Carbon_Fields\Container;

add_action( 'carbon_fields_register_fields', 'crb_attach_term_meta' );
function crb_attach_term_meta() {
    Container::make( 'term_meta', __( 'Term Options', 'crb' ) )
        ->where( 'term_taxonomy', '=', 'category' ) // only show our new field for categories
        ->add_fields( array(
            Field::make( 'color', 'crb_color', 'Color' )
                ->set_required( true ),
        ) );
}
```

If you edit a category you will see the newly added "Color" field:

![Term Options meta box](https://raw.githubusercontent.com/htmlburger/carbon-fields-docs/milestone/2_0/assets/term-meta-1.png)

We now have a new color field available when creating or editing categories.
Let's add some categories:
1. "News" with the color #FF0000
1. "Nature" with the color #00FF00
1. "Technology" with the color #0000FF

Now let's list your categories in your `footer.php` file:

```php
<?php
$categories = get_categories( 'hide_empty=0' );
echo '<ul>';
foreach ( $categories as $category ) {
    $color = carbon_get_term_meta( $category->term_id, 'crb_color' );
    echo '<li><a href="' . get_term_link( $category ) . '" style="color: ' . $color . ';">' . $category->name . '</a></li>';
}
echo '</ul>';
?>
```

Which results in:

![Term Options meta box](https://raw.githubusercontent.com/htmlburger/carbon-fields-docs/milestone/2_0/assets/term-meta-2.png)
