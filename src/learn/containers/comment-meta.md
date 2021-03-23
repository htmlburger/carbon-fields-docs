# Comment Meta

Comment meta containers add extra fields to the comment edit screens. Field data is stored separately for each comment as comment meta (see [add_comment_meta](https://developer.wordpress.org/reference/functions/add_comment_meta/)).

```php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make( 'comment_meta', __( 'Comment Information' ) )
    ->add_fields( array(
        Field::make( 'text', 'crb_comment_rating', __( 'Comment Rating' ) ),
        Field::make( 'text', 'crb_comment_additional_info', __( 'Additional Comment Information' ) ),
    ) );
```

### Accessing field values

To access field values you need to use the function `carbon_get_comment_meta( $comment_id, $name )`, where:

| Parameter     | Description                                          |
| --------------| -----------------------------------------------------|
| `$comment_id` | Comment ID where your value was entered.             |
| `$name`       | The field name pattern of the field to be retrieved. |

```php
<?php
$comments = get_comments( array(
    'post_id' => get_the_ID(),
) );

foreach ( $comments as $comment ) {
    $comment_additional_info = carbon_get_comment_meta( $comment->comment_ID, 'crb_comment_additional_info' );
    $comment_rating    = carbon_get_comment_meta( $comment->comment_ID, 'crb_comment_rating' );

    if ( ! empty( $comment_additional_info ) ) {
        echo $comment->comment_ID . ' info: ' . $comment_additional_info;
    }

    if ( ! empty( $comment_rating ) ) {
        echo 'Rating: ' . $comment_rating;
    }
}
?>
```
