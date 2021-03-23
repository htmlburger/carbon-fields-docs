# JavaScript API

Carbon Fields provide a useful JavaScript API on administration screens with visible containers which you can use to manipulate field values, for example.

__Important:__ Carbon Fields use React + Redux which is why when setting a field's value you must ALWAYS use a "fresh" value rather than a reference to an old one. This is why the api exposes the [immutable](https://github.com/mariocasciaro/object-path-immutable) library (`api.immutable` - you can find example usage below).

__Note:__ when referring to fields you use a ___Field Name Pattern___ - more information can be found in the Field Name Patterns documentation page.

### API Methods

`api.getFieldValue( fieldName )`

Get a field's value.

`api.setFieldValue( fieldName, value )`

Set a field's value.

`api.addComplexFieldGroup( fieldName[, groupName] )`

Add a group to a complex field. `groupName` is optional when the field does not have defined group names.

`api.removeComplexFieldGroup( fieldName, groupIndex )`

Remove a group from a complex field by it's index.

### API jQuery Events

`'carbonFields.apiLoaded'`

Triggered when the Carbon Fields' JS API is loaded.

| Parameter | Description                                                |
| --------- | ---------------------------------------------------------- |
| `event`   | Event Object                                               |
| `api`     | API object which is used to communicate with Carbon Fields |

`'carbonFields.fieldUpdated'`

Triggered when a field's value changes.

| Parameter       | Description                        |
| --------------- | ---------------------------------- |
| `event`         | Event Object                       |
| `fieldName`     | Name of the field that was updated |

`'carbonFields.validateField'`

Triggered when a field is being validated.
This event actually behaves like a WordPress filter - you have to return a value. This enables you to define your own custom validation and error messages (an example can be found below).

| Parameter       | Description                                       |
| --------------- | ------------------------------------------------- |
| `event`         | Event Object                                      |
| `fieldName`     | Name of the field that is being validated         |
| `error`         | The current error message for the field or `null` |

### Examples

##### Getting the API object instance

```js
$(document).on('carbonFields.apiLoaded', function(e, api) {
    // your api actions here
});
```

##### Getting a field's value

```js
$(document).on('carbonFields.apiLoaded', function(e, api) {
    // Get the current value in the 'crb_text' field
    var value = api.getFieldValue( 'crb_text' );
});
```

##### Referring to fields inside complex fields

```js
$(document).on('carbonFields.apiLoaded', function(e, api) {
    // Get the current value in the 'text' field
    // which is inside the first entry of the 'subcomplex' field
    // which is inside the first entry of the 'crb_complex' field
    var value = api.getFieldValue( 'crb_complex[0]/subcomplex[0]/text' );
});
```

##### Setting a field's value

```js
$(document).on('carbonFields.apiLoaded', function(e, api) {
    // Set the current value of the 'crb_text' field to "Hello World"
    api.setFieldValue( 'crb_text', 'Hello World' );
});
```

##### Partially updating a field's value

In order to update fields that hold multiple value properties (e.g. Map has `lat`, `lng`, `zoom` and `address`) we must use the immutable library exposed by the API.

In the following example we only want to update the zoom property of the map to 5:

```js
$(document).on('carbonFields.apiLoaded', function(e, api) {
    var value = api.getFieldValue( 'crb_map' );
    value = api.immutable.set( value, 'zoom', 5 );
    api.setFieldValue( 'crb_map', value );
});
```

##### Setting a complex field's value

```js
$(document).on('carbonFields.apiLoaded', function(e, api) {
    // Set the current value of the 'crb_complex' field (which has a single "mytext" child field) to 2 entries
    api.setFieldValue( 'crb_complex', [
        {
            // _type => 'your_group_name_here', // optional: use only if you've specified group names on field definition
            mytext: 'Hello'
        },
        {
            // _type => 'your_group_name_here',
            mytext: 'World'
        }
    ] );
});
```

##### Detecting value changes

```js
$(document).on('carbonFields.apiLoaded', function(e, api) {
    // Hook to all field changes and log the changed field's name and new value
    $(document).on('carbonFields.fieldUpdated', function(e, fieldName) {
        console.log('---');
        console.log('Field updated: ' + fieldName);
        console.log('New value:');
        console.log(api.getFieldValue(fieldName))
        console.log('---');
    });
});
```

##### Custom validation

###### NB! `set_required()` must be called for fields you wish to add custom validation to.

```js
$(document).on('carbonFields.apiLoaded', function(e, api) {
    $(document).on('carbonFields.validateField', function(e, fieldName, error) {
        console.log('Field being validated: ' + fieldName);
        console.log('Current error, if any: ' + error);

        // Add your own validation logic here
        // To raise an error return any string which will serve as the user-friendly error message
        // To not raise an error return `null`
        // To not interfere with the built-in validation return the `error` variable argument

        // This example will raise an error if the field's value is not an even number
        // If the value is even, it will proceed with validation as usual
        if (fieldName === 'some_field_name_here') {
            var value = api.getFieldValue(fieldName);
            if ( parseInt( value ) % 2 !== 0 ) {
                return 'The entered value is not an even number';
            }
        }
        return error;
    });
});
```