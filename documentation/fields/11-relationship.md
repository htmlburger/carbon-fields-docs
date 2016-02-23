# Relationship

This field allows to select and reorder posts of any post type. Useful for creating links between any of the post type entries.

### Setup methods

`set_post_type($type)`

It allows you to specify the post type types you want to have available in this relationship field. Defaults to `post`.

`set_max($max)`

Allows you to limit the maximum number of selected items in a relationship field. By default, there is no limit.

```php
Field::make('relationship', 'crb_relationship')
	->set_max(5)
```

`allow_duplicates($allow)`

If enabled will allow the same item to be selected more than once. By default, duplicates are not allowed.

```php
Field::make('relationship', 'crb_relationship')
	->allow_duplicates(true)
```

### Example

The example below registers a relationship field with all posts from the post post type:

```php
Field::make('relationship', 'crb_relationship')
	->set_post_type('post')
```