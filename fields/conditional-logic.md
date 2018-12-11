# Conditional Logic

You can apply conditional logic to a field, using `set_conditional_logic( $rules )`, to show or hide it based on other field(s) in the same container. The syntax is similar to `meta_query`.

The conditional rules are passed in a two-dimensional array and each rule can have the following arguments as `key=>value` pairs:

| Key       | Description                                                                                           | Type/Value                       | Required |
| --------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------| -------- |
| `field`     | The field name to which the rule is applied. The name should be the same as defined in the container.    | `string`                         | Yes      |
| `value`     | The value of the field. It can be an array only when `compare` is `IN`, `NOT IN`, `INCLUDES` or `EXCLUDES`.                            | `string|array`, default: `""`    | No       |
| `compare` | Operator to test. Possible values are: `=`, `<`, `>`, `<=`, `>=`, `IN`, `NOT IN`, `INCLUDES`, `EXCLUDES`.                                    | `string`, default: `=`           | No       |

You can optionally pass the `relation` key and set it to either `AND` (default) or `OR`. It defines the relation, when there is more than one rule.

Example:

```php
Field::make( 'select', 'crb_show_socials', 'Show Socials' )
    ->add_options( array(
        'yes' => 'Yes',
        'no' => 'No',
    ) ),

Field::make( 'text', 'crb_facebook', 'Facebook URL' )
    ->set_conditional_logic( array(
        'relation' => 'AND', // Optional, defaults to "AND"
        array(
            'field' => 'crb_show_socials',
            'value' => 'yes', // Optional, defaults to "". Should be an array if "IN" or "NOT IN" operators are used.
            'compare' => '=', // Optional, defaults to "=". Available operators: =, <, >, <=, >=, IN, NOT IN
        )
    ) ),
```

##### NB: Conditional logic fields are scoped to the current field's siblings.

In order to depend on parent fields, prefix their names with `parent.`. For example, to depend on the `crb_in_production` field which is 2 levels up, use `parent.parent.crb_in_production`.

Example:

```php
Field::make( 'checkbox', 'crb_in_production', 'In Production' ),

Field::make( 'complex', 'crb_makes', 'Makes' )
    ->add_fields( array(
        Field::make( 'complex', 'models', 'Models' )
            ->add_fields( array(
                Field::make( 'text', 'name', 'Name' ),
                Field::make( 'text', 'price', 'Price' )
                    ->set_conditional_logic( array(
                        array(
                            'field' => 'parent.parent.crb_in_production',
                            'value' => true,
                        )
                    ) )
            ) )
    ) ),
```