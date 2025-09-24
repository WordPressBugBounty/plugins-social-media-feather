<?php
/**
 * Follow Widget.
 *
 * @package SocialMediaFeather
 */

/**
 * Social Follow Widget Class.
 */
class SynvedSocialFollowWidget extends SynvedSocialWidget {
	/**
	 * Constructor.
	 */
	public function __construct() {
		parent::__construct(
			'synved_social_follow',
			'Social Media Feather: Follow Us'
		);
	}

	/**
	 * Override defaults.
	 *
	 * @return string[]
	 */
	public function get_defaults() {
		$defaults = parent::get_defaults();

		return array_merge( $defaults, array( 'title' => 'Follow Us' ) );
	}

	/**
	 * Render social markup.
	 *
	 * NOTE: Escaped via wp_kses_post().
	 *
	 * @param array $params Parameter array.
	 *
	 * @return void
	 */
	public function render_social_markup( $params = null ) {
		// Escaped using wp_kses_post.
		echo synved_social_follow_markup( null, null, $params ); // phpcs:ignore
	}
}
