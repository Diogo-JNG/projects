<?php get_header(); ?>
<?php echo get_theme_mod('minha_opcao'); ?>
<?php
// Texto após comentário ser enviado com sucesso
get_header();
if (isset($_GET['comment_status']) && $_GET['comment_status'] === 'success') {
    echo '<div class="comment-success-message" style="padding: 10px; margin: 15px 0; background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;text-align:center; border-radius: 5px;">O teu comentário foi enviado com sucesso!</div>';
}
?>
<div class="content-container blog">
    <!-- Título da Página ou Arquivo -->
    <h2 class="blog-sub-title"><?php echo get_the_title(get_queried_object_id()); ?></h2>

    <!-- Loop para exibir os posts -->
    <div class="post-container">
        <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
                <div class="single-post">
                    <!-- Link que abre o modal -->
                    <a href="<?php the_permalink(); ?>" class="open-modal" data-post-id="<?php the_ID(); ?>">
                        <?php the_post_thumbnail(); ?>

                        <p class="single-post-title"><?php the_title(); ?></p>
                        <p class="single-post-date"><?php echo get_the_date(); ?></p>
                    </a>
                </div>
            <?php endwhile; ?>
        <?php else : ?>
            <p>Nenhum post encontrado.</p>
        <?php endif; ?>
    </div>

    <!-- Estrutura do Modal -->
    <div id="postModal" class="modal">
        <div class="modal-content">
            <!-- Botão para fechar a modal -->
            <span class="close">&times;</span>

            <!-- Título do Post -->
            <h2 id="modalTitle">Título do Post</h2>

            <!-- Corpo da Modal -->
            <div id="modalBody">
                <!-- O conteúdo do post será carregado aqui -->
            </div>

            <!-- Seção de Comentários -->
            <div id="modalComments">
                <!-- Os comentários e o formulário serão carregados aqui -->
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>
