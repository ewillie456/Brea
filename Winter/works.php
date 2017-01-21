<?php

?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">

	<title>Winter Bornartist - Template</title>
	<meta name="author" content="Edward T Willie III">
	<!--CSS-->
	<link rel="stylesheet" href="../bootstrap-3.3.7-dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/styles.css">
	<!--Javascript-->
	<script src="../jQuery/jquery-3.1.1.min.js"></script>
	<script src="../bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
	<script src="js/script.js"></script>
	<script type='text/javascript'>
		
	</script>
</head>

<body>
	<nav class="navbar navbar-inverse">
	  <div class="container-fluid">
		<div class="navbar-header">
		  <a class="navbar-brand" href="#">Winter Bornartist</a>
		</div>
	  </div>
	</nav>
	<button type='button' id='addNew' class='btn btn-default'><h3>Click to add new art</h3></button>
	<div class="table-responsive">
		<table class='table table-striped'>
			<thead>
				<tr>
					<th>Title</th>
					<th>Catagory</th>
					<th>Subcatagory</th>
					<th>Medium</th>
					<th>Date</th>
					<th>Edit</th>
				</tr>
			</thead>
			<tbody id='table_data'>
			
			</tbody>
		</table>
	</div>
</body>
</html>