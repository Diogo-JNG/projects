<?php get_header(); ?>
<?php echo get_theme_mod('minha_opcao'); ?>
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
                        <?php the_post_thumbnail() ?>

                        <p class="single-post-title"><?php the_title(); ?></p>
                        <p class="single-post-date"><?php the_date(); ?></p>
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

            <!-- Corpo da Modal (Imagem + Conteúdo) -->
            <div id="modalBody">
                <!-- O conteúdo será carregado dinamicamente pelo JavaScript -->
                <p>Carregando conteúdo...</p>
            </div>
        </div>
    </div>

</div>

<?php get_footer(); ?>