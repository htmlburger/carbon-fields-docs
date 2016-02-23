# Map

Creates a Google-powered map with an address search field.

The location data is saved in multiple meta entries:

| Meta Key	                 | Description          | Value Type   | Value                              |
| -------------------------- | -------------------- | ------------ | ---------------------------------- |
| `$field_name`              | Latitude & Longitude | `(string)`   | 40.74866,-73.97982                 |
| `$field_name . '-lat'`     | Latitude             | `(float)`    | 40.74866                           |
| `$field_name . '-lng'`     | Longitude            | `(float)`    | -73.97982                          |
| `$field_name . '-address'` | Address              | `(string)`   | 45 Park Avenue, New York, NY 10016 |
| `$field_name . '-zoom'`    | Zoom level           | `(int)`      | 8                                  |

### Setup methods

`set_position($lat, $lng, $zoom)`

Set the default position on the map specified by `$lat` and `$lng` and the default zoom level to `$zoom` (zoom `0` corresponds to a map of the Earth fully zoomed out).

```php
Field::make("map", "crb_company_location", "Location")
	->help_text('drag and drop the pin on the map to select location')
```

### Usage

To get all the location data as an array, you can use the `map` type in the retrieval functions. Example:

```php
/* Get the location data as an array */
carbon_get_post_meta($id, $name, 'map'); // array('lat' => 40.74866, 'lng' => -73.97982, 'address' => '45 Park Avenue,  New York, NY 10016', 'zoom' => 8)

/* Get the location latitude and longitude */
carbon_get_post_meta($id, $name); // '40.74866,-73.97982'
```