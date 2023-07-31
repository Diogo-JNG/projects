<?php
	include('conn.php');
	$id=$_GET['id'];
	
	$name=$_POST['name'];
	$price=$_POST['price'];
	
	mysqli_query($conn,"update `products` set name='$name', price='$price' where id='$id'");
	header('location:index.php');
?>