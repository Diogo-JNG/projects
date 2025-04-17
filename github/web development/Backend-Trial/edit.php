<?php
include('conn.php');
$id = $_GET['id'];
$query = mysqli_query($conn, "select * from `products` where id='$id'");
$row = mysqli_fetch_array($query);
?>

<?php include('partials/nav.php'); ?>
<div class="center__table">
<h1>EDIT AN EXISTING PRODUCT</h1>
<form method="POST" action="update.php?id=<?php echo $id; ?>">
	<label>NAME:</label><input type="text" value="<?php echo $row['name']; ?>" name="name">
	<label>PRICE:</label><input type="text" value="<?php echo $row['price']; ?>" name="price">
	<input type="submit" name="submit">
</form>
</div>

<?php include('partials/footer.php'); ?>