# Serialized Datastore

The following class allows you to store theme options fields as a serialized array instead of multiple database rows.


##### Container definitions

```php
Field::make( 'complex', 'crb_custom_datastore_complex' )
	->set_datastore( new Serialized_Theme_Options_Datastore() )
	->add_fields( array(
		Field::make( 'text', 'text' ),
	) ),
Field::make( 'map', 'crb_custom_datastore_map' )
	->set_datastore( new Serialized_Theme_Options_Datastore() ),
```

##### `Serialized_Theme_Options_Datastore.php`

```php
<?php

use Carbon_Fields\Field\Field;
use Carbon_Fields\Datastore\Datastore;

/**
 * Stores serialized values in the database
 */
class Serialized_Theme_Options_Datastore extends Datastore {

	/**
	 * Initialization tasks for concrete datastores.
	 **/
	public function init() {

	}

	protected function get_key_for_field( Field $field ) {
		$key = '_' . $field->get_base_name();
		return $key;
	}

	/**
	 * Save a single key-value pair to the database with autoload
	 *
	 * @param string $key
	 * @param string $value
	 * @param bool $autoload
	 */
	protected function save_key_value_pair_with_autoload( $key, $value, $autoload ) {
		$notoptions = wp_cache_get( 'notoptions', 'options' );
		$notoptions[ $key ] = '';
		wp_cache_set( 'notoptions', $notoptions, 'options' );
		$autoload = $autoload ? 'yes' : 'no';

		if ( ! add_option( $key, $value, null, $autoload ) ) {
			update_option( $key, $value, $autoload );
		}
	}

	/**
	 * Load the field value(s)
	 *
	 * @param Field $field The field to load value(s) in.
	 * @return array
	 */
	public function load( Field $field ) {
		$key = $this->get_key_for_field( $field );
		$value = get_option( $key, null );
		if ( $value === null ) {
			return array();
		}
		return $value;
	}

	/**
	 * Save the field value(s)
	 *
	 * @param Field $field The field to save.
	 */
	public function save( Field $field ) {
		if ( ! empty( $field->get_hierarchy() ) ) {
			return; // only applicable to root fields
		}
		$key = $this->get_key_for_field( $field );
		$value = $field->get_full_value();
		if ( is_a( $field, '\\Carbon_Fields\\Field\\Complex_Field' ) ) {
			$value = $field->get_value_tree();
		}
		$this->save_key_value_pair_with_autoload( $key, $value, $field->get_autoload() );
	}

	/**
	 * Delete the field value(s)
	 *
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field ) {
		if ( ! empty( $field->get_hierarchy() ) ) {
			return; // only applicable to root fields
		}
		$key = $this->get_key_for_field( $field );
		delete_option( $key );
	}
}
```
