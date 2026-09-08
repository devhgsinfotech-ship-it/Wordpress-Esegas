<?php
/**
 * Plugin Name: Disable Gutenberg Block Editor
 * Description: Disables Gutenberg and enforces Classic Editor for all post types.
 */
add_filter('use_block_editor_for_post_type', '__return_false', 100);
