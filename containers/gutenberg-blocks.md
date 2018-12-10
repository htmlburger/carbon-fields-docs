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
		ob_start();
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
		return ob_get_clean();
	} );
```

Notice the `->set_render_callback()` method. This allows you to set the output that will be generated from this block both in _Preview_ mode and on the frontend.

`->set_render_callback()` accepts a callback, which should __return__ an HTML string. The callback functions accepts `$block` as the first argument, which contains an array with the entered data in the block.