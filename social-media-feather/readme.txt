=== Social Media Feather ===
Contributors: sharethis, socialmediafeather, scottstorebloom, scottmweaver
Tags: social media, social sharing, social buttons, share buttons, follow buttons
Requires at least: 5.9
Tested up to: 7.1
Stable tag: 2.3.0
Version: 2.3.0
License: GPLv2
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Lightweight social sharing and follow buttons for WordPress. Fast, flexible, and easy to use.

== Description ==

Social Media Feather is a lightweight WordPress plugin that helps you add social sharing and follow buttons to your site in minutes. It is built for performance, simplicity, and clean design.

You can automatically display social buttons on posts, pages, and custom post types, or insert them manually using widgets, shortcodes, or template tags.

The plugin supports both sharing and follow features across major social networks, plus share buttons for AI assistants such as ChatGPT, Claude and Perplexity. It also includes Retina-ready icons for high resolution displays.

= Why choose Social Media Feather? =

* Fast and lightweight with minimal impact on page load
* Clean and modern icon styles
* Easy setup with automatic or manual placement
* Works with posts, pages, and custom post types
* Optional AI assistant share buttons for ChatGPT, Claude, Copilot, Gemini, Grok, and Perplexity
* Flexible customization with shortcodes and widgets

= Sharing Features =

Allow visitors to share your content on:

* Facebook
* Twitter / X
* Reddit
* Pinterest
* Tumblr
* LinkedIn
* Email

Or ask an AI assistant about your content:

* ChatGPT
* Claude
* Copilot
* Gemini
* Grok
* Perplexity

= AI Assistant Sharing =

The AI assistant buttons hand the visitor a prompt asking for a summary of the page, along with the post title and URL.

ChatGPT, Claude, Grok, and Perplexity open a new chat with the prompt already filled in. Copilot and Gemini accept no prompt in a URL, so their buttons copy the prompt to the clipboard and open a blank chat for the visitor to paste into.

All six are off by default. To turn one on, go to Settings > Social Media > Service Providers and set that provider's Service option to Share.

= Follow Features =

Display links to your social profiles:

* Facebook
* Twitter / X
* Pinterest
* LinkedIn
* YouTube
* Tumblr
* Instagram
* Flickr
* Foursquare
* Vimeo
* RSS

= Additional Features =

* Retina and high resolution icon support
* Enable or disable individual social providers
* Custom titles and URLs per provider
* Built-in widgets for sharing and following
* Shortcodes for full control
* Multiple icon skins included
* Optional effects like fade and grayscale
* Optional add-ons for share counters

= Custom Display Control =

You can disable buttons on specific posts using custom fields:

* `synved_social_exclude_share` = yes
* `synved_social_exclude_follow` = yes
* `synved_social_exclude` = yes

Enable Custom Fields in Screen Options to use this feature.

= Example Shortcodes =

Basic sharing buttons:
`[feather_share]`

Limit networks and order:
`[feather_share show="twitter, facebook" hide="reddit, pinterest, linkedin, tumblr, mail"]`

Only the AI assistant buttons (they must be enabled in settings first):
`[feather_share show="chatgpt, claude, copilot, gemini, grok, perplexity" hide="facebook, twitter, reddit, pinterest, linkedin, tumblr, mail"]`

Change icon skin:
`[feather_share skin="wheel"]`

Set icon size:
`[feather_share size="64"]`

Add custom class:
`[feather_share class="myclass"]`

Follow buttons:
`[feather_follow]`

Follow buttons with skin and size:
`[feather_follow skin="balloon" size="64"]`

Custom share URL:
`[feather_share url="http://www.example.org"]`

= Template Tags =

For developers:

Sharing buttons:
`if (function_exists('synved_social_share_markup')) echo synved_social_share_markup();`

Follow buttons:
`if (function_exists('synved_social_follow_markup')) echo synved_social_follow_markup();`

= Related Links =

* Plugin homepage: https://socialmediafeather.com/

By installing this plugin you agree to the Privacy Policy and Terms of Service:
https://sharethis.com/privacy/

== Installation ==

1. Download the plugin zip file
2. Go to Plugins > Add New in WordPress
3. Upload the zip file and install
4. Activate the plugin

Alternatively, upload the plugin folder to `/wp-content/plugins/` and activate it.

== Frequently Asked Questions ==

= How do I disable buttons on a specific post? =

Use custom fields:

* Disable sharing: `synved_social_exclude_share = yes`
* Disable follow: `synved_social_exclude_follow = yes`
* Disable both: `synved_social_exclude = yes`

= How do I turn on the AI assistant buttons? =

