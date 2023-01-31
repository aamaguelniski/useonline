<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/*
 *
 *  @version       1.0.0
 *  @package
 *  @author        impleCode
 *
 */

add_filter( 'ic_block_content', 'ic_blocks_product_parts', 10, 3 );

function ic_blocks_product_parts( $block_content, $product_id, $block_name ) {
	if ( $block_name === 'image-gallery' ) {
		$block_content = get_product_gallery( $product_id );
	} else if ( $block_name === 'name' ) {
		$block_content = get_product_name( $product_id );
	} else if ( $block_name === 'regular-price' ) {
		$block_content = price_format( product_price( $product_id, true ) );
	} else if ( $block_name === 'short-description' ) {
		ob_start();
		show_short_desc( $product_id );
		$block_content = ob_get_clean();
	}

	return $block_content;
}
