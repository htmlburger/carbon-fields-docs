# Map

The map field provides a Google-powered map with an address search field.

```php
Field::make( 'map', 'crb_map', __( 'Map' ) )
```

The field stores several pieces of related information:

| Atribute    | Description          | Value Type   | Value                              |
| ----------| -------------------- | ------------ | ---------------------------------- |
| `'value'`   | Latitude & Longitude | `(string)`   | 40.74866,-73.97982                 |
| `'lat'`     | Latitude             | `(float)`    | 40.74866                           |
| `'lng'`     | Longitude            | `(float)`    | -73.97982                          |
| `'address'` | Address              | `(string)`   | 45 Park Avenue, New York, NY 10016 |
| `'zoom'`    | Zoom level           | `(int)`      | 8                                  |

### Google Maps API Key setup

As of June 22, 2016, Google requires users to generate an API key in order to use the Maps API: <https://developers.google.com/maps/pricing-and-plans/standard-plan-2016-update>

You can get your API key here: https://developers.google.com/maps/documentation/javascript/get-api-key

Once you're ready with the process of generating a key, you'll need to provide the key to Carbon Fields through a filter:

```php
add_filter( 'carbon_fields_map_field_api_key', 'crb_get_gmaps_api_key' );
function crb_get_gmaps_api_key( $key ) {
    return 'your key goes here';
}
```

## Config methods

### `set_position( $lat, $lng, $zoom )`

Set the default position on the map specified by `$lat` and `$lng` and the default zoom level to `$zoom` (zoom `0` corresponds to a map of the Earth fully zoomed out).

```php
Field::make( 'map', 'crb_company_location', __( 'Location' ) )
    ->set_help_text( __( 'drag and drop the pin on the map to select location' ) )
```

## Usage

To get all the location data as an array, you can use the `map` type in the retrieval functions. Example:

```php
/* Get the location data */
carbon_get_post_meta( $id, $name ); // array( 'value' => '40.74866,-73.97982', lat' => 40.74866, 'lng' => -73.97982, 'address' => '45 Park Avenue,  New York, NY 10016', 'zoom' => 8)
```

## Value Format

```php
array(
    'value' => '40.346544,-101.645507',
    'lat' => 40.346544,
    'lng' => -101.645507,
    'zoom' => 10,
    'address' => 'New York',
)
```
