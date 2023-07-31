<?php include('partials/nav.php');
include('conn.php');
?>

<div class="center__table">
    <h1>CREATE A NEW PRODUCT</h1>
    <form method="POST" action="add.php">
        <label>NAME:</label><input placeholder="The new product name" type="text" name="name">
        <label>PRICE:</label><input placeholder="The new product price" type="text" name="price">
        <input type="submit" name="add">
    </form>
</div>

<?php include('partials/footer.php') ?>