# JavaScript API

Carbon Fields provide a useful JavaScript API on administration screens with visible containers which you can use to manipulate field values, for example.

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

##### Setting a complex field's value

```js
$(document).on('carbonFields.apiLoaded', function(e, api) {
	// Set the current value of the 'crb_complex' field (which has a single "mytext" child field) to 2 entries
	api.setFieldValue( 'crb_complex', [
		{
			// _type: 'your_group_name_here', // optional: use only if you've specified group names on field definition
			mytext: 'Hello'
		},
		{
			// _type: 'your_group_name_here',
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