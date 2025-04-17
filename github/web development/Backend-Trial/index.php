<?php include('partials/nav.php');
?>
<br>
<div class="center__table">
	<table>
		<thead>
			<th>Name</th>
			<th>Price</th>
			<th></th>
		</thead>
		<tbody>
			<?php
			include('conn.php');
			$query = mysqli_query($conn, "select * from `products`");
			while ($row = mysqli_fetch_array($query)) {
			?>
				<tr>
					<td><?php echo $row['name']; ?></td>
					<td><?php echo $row['price']; ?></td>
					<td>
						<a style="color:yellow;" href="edit.php?id=<?php echo $row['id']; ?>">Edit</a>
						<a style="color:red;" href="delete.php?id=<?php echo $row['id']; ?>">Delete</a>
					</td>
				</tr>
			<?php
			}
			?>
		</tbody>
	</table>
</div>
<?php include('partials/footer.php') ?>