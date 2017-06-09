# Condition Types

| Name                        | Container     | Description                                                                                                                           |
|---------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `'current_user_capability'` | Any           | Check against the current user's capabilities.  `CUSTOM` callable is passed the current user's id.                                    |
| `'current_user_id'`         | Any           | Check against the current user's id.                                                                                                  |
| `'current_user_role'`       | Any           | Check against the current user's role.  `CUSTOM` callable is passed an array of all current user's roles.                             |
| `'post_format'`             | `'post_meta'` | Check against the post format. Use a blank string as the value to test if the post has no format assigned.                            |
| `'post_id'`                 | `'post_meta'` | Check against the post id.                                                                                                            |
| `'post_level'`              | `'post_meta'` | Check against the post level in the hierarchy. Levels start from 1.                                                                   |
| `'post_parent_id'`          | `'post_meta'` | Check against the post's parent id.                                                                                                   |
| `'post_template'`           | `'post_meta'` | Check against the post's template filename. Pass `default` as the value to test against the default page template.                    |
| `'post_term'`               | `'post_meta'` | Check against the post's terms. The expected value must be a term descriptor (see below).  `CUSTOM` callable is passed the post's id. |
| `'post_type'`               | `'post_meta'` | Check against the post's type.                                                                                                        |
| `'term'`                    | `'term_meta'` | Check against the term according to the supplied term descriptor.  `CUSTOM` callable is passed the term's id.                         |
| `'term_level'`              | `'term_meta'` | Check against the term's level in the hierarchy.                                                                                      |
| `'term_taxonomy'`           | `'term_meta'` | Check against the term's taxonomy.                                                                                                    |
| `'user_capability'`         | `'user_meta'` | Check against the user's capabilities.  `CUSTOM` callable is passed the user's id.                                                    |
| `'user_id'`                 | `'user_meta'` | Check against the user's id.                                                                                                          |
| `'user_role'`               | `'user_meta'` | Check against the user's role.  `CUSTOM` callable is passed an array of the user's roles.                                             |

## Term Descriptors

Term-related conditions expect that you supply them with a term descriptor as the value (an array of term descriptors for the `IN` and `NOT IN` operators).  
A term descriptor is an array which has the following keys:

| Key        | Description                     |
|------------|---------------------------------|
| `field`    | The term field to compare with. |
| `value`    | The value for the term field.   |
| `taxonomy` | The taxonomy of the term.       |

##### Example usage

```php
Container::make( 'post_meta', 'Custom Data' )
    ->where( 'post_term', '=', array(
        'field' => 'slug',
        'value' => 'featured',
        'taxonomy' => 'category',
    ) )
```

More information on these values can be found in the documentation of the [`get_term_by()`](https://codex.wordpress.org/Function_Reference/get_term_by) function in the WordPress Codex (the three keys here are identical to the first three arguments of this function).
