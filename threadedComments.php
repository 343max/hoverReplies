<?php
/*
Plugin Name: threaded Comments
Plugin URI: http://mobilemacs.de/
Description: Creates floating bubbles over replies
Author: Max Winde
Version: 0.1
Author URI: http://mobilemacs.de
*/

function threadedComments_Init() {
	wp_enqueue_script('jquery');
	//var_dump(plugin_dir_url(__FILE__));
	wp_enqueue_script('threadedComments', plugin_dir_url(__FILE__) . 'script.js');
	wp_enqueue_style('threadedCommentsStyle', plugin_dir_url(__FILE__) . 'style.css');
}


add_action('init', threadedComments_Init);

?>