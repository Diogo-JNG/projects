<?php
	include('conn.php');
	
	$name=$_POST['name'];
	$price=$_POST['price'];
		
	mysqli_query($conn,"insert into `products` (name,price) values ('$name','$price')");
	header('location:index.php');
