<?php get_header(); ?>
<div class="content-container">
    <?php while (have_posts()) : the_post(); ?>
        <!-- Título do Post -->
        <h2 class="post-title"><?php the_title(); ?></h2>

        <!-- Verificar e exibir a imagem destacada -->
        <?php if (has_post_thumbnail()) : ?>
            <div class="post-thumbnail">
                <?php the_post_thumbnail('large', ['class' => 'img-fluid']); ?>
            </div>
        <?php endif; ?>

        <!-- Conteúdo do Post -->
        <div class="post-content">
            <?php the_content(); ?>
        </div>
    <?php endwhile; ?>
</div>
<?php get_footer(); ?>
