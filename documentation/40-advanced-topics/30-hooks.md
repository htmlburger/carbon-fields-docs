# Hooks

There are several hooks that allow you to include your custom classes and functionality at the right time, in the right place:

### General

*(action)* `carbon_fields_loaded`

Called immediately after booting up Carbon Fields is done.

*(action)* `carbon_fields_register_fields`

Called prior to registering the Fields. This is the hook where you should register your fields.

*(action)* `carbon_fields_fields_registered`

Called after all Fields have been registered.

*(action)* `carbon_fields_container_activated`

Called after a Container has been activated.

*(action)* `carbon_fields_{container_type}_container_saved`

Called after a Container has been saved. Container type can be `post_meta`, `term_meta`, `nav_menu_item` etc.

*(action)* `carbon_fields_field_activated`

Called after a Field has been activated.

### Container

*(filter)* `carbon_fields_{container_type}_container_static_condition_types` `( $condition_types )`

Allows you to modify the allowed condition types for a specific container type. Useful if you extend Carbon Fields with a custom Condition as shown in the Extending section of this documentation.

* *array&lt;string&gt;* `$condition_types` Array of allowed condition types

*(filter)* `carbon_fields_container_static_condition_types` `( $condition_types )`

Identical to the above, but affects all container types.

* *array&lt;string&gt;* `$condition_types` Array of allowed condition types

*(filter)* `carbon_fields_container_is_valid_attach` `( $is_valid, $container )`

Allows you to have greater control over container display condition checking. For example, you can hook to this filter and add a custom `if()` check whether any container should be displayed to the user.

* *boolean* `$is_valid` Defines whether the save conditions are valid
* *Container* `$container` The container instance

*(filter)* `carbon_fields_container_is_valid_save` `( $is_valid, $container )`

Allows you to have greater control over container save condition checking. For example, you can hook to this filter and add a custom `if()` check whether any container should save it's values on submission.

* *boolean* `$is_valid` Defines whether the save conditions are valid
* *Container* `$container` The container instance

### Theme Options Container

*(filter)* `carbon_fields_{container_title}_button_label` `( $label )`

Allows you to modify the button label of the theme options container. The filter name is based on the container's title. For example, the filter name for a container with a title of `Theme Options` would be `carbon_fields_theme_options_button_label`.

* *string* `$label` The unfiltered button label.

### Field

*(filter)* `carbon_fields_should_delete_field_value_on_save` `( $delete, $field )`

Allows you to modify whether fields delete their old value records before saving the new ones.

* *boolean* `$delete` Defines whether to delete the previous field value(s)
* *Field* `$field` The field instance

*(filter)* `carbon_fields_should_save_field_value` `( $save, $value, $field )`

Allows you to modify whether fields save their new value. For example, can be used to prevent fields from saving empty values.

* *boolean* `$save` Defines whether to save the new field value(s)
* *mixed* `$value` The new field value(s)
* *Field* `$field` The field instance

### Association Field

*(filter)* `carbon_fields_association_field_title` `( $title, $name, $id, $type, $subtype )`

Allows you to modify the title of the association field items. Helpful when implementing custom association items. Passes the following parameters:

* *string* `$title` The unfiltered item title.
* *string* `$name` Name of the association field.
* *int* `$id` The database ID of the item.
* *string* `$type` Item type (post, term, user, comment, or a custom one).
* *string* `$subtype` Subtype – `page`, `post`, `category`, etc.

*(filter)* `carbon_fields_association_field_item_label` `( $label, $name, $id, $type, $subtype )`

Allows you to modify the label of the association items. Helpful when implementing custom association items, or when you want to change the default label. Passes the following parameters:

* *string* `$label` The unfiltered item label.
* *string* `$name` Name of the association field.
* *int* `$id` The database ID of the item.
* *string* `$type` Item type (post, term, user, comment, or a custom one).
* *string* `$subtype` Subtype – `page`, `post`, `category`, etc.

*(filter)* `carbon_fields_association_field_comment_length` `( $number, $name )`

Allows you to change the number of characters, visible from the comment text in an item. Passes the following parameters:

* *int* `$number` Number of characters. Default: `30`
* *string* `$name` Name of the association field.

*(filter)* `carbon_fields_association_field_options_{name}_{type}` `( $options )`
*(filter)* `carbon_fields_association_field_options_{name}_{type}_{subtype}` `( $options )`

Allows you to modify the available options of the association field with name `{name}` from the `{type}` type and of the `{subtype}` subtype where applicable.

- if you want to filter the page post type options of the `crb_association` field, you would use the following filter: `carbon_fields_association_field_options_crb_association_post_page`

- if you want to filter the category taxonomy options of the `crb_association` field, you would use the following filter: `carbon_fields_association_field_options_crb_association_taxonomy_category`

- if you want to filter the users options of the `crb_association` field, you would use the following filter: `carbon_fields_association_field_options_crb_association_user`

- if you want to filter the comments options of the `crb_association` field, you would use the following filter: `carbon_fields_association_field_options_crb_association_comment`

*(filter)* `carbon_fields_association_field_options` `( $options, $name )`

Allows you to filter the available options of a association field. Passes the following parameters:

* *array* `$options` Unfiltered options.
* *string* `$name` Name of the association field.

### Gravity Form Field

*(filter)* `carbon_fields_gravity_form_options` `( $options )`

Allows you to modify the available GravityForms options.

* *array* `$options` GravityForm options

### Map Field

*(filter)* `carbon_fields_map_field_api_key` `( $api_key )`

Allows you to set your own API key for Google Maps.

* *string* `$api_key` The Google Maps API key

*(filter)* `carbon_fields_map_field_api_url` `( $api_url )`

Allows you to completely replace the Google Maps JavaScript API URL.

* *string* `$api_url` The Google Maps API URL

### Sidebar Field

*(filter)* `carbon_fields_custom_sidebar_default_options` `( $options )`

Allows you to modify the default sidebar options for sidebars created through Carbon Fields.

* *array* `$options` The default sidebar options as provided to `register_sidebar()`

*(filter)* `carbon_fields_sidebar_options` `( $options )`

Allows you to modify the sidebar options for every sidebar created through Carbon Fields.

* *array* `$options` The sidebar options as provided to `register_sidebar()`