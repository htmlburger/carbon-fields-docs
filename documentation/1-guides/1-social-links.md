# Adding social links to your site's header

Creating an admin section which allows admins to enter a link for Facebook and Twitter for their header (both optional).

### Field Definition

```php
Container::make( 'theme_options', __( 'Theme Options', 'crb' ) )
	->where( 'current_user_capability', '=', 'manage_options' )
	->add_tab( 'Social', array(
		Field::make( 'text', 'crb_social_url_facebook', 'Facebook URL' )
			->set_help_text( 'Enter your Facebook page url' ),
		Field::make( 'text', 'crb_social_url_twitter', 'Twitter URL' )
			->set_help_text( 'Enter your Twitter profile url' ),
	) );
```

##### header.php
	
```php
<?php
$services = array( 'facebook' => 'Facebook', 'twitter' => 'Twitter' );
foreach ( $services as $type => $label ) {
	// Get the url from the database
	$url = carbon_get_theme_option( 'crb_social_url_' . $type );

	// Skip this service if no url has been entered for it
	if ( empty( $url ) ) {
		continue;
	}

	// Output the social link
	echo '<a href="' . esc_url( $url ) . '" target="_blank">' . esc_html( $label ) . '</a>';
}
?>
```

### Allowing users to enter any number of social links

Similar to the one above, but we will allow admins to enter any number of links.

##### Field Definition

```php
Container::make( 'theme_options', __( 'Theme Options', 'crb' ) )
	->where( 'current_user_capability', '=', 'manage_options' )
	->add_tab( 'Social', array(
		Field::make( 'complex', 'crb_social_urls', 'Social Links' )
			->add_fields( array(
				Field::make( 'text', 'label', 'Label' )
					->set_width( 50 ) // condense layout so field takes only 50% of the available width
					->set_required(),
				Field::make( 'text', 'url', 'URL' )
					->set_width( 50 )
					->set_required(),
			) ),
	) );
```

##### header.php
	
```php
<?php
// Get all entered urls from the database
$social_links = carbon_get_theme_option( 'crb_social_urls' );
foreach ( $social_links as $link ) {
	echo '<a href="' . esc_url( $link['url'] ) . '" target="_blank">' . esc_html( $link['label'] ) . '</a>';
}
?>
```

### Allowing users to specify an image for every link

Similar to the one above, but we will allow admins to specify an image instead of a label.

##### Field Definition

```php
Container::make( 'theme_options', __( 'Theme Options', 'crb' ) )
	->where( 'current_user_capability', '=', 'manage_options' )
	->add_tab( 'Social', array(
		Field::make( 'complex', 'crb_social_urls', 'Social Links' )
			->add_fields( array(
				Field::make( 'image', 'image', 'Image' ) // We're only changing the label field to an image one
					->set_width( 50 )
					->set_required(),
				Field::make( 'text', 'url', 'URL' )
					->set_width( 50 )
					->set_required(),
			) ),
	) );
```

##### header.php
	
```php
<?php
// Get all entered urls from the database
$social_links = carbon_get_theme_option( 'crb_social_urls' );
foreach ( $social_links as $link ) {
	echo '<a href="' . esc_url( $link['url'] ) . '" target="_blank">' . wp_get_attachment_image( $link['image'] ) . '</a>';
}
?>
```