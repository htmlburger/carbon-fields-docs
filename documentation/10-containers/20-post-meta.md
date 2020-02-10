# Post Meta

Custom Field containers are used to extend the post edit screens with additional fields. Field data is stored separately for each post as post meta (see [add_post_meta](http://codex.wordpress.org/Function_Reference/add_post_meta)).

### Container position

More information about the position options can be found in the [add_meta_box()](https://codex.wordpress.org/Function_Reference/add_meta_box) function.

#### Context

The part of the page where the container should be shown (`'normal'` (default), `'advanced'`, `'side'` or `'carbon_fields_after_title'`)

*`carbon_fields_after_title` position is not supported in the Gutenberg Editor.*

`->set_context( 'normal' )`

#### Priority

The priority within the context where the container should show (`'high'` (default), `'core'`, `'default'` or `'low'`)

`->set_priority( 'high' )`

### Accessing field values

To access field values you need to use the function `carbon_get_post_meta( $id, $name )`, where:

| Parameter            | Description                                                                         |
| -------------------- | ----------------------------------------------------------------------------------- |
| `$id`                | Post ID where your value was entered.                                               |
| `$name`              | The field name pattern of the field to be retrieved.                                              |

```php
<!-- Simple field -->
<p>Article was published in: <?php echo carbon_get_post_meta( get_the_ID(), 'crb_location' ); ?></p>

<!-- Complex field -->
<?php
$slides = carbon_get_post_meta( get_the_ID(), 'crb_slides' );
if ( $slides ) {
    foreach ( $slides as $slide ) {
        echo $slide['image'];
    }
}
?>
```

You can also use `carbon_get_the_post_meta( $name )` to access the values for the current post in [The Loop](http://codex.wordpress.org/The_Loop).

```php
<p>Article was published in: <?php echo carbon_get_the_post_meta( 'crb_location' ); ?></p>

<?php $slides = carbon_get_the_post_meta( 'crb_slides' ); ?>
```

After saving, the `carbon_fields_post_meta_container_saved` hook is called, which allows you to hook additional functionality after saving. It accepts the `$post_id` parameter, which is the ID of the post being updated. Example:

```php
add_action( 'carbon_fields_post_meta_container_saved', 'crb_after_save_event' );
function crb_after_save_event( $post_id ) {
    if ( get_post_type( $post_id ) !== 'crb_event' ) {
        return false;
    }

    $event_date = carbon_get_post_meta( $post_id, 'crb_event_date' );
    if ( $event_date ) {
        $timestamp = strtotime( $event_date );
        update_post_meta( $post_id, '_crb_event_timestamp', $timestamp );
    }
}
```
