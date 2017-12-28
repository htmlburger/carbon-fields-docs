# Reuse Fields

Fields could be reused via functional programming as well as in class declaration.

```php
     function getLinkGroup($name = 'link') {
          return Field::make( 'complex', $name )
              ->add_fields( array(
                  Field::make( 'text', 'linktext'),
                  Field::make( 'text', 'url'),
                  Field::make( 'checkbox', 'newtab' ) )
              )
          );
      }
  
      function getImageGroup( $name = 'image' ) {
          return Field::make( 'complex', 'image' )
              ->add_fields( array(
                  Field::make( 'image', 'mobile' ),
                  Field::make( 'image', 'tablet' ),
                  Field::make( 'image', 'desktop' ) )
              )
      }
  
      function getWysiwyg( $name = 'content' ) {
          return Field::make( 'rich_text', $name )
      }
      
      Container::make( 'post_meta', 'Author Info' )
          ->where( 'post_type', '=', 'post' )
          ->add_fields( array(
              getLinkGroup(),
              getImageGroup( 'avatar' ),
              getWysiwyg() )
      );
      
      Container::make( 'post_meta', 'Call To Action Button' )
          ->where( 'post_type', '=', 'page' )
          ->add_fields( array(
              getLinkGroup() )
      );
   ```

