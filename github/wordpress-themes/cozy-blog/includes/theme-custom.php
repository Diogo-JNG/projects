<?php

/*Menu personalizado de customização do website */

function add_customize_site_section() {
    add_menu_page(
        'Customizar Site', // Título da página
        'Customizar Site', // Nome do menu
        'manage_options',  // Permissão necessária (apenas administradores)
        'customize-site',  // Slug único para a página
        'render_customize_site_content', // Função que renderiza o conteúdo
        'dashicons-admin-customizer', // Ícone do menu
        6 // Posição no menu
    );
}

function render_customize_site_content() {
    ?>
    <div class="wrap">
        <h1>Customizar o Site</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('customize_site_group');
            do_settings_sections('customize-site');
            submit_button();
            ?>
        </form>
    </div>
    <?php
}

function register_customize_site_fields() {
    // Registrar configurações para os campos existentes e o novo campo de imagem (agora chamado "Banner")
    register_setting(
        'customize_site_group',       // Grupo de configurações
        'custom_image'                // Nome da configuração para "Banner"
    );

    register_setting(
        'customize_site_group',       // Grupo de configurações
        'site_main_text'              // Nome da configuração para "Texto central do site"
    );

    register_setting(
        'customize_site_group',       // Grupo de configurações
        'blog_note'                   // Nome da configuração para "Nota do Blog"
    );

    // Adicionar uma seção para os campos
    add_settings_section(
        'customize_site_section',     // ID da seção
        'Opções de Personalização do Site', // Título da seção
        null,                         // Callback para descrição da seção (opcional)
        'customize-site'              // Slug da página onde será exibida
    );

    // Adicionar o campo "Banner" (Imagem) como o primeiro campo
    add_settings_field(
        'custom_image',
        'Banner',
        'custom_image_callback',
        'customize-site',
        'customize_site_section'
    );

    // Adicionar o campo "Texto central do site"
    add_settings_field(
        'site_main_text',
        'Título',
        'site_main_text_callback',
        'customize-site',
        'customize_site_section'
    );

    // Adicionar o campo "Nota do Blog" com WYSIWYG
    add_settings_field(
        'blog_note',
        'Pequena descrição do website',
        'blog_note_callback',
        'customize-site',
        'customize_site_section'
    );
}

// Callback para "Banner" (Imagem)
function custom_image_callback() {
    $image_id = get_option('custom_image'); // Recupera o ID da imagem salva no banco de dados
    $image_url = $image_id ? wp_get_attachment_url($image_id) : ''; // Obtém a URL da imagem

    echo '
    <div>
      <img id="custom-image-preview" src="' . esc_url($image_url) . '" style="max-width: 300px; max-height: 300px; display: ' . ($image_url ? 'block' : 'none') . '; margin-bottom: 10px;" />
      <input type="hidden" id="custom-image-id" name="custom_image" value="' . esc_attr($image_id) . '" />
      <button type="button" class="button" id="upload-custom-image">Selecionar Imagem</button>
      <button type="button" class="button" id="remove-custom-image">Remover Imagem</button>
    </div>
    ';
}

// Callback para "Titulo"
function site_main_text_callback() {
    $value = get_option('site_main_text');
    echo '<input type="text" name="site_main_text" value="' . esc_attr($value) . '" style="width: 100%;" />';
}

// Callback para "Nota do Blog" com WYSIWYG
function blog_note_callback() {
    $content = get_option('blog_note'); // Recupera o valor salvo no banco de dados
    $settings = array(
        'textarea_name' => 'blog_note',  // Nome usado no formulário para salvar os dados
        'media_buttons' => true,         // Exibir botão de mídia (upload de imagens)
        'textarea_rows' => 10,           // Número de linhas visíveis no editor
        'teeny'         => false         // Exibir a versão completa do editor TinyMCE
    );
    
    wp_editor($content, 'blog_note_id', $settings);
}

// Enfileirar scripts e estilos necessários para o upload de imagens no admin
function enqueue_custom_admin_scripts($hook) {
    if ($hook !== 'toplevel_page_customize-site') { 
        return;
    }

    wp_enqueue_media(); // Carrega os scripts necessários para a biblioteca de mídia

    wp_enqueue_script(
        'custom-admin-scripts',
        get_template_directory_uri() . '/js/custom-admin.js', // Substitua pelo caminho correto do seu script JS
        array(), 
        null,
        true
    );
}


// Redirect após comentário com mensagem
function redirect_after_comment_with_message($location, $comment) {
    // Adiciona um parâmetro à URL para indicar que o comentário foi enviado
    return add_query_arg('comment_status', 'success', wp_get_referer());
}

add_filter('comment_post_redirect', 'redirect_after_comment_with_message', 10, 2);

add_action('admin_menu', 'add_customize_site_section');

add_action('admin_enqueue_scripts', 'enqueue_custom_admin_scripts');

add_action('admin_init', 'register_customize_site_fields');