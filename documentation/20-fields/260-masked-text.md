# Masked Text Input

Renders a masked text input field. 

`Field::make( 'masked_text', 'crb_phone_number', 'Phone Number' )->set_mask('(111) 111-1111')`

### Mask format

The mask are provided in string format where the following characters are used for formatting:

 * `1`: a number
 * `a`: a character
 * `*`: number or a character

For example, you could use the following for US phone number: 
```
Field::make( 'masked_text', 'crb_phone_number', 'Phone Number' )
    ->set_mask('(111) 111-1111')
```

### Config methods

`set_mask( $mask )`  
Set the mask for the field. 

`set_required_mask( $mask )`  
Set the mask, and do not allow the user to save non-conforming values. 

`set_mask_placeholder( $mask_placeholder )`  
Change the placeholder character(`_` by default). 
