<?php

// CSS
function custom_css()
{
    // Adiciona o arquivo style.css principal
    wp_enqueue_style(
        'style', // Nome único para o estilo
        get_stylesheet_uri() // Carrega o style.css padrão na raiz do tema
    );

    // Adiciona arquivos CSS personalizado da pasta "css"
    //RESET CSS
    wp_enqueue_style(
        'reset-css', // Nome único para o estilo
        get_template_directory_uri() . '/css/reset.css', // Caminho para o arquivo CSS
        array(), // Dependências (se houver)
        '1.0', // Versão do arquivo
        'all' // Tipo de mídia (all, screen, print, etc.)
    );
    //HEADER FOOTER CSS
    wp_enqueue_style(
        'header-footer-css', // Nome único para o estilo
        get_template_directory_uri() . '/css/header-footer.css', // Caminho para o arquivo CSS
        array(), // Dependências (se houver)
        '1.0', // Versão do arquivo
        'all' // Tipo de mídia (all, screen, print, etc.)
    );
    //GENERAL CSS
    wp_enqueue_style(
        'main-css', // Nome único para o estilo
        get_template_directory_uri() . '/css/main.css', // Caminho para o arquivo CSS
        array(), // Dependências (se houver)
        '1.0', // Versão do arquivo
        'all' // Tipo de mídia (all, screen, print, etc.)
    );
    //Blog CSS
    wp_enqueue_style(
        'blog-css', // Nome único para o estilo
        get_template_directory_uri() . '/css/blog.css', // Caminho para o arquivo CSS
        array(), // Dependências (se houver)
        '1.0', // Versão do arquivo
        'all' // Tipo de mídia (all, screen, print, etc.)
    );
}

// Javascript
function my_custom_scripts()
{
    if (is_home()){
    // Registrar e enfileirar o script
    wp_enqueue_script(
        'custom-script', // Nome único do script
        get_stylesheet_directory_uri() . '/js/blog-modal.js', // Caminho para o arquivo JS
        array(), // Dependências (se necessário)
        null, // Versão (use null para evitar cache durante o desenvolvimento)
        true // Carregar no footer (true) ou no header (false)
    );
}
    
}

add_action('wp_enqueue_scripts', 'my_custom_scripts');

add_action('wp_enqueue_scripts', 'custom_css');