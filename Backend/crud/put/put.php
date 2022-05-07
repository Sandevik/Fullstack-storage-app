<?php 
if ($_SERVER["REQUEST_METHOD"] != "PUT" && !isset($_GET["id"])){
    die("Invalid Method or params");
}
require_once("./db.php");
$query = "UPDATE product SET title = ?, quantity = ?, article_number = ?, weight_value = ?, weight_type = ?, product_type = ?, size_value = ?, size_type = ?, manufacturer = ?, price = ?, price_currency = ?, image = ? WHERE id = ?";
$stmt = mysqli_prepare($connection, $query);
$stmt -> bind_param("ssssssssssssi", $_GET["title"], $_GET["quantity"], $_GET["article_number"], $_GET["weight_value"], $_Get["weight_type"], $_GET["product_type"], $_GET["size_value"], $_GET["size_type"], $_GET["manufacturer"], $_GET["price"], $_GET["price_currency"], $_GET["img"], $_GET["id"]);
$success = $stmt -> execute();
if ($success) {
    http_response_code(200);
    $message -> message = "Product Updated!";
    echo json_encode($message);
}else{
    http_response_code(500);
    echo json_encode($stmt->errno);
}
