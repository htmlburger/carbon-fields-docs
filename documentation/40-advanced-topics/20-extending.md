# Extending Fields

Carbon Fields can be easily extended. Each of the Field classes is optionally declared, and each function is optionally defined. This way early custom declaration and definitions can be made in your theme or plugin. Also, you can create custom Fields, Containers, Exceptions and others by extending the existing PHP classes.

On the JavaScript side, the library is designed to be powerful and flexible and makes heavy use of [React](https://facebook.github.io/react/), providing a solid base for building a scalable application.

To get a better understanding of how the library works, checkout our step-by-step guide of how to create a new Carbon Field type, which can be found at [https://github.com/htmlburger/carbon-field-number](https://github.com/htmlburger/carbon-field-number). The guide itself also acts as a template that you can start from.

# Extending Container Conditions

Carbon Fields allows you to define your own container conditions as well. Here's how to define and use a "Foobar_Condition" class for theme options containers:

```php
// Foobar_Condition.php
class Foobar_Condition extends Condition {
	
	/**
	 * Constructor
	 *
	 * @param  array<Carbon_Fields\Container\Condition\Comparer\Comparer> $comparers
	 */
	public function __construct() {
		$this->set_comparers( \Carbon_Fields\Carbon_Fields::resolve( 'generic', 'container_condition_comparer_collections' ) );
	}

	/**
	 * Check if the condition is fulfilled
	 * 
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		return $this->compare(
			'foobar', // Only return true when the passed value is 'foobar'
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}

// functions.php or another suitable place
\Carbon_Fields\Carbon_Fields::extend( Foobar_Condition::class, function( $container ) {
	// register our new class
	return new Foobar_Condition();
} );

add_filter( 'carbon_fields_theme_options_container_static_condition_types', function( $condition_types, $container_type, $container ) {
	// append our new condition type to allowed theme options conditions
	return array_merge(
		$condition_types,
		array( 'foobar' )
	);
}, 10, 3 );

// container definitions
Container::make( 'theme_options', __( 'Foobar Container', 'crb' ) )
	->where( 'foobar', '=', 'foobar' ); // this will always return true
	// ->where( 'foobar', '=', 'lorem' ); // this will always return false
```