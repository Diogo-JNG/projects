<? get_header()?>

<h2> <? the_archive_title()?></h2>

<?php

while(have_posts()){

    the_post();?>
    <div>
        <a href="<? the_permalink()?>"><? the_title() ?></a>
    </div>
<? } ?>

<?get_footer()?>