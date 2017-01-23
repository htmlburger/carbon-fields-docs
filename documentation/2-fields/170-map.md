# Map

The map field provides a Google-powered map with an address search field.

The location data is saved in multiple meta entries:

| Meta Key	                 | Description          | Value Type   | Value                              |
| -------------------------- | -------------------- | ------------ | ---------------------------------- |
| `$field_name`              | Latitude & Longitude | `(string)`   | 40.74866,-73.97982                 |
| `$field_name . '-lat'`     | Latitude             | `(float)`    | 40.74866                           |
| `$field_name . '-lng'`     | Longitude            | `(float)`    | -73.97982                          |
| `$field_name . '-address'` | Address              | `(string)`   | 45 Park Avenue, New York, NY 10016 |
| `$field_name . '-zoom'`    | Zoom level           | `(int)`      | 8                                  |

### Google Maps API Key setup

As of June 22, 2016, Google requires users to generate an API key in order to use the Maps API: <https://developers.google.com/maps/pricing-and-plans/standard-plan-2016-update>

You can get your API key here: https://developers.google.com/maps/documentation/javascript/get-api-key

Once you're ready with the process of generating a key, you'll need to provide the key to Carbon Fields through a filter:
```php
add_action( 'carbon_map_api_key', 'crb_get_gmaps_api_key' );
function crb_get_gmaps_api_key( $current_key ) {
	return 'your key goes here';
}
```


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
