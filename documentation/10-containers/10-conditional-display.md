# Conditional display

Containers are very flexible in terms of display options. By default, containers show on all related entities (all post types for post meta container, all terms for term meta container etc.), however, you can limit container visibility to specific post types, taxonomy terms, hierarchy levels and more with unlimited complexity.

Adding a display condition to a container is done by using one of the following methods:

- `->where( $condition, $comparison_operator, $value )` - adds a condition with an __AND__ relation to other conditions
- `->or_where( $condition, $comparison_operator, $value )` - adds a condition with an __OR__ relation to other conditions

_Note: chaining conditions behaves exactly like a normal php `if` statement with multiple conditions._

| Parameter              | Description                                                                                                   |
|------------------------|---------------------------------------------------------------------------------------------------------------|
| `$condition`           | A condition type name as a string (refer to the `Condition Types` page)                                       |
| `$comparison_operator` | Can be one of the following: `'='`, `'!='`, `'>'`, `'>='`, `'<'`, `'<='`, `'IN'`, `'NOT IN'`, `'CUSTOM'`      |
| `$value`               | The value to check against. `IN` and `NOT IN` operators expect an array; `CUSTOM` operator expects a callable |

___Note:___ You can use an anonymous function as the `$value` parameter for all comparison operators in order to lazyload the value which can be very useful when evaluating the value is a resource-intensive task.

# The `CUSTOM` comparison operator

This operator allows you to supply a callable which must return a boolean value whether this condition is fulfilled or not. This way you have more control over how a value is compared if the built-in functionality does not suit your needs.

For example, if you wish to have a container only display on pages on even levels in the hierarchy your code will look like this:

```php
Container::make( 'post_meta', 'Custom Data' )
    ->where( 'post_type', '=', 'page' )
    ->where( 'post_level', 'CUSTOM', function( $post_level ) {
        return ( $post_level % 2 === 0 );
    } );
```

# Examples

##### Showing a Post Meta Container on all pages

```php
Container::make( 'post_meta', 'Custom Data' )
    ->where( 'post_type', '=', 'page' )
    ->add_fields( array( ... ) );
```

##### Showing a Post Meta Container on static home page

```php
Container::make( 'post_meta', 'Custom Data' )
    ->where( 'post_id', '=', get_option( 'page_on_front' ) )
    ->add_fields( array( ... ) );
```

##### Showing a User Meta Container only if the current user is an administrator or editor

```php
Container::make( 'post_meta', 'Custom Data' )
    ->where( 'current_user_role', 'IN', array( 'administrator', 'editor' ) )
    ->add_fields( array( ... ) );
```

**Important note:** With [Theme options containers](/docs/containers-theme-options/) only users which have  ``manage_options`` capability have access to the container by default. Therefore ``current_user_role`` / ``current_user_capability`` conditions would not work unless [``carbon_fields_theme_options_container_admin_only_access`` filter](/docs/advanced-topics-hooks)is overridden.  
 
##### Nested logic

In order to achieve nested display logic the `where()` and `or_where()` methods also support being invoked with a `callable`:

```php
Container::make( 'post_meta', 'Custom Data' )
    ->where( function( $lvl1_condition ) {
        $lvl1_condition->where( $condition, $comparison_operator, $value );
        $lvl1_condition->where( function( $lvl2_condition ) {
            ... // can be nested infinitely
        } );
        ...
    } );
```

For example, to have a container visible on all post types if the current user is an `administrator` OR only on the `page` post type if the current user is an `editor` your code will look like this:

```php
Container::make( 'post_meta', 'Custom Data' )
    ->where( 'current_user_role', '=', 'administrator' )
    ->or_where( function( $condition ) {
        $condition->where( 'current_user_role', '=', 'editor' );
        $condition->where( 'post_type', '=', 'page' );
    } );
```
