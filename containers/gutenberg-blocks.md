# Gutenberg Blocks

__WordPress 5__ introduces a new content creation experience with its new editor called [Gutenberg](https://ma.tt/2017/08/we-called-it-gutenberg-for-a-reason/).

__Gutenberg__ is a block-based editor that provides a better and more natural way for creating new content on your website. With Carbon Fields v3 we got you covered and you can start creating stunning blocks for your website.

In order to create a new Gutenberg Block you can still use the already familiar developer-friendly way just like you'd register any other container.

```php
Container::make( 'block', __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_render_callback( function ( $block ) {
		?>

		<div class="block">
			<div class="block__heading">
				<h1><?php echo esc_html( $block['heading'] ); ?></h1>
			</div><!-- /.block__heading -->

			<div class="block__image">
				<?php echo wp_get_attachment_image( $block['image'], 'full' ); ?>
			</div><!-- /.block__image -->

			<div class="block__content">
				<?php echo apply_filters( 'the_content', $block['content'] ); ?>
			</div><!-- /.block__content -->
		</div><!-- /.block -->

		<?php
	} );
```

Notice the `->set_render_callback()` method. This allows you to set the output that will be generated from this block both in _Preview_ mode and on the frontend.

`->set_render_callback()` accepts a callback, which should __return__ an HTML string. The callback functions accepts `$block` as the first argument, which contains an array with the entered data in the block.


## Config Methods

?> `set_description( $description )` []( :id=set-description)

This method allows you to set a short text that describes the block. The description is shown in the Block inspector sidebar once you focus on the Block.

```php
Container::make( 'block', __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_description( __( 'A simple block consisting of a heading, an image and a text content.' ) )
	->set_render_callback( function () {
		// ..
	} );
```

?> `set_category( $slug, $title = null, $icon = null )`

Gutenberg blocks can be grouped in different categories. By default, the following come registered out of the box:

 * common
 * formatting
 * layout
 * widgets
 * embed

If you don't specify a category, the block will be assigned to __common__.

```php
Container::make( 'block', __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_category( 'layout' )
	->set_render_callback( function () {
		// ..
	} );
```

However, if you need to, you can register a new category for your blocks.

```php
Container::make( 'block', __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_category( 'custom-category', __( 'Custom Category' ), 'smiley' )
	->set_render_callback( function () {
		// ..
	} );
```

The `$icon` argument accepts the slug of a [WordPress Dashicon](https://developer.wordpress.org/resource/dashicons)

?> `set_icon( $icon )`

In addition to setting an icon to block categories, you can set an icon to the block itself.

```php
Container::make( 'block', __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_icon( 'heart' )
	->set_render_callback( function () {
		// ..
	} );
```

?> `set_keywords( $keywords = [] )`

This method allows you to set the aliases that help users discover it while searching.

!> You are only allowed to add as much as 3 keywords per block.

```php
Container::make( 'block', __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_keywords( [ __( 'block' ), __( 'image' ), __( 'content' ) ] )
	->set_render_callback( function () {
		// ..
	} );
```

?> `set_preview_mode( $preview = true )`

This methods sets whether the preview mode is available for the block type.

```php
Container::make( 'block', __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_preview_mode( false )
	->set_render_callback( function () {
		// ..
	} );
```

?> `set_editor_style( $handle )`

You can set a custom stylesheet specific for your block, which will be loaded in the editor in the administration panel.

```php
wp_register_style(
	'crb-my-shiny-gutenberg-block-stylesheet',
	get_stylesheet_directory_uri() . '/css/gutenberg/my-shiny-gutenberg-block.css'
);

Container::make( 'block', __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_editor_style( 'crb-my-shiny-gutenberg-block-stylesheet' )
	->set_render_callback( function () {
		// ..
	} );
```

?> `set_style( $handle )`

This method is the same as the `set_editor_style`, however, it will load the stylesheet on the frontend as well.

```php
wp_register_style(
	'crb-my-shiny-gutenberg-block-stylesheet',
	get_stylesheet_directory_uri() . '/css/gutenberg/my-shiny-gutenberg-block.css'
);

Container::make( 'block', __( 'My Shiny Gutenberg Block' ) )
	->add_fields( array(
		Field::make( 'text', 'heading', __( 'Block Heading' ) ),
		Field::make( 'image', 'image', __( 'Block Image' ) ),
		Field::make( 'rich_text', 'content', __( 'Block Content' ) ),
	) )
	->set_style( 'crb-my-shiny-gutenberg-block-stylesheet' )
	->set_render_callback( function () {
		// ..
	} );
```