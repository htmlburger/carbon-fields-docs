# Data Storage

Complex field values are saved in the database in multiple rows – a row per field per group. 

To be able to distinguish which value for field is, a special format of the keys (`meta_key` or `option_name`) is adopted:

`{complex_field_name}_{group_name}-{field_name}_{number}`, where

`complex_field_name`

Name of the complex field, as passed to `Field::make()`

`group_name`

Name of the group as passed to `add_fields()`, or `""` if only one group is present.

`field_name`

Name of the field in the group, as passed to `Field::make()`

`number`

Identifies the number of the row this value is part of.

##### Note

Both the complex field name and its subfield name will be prefixed with an underscore. 

Thus, the key format becomes: `_{complex_field_name}_{group_name}-_{field_name}_{number}`