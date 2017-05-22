# 2.0 Upgrade Guide

- __Carbon Fields is no longer distributed as a WordPress plugin. To install Carbon Fields use `composer install htmlburger/carbon-fields` in your theme directory and make sure you are including the generated composer autoloader.__
- __All extending fields must be reworked. Refer to the Extending documentation page.__
- Carbon Fields now require you to call `\Carbon_Fields\Carbon_Fields::boot();` in order to load (instead of always loading). The best place to call this is in the `after_setup_theme` hook - see the Quickstart page for an example.
- __WARNING:__ `theme_options` containers are now visible to __ALL__ users by default. In order to achieve previous behavior call `->where( 'current_user_capability', '=', 'manage_options' )` on all theme options container definitions
- Review all `user_meta` and `theme_options` containers - they are now editable for all users who can access the page (e.g. subscribers will be able to edit their own meta but not anyone else's). Add `->where( 'current_user_capability', '=', 'manage_options' )` if you wish only admin-level users to be able to access the containers.
- `post_meta` containers are now visible on all post types unless you specify a post type. Previously they defaulted to the `post` post type only.
- The deprecated `choose_sidebar` field has been removed. Use `sidebar` instead.
- The legacy `Association_Field::set_post_type()` method has been removed removed - use `set_types()` instead.
- `map_with_address` field has been removed. Use `map` instead.
- `Textarea_Field::set_height()` has been removed - use `set_rows()` instead.
- `nav_menu` container has been renamed to `nav_menu_item` to better represent what it does.
- Complex groups' `_type` key no longer adds an underscore for the type value e.g. `'_type' => '_text_group'` is now `'_type' => 'text_group'`.
- `checkbox` field not returns a real boolean value.
- `carbon_get_*()` methods now always use the appropriate field format (i.e. the `$type` parameter has been removed).
- `relationship` field removed - use `association` instead.
- `association` field now returns `array( 'value', 'type', 'subtype', 'object_id' )`.
- `set_datepicker_options` method is now `set_picker_options`
- `set_timepicker_options` method is now `set_picker_options`

##### Renamed/Updated Actions


###### `carbon_after_save_custom_fields`
-> Removed. Use `carbon_fields_post_meta_container_saved` instead.

###### `crb_container_activated`
-> `carbon_fields_container_activated`

###### `crb_field_activated`
-> `carbon_fields_field_activated`

###### `carbon_after_save_nav_menu_item`
-> `carbon_fields_nav_menu_item_container_saved`

###### `carbon_after_save_post_meta`
-> `carbon_fields_post_meta_container_saved`

###### `carbon_after_save_term_meta`
-> `carbon_fields_term_meta_container_saved`

###### `carbon_after_save_theme_options`
-> `carbon_fields_theme_options_container_saved`

###### `carbon_after_save_user_meta`
-> `carbon_fields_user_meta_container_saved`

###### `carbon_association_options_{field_name}_{type}_{subtype}`
-> `carbon_fields_association_field_options_{field_name}_{type}_{subtype}`

###### `carbon_after_register_fields`
-> `carbon_fields_fields_registered`

###### `carbon_register_fields`
-> `carbon_fields_register_fields`

##### Renamed/Updated Filters

###### `carbon_template`
-> Removed.

###### `carbon_relationship_options_*`
-> `carbon_fields_association_field_options_{name}_{type}` and `carbon_fields_association_field_options_{name}_{type}_{subtype}` where applicable

###### `crb_gravity_form_options`
-> `carbon_fields_gravity_form_options`

###### `carbon_association_comment_length`
-> `carbon_fields_association_field_comment_length`

###### `carbon_association_title`
-> `carbon_fields_association_field_title`

###### `carbon_association_item_label`
-> `carbon_fields_association_field_item_label`

###### `carbon_association_options`
-> `carbon_fields_association_field_options`

###### `carbon_{container_title}_button_label`
-> `carbon_fields_{container_title}_button_label`

###### `carbon_relationship_title`
-> `carbon_fields_association_field_title`

###### `carbon_relationship_item_label`
-> `carbon_fields_association_field_item_label`

###### `carbon_relationship_comment_length`
-> `carbon_fields_association_field_comment_length`

###### `carbon_relationship_options`
-> `carbon_fields_association_field_options`

###### `carbon_map_api_key`
-> `carbon_fields_map_field_api_key`

###### `carbon_map_url`
-> `carbon_fields_map_field_api_url`

###### `carbon_custom_sidebar_default_options`
-> `carbon_fields_sidebar_default_options`

###### `carbon_custom_sidebar_options`
-> `carbon_fields_sidebar_options`

###### `carbon_custom_sidebars`
-> `carbon_fields_sidebars`
