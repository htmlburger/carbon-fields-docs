# 2.0 Upgrade Guide

- __All extending fields must be reworked. Refer to the Extending documentation page.__
- Carbon Fields now require you to call `\Carbon_Fields\Carbon_Fields::boot();` in order to load (instead of always loading). The best place to call this is in the `after_setup_theme` hook - see the Quickstart page for an example.
- __WARNING:__ `theme_options` containers are limited to users who have the `manage_options` capability. In order to turn off this behavior to allow custom capability conditions use the `carbon_fields_theme_options_container_admin_only_access` filter.
- The above applies to user meta containers as well with the filter being `carbon_fields_user_meta_container_admin_only_access`.
- `post_meta` containers are now visible on all post types unless you specify one with `where( 'post_type', '=', 'YOURPOSTTYPEHERE')`. Previously they defaulted to the `post` post type only.
- `term_meta` containers are now visible on all taxonomies unless you specify one with `where( 'term_taxonomy', '=', 'YOURTAXONOMYHERE')`.
- The deprecated `choose_sidebar` field has been removed. Use `sidebar` instead.
- The legacy `Association_Field::set_post_type()` method has been removed - use `set_types()` instead.
- `map_with_address` field has been removed. Use `map` instead.
- `Textarea_Field::set_height()` has been removed - use `set_rows()` instead.
- `nav_menu` container has been renamed to `nav_menu_item` to better represent what it does.
- `carbon_get_nav_menu_item_meta()` must be used for nav_menu_item fields.
- Complex groups' `_type` key no longer adds an underscore for the type value e.g. `'_type' => '_text_group'` is now `'_type' => 'text_group'`.
- `checkbox` field now returns a real boolean value.
- `carbon_get_*()` methods now always use the appropriate field format (i.e. the `$type` parameter has been removed).
- `relationship` field removed - use `association` instead.
- `association` field now returns `array( array( 'value', 'type', 'subtype', 'id' ), ... )`.
- `set_datepicker_options` method is now `set_picker_options`
- `set_timepicker_options` method is now `set_picker_options`
- Date/Time/DateTime fields now always save in `Y-m-d H:i:s` format regardless of the display format set with `set_picker_options`. This allows you to easily compare dates in MySQL while keeping the ability for admins to interact with a user-friendly format such as `m/d/Y`.
- `set_header_template` now uses a [Lodash template](https://lodash.com/docs/4.17.4#template) instead of Underscore.
- A new `Widget::setup()` method parameter has been added which changes the order of parameters - refer to the Widgets page for more information.

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
