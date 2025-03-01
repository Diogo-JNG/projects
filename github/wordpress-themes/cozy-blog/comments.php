<?php if (post_password_required()) : ?>
    <p>Este post está protegido por senha. Insira a senha para visualizar os comentários.</p>
<?php return;
endif; ?>

<div id="comments">
    <div class="comments-container">
        <p class="comments-title">Comentários</p>
        <?php if (have_comments()) : ?>
            <h3><?php comments_number('Sem Comentários', '1 Comentário', '% Comentários'); ?></h3>
            <ol class="commentlist">
                <?php wp_list_comments(array('style' => 'ol')); ?>
            </ol>
            <?php if (get_comment_pages_count() > 1 && get_option('page_comments')) : ?>
                <nav class="comment-navigation">
                    <div class="nav-previous"><?php previous_comments_link('← Comentários Anteriores'); ?></div>
                    <div class="nav-next"><?php next_comments_link('Comentários Recentes →'); ?></div>
                </nav>
            <?php endif; ?>
        <?php else : ?>
            <p>Sem comentários ainda. Seja o primeiro a comentar!</p>
        <?php endif; ?>

        <?php if (comments_open()) : ?>
            <?php comment_form(); ?>
        <?php else : ?>
            <p>Os comentários estão fechados.</p>
        <?php endif; ?>
    </div>
</div>