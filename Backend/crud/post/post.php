<?php
if ($_SERVER["REQUEST_METHOD"] != "POST"){
    die("Invalid method");
}
require_once("./db.php");
$query = "INSERT INTO product (`title`, `quantity`, `article_number`, `weight_value`, `weight_type`, `product_type`, `size_value`, `size_type`, `manufacturer`, `price`, `price_currency`, `image`) 
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,?, ?)";
$stmt = mysqli_prepare($connection, $query);
$stmt -> bind_param("ssssssssssss", $_GET["title"], $_GET["quantity"], $_GET["article_number"], $_GET["weight_value"], $_Get["weight_type"], $_GET["product_type"], $_GET["size_value"], $_GET["size_type"], $_GET["manufacturer"], $_GET["price"], $_GET["price_currency"], $_GET["img"]);
$result = $stmt -> execute();
if ($result){
    http_response_code(201);
}else{
    echo json_encode($stmt->errno);
    http_response_code(500);
}