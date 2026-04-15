<?php
/**
 * Option section helpers.
 *
 * @package SocialMediaFeather
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Section default name.
 *
 * @param string $id   ID string.
 * @param string $page Page string.
 *
 * @return string
 */
function synved_option_section_default_name( $id, $page ) {
	return $page . '_section_general';
}

/**
 * Section defaults.
 *
 * @param string $id   ID string.
 * @param string $page Page string.
 *
 * @return array
 */
function synved_option_section_default( $id, $page ) {
	$section = synved_option_section_default_name( $id, $page );

	return array(
		'name'  => $section,
		'type'  => 'options-section',
		'label' => esc_html__( 'General Settings', 'social-media-feather' ),
		'tip'   => esc_html__( 'General Settings for', 'social-media-feather' ) . ' ' . synved_option_label_from_id( $id ),
	);
}
