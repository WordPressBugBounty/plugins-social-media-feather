/**
 * Clipboard handling for AI assistant share buttons.
 *
 * Copilot and Gemini accept no prompt in a URL, so their buttons carry the
 * prompt in a "prompt" query parameter. Clicking one copies that prompt to the
 * clipboard and opens a blank chat, with the parameter stripped, for the
 * visitor to paste into.
 *
 * @package SocialMediaFeather
 */

( function () {
	'use strict';

	var SELECTOR = '.synved-social-provider-copilot, .synved-social-provider-gemini';
	var MESSAGE  = 'Prompt copied — paste it into the chat';
	var DELAY    = 600;

	/**
	 * Copy text to the clipboard.
	 *
	 * Fire and forget, so the caller stays inside the click gesture and the new
	 * tab is not treated as an unrequested popup.
	 *
	 * @param {string} text Text to copy.
	 */
	function copyToClipboard( text ) {
		if ( ! text ) {
			return;
		}

		if ( navigator.clipboard && navigator.clipboard.writeText ) {
			navigator.clipboard.writeText( text );
			return;
		}

		var field   = document.createElement( 'textarea' );
		field.value = text;
		field.setAttribute( 'readonly', '' );
		field.style.position = 'fixed';
		field.style.left     = '-9999px';
		document.body.appendChild( field );
		field.select();

		try {
			document.execCommand( 'copy' );
		} catch ( error ) {
		}

		field.parentNode.removeChild( field );
	}

	/**
	 * Pull the prompt out of a button href.
	 *
	 * @param {string} href Button href.
	 *
	 * @return {string} The decoded prompt, or an empty string.
	 */
	function readPrompt( href ) {
		var query = href.split( '?' )[1] || '';
		var pairs = query.split( '&' );
		var count = pairs.length;

		for ( var i = 0; i < count; i++ ) {
			if ( 0 === pairs[ i ].indexOf( 'prompt=' ) ) {
				try {
					return decodeURIComponent( pairs[ i ].slice( 7 ).replace( /\+/g, ' ' ) );
				} catch ( error ) {
					return '';
				}
			}
		}

		return '';
	}

	/**
	 * Show a transient message above a button.
	 *
	 * Appended to the body so no ancestor overflow can clip it.
	 *
	 * @param {Element} button  The button clicked.
	 * @param {string}  message Message to show.
	 */
	function showNotice( button, message ) {
		var notice           = document.createElement( 'div' );
		notice.className     = 'synved-social-notify';
		notice.innerText     = message;
		notice.style.cssText = 'background: rgba(0, 0, 0, .85);' +
			'border-radius: 4px;' +
			'color: #fff;' +
			'font-family: "Helvetica Neue", Verdana, Helvetica, Arial, sans-serif;' +
			'font-size: 12px;' +
			'left: 0;' +
			'line-height: 1.4;' +
			'opacity: 0;' +
			'padding: 8px 10px;' +
			'pointer-events: none;' +
			'position: fixed;' +
			'top: 0;' +
			'transition: opacity .2s ease-in;' +
			'white-space: nowrap;' +
			'z-index: 99999;';
		document.body.appendChild( notice );

		// Centre it above the button, kept inside the viewport.
		var rect = button.getBoundingClientRect();
		var left = rect.left + ( rect.width - notice.offsetWidth ) / 2;
		left     = Math.min( Math.max( 8, left ), window.innerWidth - notice.offsetWidth - 8 );
		var top  = rect.top - notice.offsetHeight - 8;

		if ( 8 > top ) {
			top = rect.bottom + 8;
		}

		notice.style.left = Math.floor( left ) + 'px';
		notice.style.top  = Math.floor( top ) + 'px';

		setTimeout(
			function () {
				notice.style.opacity = '1';
			},
			10
		);
		setTimeout(
			function () {
				notice.style.opacity = '0';
				setTimeout(
					function () {
						if ( notice.parentNode ) {
							notice.parentNode.removeChild( notice );
						}
					},
					300
				);
			},
			2500
		);
	}

	/**
	 * Open an AI assistant in a new tab.
	 *
	 * @param {string} url Chat URL.
	 */
	function openTab( url ) {
		var tab = window.open( url, '_blank' );

		if ( tab ) {
			tab.opener = null;
		}
	}

	document.addEventListener(
		'click',
		function ( event ) {
			var button = event.target.closest ? event.target.closest( SELECTOR ) : null;

			if ( ! button ) {
				return;
			}

			var href = button.getAttribute( 'href' ) || '';

			event.preventDefault();
			copyToClipboard( readPrompt( href ) );
			showNotice( button, MESSAGE );

			// Let the notice land before the new tab takes focus. The delay stays
			// well inside the user-activation window, so the tab is not blocked.
			setTimeout(
				function () {
					openTab( href.split( '?' )[0] );
				},
				DELAY
			);
		}
	);
} )();