They are off by default. Go to Settings > Social Media > Service Providers and set the Service option to Share for ChatGPT, Claude, Copilot, Gemini, Grok, or Perplexity.

= Why does the Copilot or Gemini button not fill in the prompt? =

Neither accepts a prompt in a URL, so those buttons copy the prompt to the clipboard and open a blank chat instead. The visitor pastes it into the chat box.

= How do I show buttons only in a sidebar? =

Disable automatic display in Settings > Social Media, then use widgets under Appearance > Widgets.

= How do I customize Twitter share text? =

Edit the Twitter Share URL:

From:
`http://twitter.com/share?url=%%url%%&text=%%message%%`

To:
`http://twitter.com/share?url=%%url%%&text=%%title%%`

= Facebook shows incorrect preview data =

Use a proper OpenGraph plugin such as Yoast SEO. Then clear cache using:
https://developers.facebook.com/tools/debug/

= Some icons are missing =

Check browser extensions like ad blockers. They may block social icons.

= Share popup shows an error =

This is usually caused by a lightbox plugin. Update or replace the conflicting plugin.

= How do I adjust spacing? =

Add custom CSS in Settings > Social Media:

Example:
`.synved-social-button { margin-left: 10px !important; }`

== Screenshots ==

1. Social provider settings
2. Plugin configuration panel
3. Widget settings
4. Sharing buttons example
5. Follow buttons example

== Changelog ==

= 2.3.0 =
* Add AI assistant share buttons: ChatGPT, Claude, Copilot, Gemini, Grok, Perplexity.
* ChatGPT, Claude, Grok and Perplexity open a chat prefilled with a prompt about the page.
* Copilot and Gemini copy the prompt to the clipboard, since neither accepts a prompt in a URL.
* Fix a PHP 8 deprecation notice on posts with no image.

= 2.2.4 =
* Test wp ver 7.

= 2.2.3 =
* Update readme.

= 2.2.2 =
* Test to 6.9.
* Fix text domains.
* Escape texts.
* License.
* Early text domain error.

= 2.2.1 =
* Fix filter sanitize error.
* Fix null errors.
* Add product as an auto display post type.

= 2.2.0 =
* Fix text domain error.
* Test up to wp ver 6.8.2

= 2.1.6 =
* Fix PHP 8.2 deprecations.
* Test wp ver 6.5.2.

= 2.1.5 =
* Tested 6.4.3
* Update twitter icons to X.

= 2.1.4 =
* Tested 6.4.2
* Fixed vulnerability issues with ajax calls.

= 2.1.3 =
* Test with WordPress 6.1.1 and PHP 8.

= 2.1.2 =
* Test with WordPress 6.0.2
* Fix warning.

= 2.1.1 =
* Fix bug with follow

= 2.1.0 =
* New settings interface.
* Sanitize everything!

= 2.0.7 =
* Add more sanitization.

= 2.0.6 =
* Update screenshots.

= 2.0.5 =
* Strengthen sanitization for inputs and outputs.
* Fix warnings, remove unnecessary files.
* Remove Google+ entirely.

= 2.0.4 =
* Test with WordPress 5.9.
* Update media assets.

= 2.0.3 =
* Test with WordPress 5.8.

= 2.0.2 =
* New WP version test.

= 2.0.1 =
* Replace http links with https.

= 2.0.0 =
* Fixed missing index error.
* Added review us dismissable popup.
* Tested WP 5.4.1 compatability.

= 1.9.4 =
* Removed deprecated function "create_function".
* Utilizing WP Settings API.
* WP 5+ compatability tests.

= 1.8.4 =
* Added option to decline terms of service after having accepted

= 1.8.3 =
* Minor design improvements

= 1.8.2 =
* NEW: 6 icon styles which were previously available as a $15 add on are now included for FREE!
* Removed NEWS dashboard widget

= 1.8.1 =
* Fixes for old versions of PHP

= 1.8 =
* Added support for "Facebook Insights"
* Improved admin interface
* Updated terms of service and privacy policy

= 1.7.12 =
* Performance improvements for Dashboard loading
* Added "message" parameter to share shortcode

= 1.7.11 =
* Adjusted some text and README descriptions

= 1.7.10 =
* Use HTTPs by default for Facebook/Twitter follows
* Ensure facebook alt uses capitalized Facebook to pass facebook ads requirements

= 1.7.9 =
* Changed text domain to reflect plugin slug

= 1.7.8 =
* Disable credit link by default

= 1.7.7 =
* Fixed addon installer's path calculation for rare cases

= 1.7.6 =
* Minor adjustments

= 1.7.5 =
* Updated social network links descriptions to be more clear

= 1.7.4 =
* Cache provider list to improve performance when social buttons are shown many times

