<?php
// Funções básicas como titulo e thumbnails
function support()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}

// Adicionar suporte para os estilos do editor do WP
function my_theme_add_editor_styles()
{
    add_theme_support('editor-styles'); // Habilita suporte a estilos no editor
    add_editor_style('style.css'); // Carrega o arquivo style.css no editor
}


// Adicionar suporte para menus
function register_menus()
{
    register_nav_menus(array(
        'menu-header' => __('Menu Cabeçalho'),
        'menu-footer' => __('Menu Rodapé'),
    ));
}


add_action('after_setup_theme', 'register_menus');

add_action('after_setup_theme', 'support');

add_action('after_setup_theme', 'my_theme_add_editor_styles');