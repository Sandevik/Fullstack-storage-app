<?php 
if ($_SERVER["REQUEST_METHOD"] != "DELETE" && isset($_GET["id"])){
    die("Invalid method!");
}

require_once("./db.php");

$query = "DELETE from product WHERE id = ?";
$stmt = mysqli_prepare($connection, $query);
$stmt -> bind_param("i", $_GET["id"]);
$success = $stmt -> execute();
if ($success) {
    http_response_code(200);
    $message -> message = "Product Deleted Successfully";
    echo json_encode($message);
}else{
    echo json_encode($stmt -> errno);
}