= 1.7.3 =
* Strip HTML from titles in sharing links
* Fix for certain Fancybox plugins loading lightboxes on sharing images

= 1.7.2 =
* Added `image` attribute for shortcodes
* Minor adjustments

= 1.7.1 =
* Fix for Easy Digital Downloads adding HTML tags to titles that were then posted to social sharing
* Fix for certain quote characters not being properly converted on share

= 1.7 =
* Performance improvements

= 1.6.15 =
* Fix for PHP notice in rare cases
* Prevent certain fancybox plugins from trying to open fancybox on share/follow icons

= 1.6.14 =
* Adjusted description
* Added documentation

= 1.6.13 =
* Added author_wp variable for built-in WordPress author name

= 1.6.12 =
* Re-compressed all large icon sets to slightly reduce file size

= 1.6.11 =
* Minor tweaks

= 1.6.10 =
* Minor adjustments

= 1.6.9 =
* Added url_trimmed variable that trims extra slashes off of the URL

= 1.6.8 =
* Added short_url variable that always contains the shortened URL

= 1.6.7 =
* Fix automatic displaying of share/follow buttons on single posts only

= 1.6.6 =
* Updated all images to "optimized" versions to silence certain analytical tools

= 1.6.5 =
* Fixed issue for correct detection of home page

= 1.6.4 =
* Added two filters for shortcode parameters: synved_social_shortcode_variable_list and synved_social_shortcode_parameter_list
* Minor adjustments

= 1.6.3 =
* Additional fix for "ghost" prefixes appearing in odd cases for non-single pages

= 1.6.2 =
* Fix for "ghost" prefixes appearing in certain cases for non-single pages

= 1.6.1 =
* Adjusted some descriptions

= 1.6 =
* Added alignment options for both sharing and following buttons
* Minor adjustments

= 1.5.10 =
* Added date variable
* Minor adjustments

= 1.5.9 =
* Fix for RSS feeds displaying double resolution images
* Minor adjustments

= 1.5.8 =
* Attempt suggesting meta values to Facebook (it seems to ignore them at this time though)
* Fix for esc_url strictness
* Minor adjustments

= 1.5.7 =
* Fixed escaping of quote and double quote characters
* Added mail as follow provider for "contact us" buttons
* Minor adjustments

= 1.5.6 =
* Added %%author%% template variable for URL substitution
* Minor tweaks

= 1.5.5 =
* For automatic display, allow positioning of buttons both before and after post content
* Minor adjustments

= 1.5.4 =
* Pick first image in the post when featured image is not set
* Minor adjustments

= 1.5.3 =
* Added buttons container options
* Misc adjustments

= 1.5.2 =
* Small fix to default URL
* Appearance fix in admin settings page
* Fixed typo

= 1.5.1 =
* Updated Facebook icons according to newest branding changes

= 1.5 =
* Added social providers instagram, flickr and foursquare

= 1.4.4 =
* Fixed titles not displaying certain special characters properly
* Misc adjustments

= 1.4.3 =
* Fixed share URL being incorrect in some instances like subdir installs
* Misc adjustments

= 1.4.2 =
* Fixed some issues on certain windows hosting
* Fixed installation of addons in certain peculiar environments
* Added option for RTL layouts sites

= 1.4.1 =
* Minor fixes and adjustments

= 1.4.0 =
* Added social providers tumblr and vimeo
* Assorted minor fixes and tweaks

= 1.3.4 =
* Fix for potential conflicts with some other plugins

= 1.3.3 =
* Fixed validation error for e-mail link
* Fixed invalid index notices

= 1.3.2 =
* Added ability to specify position for both share and follow buttons
* Added options for prefix and postfix markup for individual buttons sets
* Fixed warning when in debug mode

= 1.3.1 =
* Tweak the new Retina display code to work more accurately
* Fix for share URL being incorrect in certain cases
* Fix for addons being deleted by WordPress on automatic upgrade (this will work from the next version, sorry about that!)

= 1.3.0 =
* Added support for Retina and other high resolution displays
* Fix exclusion checks for custom post types
* Added option to share full URL instead of single post/page URL

= 1.2.3 =
* Fix check for single posts to include all singular pages
* Set image dimensions attributes to match icon size
* Fix for images stacking vertically in some themes
* Fix for automatic follow not shown when automatic share was disabled

= 1.2.2 =
* Added option to limit automatic appending to single post/pages

= 1.2.1 =
* Added Pinterest as sharing and following network
* Added ability to automatically append following buttons as well
* Added ability to disable automatic appending for posts with custom fields
* Added class, show and hide parameters to shortcodes

= 1.0 =
* First public release.
