# Conditional display

Containers are very flexible in terms of display options. By default, containers show on all related entities (all post types for post meta container, all terms for term meta container etc.), however, you can limit container visibility to specific post types, taxonomy terms, hierarchy levels and more with unlimited complexity.

Adding a display condition to a container is done by using one of the following methods:

- `->when( $condition, $comparison_operator, $value )` - adds a basic condition
- `->or_when( $condition, $comparison_operator, $value )` - adds a basic condition with an `OR` relation to other conditions

_Note: chaining conditions behaves exactly like a normal php `if` statement with multiple conditions._

# Examples

## Showing a Post Meta Container on all pages

	Container::make('post_meta', 'Custom Data')
	    ->when('post_type', '=', 'page')
	    ->add_fields(array(...));

## Nested logic

In order to achieve nested display logic all of the above methods also support the following syntax:
	
	Container::make( 'post_meta', 'Custom Data' )
		->when( function( $lvl1_condition ) {
			$lvl1_condition->when( $condition, $comparison_operator, $value );
			$lvl1_condition->when( function( $lvl2_condition ) {
				... // can be nested infinitely
			} );
			...
		} );

For example, to have a container visible on all post types if the current user is an `administrator` OR only on the `page` post type if the current user is an `editor` your code will look like this:
	
	Container::make( 'post_meta', 'Custom Data' )
		->when( 'current_user_role', '=', 'administrator' )
		->or_when( function( $condition ) {
			$condition->when( 'current_user_role', '=', 'editor' );
			$condition->when( 'post_type', '=', 'page' );
		} );