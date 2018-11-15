# Custom Datastore

The following example allows you to store theme options fields as a serialized array instead of multiple database rows.

It serves as a starting point if you need to switch the underlying data

##### `Serialized_Theme_Options_Datastore.php`
You first need to define a class that extends `Carbon_Fields\Datastore\Datastore`. You're required to define the following methods:

 * `load( Field $field )` - load field value
 * `save( Field $field )` - create or update field value
 * `delete( Field $field )` - delete the field from the datastore

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

##### Container definitions
Every `Field` keeps an instance to an object implementing the `Carbon_fields\Datastore\Datatore` interface. When you define a field, you can setup that object via `set_datastore` method call like this:

```php
Field::make( 'complex', 'crb_custom_datastore_complex' )
    ->set_datastore( new Serialized_Theme_Options_Datastore() )
    ->add_fields( array(
        Field::make( 'text', 'text' ),
    ) ),
    
Field::make( 'map', 'crb_custom_datastore_map' )
    ->set_datastore( new Serialized_Theme_Options_Datastore() ),
```

